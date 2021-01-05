import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROLE_ADMIN, ROLE_CUSTOMER, ROLE_STAFF } from "./userRole";

export default function (SpecialComponent, ...roles) {
  const AuthenticationCheck = (props) => {
    const userRole = useSelector((state) => state.auth.role);

    const history = useHistory();

    useEffect(() => {
      console.log(userRole);

      if (!roles.includes(userRole)) {
        alert("Unauthorized.");
        switch (userRole) {
          case ROLE_CUSTOMER:
            history.push("/menu");
            break;
          case ROLE_STAFF:
            history.push("/dashboard");
            break;
          case ROLE_ADMIN:
            history.push("/add-menu");
            break;
          default:
            history.push("/");
            break;
        }
      }
    }, []);
    return <SpecialComponent />;
  };
  return AuthenticationCheck;
}
