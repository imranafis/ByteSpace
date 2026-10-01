import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { navLinks } from "../data";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="logo" aria-label="ByteSpace home">
          <img src="/images/logo.svg" alt="" />
          <span>ByteSpace</span>
        </Link>
        <nav
          className={`header__nav${open ? " is-open" : ""}`}
          aria-label="Main"
        >
          <ul className="header__links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `header__link${isActive ? " is-active" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="header__actions">
            <Link to="/login" onClick={() => setOpen(false)}>
              Sign In
            </Link>
            <Link to="/register" onClick={() => setOpen(false)}>
              Join Us
            </Link>
            <button type="button" aria-label="Shopping bag">
              <ShoppingBag size={24} />
            </button>
          </div>
        </nav>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}
