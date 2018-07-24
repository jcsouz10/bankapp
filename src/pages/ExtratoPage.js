import React from 'react';
import NavBar from '../components/NavBar.js';
import BoxInformationExtrato from '../pages/components/BoxInformationExtrato.js';

const ExtratoPage = () => {
  const informationExtrato = [
    {
      name: "DEPOSITO",
      value: "R$ 500,00",
      date: "10/02/2018"
    },
    {
      name: "SAQUE",
      value: "R$ 200,00",
      date: "10/02/2018"
    },
    {
      name: "DEPOSITO",
      value: "R$ 1000,00",
      date: "04/02/2018"
    },
    {
      name: "DEPOSITO",
      value: "R$ 500,00",
      date: "10/12/2017"
    },
    {
      name: "SAQUE",
      value: "R$ 9000,00",
      date: "20/10/2017"
    }
    , {
      name: "DEPOSITO",
      value: "R$ 300,00",
      date: "30/02/2017"
    }
  ]

  return (
    <div>
      <NavBar title="CUBIK BANK - EXTRATO" />
      <BoxInformationExtrato information={informationExtrato} />
    </div>
  )
}


export default ExtratoPage;