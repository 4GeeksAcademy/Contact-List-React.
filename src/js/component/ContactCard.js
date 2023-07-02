import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import pikachu from "../../img/pikachu.jpg";
import "../../styles/home.css";

export const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});

  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img
            src={pikachu}
            alt="pika"
            className="rounded-circle mx-auto d-block img-fluid"
            style={{ width: "200px" }}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
          <div className="float-right">
            <Link to={"/edit/" + props.contact.id}>
              <button className="btn" onClick={() => actions.getContact(props.contact)}>
                <i className="fas fa-pencil-alt" />
              </button>
            </Link>
			
            <button className="btn" onClick={() => props.onDelete()}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <label className="name lead">
            <i className="fas fa-user fa-fw text-muted mr-3" />
            {props.contact.full_name}
          </label>
          <br />

          <span className="text-muted">
            <i className="fa fa-phone fa-fw text-muted mr-3" />
            {props.contact.phone}
          </span>
          <br />
          <span
            className="fa fa-building fa-fw text-muted mr-3"
            data-toggle="tooltip"
            title=""
            data-original-title="(870) 288-4149"
          />
          <span className="text-muted small">{props.contact.address}</span>
          <br />
          <i className="fas fa-envelope fa-fw text-muted mr-3" />
          <span className="text-muted small text-truncate">{props.contact.email}</span>
        </div>
      </div>
    </li>
  );
};
