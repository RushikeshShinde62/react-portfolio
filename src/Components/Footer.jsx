import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { CgPhone } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content p-10">

      {/* Name / Description */}
      <div>
        <h2 className="text-2xl font-semibold">Rushikesh</h2>
        <p className="opacity-80 max-w-md">
          MERN Stack Developer focused on building scalable backends and
          interactive, responsive frontends.
        </p>
      </div>

      {/* Social / Contact Links */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://linkedin.com/in/rushikesh-shinde-linked-in"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/rushikeshshinde62"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-transform hover:scale-110"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-transform hover:scale-110"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:rushikeshshinde6200@gmail.com"
          className="hover:text-primary transition-transform hover:scale-110"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+917378406200"
          className="hover:text-primary transition-transform hover:scale-110"
          aria-label="Phone"
        >
          <CgPhone />
        </a>
      </div>

      {/* Credit */}
      <div className="text-sm opacity-60">
        Developed by <span className="font-medium">Rushikesh</span>
      </div>

    </footer>
  );
}
