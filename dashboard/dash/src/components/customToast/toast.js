import { useToast } from "@chakra-ui/react";

function customToast({toast, title, message, status }) {
  return toast({
    title: title,
    description: message,
    status: status,
    duration: 3000,
    isClosable: true,
  });
}

export default customToast;
