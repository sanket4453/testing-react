import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProviders } from "./providers/AppProviders";

const customRender = (ui, options) =>
  render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
