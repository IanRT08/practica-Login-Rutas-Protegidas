import "../styles/table.css";

export default function UsersTable({ users }) {
  return (
    <div className="tableCard">
      <h3 className="tableTitle">Usuarios del sistema</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre completo</th>
            <th>Rol</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.username}>
              <td>{u.username}</td>
              <td>{u.fullName}</td>
              <td className={`role ${u.role}`}>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}