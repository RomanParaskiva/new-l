import React, { ChangeEvent, useState } from "react";
import { useAuth } from "../../hooks/auth.hook";

export const LoginForm = () => {
  const [name, setName] = useState("");
  const { login } = useAuth();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(() => e.target.value);
  };

  const handleStart = () => {
    if (name.length > 3) {
      login(name);
    }
  };

  return (
    <div className="flex w-100 py-20 justify-center items-center">
      <div className="bg-gray-200 rounded p-3">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5"
        >
          <label className="text-center font-semibold text-lg">Ваше имя</label>
          <input
            data-testid="userName"
            className="outline-none text-black bg-transparentborder-gray-600 rounded-md border p-1"
            type="text"
            value={name}
            name="userName"
            aria-label="userName"
            onChange={handleInput}
          />

          <button
            className="p-3 bg-green-400 rounded-md text-white uppercase "
            onClick={handleStart}
          >
            start
          </button>
        </form>
      </div>
    </div>
  );
};
