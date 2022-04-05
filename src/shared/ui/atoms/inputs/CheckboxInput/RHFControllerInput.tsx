import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { CheckboxInput, CheckboxInputProps } from "./index";

export const RHFCheckboxInput: ForwardRefExoticComponent<
	CheckboxInputProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, CheckboxInputProps>(({ ...props }, ref) => {
	return <CheckboxInput reassignedRef={ref} {...props} />;
});
RHFCheckboxInput.displayName = "CheckboxInput";
