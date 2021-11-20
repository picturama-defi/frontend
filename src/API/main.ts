import { BASE_URL } from "../config";

export const getFilms = async () => {
  const response = await fetch(`${BASE_URL}/films`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const addFilm = async (data: any) => {
  const response = await fetch(`${BASE_URL}/add/film`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
