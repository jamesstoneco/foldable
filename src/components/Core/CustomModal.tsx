import * as React from "react";
import styled from "styled-components";

import AriaModal from "react-aria-modal";

interface ModalProps {
  titleText: string;
  onExit: any;
  children: JSX.Element;
}

const StyledModal = styled.div`
  background-color: #fff;
  outline: 0;
  min-width: 10rem;
  max-width: 20rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem rgba(#000, 0.25);

  h2 {
    background: #eee;
    padding: 1rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    position: relative;
  }
  & > div {
    padding: 1rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  font-size: 2rem;
  border: none;
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  padding: 0.25rem;
`;

const CustomModalSFC: React.SFC<ModalProps> = props => (
  <AriaModal
    titleText={props.titleText}
    onExit={props.onExit}
    includeDefaultStyles={true}
    underlayClickExits={true}
    verticallyCenter={true}
    focusDialog={true}
    {...props}
  >
    <StyledModal>
      <h2>
        {props.titleText}
        <CloseButton
          onClick={props.onExit}
          data-test-id="custom-modal-close-button"
        >
          &times;
        </CloseButton>
      </h2>
      <div>{props.children}</div>
    </StyledModal>
  </AriaModal>
);

export const CustomModal = styled(CustomModalSFC)``;

export default CustomModal;
