import "./App.css";
import { useState } from "react";
import contactsList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsList);
  const handleAddRandom = () => {
    /*console.log('clicked');*/
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts[randomIndex];
    setContacts([randomContact, ...contacts]);
  }

  const handleSortName  = () => {
    // const sorted = contacts.name.sort();
    // console.log(sorted)
    // setContacts(sorted, ...contacts)
  }

  const handleSortPopularity = () => {

  }

  const handleDeleteContact = (name) => {
    console.log("contact removed", name)
    const filteredContacts = contacts.filter((oneContact) => oneContact.name !== name);
    setContacts(filteredContacts);
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
          <div key={contacts.id} className="contact-list">
            {/* doesn't need to be wrapped in an anonymous function, because you're not passing an argument unlike in delete */}
            <button onClick={handleAddRandom}>Add a Random Contact</button>
            <button onClick={handleSortPopularity}>Sort by popularity</button>
            <button onClick={handleSortName}>Sort by name</button>
          <table>
                <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won an Oscar</th>
                  <th>Won an Emmy</th>
                  <th>Actions</th>
                </tr>
                </thead>
            {contacts
            .slice(0,5)
            .map((oneContact) => {
              return (
                <tbody>
                  <tr>
                    <td><img src={oneContact.pictureUrl} alt={oneContact.name} style={{height: "150px"}} /></td>
                    <td>{oneContact.name}</td>
                    <td>{oneContact.popularity}</td>
                    <td>{oneContact.wonOscar ? "🏆" : ""}</td>
                    <td>{oneContact.wonEmmy ? "🌟" : ""}</td>
                    <td><button onClick={() => handleDeleteContact(oneContact.name)}>Delete</button></td>
                  </tr>
                </tbody>
              )
            })}
            </table>
            
          </div>
    </div>
  );
}

export default App;
