import React from 'react'; // for JSX
import { mount } from 'enzyme'; // how to mount the component
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import Sardines from '../Sardines'; // import the component itself

describe('<Sardines />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <Sardines />
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
