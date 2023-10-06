import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

const wrapperFn = (Component) => {
   return (
      <Provider store={store}>
         <Component />
      </Provider>
   )
}

describe('Header component', () => {
 it('it renders', () => {
    const wrapper = shallow(
      <Provider store={store}>
         <Header />
      </Provider>
    );
    console.log(wrapper.debug());
    expect(wrapper.exists()).to.equal(true);
 });
})