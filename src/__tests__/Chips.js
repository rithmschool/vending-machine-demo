import React from 'react'; // for JSX
import { mount } from 'enzyme'; // how to mount the component
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import Chips from '../Chips'; // import the component itself

describe('<Chips />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <Chips />
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('responds to click', () => {
    const nomButton = wrapper.find('#nomnom');
    nomButton.simulate('click');
    expect(wrapper.find('.bag')).toHaveLength(1);
    nomButton.simulate('click');
    expect(wrapper.find('.bag')).toHaveLength(2);
  });
});
