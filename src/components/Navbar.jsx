import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast } from '@chakra-ui/react'

export default function Navbar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: "Logged out",
            description: "Successfully Logged Out",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon></UnlockIcon>

        })
    }

  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
        <Heading as="h1">Dojo Task</Heading>
        <Spacer></Spacer>

        <HStack spacing="20px ">
        <Avatar src='./'>
            <AvatarBadge width="1.3em" bg="red">
                <Text fontSize="xs" color="white">3</Text>
            </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
