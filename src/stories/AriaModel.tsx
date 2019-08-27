import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Store, State } from "@sambego/storybook-state";
import AriaModal from "react-aria-modal";

const store = new Store({
  showModal: false
});

const toggleModal = () => {
  store.set({ showModal: !store.get("showModal") });
  console.log(store.get("showModal"));
  console.log("TOGGLE");
};

storiesOf("AriaModal", module)
  .add("Interactive with Button Closed by Default", () => (
    <>
      <State store={store}>
        {state => (
          <>
            {state.showModal && (
              <AriaModal
                includeDefaultStyles={true}
                titleText="demo one"
                onExit={toggleModal}
                initialFocus="#demo-one-deactivate"
                // getApplicationNode={this.getApplicationNode}
                underlayStyle={{ paddingTop: "2em" }}
              >
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
                      onClick={() => toggleModal()}
                    >
                      deactivate modal
                    </button>
                  </footer>
                </div>
              </AriaModal>
            )}
            <button onClick={() => toggleModal()}>show modal</button>
          </>
        )}
      </State>
    </>
  ))
  .add("Modal Only Open for Styling", () => (
    <AriaModal
      includeDefaultStyles={true}
      titleText="demo one"
      onExit={toggleModal}
      initialFocus="#demo-one-deactivate"
      // getApplicationNode={this.getApplicationNode}
      underlayStyle={{ paddingTop: "2em" }}
    >
      <div id="demo-one-modal" className="modal">
        <div className="modal-body">
          <p>
            Here is a modal <a href="#">with</a> <a href="#">some</a>{" "}
            <a href="#">focusable</a> parts.
          </p>
        </div>
        <footer className="modal-footer">
          <button id="demo-one-deactivate" onClick={() => toggleModal()}>
            deactivate modal
          </button>
        </footer>
      </div>
    </AriaModal>
  ));
