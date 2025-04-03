import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <nav className="flex mt-4">
      <NavbarItem text="Project" active={true} />
      <NavbarItem text="Saved" />
      <NavbarItem text="Shared" />
      <NavbarItem text="Achievement" />
    </nav>
  );
};
