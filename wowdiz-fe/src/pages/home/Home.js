import React from "react";
import axios from "axios";


const Home = () => {
  axios.get("http://localhost:9100").then(function(response){
    console.log(response)
  });

  return (
    <h1>HOME화면입니다.</h1>
  );
};

export default Home;