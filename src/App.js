import "./App.css";
import EntryAdd from "./EntryAdd";
import EntryList from "./EntryList";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([
    { name: "james", phone: "555", email: "21 Jump Street" },
    { name: "leonard", phone: "222", email: "1600 Penn Ave" },
  ]);

  const [prototype, setPrototype] = useState({
    name: "",
    phone: "",
    email: "",
  });

  return (
    <div className="App">
      <header>
        <h1>Phone Book</h1>
      </header>

      <EntryAdd
        setEntries={setEntries}
        entries={entries}
        prototype={prototype}
        setPrototype={setPrototype}
      />
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
