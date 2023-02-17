import React from "react";
import ReactDOM from "react-dom/client";
import { Main, Detail } from "./components";

import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/">
        <Route index element={<Main />} />
			  <Route path="detail/:id" element={<Detail />} />
      </Route>
		</>
	)
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
