import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from "@nextui-org/react";
import { AcmeLogo } from "@components/Header/AcmeLogo.jsx";
import ThemeModeSwitch from "@components/ThemeMode/Switch.jsx";

export default function CustomNavbar() {
	return (
		<Navbar maxWidth={"full"}>
			<NavbarBrand>
				<AcmeLogo />
				<p className="font-bold text-inherit">ACME</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<ThemeModeSwitch />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
