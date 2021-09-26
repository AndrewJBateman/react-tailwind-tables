# :zap: React Tailwind Tables

* A React app using react-tables to display REST API data
* Code from [CoderOne](https://www.youtube.com/channel/UCMm15RFnHUvM-aSc50e7R9A) with modifications to styling
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/react-tailwind-tables?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/react-tailwind-tables?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/react-tailwind-tables?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/react-tailwind-tables?style=plastic)

## :page_facing_up: Table of contents

* [:zap: React Tailwind Tables](#zap-react-tailwind-tables)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General Info

* [Fake Store API](https://fakestoreapi.com/) provides data for e-commerce or shopping website prototypes
* [React Hooks](https://reactjs.org/docs/hooks-reference.html) used so state etc. can be used without writing a class
* [React Table useTable](https://react-table.tanstack.com/docs/api/useTable) root hook used
* Table is not responsive - set up for PC screen size
* Table Edit buttons do not edit anything, they just create an alert
* Yarn used instead of npm for this project

## :camera: Screenshots

![Example screenshot](./imgs/table.png)

## :signal_strength: Technologies

* [React v17](https://reactjs.org/) Javascript library.
* [Tailwind v2](https://tailwindcss.com/) utility-first CSS framework
* [twin.macro v2](https://classic.yarnpkg.com/en/package/twin.macro) to mix Tailwind with css-in-js
* [@craco/craco v6](https://yarnpkg.com/package/@craco/craco) Create React App Configuration Override, an easy and comprehensible configuration layer for create-react-app. Required because Create React App doesn’t let you override the PostCSS configuration natively
* [PostCSS v8](https://postcss.org/) tool for transforming CSS with JavaScript
* [react-table v7](https://yarnpkg.com/package/react-table) Hooks for building lightweight, fast and extendable datagrids for React
* [axios v0.21.4](https://yarnpkg.com/package/axios) Promise based HTTP client for the browser and node.js
* [Fake Store API](https://fakestoreapi.com/) for testing of e-commerce or shopping website prototype
* [Thunderclient](https://www.thunderclient.io/) VSCode extension Rest Client for Testing APIs

## :floppy_disk: Setup

* `yarn start` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `yarn build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
* `yarn test` to run testing - no tests added, testing fails

## :computer: Code Examples by CoderOne

* function const to define table using spread operator and add edit column

```jsx
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
```

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Change REST API and try different tw styles. Add testing

## :clap: Inspiration
* [CoderOne: React Tables From Zero to Hero](https://www.youtube.com/watch?v=WRKEjPq75BY)
* [Tailwindcss: Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
* [React Table Quick Start](https://react-table.tanstack.com/docs/quick-start)


## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com