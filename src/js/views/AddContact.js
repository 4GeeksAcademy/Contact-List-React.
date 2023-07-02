import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    agenda_slug: "agende_claudia",
    address: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);



// Lógica para verificar el formulario y validar errores

  const validateForm = () => {
    const { full_name, email, phone, address } = user;
    const errors = {};

    if (!full_name) {
      errors.full_name = "Full Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (!phone) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]*$/.test(phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!address) {
      errors.address = "Address is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      actions.addContact(user);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate("/"); // Redireccionar a la lista de contactos después de 3 segundos
      }, 3000);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Add a new contact</h1>
      <form onChange={e => setUser({ ...user, [e.target.name]: e.target.value })} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Full Name" name="full_name" />
          {errors.full_name && <span className="text-danger">{errors.full_name}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email" />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" placeholder="Enter phone" name="phone" />
          {errors.phone && <span className="text-danger">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Enter address" name="address" />
          {errors.address && <span className="text-danger">{errors.address}</span>}
        </div>

        <button type="submit" className="btn btn-primary form-control">
          Save
        </button>
        <Link className="mt-3 w-100 text-center" to="/">
          Or get back to contacts
        </Link>
      </form>
      {showSuccessMessage && (
        <div className="mt-3 alert alert-success" role="alert">
          Contact added successfully!
        </div>
      )}
    </div>
  );
};
