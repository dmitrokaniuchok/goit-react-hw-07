import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.container}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            phone={contact.number}
            onClick={() => handleDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}
