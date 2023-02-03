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
            lineHeight: "30px",
            width: "60px",
            backgroundColor: "#86E5FF",
            margin: "12px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Link to={"search"} style={{ textDecoration: "none" }}>
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
