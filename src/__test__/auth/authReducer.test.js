import "@testing-library/jest-dom";
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en el autReducere", () => {
  //   const state = {
  //     name: "Carlos",
  //     logged: true,
  //   };
  test("Debe retornar el estado por defecto ", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe autenticar el name del usuario ", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Hermito",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      name: "Hermito",
    });
  });

  test("Debe borrar el name y el logged debe ser falso ", () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: "Juan" }, action);
    expect(state).toEqual({ logged: false });
  });
});
