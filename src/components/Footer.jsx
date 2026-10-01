import { useState } from "react";
import { Link } from "react-router-dom";
import { footerColumns } from "../data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <footer className="footer">
      <div className="container footer__nav">
        <div className="footer__newsletter">
          <Link to="/" className="logo" aria-label="ByteSpace home">
            <img src="/images/logo.svg" alt="" />
            <span className="footer__logo__text">ByteSpace</span>
          </Link>
          <p className="body-l">
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="footer__form"
          >
            <label className="visually-hidden" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setDone(false);
              }}
            />
            <button type="submit" className="btn btn--lime btn--md">
              Subscribe
            </button>
          </form>
          <p className="footer__hint" aria-live="polite">
            {done
              ? "Thanks for subscribing!"
              : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
          </p>
        </div>
        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="footer__col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <Link to="/search">{l}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer__bottom">
        <p>© 2023 ByteSpace. All rights reserved.</p>
        <ul>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
          <li>
            <a href="#cookies">Cookies Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
