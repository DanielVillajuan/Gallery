import { HttpRequest } from "./httpRequest";

export const http = new HttpRequest(import.meta.env.VITE_APP_BASE_URL)
