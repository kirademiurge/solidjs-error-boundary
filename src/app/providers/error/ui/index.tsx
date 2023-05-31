import { JSX, createEffect } from "solid-js";
import { errorStore } from "../model";

export interface ErrorProviderProps {
	children: JSX.Element,
}

export const ErrorProvider = (props: ErrorProviderProps) => {
	return (
		<>
			{props.children}
		</>
	)
}
