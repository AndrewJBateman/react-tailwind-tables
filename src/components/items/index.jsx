import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useGlobalFilter, useSortBy, useTable } from "react-table";
import tw from "twin.macro";
import { GlobalFilter } from "./globalFilter";

// define tailwind styles as constants
const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-blue-500
`;

const TableHeader = tw.th`
border
border-blue-500
p-2
`;

const TableBody = tw.tbody`
`;

const TableData = tw.td`
border
border-blue-500
p-5
`;

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-blue-300
  hover:bg-blue-200
  transition-colors
`;

// function to fetch fake products REST API data
export function Products(props) {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		const response = await axios
			.get("https://fakestoreapi.com/products")
			.catch((err) => console.log(err));

		if (response) {
			const products = response.data;
			setProducts(products);
		}
	};

	// eslint-disable-next-line no-unused-vars
	const columns = useMemo(
		() => [
			{
				Header: "Id",
				accessor: "id",
			},
			{
				Header: "Price",
				accessor: "price",
			},
			{
				Header: "Title",
				accessor: "title",
			},
		],
		[]
	);

	// memorize data to save having to recompute unchanged data when rerendering
	const productsData = useMemo(() => [...products], [products]);

	// define product columns
	const productsColumns = useMemo(
		() =>
			products[0]
				? Object.keys(products[0])
						.filter((key) => key !== "rating")
						.map((key) => {
							if (key === "image")
								return {
									Header: key,
									accessor: key,
									Cell: ({ value }) => <img src={value} alt="product" />,
									maxWidth: 70,
								};

							return { Header: key, accessor: key };
						})
				: [],
		[products]
	);

	// define table using spread operator and add edit column
	const tableHooks = (hooks) => {
		hooks.visibleColumns.push((columns) => [
			...columns,
			{
				id: "Edit",
				Header: "Edit",
				Cell: ({ row }) => (
					<Button onClick={() => alert("Editing: " + row.values.price)}>
						Edit
					</Button>
				),
			},
		]);
	};

	// create table using react-table useTable root hoot
	// requires memoized columns and data values + other hooks
	const tableInstance = useTable(
		{
			columns: productsColumns,
			data: productsData,
		},
		useGlobalFilter,
		tableHooks,
		useSortBy
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		preGlobalFilteredRows,
		setGlobalFilter,
		state,
	} = tableInstance;

	useEffect(() => {
		fetchProducts();
	}, []);

	// make table row colours alternate light/dark blue
	const isEven = (idx) => idx % 2 === 0;

	// show filtered table rows
	return (
		<>
			<GlobalFilter
				preGlobalFilteredRows={preGlobalFilteredRows}
				setGlobalFilter={setGlobalFilter}
				globalFilter={state.globalFilter}
			/>
			<Table {...getTableProps()}>
				<TableHead>
					{headerGroups.map((headerGroup) => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<TableHeader
									{...column.getHeaderProps(column.getSortByToggleProps())}
								>
									{column.render("Header")}
									{column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
								</TableHeader>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody {...getTableBodyProps()}>
					{rows.map((row, idx) => {
						prepareRow(row);

						return (
							<TableRow
								{...row.getRowProps()}
								className={isEven(idx) ? "bg-blue-400 bg-opacity-30" : ""}
							>
								{row.cells.map((cell, idx) => (
									<TableData {...cell.getCellProps()}>
										{cell.render("Cell")}
									</TableData>
								))}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</>
	);
}
