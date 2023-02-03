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
      <h1>Hello Search Application</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "solid black 2px",
          padding: "8px",
          width: "300px",
        }}
      >
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
