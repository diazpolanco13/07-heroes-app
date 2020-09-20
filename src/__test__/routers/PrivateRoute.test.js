import React from "react";
import "@testing-library/react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Probando el <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("Debe mostrar el componente si esta autenticado y mostrar el localStorage ", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAutenticated={true}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("Debe bloquear el componente sino esta autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAutenticated={false}
          component={() => <span>Listo!</span>}
          {...props}
        />
      </MemoryRouter>
    );
    console.log(wrapper.html());
    expect(wrapper.find("span").exists()).toBe(false);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
});
