import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { TextInput, TextInputProps } from "./index";

export const RHFTextInput: ForwardRefExoticComponent<
	TextInputProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, TextInputProps>(({ ...props }, ref) => {
	return <TextInput reassignedRef={ref} {...props} />;
});
RHFTextInput.displayName = "TextInput";
