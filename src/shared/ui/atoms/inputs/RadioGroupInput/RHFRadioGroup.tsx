import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { RadioGroup, IRadioGroup } from "./index";

export const RHFRadioGroup: ForwardRefExoticComponent<
	IRadioGroup & RefAttributes<HTMLInputElement>
> = forwardRef<HTMLInputElement, IRadioGroup>(({ ...props }, ref) => {
	return <RadioGroup reassignedRef={ref} {...props} />;
});
RHFRadioGroup.displayName = "RadioGroup";
