import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ToggleInput, ToggleInputProps } from "./index";

export const RHFToggleInput: ForwardRefExoticComponent<
	ToggleInputProps & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, ToggleInputProps>(({ ...props }, ref) => {
	return <ToggleInput reassignedRef={ref} {...props} />;
});
RHFToggleInput.displayName = "ToggleInput";
