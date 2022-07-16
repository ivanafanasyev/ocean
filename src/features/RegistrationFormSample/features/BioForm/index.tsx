import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { preventDefaultForKey } from "../../../../shared/lib/utils/checkKeyDown";

import { Button } from "../../../../shared/ui/atoms/Button";
import { RHFRadioGroup } from "../../../../shared/ui/molecules/inputs/RadioGroupInput/RHFRadioGroup";
import { RHFControllerSelectInput } from "../../../../shared/ui/molecules/inputs/SelectInput/RHFControlSelectInput";
import { RHFControllerTextInput } from "../../../../shared/ui/molecules/inputs/TextInput/RHFControllerTextInput";
import { RHFTextInput } from "../../../../shared/ui/molecules/inputs/TextInput/RHFTextInput";

import css from "./index.module.css";

type CountryType = {
	code: string;
	emoji: string;
	image: string;
	name: string;
	unicode: string;
};

type Props = {
	onNext?: () => void;
};

type BioFormFields = {
	fullname: string;
	email: string;
	nationality: CountryType;
	birthday: string;
	birthmonth: string;
	birthyear: string;
	gender: string;
};

const validationSchema = object({
	fullname: string().required(),
	email: string().email().required(),
	nationality: object().required(),
	birthday: string().required(),
	birthmonth: string().required(),
	birthyear: string().required(),
	gender: string().required(),
}).required();

export const BioForm = (onNext: Props) => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<BioFormFields>({
		resolver: yupResolver(validationSchema),
	});
	const [countries, setCountries] = useState<CountryType[]>([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json")
			.then(function (response) {
				return response.json();
			})
			.then(function (data: CountryType[]) {
				setCountries(data);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	// Don't forget to type the data
	const onSubmit = (data: BioFormFields) => {
		// Time to time back-end has it own format for request, modify data here
		let { birthday, birthmonth, birthyear, nationality, ...restData } = data;
		const resultObj = {
			...restData,
			nationality: nationality.code,
			birthdate: new Date(Number(birthyear), Number(birthmonth) - 1, Number(birthday)),
		};
	};

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmit)}>
			<RHFTextInput
				type='text'
				label='Fullname'
				id='fullname'
				validationMsg={errors?.fullname?.message}
				{...register("fullname")}
			/>
			<RHFTextInput
				type='email'
				label='Email'
				id='email'
				inputMode='email'
				validationMsg={errors?.email?.message}
				{...register("email")}
			/>
			<RHFControllerSelectInput
				id='nationality'
				label='Nationality'
				name='nationality'
				placeholder='Select your passport country'
				options={countries}
				isLoading={isLoading}
				getOptionValue={(o: any) => o.code}
				getOptionLabel={(o: any) => `${o.emoji} ${o.name}`}
				control={control}
			/>
			<fieldset className={css.birthdatefieldset}>
				<legend>Date of birth</legend>
				<RHFControllerTextInput
					autoComplete='bday-day'
					type='text'
					label='Date'
					id='birthday'
					placeholder='D'
					inputMode='numeric'
					name='birthday'
					control={control}
					onCustomChange={e => {
						return String(e.target.value)
							.substring(0, 2)
							.replace(/[^0-9.]/g, "");
					}}
				/>
				<RHFControllerTextInput
					autoComplete='bday-month'
					type='text'
					label='Month'
					id='birthmonth'
					placeholder='M'
					inputMode='numeric'
					name='birthmonth'
					control={control}
					onCustomChange={e => {
						return String(e.target.value)
							.substring(0, 2)
							.replace(/[^0-9.]/g, "");
					}}
				/>
				<RHFControllerTextInput
					autoComplete='bday-year'
					type='text'
					label='Year'
					id='birthyear'
					placeholder='YYYY'
					inputMode='numeric'
					name='birthyear'
					control={control}
					onCustomChange={e => {
						return String(e.target.value)
							.substring(0, 4)
							.replace(/[^0-9.]/g, "");
					}}
				/>
			</fieldset>
			<RHFRadioGroup
				label='Gender'
				inputs={[
					{ value: "M", label: "Male", key: "malegender" },
					{ value: "F", label: "Female", key: "femalegender" },
				]}
				{...register("gender")}
				validationMsg={errors?.gender?.message}
			/>
			<Button type='submit'>Next</Button>
		</form>
	);
};
