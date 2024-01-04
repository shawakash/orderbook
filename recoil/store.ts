import { OrderType } from "@/types/Order";
import { atom } from "recoil";

export const orderAtom = atom({
    key: "orderAtom",
    default: OrderType.BIDS
});