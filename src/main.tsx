import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<Home />
		<ToastContainer
			position="top-right"
			autoClose={1000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			transition={Bounce}
		/>
	</Provider>
);
