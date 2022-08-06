import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  let navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) {
      navigate('/login')
    }
    console.log(token)
  }, [])
  return <div>Todos</div>;
}
export default Todos;
