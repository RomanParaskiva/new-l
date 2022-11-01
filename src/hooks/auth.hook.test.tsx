import React from "react";
import { renderHook, act } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./auth.hook";
import { AuthProvider } from "./auth.hook";

test("should use auth", () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  );
  const { result } = renderHook(() => useAuth(), { wrapper });

  expect(result.current.authed).toBeFalsy();

  act(() => {
    result.current.login("Roman");
  });

  expect(result.current.authed).toBeTruthy();

  expect(result.current.user).toBe("Roman");

  act(() => {
    result.current.logout();
  });

  expect(result.current.authed).toBeFalsy();

  expect(result.current.user).toBe("");
});
