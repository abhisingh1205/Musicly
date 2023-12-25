import Cookies from "js-cookie";
import React from "react";

function Logout() {
  Cookies.remove("id");
  Cookies.remove("name");
  Cookies.remove("email");
  Cookies.remove("date_joined");
  Cookies.remove("token");
  return <div>Logout</div>;
}

export default Logout;
