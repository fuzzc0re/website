import React, { useState, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';

const transitionDuration = 50;
const defaultTransitionStyle = {
  transition: `opacity ${transitionDuration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
};

const TransitionedView = props => {
  const [entering, setEntering] = useState(false);
  useEffect(() => {
    setEntering(true);
  }, []);

  return (
    <Transition in={entering} timeout={transitionDuration}>
      {state => (
        <div
          style={{
            ...defaultTransitionStyle,
            ...transitionStyles[state],
            marginTop: props.marginTop,
          }}
        >
          {props.children}
        </div>
      )}
    </Transition>
  );
};

export default TransitionedView;
