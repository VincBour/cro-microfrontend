import * as React from "react";
import { Link } from "react-router-dom";
import { useBrowserStore } from "ui";
export interface BrowsePageProps {}

export const BrowsePage: React.FC<BrowsePageProps> = ({}) => {
  const { quotations } = useBrowserStore((state) => ({
    quotations: state.quotations,
  }));
  console.log({ quotations });
  return (
    <div>
      <h2>BrowsePage</h2>
      <div>
        <div
          style={{
            height: "100px",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            marginLeft: "8px",
          }}
        >
          <Link
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            to={"search"}
            style={{ textDecoration: "none" }}
          >
            Create
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {quotations?.map((quotation) => (
              <tr key={quotation.id}>
                <th>{quotation.customerName}</th>
                <th>{new Date(quotation.checkIn).toLocaleDateString()}</th>
                <th>{new Date(quotation.checkOut).toLocaleDateString()}</th>
                <th>{quotation.quotationStatus}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

BrowsePage.displayName = "BrowsePage";
