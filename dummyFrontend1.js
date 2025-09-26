import React, { useState } from "react";

export default function AuthApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [profile, setProfile] = useState(null);
  const [msg, setMsg] = useState("");

  const API = "http://localhost:5000"; // backend URL

  async function register(e) {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${API}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setMsg(data.msg || data.error);
    } catch (err) {
      setMsg("Error: " + err.message);
    }
  }

  async function login(e) {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setMsg("Login successful");
      } else {
        setMsg(data.msg || "Login failed");
      }
    } catch (err) {
      setMsg("Error: " + err.message);
    }
  }

  async function getProfile() {
    try {
      const res = await fetch(`${API}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setProfile(data);
        setMsg("");
      } else {
        setMsg(data.msg || "Failed to load profile");
      }
    } catch (err) {
      setMsg("Error: " + err.message);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setToken("");
    setProfile(null);
    setMsg("Logged out");
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>Auth Demo</h2>
      {msg && <p style={{ color: "red" }}>{msg}</p>}

      {!token ? (
        <>
          <form onSubmit={register} style={{ marginBottom: "1rem" }}>
            <h3>Register</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            <button type="submit">Register</button>
          </form>

          <form onSubmit={login}>
            <h3>Login</h3>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ display: "block", margin: "0.5rem 0", width: "100%" }}
            />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <>
          <h3>Logged In</h3>
          <button onClick={getProfile}>Get Profile</button>
          <button onClick={logout} style={{ marginLeft: "1rem" }}>
            Logout
          </button>
          {profile && (
            <div style={{ marginTop: "1rem", padding: "0.5rem", border: "1px solid #ccc" }}>
              <h4>Profile Data</h4>
              <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
