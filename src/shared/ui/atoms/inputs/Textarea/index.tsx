import { ComponentProps, ForwardedRef, useEffect } from "react";
import css from "./index.module.css";

export interface ITextArea extends Omit<ComponentProps<"textarea">, "id" | "name" | "ref"> {
	label: string;
	id: string;
	name: string;
	hideLabel?: boolean;
	isFluidHeight?: boolean; // expand height while typing if true
	reassignedRef?:
		| ForwardedRef<HTMLTextAreaElement>
		| React.LegacyRef<HTMLTextAreaElement>
		| undefined;
	validationMsg?: string;
	validationMsgIsError?: boolean;
}

export const Textarea = ({
	label,
	hideLabel = false,
	id,
	name,
	reassignedRef,
	required,
	isFluidHeight = false,
	validationMsg,
	validationMsgIsError = true,
	...props
}: ITextArea) => {
	useEffect(() => {
		if (isFluidHeight) {
			const ta = document.querySelector<HTMLElement>(`#${id}`);

			ta?.addEventListener("input", function (this: HTMLElement) {
				this.style.height = "auto";
				this.style.height = this.scrollHeight + "px";
			});

			return () => {
				ta?.removeEventListener("input", function (this: HTMLElement) {
					this.style.height = "auto";
					this.style.height = this.scrollHeight + "px";
				});
			};
		}
	}, [id, isFluidHeight]);

	return (
		<div>
			<label className={css.label} htmlFor={id}>
				{label}
			</label>
			<textarea
				aria-invalid={validationMsgIsError && validationMsg ? "true" : "false"}
				aria-required={required ? "true" : "false"}
				className={css.textarea}
				ref={reassignedRef}
				id={id}
				required={required}
				name={name}
				{...props}
			></textarea>
			<div></div>
		</div>
	);
};
