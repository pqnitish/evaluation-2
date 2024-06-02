import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, Flex } from "@chakra-ui/react";
const Links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/product/details",
    label: "PODUCTDETAILS",
  },
];

export default function Navbar() {
  return (
    <Flex
      align="center"
      justify="space-around"
      background="gray.200"
      padding={4}
    >
      {Links?.map((link) => (
        <ChakraLink
          as={ReactRouterLink}
          key={link.to}
          to={link.to}
          color="gray.900"
        >
          {link.label}
        </ChakraLink>
      ))}
    </Flex>
  );
}
