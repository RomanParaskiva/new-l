import authReducer, { login, logout } from "./authSlice";

describe("authReducer", () => {
  it("should add user if action login", () => {
    expect(authReducer({ user: "", authed: false }, login("Roman"))).toEqual({
      user: "Roman",
      authed: true,
    });
  });
  it("should add user if action logout", () => {
    expect(authReducer({ user: "Roman", authed: true }, logout())).toEqual({
      user: "",
      authed: false,
    });
  });
});
