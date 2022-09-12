import React, { useContext } from "react";
import classNames from "classnames";
import { gridContext } from "../../context/gridContext";

export const Sidebar = () => {
    const { start, clear, running, changeSpeed, setGridSize } =
        useContext(gridContext);
    const defaultBtn = "p-2 w-full text-sm rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold";

    const btnStyle = classNames(
        defaultBtn,
        `${running ? "bg-red-300" : "bg-green-300"}`
    );

    const blueBtn = classNames(defaultBtn, `bg-blue-300`);

    const purpleBtn = classNames(defaultBtn, `bg-purple-300`);
    return (
        <div>
            <div className="mx-auto flex flex-col w-[300px] gap-3 bg-slate-100 rounded-2xl p-3">

                <fieldset className="flex flex-col gap-2">
                    <button onClick={start} className={btnStyle}>
                        {running ? "Стоп" : "Старт"}
                    </button>

                    <button onClick={clear} className={blueBtn}>
                        Сброс
                    </button>
                </fieldset>

                <fieldset className="flex flex-col gap-2">
                    <legend>Скорость</legend>
                    <button
                        onClick={() => changeSpeed(1000)}
                        className={blueBtn}
                    >
                        1
                    </button>

                    <button
                        onClick={() => changeSpeed(500)}
                        className={blueBtn}
                    >
                        1.5
                    </button>

                    <button
                        onClick={() => changeSpeed(200)}
                        className={blueBtn}
                    >
                        2
                    </button>

                </fieldset>

                <fieldset className="flex flex-col gap-2">
                <button
                    disabled={running}
                    className={classNames(
                        purpleBtn,
                        "disabled:bg-gray-400 disabled:text-gray-600"
                    )}
                    onClick={() => setGridSize(50, 50)}
                >
                    50/50
                </button>

                <button
                    disabled={running}
                    className={classNames(
                        purpleBtn,
                        "disabled:bg-gray-400 disabled:text-gray-600"
                    )}
                    onClick={() => setGridSize(30, 30)}
                >
                    30/30
                </button>

                <button
                    disabled={running}
                    className={classNames(
                        purpleBtn,
                        "disabled:bg-gray-400 disabled:text-gray-600"
                    )}
                    onClick={() => setGridSize(100, 100)}
                >
                    100/100
                </button>
                </fieldset>


            </div>
        </div>
    );
};
