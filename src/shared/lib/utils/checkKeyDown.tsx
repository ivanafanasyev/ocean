import { KeyboardEvent } from "react";

// Use for inputs for prevent form submit on Enter {code: "Enter"}. DO NOT USE WITH Textarea, Dropdowns
export const preventDefaultForKey = (event: KeyboardEvent<any>, code: string) => {
	return event.key === code && event.preventDefault();
};
