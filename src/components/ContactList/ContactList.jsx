import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={s.contactListItem} key={id}>
          <div className={s.contactWrapper}>
            <div className={s.iconContainer}>
              <IoMdContact />
              <FaPhone />
            </div>
            <Contact id={id} name={name} number={number} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
