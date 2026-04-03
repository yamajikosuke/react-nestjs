import React from "react";
import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">React-practice </h1>
        <div className="content">
          <ul>
            <li>
              <Link to="/modal">モーダル</Link>
            </li>
            <li>
              <Link to="/qrcode">QRコード</Link>
            </li>
            <li>
              <Link to="/zustand">Zustand</Link>
            </li>
            <li>
              <Link to="/users-with-zod">UsersWithZod</Link>
            </li>
            <li>
              <Link to="/users-with-zod2">UsersWithZod2</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todo">ToDo</Link>
            </li>
            <li>
              <Link to="/react-hook-form">React-Hook-Form</Link>
            </li>
            <li>
              <Link to="/jest">Jest</Link>
            </li>
            <li>
              <Link to="/hebuban">ヘブバン</Link>
            </li>
            <li>
              <Link to="/stepper">Stepper</Link>
            </li>
            <li>
              <Link to="/mui">MUI</Link>
            </li>
            <li>
              <Link to="/Redux/top">Redux</Link>
            </li>
            <li>
              <Link to="/filter">filter</Link>
            </li>
            <li>
              <Link to="/react-scroll">React Scroll</Link>
            </li>
            <li>
              <Link to="/react-beautiful-dnd">react-beautiful-dnd (basic)</Link>
            </li>
            <li>
              <Link to="/react-beautiful-dnd2">
                react-beautiful-dnd (advance)
              </Link>
            </li>
            <li>
              <Link to="/reactTagInput">React Tag Input</Link>
            </li>
            <li>
              <Link to="/reactSelect">React Select</Link>
            </li>
            <li>
              <Link to="/fa">fontawesome</Link>
            </li>
            <li>
              <Link to="/intl">React-Intl</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/selectDate">selectDate</Link>
            </li>
            <li>
              <Link to="/context">React.useContext</Link>
            </li>
            <li>
              <Link to="/reducer">React.useReducer（単一State）</Link>
            </li>
            <li>
              <Link to="/reducer2">React.useReducer（複数State）記述途中</Link>
            </li>
            <li>
              <Link to="/reducer3">
                React.useReducer（Learning React: Improving Code with
                useReducer）
              </Link>
            </li>
            <li>
              <Link to="/reducer4">
                React.useReducer（useReducer to Handle Complex State）
              </Link>
            </li>
            <li>
              <Link to="/useRef">React.useRef</Link>
            </li>
            <li>
              <Link to="/useMemo">React.useMemo</Link>
            </li>
            <li>
              <Link to="/useCallback">React.useCallback</Link>
            </li>
            <li>
              <Link to="/reactMemo">React.memo</Link>
            </li>
            <li>
              <Link to="/sort">Sort</Link>
            </li>
            <li>
              <Link to="/navigatorLang">navigator.language</Link>
            </li>
            <li>
              <Link to="/replace">Replace</Link>
            </li>
            <li>
              <Link to="/translate">Translate</Link>
            </li>
            <li>
              <Link to="/formBuilder">Form Builder</Link>
            </li>
            <li>
              <Link to="/jsonGenerator">Json Generator</Link>
            </li>
            <li>
              <Link to="/arrayToJson">array to json</Link>
            </li>
            <li>
              <Link to="/RegisterDataFromCLI">CLIからDBにデータ投入</Link>
            </li>
            <li>Custom Hook</li>
            <ol>
              <li>
                <Link to="/customHook_1">customHook_1</Link>
              </li>
              <li>
                <Link to="/colorApp">colorApp</Link>
              </li>
            </ol>
            <li>Learning React</li>
            <ol>
              <li>
                <Link to="/suspense">suspense</Link>
              </li>
              <li>test2</li>
            </ol>
            <li>
              <Link to="/regExp">Regular Expression</Link>
            </li>
            <li>Canvas</li>
            <ol>
              <li>
                <Link to="/canvasBasic">CanvasBasic</Link>
              </li>
              <li>
                <Link to="/canvasBasic2">CanvasBasic2</Link>
              </li>
            </ol>
          </ul>
        </div>
      </div>
    </section>
  );
};
