import React from 'react'; // for JSX
import { mount } from 'enzyme'; // how to mount the component
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import App from '../App'; // import the component itself

describe('<App />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[{ key: 'testKey' }]}>
        <App />
      </MemoryRouter>
    );
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
