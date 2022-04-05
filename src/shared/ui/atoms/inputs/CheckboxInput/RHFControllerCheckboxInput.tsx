import { Control, Controller } from "react-hook-form";

import { CheckboxInput, CheckboxInputProps } from ".";

type Props = Omit<CheckboxInputProps, "value | onChange | onBlur | checked"> & {
	control: Control<any, any>;
};

export const RHFControllerCheckboxInput = (props: Props) => {
	// const {control} = useFormContext(); You can use this approach, if you have a form wrapper

	return (
		<Controller
			name={props.name}
			control={props.control}
			defaultValue={false}
			render={({ field: { value, onChange, onBlur } }) => (
				<CheckboxInput
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					checked={value}
					{...props}
				/>
			)}
		/>
	);
};
