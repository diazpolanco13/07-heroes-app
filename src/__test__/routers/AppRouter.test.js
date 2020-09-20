import React from "react";
import "@testing-library/dom";
import { mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Prueba del componente <AppRouter />", () => {
  test("Debe mostrar el login sino esta autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el componente marvel si esta autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "CArlos",
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
