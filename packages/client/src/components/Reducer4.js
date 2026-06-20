import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from "react";
export const Reducer4 = () => {
    const firstUser = {
        id: "0391-3233-3201",
        firstName: "Bill",
        lastName: "Wilson",
        city: "Missoula",
        state: "Montana",
        email: "bwilson@mtnwilsons.com",
        admin: false,
    };
    // const [user, setUser] = useState(firstUser);
    const [user, setUser] = useReducer((user, newDetails) => ({
        ...user,
        ...newDetails,
    }), firstUser);
    return (_jsx("section", { className: "section", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "title", children: "React.useReducer\uFF08useReducer to Handle Complex State\uFF09" }), _jsxs("div", { children: [user.firstName, user.lastName, "-", user.admin ? "Admin" : "User"] }), _jsxs("p", { children: ["Email:", user.email] }), _jsxs("p", { children: ["Location:", user.city, ",", user.state] }), _jsx("button", { onClick: () => {
                        setUser({ admin: true });
                    }, children: "Make Admin" })] }) }));
};
