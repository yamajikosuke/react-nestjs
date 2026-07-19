import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./route/PrivateRoute";

import "bulma/css/bulma.css";
import "bulma-switch/dist/css/bulma-switch.min.css";

import { Initializer } from "./components/Initializer";
import * as Page from "./components/";
import { Navigate } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Initializer>
      <Routes>
        <Route path="/login" element={<Page.LoginPage />} />
        <Route
          path="/login/member"
          element={
            <PrivateRoute>
              <Page.MemberPage />
            </PrivateRoute>
          }
        />
        {/* デフォルトはログインへ */}
        {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="/zustand" element={<Page.Zustand />} />
        <Route
          path="/asynchronous-processing"
          element={<Page.AsynchronousProcessing />}
        />
        <Route path="/useQuery" element={<Page.UseQuery />} />
        <Route path="/useMutation" element={<Page.UseMutation />} />
        <Route path="/registration" element={<Page.RegistrationForm />} />
        <Route path="/registration/confirm" element={<Page.Confirm />} />
        <Route path="/registration/complete" element={<Page.Complete />} />
        <Route path="/modal" element={<Page.ModalTest />} />
        <Route path="/qrcode" element={<Page.Qrcode />} />
        <Route path="/users-with-zod" element={<Page.UsersWithZod />} />
        <Route path="/users-with-zod2" element={<Page.UsersWithZod2 />} />
        <Route path="/userForm" element={<Page.UserFormPage />} />
        <Route path="/userList" element={<Page.UserListPage />} />
        <Route path="/users" element={<Page.Users />} />
        <Route path="/hebuban" element={<Page.Hebuban />} />
        <Route path="/stepper" element={<Page.Stepper />} />
        <Route path="/" element={<Page.Top />} />
        <Route path="/jest" element={<Page.JestIndex />} />
        <Route path="/mui" element={<Page.MuiIndex />} />
        <Route path="/mui/typography" element={<Page.Typograpy />} />
        <Route path="/mui/theming" element={<Page.Theming />} />
        <Route path="/mui/customize" element={<Page.Customize />} />
        <Route path="/Redux/top" element={<Page.ReduxTop />} />
        <Route path="/Redux/todo" element={<Page.ReduxTodo />} />
        <Route path="/filter" element={<Page.Filter />} />
        <Route
          path="/react-beautiful-dnd"
          element={<Page.ReactBeautifulDnd />}
        />
        <Route
          path="/react-beautiful-dnd2"
          element={<Page.ReactBeautifulDnd2Wrapper />}
        />
        <Route path="/reactTagInput" element={<Page.ReactTagInput />} />
        <Route path="/reactSelect" element={<Page.ReactSelect />} />
        <Route path="/regExp" element={<Page.RegExp />} />
        <Route path="/fa" element={<Page.FontAwesome />} />
        <Route path="/fa/test" element={<Page.FontAwesome />} />
        <Route path="/fa/1" element={<Page.FontAwesome />} />
        <Route path="/fa/edit/1" element={<Page.FontAwesome />} />
        <Route path="/react-hook-form" element={<Page.ReactHookFormIndex />} />
        <Route
          path="/react-hook-form/basic"
          element={<Page.ReactHookFormBasic />}
        />
        <Route
          path="/react-hook-form/basic-validation"
          element={<Page.ReactHookFormBasicValidation />}
        />
        <Route
          path="/react-hook-form/basic-validation-display-error"
          element={<Page.ReactHookFormBasicValidationDisplayError />}
        />
        <Route
          path="/react-hook-form/form-provider"
          element={<Page.ReactHookFormProvider />}
        />
        <Route
          path="/react-hook-form/controller"
          element={<Page.ReactHookFormController />}
        />
        <Route path="/intl" element={<Page.Intl />} />
        <Route path="/form" element={<Page.Form />} />
        <Route path="/todo" element={<Page.ToDo />} />
        <Route path="/context" element={<Page.Context />} />
        <Route path="/contextNextPage" element={<Page.ContextNextPage />} />
        <Route path="/reducer" element={<Page.Reducer />} />
        <Route path="/reducer2" element={<Page.Reducer2 />} />
        <Route path="/reducer3" element={<Page.Reducer3 />} />
        <Route path="/reducer4" element={<Page.Reducer4 />} />
        <Route path="/useRef" element={<Page.UseRef />} />
        <Route path="/useMemo" element={<Page.UseMemo />} />{" "}
        <Route path="/useCallback" element={<Page.UseCallback />} />
        <Route path="/reactMemo" element={<Page.ReactMemo />} />
        <Route path="/selectDate" element={<Page.SelectDatePage />} />
        <Route path="/sort" element={<Page.Sort />} />
        <Route path="/navigatorLang" element={<Page.NavigatorLanguage />} />
        <Route path="/replace" element={<Page.Replace />} />
        <Route path="/translate" element={<Page.Translate />} />
        <Route path="/formBuilder" element={<Page.FormBuilder />} />
        <Route path="/users" element={<Page.Users />} />
        {/* <Route path="/jsonGenerator" element={<Page.JsonGenerator />} /> */}
        <Route path="/arrayToJson" element={<Page.ArrayToJson />} />
        <Route
          path="/RegisterDataFromCLI"
          element={<Page.RegisterDataFromCLI />}
        />
        <Route path="/suspense" element={<Page.Suspense />} />
        <Route path="/customHook_1" element={<Page.CustomHook1 />} />
        <Route path="/colorApp" element={<Page.ColorApp />} />
        <Route path="/colorApp/:id(\d+)" element={<Page.ColorApp />} />
        <Route
          path="/colorApp/edit/:id(\d+)"
          element={<Page.ColorApp />}
        />{" "}
        <Route path="/canvasBasic" element={<Page.CanvasBasic />} />{" "}
        <Route path="/canvasBasic2" element={<Page.CanvasBasic2 />} />
        <Route path="/react-scroll" element={<Page.ReactScroll />} />
      </Routes>
    </Initializer>
  );
};
