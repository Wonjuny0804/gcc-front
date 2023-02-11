import { Address } from "types/address";

export const formattedAddress = (address: Address) => {
  return `${address.roadAddress}`;
};
