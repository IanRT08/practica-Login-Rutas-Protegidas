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
            <tr key={u.userName}>
              <td>{u.userName}</td>
              <td>{u.nombre}</td>
              <td className={`role ${u.rol}`}>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}