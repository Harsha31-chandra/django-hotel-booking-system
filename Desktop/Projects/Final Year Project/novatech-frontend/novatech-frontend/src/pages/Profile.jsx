import {
  User,
  Mail,
  Building2,
  Shield,
  MapPin,
} from "lucide-react";

function Profile({ user }) {

  return (
    <main className="page-container">

      <div className="page-heading">

        <p className="eyebrow">
          ACCOUNT
        </p>

        <h1>
          My Profile
        </h1>

        <p>
          Your organization profile
          and access information.
        </p>

      </div>

      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          <div>

            <h2>
              {user.name}
            </h2>

            <p>
              {user.role}
            </p>

          </div>

        </div>

        <div className="profile-grid">

          <div className="profile-field">

            <Mail size={18} />

            <div>

              <span>
                Email
              </span>

              <strong>
                {user.email}
              </strong>

            </div>

          </div>

          <div className="profile-field">

            <User size={18} />

            <div>

              <span>
                Employee ID
              </span>

              <strong>
                {user.id}
              </strong>

            </div>

          </div>

          <div className="profile-field">

            <Building2 size={18} />

            <div>

              <span>
                Department
              </span>

              <strong>
                {user.department}
              </strong>

            </div>

          </div>

          <div className="profile-field">

            <Shield size={18} />

            <div>

              <span>
                Role
              </span>

              <strong>
                {user.role}
              </strong>

            </div>

          </div>

          <div className="profile-field">

            <MapPin size={18} />

            <div>

              <span>
                Location
              </span>

              <strong>
                {user.location}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Profile;