import React from "react";
import SignupFormContainer from "./signup_modal_container";
import LoginFormContainer from "./login_form_container";

const Modal = props => {
  const { modal, closeModal } = props;
  if (!modal) return null;

  let component;
  switch (modal) {
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "login":
      component = <LoginFormContainer />;
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
