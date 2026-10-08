import { useState } from "react";
import { ShieldCheck, Eye, EyeOff, LogIn } from "lucide-react";
import { mockUsers } from "../data/mockData";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const user = mockUsers.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setError("Invalid organization email or password.");
      return;
    }

    setError("");

    onLogin(user);
  };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}

      <div className="login-left">

        <div className="login-brand">

          <div className="brand-icon">
            <ShieldCheck size={28} />
          </div>

          <div>
            <h1>NOVATECH</h1>

            <p>
              Enterprise AI Knowledge Platform
            </p>
          </div>

        </div>

        <div className="login-message">

          <h2>
            Intelligent knowledge.
            <br />
            Secure decisions.
          </h2>

          <p>
            Access enterprise policies, workflows and
            knowledge through a secure AI-powered workspace.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <div className="login-card">

          <div className="login-card-header">

            <h2>
              Welcome back
            </h2>

            <p>
              Sign in using your organization credentials.
            </p>

          </div>

          <form onSubmit={handleLogin}>

            <label>
              Organization Email
            </label>

            <input
              type="email"
              placeholder="you@novatech.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

            <label>
              Password
            </label>

            <div className="password-wrapper">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="login-button"
            >
              <LogIn size={18} />

              Sign In
            </button>

          </form>

          <div className="demo-credentials">

            <strong>
              Demo credentials
            </strong>

            <p>
              Employee:
              employee@novatech.com
              / employee123
            </p>

            <p>
              Admin:
              admin@novatech.com
              / admin123
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;