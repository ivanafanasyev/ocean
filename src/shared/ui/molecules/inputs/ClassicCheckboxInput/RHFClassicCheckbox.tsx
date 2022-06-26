import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ClassicCheckbox, IClassicCheckbox } from "./index";

export const RHFClassicCheckbox: ForwardRefExoticComponent<
	IClassicCheckbox & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, IClassicCheckbox>(({ ...props }, ref) => {
	return <ClassicCheckbox reassignedRef={ref} {...props} />;
});
RHFClassicCheckbox.displayName = "ClassicCheckbox";
