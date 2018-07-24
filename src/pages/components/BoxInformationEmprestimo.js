import React from 'react';
import '../../styles/pages/BoxInformationEmprestimo.css';

const BoxInformationEmprestimo = () => {
  return (
    <div className="boxInformationEmprestimo">
      <h1 > Quanto deseja? </h1>
      <button onClick={() => alert("Emprestimo Concedido")}> Solicitar </button>
    </div>
  )
}

export default BoxInformationEmprestimo;