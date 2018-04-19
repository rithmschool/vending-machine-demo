import React from 'react'; // for JSX
import { shallow } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json'; // for snapshotting the component
import Message from '../Message'; // import the component itself

describe('<Message />', () => {
  let wrapper;

  it('renders', () => {
    wrapper = shallow(<Message>hello world</Message>);
  });

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has headings with proper text', () => {
    wrapper = shallow(
      <Message>
        <h1>I am nested</h1>
      </Message>
    );
    const h1 = wrapper.find('h1');
    expect(h1).toHaveLength(1);
    expect(h1.text()).toEqual('I am nested');
  });
});
