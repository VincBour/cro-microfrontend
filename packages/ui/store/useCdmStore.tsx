import create from "zustand";
import { devtools } from "zustand/middleware";

export type GuestType = {
  email: string;
  firstName: string;
  lastName: string;
};
type Store = {
  guest: GuestType | undefined;
  searchName: string | undefined;
  result: GuestType[] | undefined;
};

type Actions = {
  setGuest: (guest: GuestType | undefined) => void;
  setSearchName: (name: string | undefined) => void;
  setResult: (result: GuestType[]) => void;
};

const initialStore: Store = {
  guest: {
    firstName: "Rocky",
    lastName: "Balboa",
    email: "rbalboa@email.com",
  },
  searchName: undefined,
  result: [],
};

export const useCdmStore = create<Store & Actions>()(
  devtools((set) => ({
    ...initialStore,
    setGuest: (guest: GuestType | undefined) => set(() => ({ guest })),
    setSearchName: (searchName: string | undefined) =>
      set(() => ({ searchName })),
    setResult: (result: GuestType[]) => set(() => ({ result })),
  }),
  {
    name: "CDM",
  })
);
