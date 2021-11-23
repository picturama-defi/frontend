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

export const getFilm = async (id: any) => {
  const response = await fetch(`${BASE_URL}/film?id=${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json()
};

export const getListedFilms = async () => {
  const response = await fetch(`${BASE_URL}/funded-films `, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json()
};

export const getNonFundedFilms = async () => {
  const response = await fetch(`${BASE_URL}/non-funded-films `, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json()
};


export const approveFilm = async (payload: any) => {
  const response = await fetch(`${BASE_URL}/approve-film`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  return await response.json()
};