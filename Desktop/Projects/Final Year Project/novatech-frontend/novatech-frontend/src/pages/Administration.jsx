import {
  Users,
  FileText,
  ShieldCheck,
  Activity,
} from "lucide-react";

import {
  adminStats,
  mockAuditLogs,
} from "../data/mockData";

function Administration() {

  return (
    <main className="page-container">

      <div className="page-heading">

        <p className="eyebrow">
          SYSTEM ADMINISTRATION
        </p>

        <h1>
          Administration
        </h1>

        <p>
          Manage users, enterprise
          knowledge, access control
          and system activity.
        </p>

      </div>

      <div className="admin-stats">

        <div className="stat-card">

          <Users size={21} />

          <span>
            Users
          </span>

          <strong>
            {adminStats.users}
          </strong>

        </div>

        <div className="stat-card">

          <FileText size={21} />

          <span>
            Knowledge Documents
          </span>

          <strong>
            {adminStats.documents}
          </strong>

        </div>

        <div className="stat-card">

          <ShieldCheck size={21} />

          <span>
            Access Rules
          </span>

          <strong>
            {adminStats.accessRules}
          </strong>

        </div>

        <div className="stat-card">

          <Activity size={21} />

          <span>
            Audit Events
          </span>

          <strong>
            {adminStats.auditEvents}
          </strong>

        </div>

      </div>

      <div className="admin-sections">

        <section className="admin-card">

          <h2>
            Users
          </h2>

          <p>
            Manage organization users
            and their assigned roles.
          </p>

          <button className="outline-button">
            Manage Users
          </button>

        </section>

        <section className="admin-card">

          <h2>
            Knowledge Base
          </h2>

          <p>
            Upload, update, version
            and manage enterprise documents.
          </p>

          <button className="outline-button">
            Manage Knowledge
          </button>

        </section>

        <section className="admin-card">

          <h2>
            Access Control
          </h2>

          <p>
            Configure role-based access
            to enterprise resources.
          </p>

          <button className="outline-button">
            Manage Access
          </button>

        </section>

      </div>

      <section className="audit-section">

        <div className="audit-header">

          <div>

            <h2>
              Recent Audit Logs
            </h2>

            <p>
              Important system activity
            </p>

          </div>

          <Activity size={20} />

        </div>

        <div className="audit-table">

          <div className="audit-row audit-heading">

            <span>
              User
            </span>

            <span>
              Action
            </span>

            <span>
              Result
            </span>

            <span>
              Time
            </span>

          </div>

          {mockAuditLogs.map(
            (log, index) => (

              <div
                className="audit-row"
                key={index}
              >

                <span>
                  {log.user}
                </span>

                <span>
                  {log.action}
                </span>

                <span
                  className={
                    log.result ===
                    "Denied"
                      ? "status denied"
                      : "status allowed"
                  }
                >
                  {log.result}
                </span>

                <span>
                  {log.time}
                </span>

              </div>

            )
          )}

        </div>

      </section>

    </main>
  );
}

export default Administration;