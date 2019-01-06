import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Vendas from '../../components/venda/index';
import VendasContainer from '../../components/venda/venda-container';

describe('test Login component', () => {
  it('renders without crashing', () => {
    shallow(<Vendas />);
    const tree = renderer.create(<Vendas />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders three LoginContainer component', () => {
    const wrapper = shallow(<Vendas />);
    expect(wrapper.find(VendasContainer)).toExist();
  });

});