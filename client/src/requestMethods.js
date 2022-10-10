import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDI1YmIxYzJiODNlNjdlMmQzYTAwNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTM3Njk4MywiZXhwIjoxNjY1NjM2MTgzfQ.eE_zrXkt9QucciBMtVajO8lH6nOViPuFaA0IW8CMuYY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
