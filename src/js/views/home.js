import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

const Contact = ({ contact, index }) => {
  const { store, actions } = useContext(Context);

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(store.contacts[index].name);
  const [email, setEmail] = useState(store.contacts[index].email);
  const [phone, setPhone] = useState(store.contacts[index].phone);
  const [address, setAddy] = useState(store.contacts[index].address);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
    setAddy(contact.address);
  }, [])

  useEffect(() => {
    if (!editing) {
      actions.editContact({
        name: name,
        email: email,
        phone: phone,
        address: address,
        imageUrl: imageUrl
      }, index);
    }
  }, [editing])

  return <div className="contact">
    <img className="contact-image" src={contacts[index].imageUrl} />
    <ul>
      <li className="person-name">{editing ? <input value={name} onChange={ev => setName(ev.target.value)} /> : <span>{store.contacts[index].name}</span>}</li>
      <li className="person-address">{editing ? <input value={address} onChange={ev => setAddy(ev.target.value)} /> : <span><i class="fa-solid fa-location-dot"></i>{store.contacts[index].address}</span>}</li>
      <li className="person-info">{editing ? <input value={phone} onChange={ev => setPhone(ev.target.value)} /> : <span><i class="fa-solid fa-phone"></i>{store.contacts[index].phone}</span>}</li>
      <li className="person-info">{editing ? <input value={email} onChange={ev => setEmail(ev.target.value)} /> : <span><i class="fa-solid fa-envelope"></i>{store.contacts[index].email}</span>}</li>
    </ul>
    <div className="button-container">
      <button
        className="btn btn-primary"
        onClick={() => setEditing(!editing)}
      >
        {editing ? <i class="fa-solid fa-floppy-disk"></i> : <i class="fa-solid fa-pen"></i>}
      </button>
      <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
    </div>
  </div>
}

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row my-2">
        <div>
          <button className="btn btn-primary mt-1">
            Add New Contact
          </button>
        </div>
      </div>
      <div>
        <div>
          {store.contacts.map((contact, idx) => (
            <Contact contact={contact} index={idx} key={idx} />
          ))}
        </div>
        <div>
          {store.contacts.map((contact, idx) => (
            <Contact contact={contact} index={idx} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
};