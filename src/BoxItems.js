import React from 'react';
import Box from './Box.js';
import {maintenance} from './functions.js';

const BoxItems = () => {
  const namesItems =
    [{
      item: "EMPRESTIMO",
      img: "https://image.flaticon.com/icons/svg/32/32005.svg",
    },
    {
      item: "DEPOSITO",
      img: "https://cdn4.iconfinder.com/data/icons/finance-16/48/bank-512.png"
    },
    {
      item: "EXTRATO",
      img: "http://simpleicon.com/wp-content/uploads/bank-2.svg"
    }, {
      item: "MANUTENÇAO",
      img:"http://simpleicon.com/wp-content/uploads/bank.svg",
      function: maintenance
    }, {
      item: "MANUTENÇAO",
      img: "http://cdn.onlinewebfonts.com/svg/img_456573.png",
      function: maintenance
    },]

  return (
    <Box items={namesItems} />
  )
}

export default BoxItems;