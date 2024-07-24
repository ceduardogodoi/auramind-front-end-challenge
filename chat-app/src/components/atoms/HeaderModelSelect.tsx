"use client";

import { useId } from "react";
import { Select } from "@chakra-ui/react";

export function HeaderModelSelect() {
  const selectId = useId();

  return (
    <Select name="models" id={`models-select${selectId}`}>
      <option value="claude">Claude 3.5 Sonnet</option>
    </Select>
  );
}
