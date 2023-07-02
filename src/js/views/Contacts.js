import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";


export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	useEffect(() => {
		actions.getData();
	}, []);
	console.log(store.contactList);

	return (
		<div className="container">
			
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>

					

				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactList.map((user) => ( 
							//Utilizamos user.id como clave, asi es un identificador único y no cambia
							<ContactCard
								key={user.id}
								contact={user}
								onDelete={() => {
									actions.addidDelete(user.id);
									setState({ showModal: true });
								}}
							/>
						))}
					</ul>
				</div>

				
			
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};