import {
  FAIL_CONTACTS,
  GET_CONTACT,
  GET_CONTACTS,
  LOAD_CONTACTS,
} from "../ActionTypes/contact";
import axios from "axios";
//get all contacts
export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contact/all");
    dispatch({ type: GET_CONTACTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};
// add contact
export const AddContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/contact/add", newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

//delete

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/delete/${id}`);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

//edit contact
export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/edit/${id}`, newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

//get one contact
export const getOneContact = (id) => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get(`/api/contact/one/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};
