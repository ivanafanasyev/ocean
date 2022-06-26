import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { Control, Controller } from "react-hook-form";
import { ITextArea, Textarea } from "./index";

// Register through the ref and {...register(name)}
export const TextareaRHF: ForwardRefExoticComponent<
	ITextArea & RefAttributes<HTMLTextAreaElement>
> = forwardRef<HTMLTextAreaElement, ITextArea>(({ ...props }, ref) => (
	<Textarea reassignedRef={ref} {...props} />
));
TextareaRHF.displayName = "Textarea";

// Controller HOC
type ICProps = Omit<ITextArea, "value | onChange | onBlur"> & {
	control: Control<any, any>;
};
export const TextareaRHFC = (props: ICProps) => (
	<Controller
		name={props.name}
		control={props.control}
		defaultValue={""}
		render={({ field: { value, onChange, onBlur } }) => (
			<Textarea value={value} onChange={onChange} onBlur={onBlur} {...props} />
		)}
	/>
);
