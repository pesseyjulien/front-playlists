import { writable } from "svelte/store";

export const results = writable([]);

export const setResults = (newElem) => {
  results.update((state) => {
    state.push(newElem);
    return state;
  });
};
