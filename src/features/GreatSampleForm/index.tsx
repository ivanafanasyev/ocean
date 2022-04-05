import { useForm } from "react-hook-form";
import { RHFCheckboxInput } from "../../shared/ui/atoms/inputs/CheckboxInput/RHFControllerInput";
import { RHFControllerTextInput } from "../../shared/ui/atoms/inputs/TextInput/RHFControllerTextInput";
import { RHFTextInput } from "../../shared/ui/atoms/inputs/TextInput/RHFTextInput";
import { RHFControllerToggleInput } from "../../shared/ui/atoms/inputs/ToggleInput/RHFControllerToggleInput";
import { RHFToggleInput } from "../../shared/ui/atoms/inputs/ToggleInput/RHFToggleInput";

import css from "./index.module.css";

// TO-DO: validation and types

export const GreatSampleForm = () => {
	const { register, watch, handleSubmit, control } = useForm({});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={css.form}>
			<fieldset className={css.fieldset}>
				{/* <legend></legend> It can be a good option for add a header for any group of elements */}
				<RHFTextInput
					id='firstname'
					label='First Name'
					autoComplete='given-name'
					{...register("firstname")} //this is assign a name="firstname" as well
				/>
				<RHFTextInput
					id='lastname'
					label='Last Name'
					autoComplete='family-name'
					{...register("lastname")}
				/>
				<RHFTextInput
					id='email'
					label='E-mail'
					type='email'
					autoComplete='email'
					inputMode='email' //good for mobile screens
					required
					{...register("email")}
				/>
				{/* For phone number we can use any lib for codes as well */}
				<RHFTextInput
					id='tel'
					label='Phone Number'
					type='tel'
					autoComplete='tel'
					inputMode='tel' //good for mobile keyboard
					{...register("tel")}
				/>
			</fieldset>
			<fieldset className={css.fieldset}>
				<RHFTextInput id='address1' label='Address' {...register("address1")} />
				<RHFTextInput id='address2' label='Address additional' {...register("address2")} />
				<RHFTextInput
					className='red'
					id='postcode'
					label='Postal Code'
					autoComplete='postal-code'
					{...register("postcode")}
				/>
				<RHFControllerTextInput id='country' label='Country' name='country' control={control} />
			</fieldset>
			<fieldset className={css.fieldset}>
				<RHFToggleInput
					id='status'
					label='Status'
					statusText={watch("status") ? "Active" : "Inactive"}
					{...register("status")}
				/>
				<RHFControllerToggleInput id='control' label='Control' name='control' control={control} />
			</fieldset>
			<RHFCheckboxInput
				label='Checkbox'
				id='checkbox'
				text='I am agree with smth'
				{...register("checkbox")}
			/>
			<button type='submit'>s</button>
		</form>
	);
};
