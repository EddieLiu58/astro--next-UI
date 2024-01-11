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
		localStorage.setItem("theme", defaultDark ? "dark" : "light");
	};

	useEffect(() => {
		if (defaultDark) {
			console.log("check mode");
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
