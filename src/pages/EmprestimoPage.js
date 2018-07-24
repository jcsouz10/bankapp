import React from 'react';
import NavBar from '../components/NavBar.js';
import BoxInformationEmprestimo from './components/BoxInformationEmprestimo';

const EmprestimoPage = () => {
  return (
    <div>
      <NavBar title="CUBIK BANK - EMPRESTIMO" />
      <BoxInformationEmprestimo />
    </div>
  )
}

export default EmprestimoPage