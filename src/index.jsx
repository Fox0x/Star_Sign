import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";

render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
