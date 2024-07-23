import { type TextareaProps, Textarea as ChakraTextarea } from '@chakra-ui/react';

export function Textarea({ ...props }: TextareaProps) {
  return (
    <ChakraTextarea {...props} />
  );
}
