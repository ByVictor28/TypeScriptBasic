import { useForm } from "../Hooks/useForm";
export const Formularios = () => {
  const { formulario, onChange } = useForm({
    email: "test",
    password: "123",
  });
  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={formulario.email}
        onChange={(e) => onChange(e.target.value, "email")}
      />
      <input
        value={formulario.password}
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        onChange={(e) => onChange(e.target.value, "password")}
      />
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
