import React from "react";

import { render } from "@testing-library/react";

import Input from "../Input";
import { Provider } from "react-redux";
import configureAppStore from "../../../store/configureStore";

describe("Input Compoenent", () => {
  it("renders properly", () => {
    const utils = render(
      <Provider store={configureAppStore()}>
        <Input />
      </Provider>
    );

    const usernameInput = utils.getByTestId("test-input-username");
    const passwordInput = utils.getByTestId("test-input-password");
    const button = utils.getByTestId("test-input-button");

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(button).toBeTruthy();
  });
});
