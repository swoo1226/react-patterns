import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles.js";
import { useCounterContext } from "../useCounterContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function Increment({ icon = "plus" }) {
  const { handleIncrement } = useCounterContext();
  library.add(faPlus);
  return (
    <StyledButton onClick={handleIncrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Increment };
