import * as React from "react";
import Cdm from "cdm/Cdm";
import Search from "search/Search";
import { Link, redirect } from "react-router-dom";
import { GuestType, useBrowserStore, useCdmStore } from "ui";

export interface SearchPageProps {}

export const SearchPage: React.FC<SearchPageProps> = ({}) => {
  const { guest } = useCdmStore((state) => ({ guest: state.guest }));
  const { save } = useBrowserStore((state) => ({
    save: state.addNewQuotation,
  }));
  return (
    <div>
      <Link
        className="ml-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        to={"/"}
      >
        Home
      </Link>
      <div style={{ display: "flex", gap: "18px" }}>
        <Cdm />
        <Search />
        <div style={{ alignSelf: "center" }}>
          <button
            className="ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            onClick={() => {
              if (guest) {
                const q = createNewQuotation(guest);
                save(q);
                redirect("/");
              }
            }}
          >
            Save new Quotation
          </button>
        </div>
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
