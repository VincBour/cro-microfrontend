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
      <h1 className="text-xl font-bold m-8">Hello CDM application</h1>
      <div
        className="m-4 border border-gray-200 rounded-lg shadow"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          width: "400px",
        }}
      >
        <h2 className="text-lg font-bold m-8">Guest from CDM</h2>
        <p className="w-full mb-1 text-xl font-medium text-gray-900 dark:text-white ">
          First Name:
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-8">
            {guest?.firstName}
          </span>
        </p>
        <p className="w-full mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Last Name:
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-8">
            {guest?.lastName}
          </span>
        </p>
        <p className="w-full mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Email:
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-8">
            {guest?.email}
          </span>
        </p>
        <div style={{ marginTop: "18px" }}>
          <input
            className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={searchName}
            name="search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchName(e.target.value)
            }
          />
          <button
            onClick={onSearch}
            className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Search
          </button>
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
