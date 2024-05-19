import React from "react";

const EntryAdd = ({ entries, setEntries, prototype, setPrototype }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, prototype]);
  };

  const updatePrototype = (item, value) => {
    console.log(value);
    const newPrototype = {
      name: prototype.name,
      phone: prototype.phone,
      email: prototype.email,
    };
    newPrototype[item] = value;
    setPrototype(newPrototype);
  };

  return (
    <section className="adding">
      <h2>Add Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          onChange={(e) => updatePrototype("name", e.target.value)}
        ></input>
        <label htmlFor="name">Phone:</label>
        <input
          id="phone"
          onChange={(e) => updatePrototype("phone", e.target.value)}
        ></input>
        <label htmlFor="name">Email:</label>
        <input
          id="email"
          onChange={(e) => updatePrototype("email", e.target.value)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default EntryAdd;
