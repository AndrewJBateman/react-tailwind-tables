// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";

import tw from "twin.macro";
import { Products } from "./components/items";

const AppContainer = tw.div`
  w-full
  max-w-full
  flex
  flex-col
  items-center
  justify-center
  pb-10
  px-10
`;

function App() {
	return (
		<AppContainer>
			<Products />
		</AppContainer>
	);
}

export default App;
