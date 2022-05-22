import { FC } from "react";
import { Control, Controller } from "react-hook-form";

import { ClassicCheckbox, IClassicCheckbox } from ".";

type Props = Omit<IClassicCheckbox, "value | onChange | onBlur | checked"> & {
	control: Control<any, any>;
};

export const RHFControllerClassicCheckbox: FC<Props> = (props: Props) => {
	// const {control} = useFormContext(); You can use this approach, if you have a form wrapper

	return (
		<Controller
			name={props.name}
			control={props.control}
			defaultValue={false}
			render={({ field: { value, onChange, onBlur } }) => (
				<ClassicCheckbox
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
