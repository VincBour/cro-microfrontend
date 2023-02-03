import * as React from "react";
import { useEffect, useState } from "react";
import { GuestType, useCdmStore } from "ui";

const Result = () => {
  const { result } = useCdmStore((state) => ({
    result: state.result,
  }));
  return (
    <>
      {result?.map((guest) => {
        return (
          <GuestResult
            key={`${guest.firstName}-${guest.lastName}`}
            {...guest}
          />
        );
      })}
    </>
  );
};

export default Result;

const GuestResult = ({ email, firstName, lastName }: GuestType) => {
  const [isSelected, setIsSelected] = useState(false);
  const { setGuest, guest } = useCdmStore((state) => ({
    setGuest: state.setGuest,
    guest: state.guest,
  }));
  const onSelectedClick = (guest: GuestType) => () => {
    setGuest(guest);
  };
  useEffect(() => {
    setIsSelected(
      guest?.email === email &&
        guest.firstName === firstName &&
        guest.lastName === lastName
    );
  }, [email, firstName, guest, lastName]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        border: "1px solid black",
        padding: "8px",
        backgroundColor: `${isSelected ? "grey" : "white"} `,
      }}
      onClick={onSelectedClick({ email, firstName, lastName })}
    >
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{email}</span>
    </div>
  );
};
