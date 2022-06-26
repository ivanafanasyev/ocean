import { Control, Controller } from "react-hook-form";

import { SelectInput, SelectInputProps } from ".";

type Props = Omit<SelectInputProps, "onChange | onBlur"> & {
	control: Control<any, any>;
};

export const RHFControllerSelectInput = (props: Props) => {
	// const {control} = useFormContext(); You can use this approach, if you have a form wrapper

	return (
		<Controller
			name={props.name}
			control={props.control}
			defaultValue={false}
			render={({ field: { value, onChange, onBlur } }) => (
				<SelectInput value={value} onBlur={onBlur} onChange={onChange} {...props} />
			)}
		/>
	);
};
