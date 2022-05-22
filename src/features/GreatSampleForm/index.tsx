import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { RHFCheckboxInput } from "../../shared/ui/atoms/inputs/CheckboxInput/RHFControllerInput";
import { RHFControllerTextInput } from "../../shared/ui/atoms/inputs/TextInput/RHFControllerTextInput";
import { RHFTextInput } from "../../shared/ui/atoms/inputs/TextInput/RHFTextInput";
import { RHFControllerToggleInput } from "../../shared/ui/atoms/inputs/ToggleInput/RHFControllerToggleInput";
import { RHFToggleInput } from "../../shared/ui/atoms/inputs/ToggleInput/RHFToggleInput";
import { RHFControllerSelectInput } from "../../shared/ui/atoms/inputs/SelectInput/RHFControlSelectInput";

import css from "./index.module.css";
import { RHFRadioGroup } from "../../shared/ui/atoms/inputs/RadioGroupInput/RHFRadioGroup";
import { RHFClassicRG } from "../../shared/ui/atoms/inputs/ClassicRadioGroupInput/RHFClassicRG";
import { RHFClassicCheckbox } from "../../shared/ui/atoms/inputs/ClassicCheckboxInput/RHFClassicCheckbox";
import { VSelectInput } from "../../shared/ui/atoms/inputs/VSelectInput";

type CountryType = {
	code: string;
	emoji: string;
	image: string;
	name: string;
	unicode: string;
};

interface IFormInputs {
	firstname: string;
	lastname: string;
	email: string;
	tel: string;
	address: string;
	postcode: string;
	city: string;
	country: CountryType;
	control: boolean;
	status: boolean;
	checkbox: boolean;
	testcustomradiogroup: any;
	testclassicrg: any;
	classiccheckbox: boolean;
}

const schema = yup
	.object({
		firstname: yup.string().required(),
		lastname: yup.string().required(),
		email: yup.string().required(),
		tel: yup.string().required(),
		address: yup.string().required(),
		postcode: yup.string().required(),
		city: yup.string().required(),
		// country: yup.string().required(),
		control: yup.boolean(),
		status: yup.boolean(),
		checkbox: yup.boolean(),
	})
	.required();

const POLICIES_TEXT = `I'm agree with all the policies whaterever it could mean for me,
	even if it says that I'm obligated to sell you from zero dollars all my kidneys.
	Anyway I'm not going to read this blabluhbla text 100pages, whatever, this is it.
	I'm done with your policies.`;

export const GreatSampleForm = () => {
	const {
		register,
		watch,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});

	const [data, setData] = useState<CountryType[]>([]);
	useEffect(() => {
		fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json")
			.then(function (response) {
				return response.json();
			})
			.then(function (data: CountryType[]) {
				setData(data);
			});
	}, []);

	const onSubmit = (data: IFormInputs) => {
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
					validationMsg={errors.firstname?.message}
					validationMsgIsError
				/>
				<RHFTextInput
					id='lastname'
					label='Last Name'
					autoComplete='family-name'
					{...register("lastname")}
					validationMsg={errors.lastname?.message}
					validationMsgIsError
				/>
				<RHFTextInput
					id='email'
					label='E-mail'
					type='email'
					autoComplete='email'
					inputMode='email' //good for mobile screens
					{...register("email")}
					validationMsg={errors.email?.message}
					validationMsgIsError
				/>
				{/* For phone number we can use any lib for codes as well */}
				<RHFTextInput
					id='tel'
					label='Phone Number'
					type='tel'
					autoComplete='tel'
					inputMode='tel' //good for mobile keyboard
					{...register("tel")}
					validationMsg={errors.tel?.message}
					validationMsgIsError
				/>
			</fieldset>
			<fieldset className={css.fieldset}>
				<RHFTextInput
					id='address'
					label='Address'
					{...register("address")}
					validationMsg={errors.address?.message}
					validationMsgIsError
				/>
				<RHFControllerTextInput
					id='city'
					label='City'
					name='city'
					control={control}
					validationMsg={errors.city?.message}
					validationMsgIsError
				/>
				<RHFTextInput
					className='red'
					id='postcode'
					label='Postal Code'
					autoComplete='postal-code'
					{...register("postcode")}
					validationMsg={errors.postcode?.message}
					validationMsgIsError
				/>
				<RHFControllerSelectInput
					id='country'
					label='Country'
					name='country'
					control={control}
					options={data}
					getOptionValue={(o: any) => o.code}
					getOptionLabel={(o: any) => `${o.emoji} ${o.name}`}
					// validationMsg={errors.country?.message}
					// validationMsgIsError
				/>
				<VSelectInput
					id='country'
					label='Country'
					name='country'
					options={data}
					getOptionValue={(o: any) => o.code}
					getOptionLabel={(o: any) => `${o.emoji} ${o.name}`}
				/>
			</fieldset>
			<fieldset className={css.fieldset}>
				<RHFToggleInput
					id='status'
					label='Status'
					statusText={watch("status") ? "Active" : "Inactive"}
					{...register("status")}
				/>
				<RHFControllerToggleInput id='control' label='Control' name='control' control={control} />
				<RHFRadioGroup
					label='TestRadio'
					inputs={[
						{
							label: "customtest1",
							value: "customtest1value",
							key: "customtest1key",
						},
						{
							label: "customtest2",
							value: "customtest2value",
							key: "customtest2key",
						},
						{
							label: "customtest3",
							value: "customtest3value",
							key: "customtest3key",
						},
					]}
					{...register("testcustomradiogroup")}
				/>
			</fieldset>
			<fieldset className={css.fieldset}>
				<RHFClassicRG
					groupLabel='TestRadio'
					inputs={[
						{
							label: "customtest1",
							value: "customtest1value",
						},
						{
							label: "customtest2",
							value: "customtest2value",
						},
						{
							label: "customtest3",
							value: "customtest3value",
						},
					]}
					{...register("testclassicrg")}
				/>
			</fieldset>
			<fieldset className={css.fieldset}>
				<RHFCheckboxInput
					label='Checkbox'
					id='checkbox'
					text={POLICIES_TEXT}
					{...register("checkbox")}
				/>
				<RHFClassicCheckbox
					label='HTML based checkbox'
					id='htmlcheckbox'
					txt={POLICIES_TEXT}
					{...register("classiccheckbox")}
				/>
			</fieldset>

			<button type='submit'>submit</button>
		</form>
	);
};
