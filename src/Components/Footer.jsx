import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const ICON_SIZE = 25;

function Footer() {
  return (
    <footer className="col-span-3 flex flex-wrap items-center justify-center gap-4 bg-stone-300 p-4 text-center">
      <p className="capitalize">
        &copy; {new Date().getFullYear()} Obi Emmanuel. All rights reserved
      </p>

      <div className="mt-2 flex items-center justify-center gap-2">
        <a href="mailto:obiski15@gmail.com" target="_blank" rel="noreferrer">
          <CiMail style={{ color: "#dc2626" }} size={ICON_SIZE} />
        </a>
        <a href="https://github.com/obiski15" target="_blank" rel="noreferrer">
          <FaGithub style={{ color: "#181717" }} size={ICON_SIZE} />
        </a>
        <a
          href="https://twitter.com/Etz_da_obiski"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter style={{ color: "#1e293b" }} size={ICON_SIZE} />
        </a>
        <a
          href="https://www.instagram.com/etz_da_obiski?igsh=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoInstagram style={{ color: "#F56040" }} size={ICON_SIZE} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
