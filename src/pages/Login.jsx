import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout.jsx';
import Button from '../components/Button.jsx';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Enter your password.';
    setErrors(next);
    if (!Object.keys(next).length) navigate('/');
  };

  return (
    <AuthLayout title="Sign in with ease"
      text="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.">
      <form className="auth-form" onSubmit={submit} noValidate>
        <div className="auth-form__head">
          <p className="label-l tint-violet">Sign In</p>
          <h2 className="display-s">Welcome Back</h2>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" placeholder="designer@example.com" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" placeholder="********" value={form.password} onChange={set('password')} aria-invalid={!!errors.password} />
          {errors.password && <span className="field__error">{errors.password}</span>}
        </div>
        <Button type="submit" variant="blue" className="btn--block">Sign In</Button>
        <div className="divider"><span>or</span></div>
        <p className="auth-form__alt auth-form__alt--center">New user? <Link to="/register" className="tint-blue">Create an account</Link></p>
      </form>
    </AuthLayout>
  );
}
