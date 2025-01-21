import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Home />
	</Provider>
);
