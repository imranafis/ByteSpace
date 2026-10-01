import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from './AuthLayout.jsx';
import Button from '../components/Button.jsx';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (form.password.length < 8) next.password = 'Use at least 8 characters.';
    setErrors(next);
    if (!Object.keys(next).length) navigate('/login');
  };

  return (
    <AuthLayout title="Sign up and come in"
      text="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost">
      <form className="auth-form" onSubmit={submit} noValidate>
        <div className="auth-form__head">
          <p className="label-l tint-violet">Create an Account</p>
          <h2 className="display-s">Welcome to ByteSpace</h2>
        </div>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input id="name" autoComplete="name" placeholder="Jamie Davis" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" autoComplete="email" placeholder="designer@example.com" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="new-password" placeholder="********" value={form.password} onChange={set('password')} aria-invalid={!!errors.password} />
          {errors.password && <span className="field__error">{errors.password}</span>}
        </div>
        <div className="auth-form__actions">
          <p className="auth-form__alt">Already have an account? <Link to="/login">Login</Link></p>
          <Button type="submit" variant="purple">Continue</Button>
        </div>
      </form>
    </AuthLayout>
  );
}
