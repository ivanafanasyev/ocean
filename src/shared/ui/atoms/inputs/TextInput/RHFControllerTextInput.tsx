import { FC } from "react";
import { Control, Controller, useFormContext } from "react-hook-form";

import { TextInput, TextInputProps } from ".";

type Props = Omit<TextInputProps, "value | onChange | onBlur"> & {
	control: Control<any, any>;
	onCustomChange?: (event: any) => void;
};

export const RHFControllerTextInput: FC<Props> = ({
	control,
	onCustomChange = e => e,
	...props
}: Props) => {
	// const {control} = useFormContext(); You can use this approach, if you have a form wrapper

	return (
		<Controller
			name={props.name}
			control={control}
			defaultValue={""}
			render={({ field: { value, onChange, onBlur } }) => (
				<TextInput
					value={value}
					onChange={e => {
						onChange(onCustomChange(e));
					}}
					onBlur={onBlur}
					{...props}
				/>
			)}
		/>
	);
};
