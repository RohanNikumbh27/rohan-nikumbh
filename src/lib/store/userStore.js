import { writable } from "svelte/store";

export const userCurrency = writable({
    name: "",
    symbol: "",
    iso_code: "",
  }); 