import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal, openModal } from "../../actions/modal_actions";

const msp = ({ ui }) => ({
  modal: ui.modal
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  msp,
  mdp
)(Modal);
