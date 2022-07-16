import { ComponentProps } from "react";
import cn from "classnames";
import css from "./index.module.css";

interface IButton extends ComponentProps<"button"> {
	btnType?: "main" | "secondary" | "tertiary";
	actionMood?: "positive" | "negative" | null;
	iconPosition?: "before" | "after" | "sides" | null;
	// size?: "S" | "M" | "L";
}

export const Button = ({
	btnType = "main",
	actionMood = null,
	iconPosition = null,
	className,
	children,
	...props
}: IButton) => (
	<button
		data-actionmood={actionMood}
		data-iconposition={iconPosition}
		className={cn(css.btn, className, {
			[css["btn--main"]]: btnType === "main",
			[css["btn-secondary"]]: btnType === "secondary",
			[css["btn-tertiary"]]: btnType === "tertiary",
		})}
		type={props.type || "button"}
		{...props}
	>
		{children}
	</button>
);
