import React from "react";
import SignupModalContainer from "./signup_modal_container";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";

const Modal = props => {
  const { modal, closeModal } = props;
  if (!modal) return null;

  let component;
  switch (modal) {
    case "signup":
      component = <SignupModalContainer />;
      break;
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup-form":
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div className="modal-animation">{component}</div>
      </div>
    </div>
  );
};

export default Modal;
