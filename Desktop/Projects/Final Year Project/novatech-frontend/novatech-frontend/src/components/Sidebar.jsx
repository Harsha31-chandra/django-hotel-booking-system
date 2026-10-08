import {
  Home,
  User,
  Settings,
  LogOut,
  ShieldCheck,
} from "lucide-react";

function Sidebar({
  user,
  activePage,
  setActivePage,
  onLogout,
}) {
  const isAdmin =
    user?.role === "System_Admin";

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-icon">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h2>NOVATECH</h2>

          <span>
            Enterprise AI
          </span>
        </div>

      </div>

      <nav className="sidebar-nav">

        <button
          className={
            activePage === "dashboard"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() =>
            setActivePage("dashboard")
          }
        >
          <Home size={19} />

          <span>
            Dashboard
          </span>
        </button>

        <button
          className={
            activePage === "profile"
              ? "nav-item active"
              : "nav-item"
          }
          onClick={() =>
            setActivePage("profile")
          }
        >
          <User size={19} />

          <span>
            My Profile
          </span>
        </button>

        {isAdmin && (
          <button
            className={
              activePage === "administration"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActivePage("administration")
            }
          >
            <Settings size={19} />

            <span>
              Administration
            </span>
          </button>
        )}

      </nav>

      <div className="sidebar-bottom">

        <div className="user-mini">

          <div className="avatar">
            {user?.name?.charAt(0)}
          </div>

          <div className="user-mini-info">

            <strong>
              {user?.name}
            </strong>

            <span>
              {user?.role}
            </span>

          </div>

        </div>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          <LogOut size={18} />

          <span>
            Sign Out
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;