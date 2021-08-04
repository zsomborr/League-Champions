import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    user === null
      ? localStorage.removeItem("user")
      : localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
