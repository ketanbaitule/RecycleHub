"use client"
import { FormControl, FormLabel, Textarea, Input , Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, useDisclosure, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { BiAddToQueue, BiBox} from 'react-icons/bi';

export default function InsightForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [type, setType] = useState("none")

    return (
      <>
        <Box className="fixed bottom-5 right-5">
            <Button bg="teal.200" isround="true" variant='ghost' leftIcon={<BiAddToQueue />}  size="lg" maxWidth={"inherit"} onClick={onOpen}/>
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <form>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <FormControl isRequired>
                        <FormLabel>Post</FormLabel>
                        <Textarea name="post" type='text' placeholder="Share your insights" required />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Add Media</FormLabel>
                        <Select onChange={(e)=> setType(e.target.value)} >
                            <option value={"none"}>None</option>
                            <option value={"image"} >Image</option>
                            <option value={"pdf"} >Pdf</option>
                        </Select>
                    </FormControl>

                    {type != "none" && (
                        <FormControl isRequired={type!="none"}>
                            <FormLabel>Upload File</FormLabel>
                            <Input name="image" type='file' />
                        </FormControl>
                    ) }
                    {type == "image" && (
                        <FormControl isRequired={type=="image"}>
                            <FormLabel>Alt Text</FormLabel>
                            <Input name="alt" type='text' placeholder='Tell Us about the file in short' />
                        </FormControl>
                    ) }

                    </ModalBody>        
                    <ModalFooter>
                    <Button type='submit' colorScheme='green' mr={3}>
                        Post
                    </Button>
                    <Button variant='ghost' colorScheme='green' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
      </>
    )
  }