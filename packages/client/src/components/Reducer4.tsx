import React, { useReducer } from "react";

export const Reducer4: React.FC = () => {
  const firstUser = {
    id: "0391-3233-3201",
    firstName: "Bill",
    lastName: "Wilson",
    city: "Missoula",
    state: "Montana",
    email: "bwilson@mtnwilsons.com",
    admin: false,
  };
  type UserProps = {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    state: string;
    email: string;
    admin: boolean;
  };
  // const [user, setUser] = useState(firstUser);

  const [user, setUser] = useReducer(
    (user: UserProps, newDetails: Record<string, boolean>) => ({
      ...user,
      ...newDetails,
    }),
    firstUser
  );
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          React.useReducer（useReducer to Handle Complex State）
        </h1>
        <div>
          {user.firstName}
          {user.lastName}-{user.admin ? "Admin" : "User"}
        </div>
        <p>Email:{user.email}</p>
        <p>
          Location:{user.city},{user.state}
        </p>
        <button
          onClick={() => {
            setUser({ admin: true });
          }}
        >
          Make Admin
        </button>
      </div>
    </section>
  );
};
