import React from 'react'; // for JSX
import { mount } from 'enzyme'; // how to mount the component
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import Soda from '../Soda'; // import the component itself

describe('<Sardines />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <Soda />
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
