import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import injectContext from "./store/appContext";

import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/EditContact.js";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route exact path="/index.html" element={<Contacts />} />
						<Route exact path="/" element={<Contacts />} />
						<Route exact path="/contacts" element={<Contacts/>} />
						<Route exact path="/add" element={<AddContact/>} />
						<Route exact path="/edit/:id" element={<EditContact/>} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);