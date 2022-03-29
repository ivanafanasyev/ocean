import { Control, Controller } from "react-hook-form";

import { ToggleInput, ToggleInputProps } from ".";

type Props = Omit<ToggleInputProps, "value | onChange | onBlur | checked"> & {
	control: Control<any, any>;
};

export const RHFControllerToggleInput = (props: Props) => {
	// const {control} = useFormContext(); You can use this approach, if you have a form wrapper

	return (
		<Controller
			name={props.name}
			control={props.control}
			defaultValue={false}
			render={({ field: { value, onChange, onBlur } }) => (
				<ToggleInput value={value} onBlur={onBlur} onChange={onChange} checked={value} {...props} />
			)}
		/>
	);
};
