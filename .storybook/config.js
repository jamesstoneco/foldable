import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/AriaModel.tsx");
  require("../src/stories/CustomModal.tsx");
}

configure(loadStories, module);
