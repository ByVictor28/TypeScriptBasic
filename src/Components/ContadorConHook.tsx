import { useCounter } from "../Hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, acumular } = useCounter();
  return (
    <>
      <h3>
        Contador con hoook <small>{valor}</small>
      </h3>
      <button onClick={() => acumular(1)} className="btn btn-primary">
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
