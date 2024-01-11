import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useState, useEffect } from "react";

const element = document.documentElement;
const defaultDark = element.classList.contains("dark");

export default function ThemeModeSwitch() {
	// localStorage dark mode status
	const [isSelected, setIsSelected] = useState(true);
	// change dark mode
	const handleToggleClick = () => {
		element.classList.toggle("dark");

		const isDark = element.classList.contains("dark");
		localStorage.setItem("theme", isDark ? "dark" : "light");
	};

	useEffect(() => {
		if (defaultDark) {
			setIsSelected();
		}
	}, []);
	return (
		<Switch
			isSelected={isSelected}
			size="lg"
			color="gray"
			startContent={<MoonIcon />}
			endContent={<SunIcon />}
			onValueChange={handleToggleClick}
		></Switch>
	);
}
