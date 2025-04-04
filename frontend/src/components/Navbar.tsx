import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <nav className="flex md:mt-4 justify-between border-b border-[#E0E0E0]">
      <NavbarItem text="Project" active={true} />
      <NavbarItem text="Saved" />
      <NavbarItem text="Shared" />
      <NavbarItem text="Achievement" />
    </nav>
  );
};
