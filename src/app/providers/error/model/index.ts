import { createStore } from "solid-js/store";
import { Error } from "../api";

export interface ErrorStore {
	errors: Error[],
	pushError: (error: Error) => void,

}

export const [errorStore, setErrorStore] = createStore<ErrorStore>({
	errors: [],

	pushError: (error) => {
		setErrorStore("errors", errors => [...errors, error]);
		console.log(error.message);
	},
});
