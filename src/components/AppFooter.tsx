import React from "react";
type User = {
  fullName: string;
};

const AppFooter = () => {
  const [company, setCompany] = React.useState("TypeScript");
  // const [user, setUser] = React.useState<User>({ fullName: "Act Suttipong" });
  const [user, setUser] = React.useState<User | null>(null);
  const isShow = true;
  const showMessage = () => {
    setCompany("React");
    setUser({ fullName: "Act suttipong" });
  };
  return (
    <>
      {user && <p>User: {user?.fullName}</p>}
      <button onClick={showMessage}>Clicl Me !!!</button>
      <p>create by {company}</p>
      <p>{new Date().getFullYear()}</p>
      {isShow && <p> Hello React 18</p>}
    </>
  );
};

export default AppFooter;
