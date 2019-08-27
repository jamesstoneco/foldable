import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Store, State } from "@sambego/storybook-state";
import { CustomModal } from "../components/Core/CustomModal";

const store = new Store({
  showModal: false
});

const openModal = () => {
  store.set({ showModal: true });
  console.log("openModal()");
};
const closeModal = () => {
  store.set({ showModal: false });
  console.log("closeModal()");
};

storiesOf("CustomModal", module)
  .add("Interactive with Button Closed by Default", () => (
    <>
      <State store={store}>
        {state => (
          <>
            {state.showModal && (
              <CustomModal titleText="demo one" onExit={() => closeModal()}>
                <div id="demo-one-modal" className="modal">
                  <div className="modal-body">
                    <p>
                      Here is a modal <a href="#">with</a> <a href="#">some</a>{" "}
                      <a href="#">focusable</a> parts.
                    </p>
                  </div>
                  <footer className="modal-footer">
                    <button
                      id="demo-one-deactivate"
                      onClick={() => closeModal()}
                    >
                      deactivate modal
                    </button>
                  </footer>
                </div>
              </CustomModal>
            )}
            <button onClick={() => openModal()}>show modal</button>
          </>
        )}
      </State>
    </>
  ))
  .add("Modal Only Open for Styling", () => (
    <CustomModal titleText="demo one" onExit={() => closeModal()}>
      <div id="demo-one-modal" className="modal">
        <div className="modal-body">
          <p>
            Here is a modal <a href="#">with</a> <a href="#">some</a>{" "}
            <a href="#">focusable</a> parts.
          </p>
        </div>
      </div>
    </CustomModal>
  ));
