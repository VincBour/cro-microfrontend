import React, { ChangeEvent, useCallback } from "react";
import { InputField, useCdmStore } from "ui";

export const Search = () => {
  const { guest, setGuest } = useCdmStore((state) => ({
    guest: state.guest,
    setGuest: state.setGuest,
  }));

  const onChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log("name", event.target.name);
      console.log("value", event.target.value);
      if (guest) {
        setGuest({
          ...guest,
          [event.target.name]: event.target.value ? event.target.value : "",
        });
      }
    },
    [guest, setGuest]
  );

  return (
    <div>
      <h1 className="text-xl font-bold m-8">Hello Search Application</h1>
      <div
        className="m-4 border border-gray-200 rounded-lg shadow"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px",
          width: "300px",
        }}
      >
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {guest?.firstName[0].toUpperCase()}
            {guest?.lastName[0].toUpperCase()}
          </span>
        </div>
        <InputField
          label="First Name:"
          name={"firstName"}
          value={guest?.firstName}
          onChange={onChangeInput}
        />
        <InputField
          label="Last Name:"
          name={"lastName"}
          value={guest?.lastName}
          onChange={onChangeInput}
        />
        <InputField
          label="Email:"
          name={"email"}
          value={guest?.email}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};

export default Search;
