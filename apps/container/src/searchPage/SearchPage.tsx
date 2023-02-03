import * as React from "react";
import Cdm from "cdm/Cdm";
import Search from "search/Search";
import { Link } from "react-router-dom";
import { GuestType, useBrowserStore, useCdmStore } from "ui";

export interface SearchPageProps {}

export const SearchPage: React.FC<SearchPageProps> = ({}) => {
  const { guest } = useCdmStore((state) => ({ guest: state.guest }));
  const { save } = useBrowserStore((state) => ({
    save: state.addNewQuotation,
  }));
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <div style={{ display: "flex", gap: "18px" }}>
        <Cdm />
        <Search />
        <button
          onClick={() => {
            if (guest) {
              const q = createNewQuotation(guest);
              console.log({ q });
              save(q);
            }
          }}
        >
          Save new Quotation
        </button>
      </div>
    </div>
  );
};

SearchPage.displayName = "SearchPage";

const createNewQuotation = (guest: GuestType) => {
  return {
    id: "e7f165e0-2487-4dcb-ba20-b6ae6df99b28",
    bookingId: "",
    checkIn: "2023-01-20T00:00:00",
    checkOut: "2023-01-21T00:00:00",
    lengthOfStay: 1,
    createdBy: 10916,
    creationDate: "2023-01-20T13:47:25.103",
    currency: "EUR",
    customerName: `${guest.firstName} ${guest.lastName}`,
    hotelId: 10493,
    occupancy: 2,
    quotationStatus: "Expired",
    quotationType: "None",
    sentReminders: 0,
    totalAmount: 0,
    modificationDate: "2023-01-20T13:47:48.68",
    isSimulation: true,
  };
};
