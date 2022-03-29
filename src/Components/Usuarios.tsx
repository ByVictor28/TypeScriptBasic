import { useUsuarios } from "../Hooks/useUsuarios";
import { Usuario } from "../Interfaces/reqRes";

export const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  const renderItem = ({ id, first_name, avatar, email }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <th>
          <img
            src={avatar}
            alt="avatar image"
            style={{
              width: 35,
              borderRadius: 100,
            }}
          />
        </th>
        <th>{first_name}</th>
        <th>{email}</th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguiente
      </button>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anterior
      </button>
    </>
  );
};
