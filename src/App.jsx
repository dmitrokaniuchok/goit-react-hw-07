import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { fetchContacts } from "./redux/contactsOps";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { selectLoading, selectError } from "./redux/contactsSlice";

function Loader() {
  return <p>Loading...</p>;
}

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="form-container">
        <ContactForm />
        <SearchBox />
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? <Loader /> : <ContactList />}
      <Toaster position="top-right" />
    </div>
  );
}
