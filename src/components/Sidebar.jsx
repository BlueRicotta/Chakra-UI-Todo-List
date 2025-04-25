import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem ,Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast, VStack  } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
        <Heading as="h1">BTask</Heading>
        <Spacer></Spacer>
        <ListItem>       
            <NavLink to="">
            <ListIcon as={CalendarIcon} color="white"></ListIcon>
            Dashboard
            </NavLink>
        </ListItem>

        <ListItem>       
            <NavLink to="create">
            <ListIcon as={EditIcon} color="white"></ListIcon>
            New Task
            </NavLink>
        </ListItem>

        <ListItem>       
            <NavLink to="profile">
            <ListIcon as={AtSignIcon} color="white"></ListIcon>
            Profile
            </NavLink>
        </ListItem>
    </List>
  )
}
