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

  interface teamMemberPicsProps{
      [key : number] : any
  }
const MembersFormv2 = ({teamMemberPics, setTeamMemberPics}: any) => {

    const { register, unregister, handleSubmit, watch, formState: { errors, isValid }, setValue, control  } = useFormContext();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "team", // unique name for your Field Array
      });
  
    //   const [teamMemberPics, setTeamMemberPics] = useState<teamMemberPicsProps>({});

    const addTeamMember = () => {
        console.log("Adding team member")
       append({ name: '', role: '', about: ', place: ', linkedIn: '', photo: '' })
      
    }
  
    const removeTeamMember = (index: any) => {
        if(fields.length<=1){
            alert("You need to add atleast a team member");
            return 
        }
        else{
            const { [index]: tmp, ...rest} = teamMemberPics;
            setTeamMemberPics(rest)
            remove(index)}
    }
    const checkAnyErrors = () => {
        return fields.some((item: any, index: number) => {
            if(Object.keys(errors).length>0)
                
                return true
        })
       
    }
    let reader = new FileReader();

    const handleImageChange = (e: any, picIndex: number) =>  {
        e.preventDefault();
        let file = e.target.files[0];
        reader.onloadend = () => {
          var image: any = new Image();
           image.src = reader.result
           setTeamMemberPics((prevPics: any) => ({...prevPics,[picIndex]:  image.src}))
        //   console.log(reader.result);
          let extension = file.type;
          if (!(extension == 'image/jpg' || extension == 'image/jpeg')){
            alert('Only JPG/JPEG format is allowed');
            return;
          }
        
        //   image.onload = () => {
        //     if(image.width>1480 || image.width<1240 || image.height>2640 || image.height<2320) {
        //       alert('Maximum size allowed is 480*640 pixels.\nMinimum size allowed is 240*320 pixels')
         
        //       return
        //     }
        //     if(file.size>150*1024 || file.size<2*1024) {
        //       alert('Maximum file size allowed is 150kB\nMinimum file size allowed is 2KB')
      
        //       return
        //     }
        // }
    }
        //     that.setState({
        //       file: file,
        //       imagePreviewUrl: reader.result
        //     },()=>{
        //       that.props.changeImage(that.state.imagePreviewUrl, that.state.file)
        //     });
        //   }
        // }
         reader.readAsDataURL(file);
      }
    return (
        <div>
            <FormControl id="team members">
                                    <FormLabel>Team members</FormLabel>
                                    <SimpleGrid columns={2} spacing={10}>
                                    {fields.map((field: any, index: any) => {
                                         return (
                                              
                                                                <Box key={field.id} bg="brand.pink" size="35rem" flexDirection="column" justifyContent="space-between" padding="10">
                                                                    <Flex color="white" width="100%" justifyContent="space-between">
                                                                        <Text>Team member</Text>
                                                                        <CloseButton size="sm" onClick={() => {removeTeamMember(index)}}/> 
                                                                    </Flex>
                                
                                                                    <FormControl id={`team[${index}].name`}>
                                                                        <FormLabel>Team member Name</FormLabel>
                                                                        <Input   {...register(`team[${index}].name`, { required: true })} placeholder={`Team Member ${index} name`} />
                                                                                                    
                                                                        {errors[`team[${index}].name`]?.type === 'required' && <span>This field is required</span>}
                                                                    </FormControl>
                                                                   
                                                                   {teamMemberPics[index] && <img src={teamMemberPics[index]} alt={`Team member ${index} image`} />}
                                                                    {console.log("Team member array is: ", teamMemberPics)}
                                                                    <FormControl id={`team[${index}].photo`}>
                                                                        <FormLabel>Upload team member Picture</FormLabel>
                                                                        <Input type="file" {...register(`team[${index}].photo`, { required: true })} placeholder={`Team Member ${index} photo`} onChange={(e: any) => (handleImageChange(e, index))}  />
                                                                
                                                                                    {errors[`team[${index}].photo`] && <span>This field is required</span>}
                                                                        
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].role`}>
                                                                        <FormLabel>What's their role in the project?</FormLabel>
                                                                        <Input   {...register(`team[${index}].role`, { required: true })} placeholder={`Team Member ${index} role`} />
                                                                        {errors[`team[${index}].name`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].linkedIn`}>
                                                                        <FormLabel>LinkedIn / Twitter handle</FormLabel>
                                                                        <InputGroup size="sm">
                                                                            <InputLeftAddon children="https://" />
                                                                            <Input  type="url" {...register(`team[${index}].linkedIn`, { required: true })} placeholder={`Team Member ${index} LinkedIn`} />
                                                                        </InputGroup>
                                                                        {errors[`team[${index}].linkedIn`] && <span>This field is required</span>}    
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].place`}>
                                                                        <FormLabel>Where are they from</FormLabel>
                                                                        <Input   {...register(`team[${index}].place`, { required: true })} placeholder={`Team Member ${index} place`} />
                                                                        {errors[`team[${index}].place`] && <span>This field is required</span>}
                                                                    </FormControl>
                                                                    <FormControl id={`team[${index}].about`}>
                                                                        <FormLabel>Tell us more about them</FormLabel>
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
