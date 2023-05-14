import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Transitions = ({ children, location }) => {
  return (
    <SwitchTransition className="switch-group">
      <CSSTransition 
        key={location.key} 
        timeout={{ enter: 400, exit: 400 }} 
        classNames="fade">
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Transitions;