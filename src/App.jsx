import "./App.css";
import { useState } from "react";
import contactsList from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsList);
  return (
    <div className="App">
      <h1>IronContacts</h1>
          <div key={contacts.id} className="contact-list">
          <table>
                <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Won an Oscar</th>
                  <th>Won an Emmy</th>
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
