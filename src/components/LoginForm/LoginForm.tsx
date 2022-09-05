import React from 'react'

export const LoginForm = () => {
  return (
    <div className="flex w-100 h-full justify-center items-center">
      <div>
        <form>
          <label>
            Ваше имя
          </label>
          <input type="text" name="userName" />

          <button className="p-3 bg-green-400 rounded-md text-white uppercase ">
            start
          </button>
        </form>
      </div>
    </div>
  );
};