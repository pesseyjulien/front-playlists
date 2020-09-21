import { writable } from "svelte/store";

const resultsInitialState = {
  data: [],
  loading: false,
  error: null,
};

export const results = writable(resultsInitialState);
