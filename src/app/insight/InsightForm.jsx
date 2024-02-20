"use client"
import { FormControl, FormLabel, Textarea, Input , Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, useDisclosure, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { BiAddToQueue, BiBox} from 'react-icons/bi';
import InsightFormContent from './InsightFormContent'
import { insightInsert } from './action'

export default function InsightForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <Box className="fixed bottom-5 right-5">
            <Button bg="teal.200" isround="true" variant='ghost' leftIcon={<BiAddToQueue />}  size="lg" maxWidth={"inherit"} onClick={onOpen}/>
        </Box>
  
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <form action={insightInsert}>
                <InsightFormContent onClose={onClose} />  
            </form>
        </Modal>
      </>
    )
  }