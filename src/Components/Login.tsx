import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState = {
  validando: true,
  token: "",
  userName: "",
  name: "",
};

type LoginPayload = {
  userName: string;
  nombre: string;
};
type AuthAction =
  | {
      type: "logout";
    }
  | {
      type: "login";
      payload: LoginPayload;
    };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        name: "",
        userName: "",
      };
    case "login":
      return {
        validando: false,
        token: "abc123",
        name: action.payload.nombre,
        userName: action.payload.userName,
      };

    default:
      return state;
  }
};
export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      {!state.token ? (
        <div className="alert alert-danger">No validado...</div>
      ) : (
        <div className="alert alert-success">validado como {state.name}</div>
      )}

      {!state.token ? (
        <button
          className="btn btn-primary"
          onClick={() =>
            dispatch({
              type: "login",
              payload: { nombre: "Victor", userName: "ByVictor28" },
            })
          }
        >
          Login
        </button>
      ) : (
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "logout" })}
        >
          Logout
        </button>
      )}
    </>
  );
};
