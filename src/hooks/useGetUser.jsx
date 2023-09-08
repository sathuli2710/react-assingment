import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetUser = (setLoading = () => {}) => {
  const [name, setName] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).name
      : ""
  );
  const [email, setEmail] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).email
      : ""
  );
  const [counter, setCounter] = useState(0);
  const getUser = async () => {
    const reponse = await axios.get("https://randomuser.me/api/");
    const userDetails = reponse?.data?.results[0];
    setLoading(false);
    const currName = userDetails?.name.first + userDetails?.name.last;
    const currEmail = userDetails?.email;
    localStorage.setItem(
      "user",
      JSON.stringify({ name: currName, email: currEmail })
    );
    setName(currName);
    setEmail(currEmail);
  };
  useEffect(() => {
    if (!localStorage.getItem("user") || counter !== 0) {
      getUser();
    }
  }, [counter]);
  return [name, email, setCounter];
};

export default useGetUser;
