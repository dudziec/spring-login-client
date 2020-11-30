import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActivationConfirm = () => {
  const { key } = useParams();
  let [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8081/confirm?key=${key}`)
      .then((res) => {
          setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [key, setResult]);

  return (
    <>
      <h1>Congratulations!</h1>
      <h3>Your e-mail address has been successfuly confirmed.</h3>
      <h4>Result {result}</h4>
    </>
  );
};

export default ActivationConfirm;
