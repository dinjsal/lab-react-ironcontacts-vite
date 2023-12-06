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

  //not working heehee
  const handleSortName  = () => {
    const contactName = contacts.name;
    const sorted = contactName.sort();
    setContacts(sorted)
    console.log(sorted)
  }

  const handleSortPopularity = () => {
    const ranking = contacts.sort((a, b) => b.popularity - a.popularity);
      setContacts(ranking, ...contacts);
  };
    
  const handleDeleteContact = (id) => {
    console.log("contact removed", id)
    const filteredContacts = contacts.filter((oneContact) => oneContact.id !== id);
    setContacts(filteredContacts);
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
          <div className="contact-list">
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
                  <tr key={contacts.id}>
                    <td><img src={oneContact.pictureUrl} alt={oneContact.name} style={{height: "150px"}} /></td>
                    <td>{oneContact.name}</td>
                    <td>{oneContact.popularity.toFixed(2)}</td>
                    <td>{oneContact.wonOscar ? "🏆" : ""}</td>
                    <td>{oneContact.wonEmmy ? "🌟" : ""}</td>
                    <td><button onClick={() => handleDeleteContact(oneContact.id)}>Delete</button></td>
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
