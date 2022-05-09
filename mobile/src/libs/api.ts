import axios from "axios";

export const api = axios.create({
  baseURL: 'https://nlw-return-impulse-production-a3b8.up.railway.app'
})