import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/items/signout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then(() => {
        navigate("/signin", { replace: true });
      })
      .catch((err) => console.log(err));
  });

  return <></>;
}

export default Signout;
