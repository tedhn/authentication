import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureAppStore from "../../../store/configureStore";

import App from "../App";

describe("App Page", () => {
  it("renders properly", () => {
    let utils = render(
      <Provider store={configureAppStore()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    const link = utils.getByTestId("test-link");

    expect(link).toHaveTextContent("Log In");
  });
});
