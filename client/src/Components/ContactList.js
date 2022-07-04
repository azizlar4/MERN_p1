import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/Actions/contact";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector((state) => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>this is the list of contacts</h2>
      <div className="list-contacts"> 
        {load ? (
          <h2>Loading...</h2>
        ) : (
          listContacts.map((el) => <ContactCard contact={el} key={el.id} />)
        )}
      </div>
    </div>
  );
};

export default ContactList;
