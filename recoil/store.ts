import { OrderType } from "@/types/enums";
import { atom } from "recoil";

export const orderAtom = atom({
    key: "orderAtom",
    default: OrderType.BIDS
});