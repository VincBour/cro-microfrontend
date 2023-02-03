import * as React from "react";
import { GuestType, useCdmStore } from "ui";
import Result from "./Result";

export const Guest = () => {
  const { guest, searchName, setSearchName, setResult } = useCdmStore(
    (state) => ({
      guest: state.guest,
      searchName: state.searchName,
      setSearchName: state.setSearchName,
      setResult: state.setResult,
    })
  );

  const onSearch = () => {
    fetch("http://localhost:3002/data/guests.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const regex = new RegExp(`${searchName}`);
        const result: GuestType[] = data
          .filter((d: { firstName: string }) => d.firstName.match(regex))
          .map(
            (r: {
              firstName: string;
              lastName: string;
              contact: { emails: string[] };
            }) => ({
              firstName: r.firstName,
              lastName: r.lastName,
              email: r.contact.emails[0],
            })
          );
        setResult(result);
      });
  };

  return (
    <div>
      <h1>Hello CDM application</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "solid black 2px",
          padding: "8px",
          width: "300px",
        }}
      >
        <h2>Guest from CDM</h2>
        <span>First Name: {guest?.firstName}</span>
        <span>Last Name: {guest?.lastName}</span>
        <span>Email: {guest?.email}</span>
        <div style={{ marginTop: "18px" }}>
          <input
            type="text"
            value={searchName}
            name="search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchName(e.target.value)
            }
          />
          <button onClick={onSearch}>Search</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            margin: "8px",
          }}
        >
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Guest;
