import "@testing-library/jest-dom";
//import "mutationobserver-shim";

import { render, RenderOptions, RenderResult } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "src/config/queryClient";

const Renderer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

afterEach(() => queryClient.clear());

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult =>
  render(ui, {
    ...options,
    wrapper: ({ children }) => {
      const Wrapper = options?.wrapper || React.Fragment;
      return (
        <Renderer>
          <Wrapper>{children}</Wrapper>
        </Renderer>
      );
    },
  });

export * from "@testing-library/react";
export { customRender as render };
