import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link href={href}>
      <a
        className="block text-[#000000] sm:text-xl rounded md:p-0 hover: "
        onClick={onClick}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavLink;
