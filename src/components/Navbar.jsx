import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, Heading, HStack, Spacer, Text, useToast, VStack } from '@chakra-ui/react'

export default function Navbar() {
    const toast = useToast()

    const showToast = () => {
        toast({
            title: "Log Out",
            description: "You have successfully Log Out from your",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon></UnlockIcon>

        })
    }

  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
        

        <Spacer></Spacer>

        <HStack spacing="20px ">
        <Avatar src='./'>
            <AvatarBadge width="1.3em" bg="red">
                <Text fontSize="xs" color="white">1</Text>
            </AvatarBadge>
        </Avatar>
        <Text>admin001@binus.ac.id</Text>
        <Button colorScheme="blue" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
