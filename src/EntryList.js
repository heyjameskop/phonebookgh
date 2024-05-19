import React from "react";

const EntryList = ({ entries }) => {
  console.log(entries);
  return (
    <>
      <h2>My List</h2>
      <section className="showing">
        <div className="theList">
          <row>
            <div>First Name</div>
            <div>Phone Number</div>
            <div>Email Address</div>
          </row>
          {entries &&
            entries.map((entry, index) => (
              <row>
                <div key={index}>{entry.name}</div>
                <div key={index}>{entry.phone}</div>
                <div key={index}>{entry.email}</div>
              </row>
            ))}
        </div>
      </section>
    </>
  );
};

export default EntryList;
