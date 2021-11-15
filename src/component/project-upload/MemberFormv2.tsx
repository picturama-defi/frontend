import React, {useState, useRef, useEffect} from 'react';
import { Input, Stack, Textarea, InputGroup,InputLeftAddon ,InputRightAddon } from "@chakra-ui/react";
import { Box, Flex, HStack, Text, Center, Square } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react"

import Header from "./Header";

import { Button, ButtonGroup } from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
  
  import { CloseButton } from "@chakra-ui/react"

  import { useFieldArray, useFormContext, useWatch } from "react-hook-form";

const MembersFormv2 = ( ) => {
    const { register, unregister, handleSubmit, watch, formState: { errors, isValid }, setValue, control  } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "team", // unique name for your Field Array
        // keyName: "id", default to "id", you can change the key name
      });
    // const [teamDetails, setTeamDetails] = useState<any>([]);
    // const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const addTeamMember = () => {
        console.log("Adding team member")
       append({ name: '', role: '', about: ', place: ', linkedIn: '', photo: '' })
      
    }
  
    const checkAnyErrors = () => {
        return fields.some((item: any, index: number) => {
            if(Object.keys(errors).length>0)
                
                return true
        })
       
    }
    return (
        <div>
            <FormControl id="team members">
                                    <FormLabel>Team members</FormLabel>
                                    <SimpleGrid columns={2} spacing={10}>
                                    {fields.map((field: any, index: number) => {
                                         return (
                                              
                                                                <Box key={field.id} bg="brand.pink" size="35rem" flexDirection="column" justifyContent="space-between" padding="10">
                                                                    <Flex color="white" width="100%" justifyContent="space-between">
                                                                        <Text>Team member</Text>
                                                                        <CloseButton size="sm" onClick={() => {remove(index)}}/> 
                                                                    </Flex>
                                
                                                                    <FormControl id={`team[${index}].name`}>
                                                                        <FormLabel>Team member Name</FormLabel>
                                                                        <Input   {...register(`team[${index}].name`, { required: true })} placeholder={`Team Member ${index} name`} />
                                                                                                    
                                                                        {errors[`team[${index}].name`]?.type === 'required' && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].photo`}>
                                                                        <FormLabel>Upload team member pic</FormLabel>
                                                                        <Input type="file"  {...register(`team[${index}].photo`, { required: true })} placeholder={`Team Member ${index} photo`} />
                                                                
                                                                                    {errors[`team[${index}].photo`] && <span>This field is required</span>}
                                                                        
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].role`}>
                                                                        <FormLabel>What's their role ?</FormLabel>
                                                                        <Input   {...register(`team[${index}].role`, { required: true })} placeholder={`Team Member ${index} role`} />
                                                                        {errors[`team[${index}].name`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].linkedIn`}>
                                                                        <FormLabel>LinkedIn / Twitter</FormLabel>
                                                                        <InputGroup size="sm">
                                                                            <InputLeftAddon children="https://" />
                                                                            <Input  type="url" {...register(`team[${index}].linkedIn`, { required: true })} placeholder={`Team Member ${index} LinkedIn`} />
                                                                        </InputGroup>
                                                                        {errors[`team[${index}].linkedIn`] && <span>This field is required</span>}    
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].place`}>
                                                                        <FormLabel>Place  ?</FormLabel>
                                                                        <Input   {...register(`team[${index}].place`, { required: true })} placeholder={`Team Member ${index} place`} />
                                                                        {errors[`team[${index}].place`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].about`}>
                                                                        <FormLabel>What's their role ?</FormLabel>
                                                                        <Textarea {...register(`team[${index}].about`, { required: true })} placeholder={`Team Member ${index} about`}/>
                                                                        {errors[`team[${index}].about`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                </Box>
                                                              
                                               
                                            
                                            )
                                        
                                    })}
                                   </SimpleGrid>
                                     <Button colorScheme="teal" variant="outline" onClick={() => (checkAnyErrors()?alert("Finish data of other team members"):addTeamMember())}>
                                                          Add Team member
                                    </Button>
                                    <Button colorScheme="teal" variant="outline" onClick={() => {console.log(checkAnyErrors(), errors )}}>
                                                          Check
                                    </Button>
                    </FormControl>
        </div>
    )
}

export default MembersFormv2
