export const TiposBasicos = () => {
  let nombre: string = "Victor";
  const edad: number = 22;
  const activo: boolean = true;
  const poderes: string[] = ["volar", "velocidad", "mental"];
  return (
    <>
      <h3>Tipos basios</h3>
      {nombre}, {edad} - {activo ? "activo" : "no activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
