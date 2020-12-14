import axios from "axios";
import { AUTH_TOKEN } from "@env";

export const setAuthHeader = () => {
	try {
		axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
	} catch (error) {
		console.log("Error setting auth", error);
	}
};
