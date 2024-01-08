import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
} from "@nextui-org/react";

export default function CustomDropDown() {
	return (
		<Dropdown className="">
			<DropdownTrigger>
				<Button variant="bordered" className="">
					Open Menu
				</Button>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem key="new">New file</DropdownItem>
				<DropdownItem key="copy">Copy link</DropdownItem>
				<DropdownItem key="edit">Edit file</DropdownItem>
				<DropdownItem key="delete" className="text-danger" color="danger">
					Delete file
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
