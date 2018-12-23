import React from 'react';
import Chart from 'react-google-charts';

const VendaContainer = () => {
  return (
    <div>
      <h1>Vendas</h1>
      <Chart
        width={'1200px'}
        height={'500px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Livros', 'Vendas Janeiro', 'Vendas Fevereiro'],
          ['MEAN', 1128, 167],
          ['Arquitetura Java', 2133, 2236],
          ['ReactJS', 3133, 3201],
          ['TDD', 4220, 4221],
          ['SOA', 5210, 596],
          ['PrimeFaces', 6393, 6118],
          ['JSF2', 729, 7154],
          ['JPA', 8449, 8241],
        ]}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
};

export default VendaContainer;