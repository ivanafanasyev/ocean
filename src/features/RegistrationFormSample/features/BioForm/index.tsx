import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RHFRadioGroup } from "../../../../shared/ui/atoms/inputs/RadioGroupInput/RHFRadioGroup";

import { RHFControllerSelectInput } from "../../../../shared/ui/atoms/inputs/SelectInput/RHFControlSelectInput";
import { RHFControllerTextInput } from "../../../../shared/ui/atoms/inputs/TextInput/RHFControllerTextInput";
import { RHFTextInput } from "../../../../shared/ui/atoms/inputs/TextInput/RHFTextInput";

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

export const BioForm = (onNext: Props) => {
	const { register, control } = useForm();
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

	return (
		<form className={css.form}>
			<RHFTextInput type='text' label='Fullname' id='fullname' {...register("fullname")} />
			<RHFTextInput
				type='email'
				label='Email'
				id='email'
				inputMode='email'
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
					placeholder='DD'
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
					placeholder='MM'
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
			/>
		</form>
	);
};
