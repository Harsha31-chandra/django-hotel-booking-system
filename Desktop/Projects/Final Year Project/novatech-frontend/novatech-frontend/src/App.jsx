import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Administration from "./pages/Administration";

import Sidebar from "./components/Sidebar";

function App() {

  const [user, setUser] =
    useState(null);

  const [activePage, setActivePage] =
    useState("dashboard");

  const handleLogin = (
    loggedInUser
  ) => {

    setUser(loggedInUser);

    setActivePage("dashboard");
  };

  const handleLogout = () => {

    setUser(null);

    setActivePage("dashboard");
  };

  /*
    If nobody is logged in,
    show Login page.
  */

  if (!user) {

    return (
      <Login
        onLogin={handleLogin}
      />
    );
  }

  /*
    Decide which page to display.
  */

  const renderPage = () => {

    if (
      activePage === "profile"
    ) {

      return (
        <Profile user={user} />
      );
    }

    if (
      activePage ===
      "administration"
    ) {

      /*
        Extra security:
        Only System_Admin can
        access Administration.
      */

      if (
        user.role !==
        "System_Admin"
      ) {

        return (
          <Dashboard />
        );
      }

      return (
        <Administration />
      );
    }

    return (
      <Dashboard />
    );
  };

  return (

    <div className="app">

      <Sidebar
        user={user}
        activePage={activePage}
        setActivePage={
          setActivePage
        }
        onLogout={
          handleLogout
        }
      />

      <div className="main-content">

        {renderPage()}

      </div>

    </div>
  );
}

export default App;