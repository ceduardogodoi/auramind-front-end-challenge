import { Select } from "@chakra-ui/react";

export function HeaderModelSelect() {
  return (
    <Select name="models" id="models-select">
      <option value="claude">Claude 3.5 Sonnet</option>
    </Select>
  )
}
