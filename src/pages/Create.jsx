import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea, Box } from '@chakra-ui/react'
import React from 'react'
import { Form, redirect } from "react-router-dom"

export default function Create() {
  return (
      <Box maxW="480px" marginTop="20px">
        <Form method="post" action="/create">
            <FormControl isRequired mb="40px">
                <FormLabel>Task Name:</FormLabel>
                  <Input type= "text" name="title"></Input>
                  <FormHelperText>Enter a descriptive Task Name.</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Task Description</FormLabel>
              <Textarea placeholder="Enter a detailed description for the Task" name="description"></Textarea>
            </FormControl>

            <FormControl display="flex" alignItems="center" mb="40px" marginTop="20px">
              <Checkbox name="isPriority" size="lg" colorScheme="purple" />
              <FormLabel mb="0" ml="10px">Make this Priority</FormLabel>
            </FormControl>

            <Button type="submit">Submit</Button>
        </Form>
      </Box>
  )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}
