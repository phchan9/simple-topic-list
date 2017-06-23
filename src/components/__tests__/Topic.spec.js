import React from 'react';
import { shallow } from 'enzyme';
import Topic from '../Topic';

const setup = () => {
  const props = {
    title: 'This is the title',
    upVotes: 30,
    downVotes: 50,
    onUpVoteCallBack: jest.fn(),
    onDownVoteCallBack: jest.fn()
  };

  const wrapper = shallow(<Topic {...props  }/>);

  return {
    props,
    wrapper
  };
};

describe('Topic Component', () => {
  it('render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should properly fire `onUpVotecallback` or `onDownVoteCallBack` when click button'
     , () => {
    const { wrapper, props } = setup();
    const buttons = wrapper.find('.btn-default');
    const upVoteButtonWrapper = buttons.at(0);
    const downVoteButtonWrapper = buttons.at(1);

    upVoteButtonWrapper.simulate('click');
    expect(props.onUpVoteCallBack).toHaveBeenCalled();
    downVoteButtonWrapper.simulate('click');
    expect(props.onDownVoteCallBack).toHaveBeenCalled();

  });
});




// behavior called
