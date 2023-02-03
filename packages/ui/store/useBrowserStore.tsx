import create from "zustand";
import { devtools } from "zustand/middleware";
interface QuotationType {
  id: string;
  checkIn: string;
  checkOut: string;
  lengthOfStay: number;
  customerName: string;
  creationDate: string;
  currency: string;
  hotelId: number;
  occupancy: number;
  quotationStatus: string;
  sentReminders: number;
  modificationDate: string;
}

type Store = {
  quotations: QuotationType[];
};

type Actions = {
  setQuotations: (quotations: QuotationType[]) => void;
  addNewQuotation: (quotation: QuotationType) => void;
};

const initialStore: Store = {
  quotations: [],
};

export const useBrowserStore = create<Store & Actions>()(
  devtools(
    (set, get) => ({
      ...initialStore,
      setQuotations: (quotations: QuotationType[]) =>
        set((state) => {
          if (state.quotations?.length > 0) {
            return state;
          }
          return {
            ...state,
            quotations,
          };
        }),
      addNewQuotation: (quotation: QuotationType) =>
        set((state) => {
          const quotations = get().quotations;
          quotations?.splice(0, 0, quotation);

          return { ...state, quotations };
        }),
    }),
    {
      name: "BROWSE",
    }
  )
);
