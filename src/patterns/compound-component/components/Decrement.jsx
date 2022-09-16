import React from "react";
import { StyledButton } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
function Decrement({ icon = "minus" }) {
  const { handleDecrement } = useCounterContext();
  library.add(faMinus);
  return (
    <StyledButton onClick={handleDecrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Decrement };
