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
import { TextareaRHF } from "../../shared/ui/atoms/inputs/Textarea/TextareaRHF";
import { RHFRadioGroup } from "../../shared/ui/atoms/inputs/RadioGroupInput/RHFRadioGroup";
import { RHFClassicRG } from "../../shared/ui/atoms/inputs/ClassicRadioGroupInput/RHFClassicRG";
import { RHFClassicCheckbox } from "../../shared/ui/atoms/inputs/ClassicCheckboxInput/RHFClassicCheckbox";
import { VSelectInput } from "../../shared/ui/atoms/inputs/VSelectInput";

import css from "./index.module.css";
import { BioForm } from "./features/BioForm";

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
	textarea: string;
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

export const RegistrationFormSample = () => {
	return (
		<div>
			<BioForm />
		</div>
	);
};
