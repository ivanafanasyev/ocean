import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { ClassicRadioGroup, IClassicRadioGroup } from "./index";

export const RHFClassicRG: ForwardRefExoticComponent<
	IClassicRadioGroup & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, IClassicRadioGroup>(({ ...props }, ref) => {
	return <ClassicRadioGroup reassignedRef={ref} {...props} />;
});
RHFClassicRG.displayName = "RadioGroupClassic";
