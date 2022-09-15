import { renderHook, act } from "@testing-library/react-hooks/dom";
import { useAuth } from "./auth.hook";

test("should use auth", () => {
  const { result } = renderHook(() => useAuth());

  expect(result.current.authed).toBeFalsy()

  act(() => {
    result.current.login("Roman");
  })

  expect(result.current.authed).toBeTruthy();

  expect(result.current.user).toBe("Roman");

  act(() => {
    result.current.logout();
  });

  expect(result.current.authed).toBeFalsy();

  expect(result.current.user).toBe("");
});
