import axios from "axios";

import { HOST } from "./config";
import { results } from "../stores";

const ENDPOINT = "/tracker";

const parser = (song) => ({
  name: song.name,
});

export const getBySong = (song) => {
  axios
    .get(`${HOST}${ENDPOINT}`, {
      params: {
        song,
      },
    })
    .then((response) => {
      console.log(response);
      results.update((state) => ({
        ...state,
        data: response.data.map(parser),
      }));
    });
};
