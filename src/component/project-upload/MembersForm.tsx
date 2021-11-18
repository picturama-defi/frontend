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

  import { useForm } from "react-hook-form";
  import { CloseButton } from "@chakra-ui/react"

const MembersForm = ({register, setValue, errors, teamDetails, setTeamDetails, unregister}: any  ) => {

    // const [teamDetails, setTeamDetails] = useState<any>([]);
    // const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();
    const addTeamMember = () => {
        setTeamDetails((prevArr: any) => ([...prevArr, Date.now()]))
      
    }
    const removeTeamMember = (id: any, index: number) => {
        unregister(`name${index}`);
        unregister(`photo${index}`);
        unregister(`role${index}`);
        unregister(`linkedIn${index}`);
        unregister(`place${index}`);
        unregister(`about${index}`);
        setTeamDetails((prevArr: any) => (prevArr.filter((item: any) => item!==id)))
       
    }
    const checkAnyErrors = () => {
        return teamDetails.some((item: any, index: number) => {
            if(errors[`teamMemberName${index}`] || errors[`teamMemberRole${index}`])
                // errors[`teamMemberName${index}`] || errors[`teamMemberPhoto${index}`] || 
                // errors[`teamMemberRole${index}`] || errors[`teamMemberLinkedIn${index}`] ||
                // errors[`teamMemberPlace${index}`] || errors[`teamMemberAbout${index}`]
                return true
        })
       
    }
    return (
        <div>
            <FormControl id="team members">
                                    <FormLabel>Team members</FormLabel>
                                    <SimpleGrid columns={2} spacing={10}>
                                    {teamDetails.map((member: any, index: number) => {
                                         return (
                                              
                                                                <Box key={member} bg="brand.pink" size="35rem" flexDirection="column" justifyContent="space-between" padding="10">
                                                                    <Flex color="white" width="100%" justifyContent="space-between">
                                                                        <Text>Team member</Text>
                                                                        <CloseButton size="sm" onClick={() => removeTeamMember(member, index)}/> 
                                                                    </Flex>
                                
                                                                    <FormControl id={`teamMemberName${index}`}>
                                                                        <FormLabel>Team member Name</FormLabel>
                                                                        <Input   {...register(`name${index}`, { required: true })} placeholder={`Team Member ${index} name`} />
                                                                                                    
                                                                        {errors[`teamMemberName${index}`]?.type === 'required' && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    {/* <FormControl id={`teamMemberPhoto${index}`}>
                                                                        <FormLabel>Upload team member pic</FormLabel>
                                                                        <Input type="file"  {...register(`teamMemberPhoto${index}`, { required: true })} placeholder={`Team Member ${index} photo`} />
                                                                
                                                                                    {errors[`teamMemberPhoto${index}`] && <span>This field is required</span>}
                                                                        
                                                                    </FormControl>*/}
                                                                    <FormControl id={`teamMemberRole${index}`}>
                                                                        <FormLabel>What's their role ?</FormLabel>
                                                                        <Input   {...register(`teamMemberRole${index}`, { required: true })} placeholder={`Team Member ${index} role`} />
                                                                        {errors[`teamMemberRole${index}`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    {/* <FormControl id={`teamMemberLinkedIn${index}`}>
                                                                        <FormLabel>LinkedIn / Twitter</FormLabel>
                                                                        <InputGroup size="sm">
                                                                            <InputLeftAddon children="https://" />
                                                                            <Input  type="url" {...register(`teamMemberLinkedIn${index}`, { required: true })} placeholder={`Team Member ${index} LinkedIn`} />
                                                                        </InputGroup>
                                                                        {errors[`teamMemberLinkedIn${index}`] && <span>This field is required</span>}    
                                                                    </FormControl>
                                                                    <FormControl id={`teamMemberPlace${index}`}>
                                                                        <FormLabel>Place  ?</FormLabel>
                                                                        <Input   {...register(`teamMemberPlace${index}`, { required: true })} placeholder={`Team Member ${index} place`} />
                                                                        {errors[`teamMemberPhoto${index}`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    <FormControl id={`teamMemberAbout${index}`}>
                                                                        <FormLabel>What's their role ?</FormLabel>
                                                                        <Textarea {...register(`teamMemberAbout${index}`, { required: true })} placeholder={`Team Member ${index} about`}/>
                                                                        {errors[`teamMemberAbout${index}`] && <span>This field is required</span>}
                                                                    </FormControl> 
                         */}
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

export default MembersForm
