import React, {useState, useRef, useEffect} from 'react';
import { Input, Stack, Textarea, InputGroup,InputLeftAddon ,InputRightAddon } from "@chakra-ui/react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const { CKEditor } = require('@ckeditor/ckeditor5-react');
import Header from "./Header";
import { useFormContext } from "react-hook-form";

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



const ProjectForm = () => {
    const { register, unregister, handleSubmit, watch, formState: { errors, isValid }, setValue,  } = useFormContext();
    return (
        <div>
            
             <Stack bg="brand.yellow" spacing={3} padding="10">
                    <FormControl id="title">
                        <FormLabel>Project Title</FormLabel>
                        <Input  {...register("projectTitle", { required: true })} placeholder="Project Title" />
                        {errors.projectTitle?.type === 'required' && <span>This field is required</span>}
                    </FormControl>
                    <FormControl id="description">
                        <FormLabel>Describe more about your project</FormLabel>
                            <CKEditor
                                   
                                    {...register("projectDescription", { required: true })}
                                    editor={ClassicEditor}
                                    onChange={(event: any, editor: any) => {
                                        const data = editor.getData();
                                        setValue('projectDescription', data)
                                    }}
                                    onBlur={(event: any, editor: any) => {
                                        const data = editor.getData();
                                        setValue('projectDescription', data)
                                        }
                                    }
                                    />
                                     {errors.projectDescription && <span>This field is required</span>}
                           
                    </FormControl>
                    <FormControl id="script">
                        <FormLabel>Upload Script</FormLabel>
                        <Input type="file"  {...register("projectScript", { required: true })} placeholder="Project Script" />
                        {errors.projectScript && <span>This field is required</span>}
                    </FormControl>
                    <FormControl id="Demo reel">
                        <FormLabel>Link to project demo reel</FormLabel>
                        <InputGroup size="sm">
                            <InputLeftAddon children="https://" />
                            <Input type="url" {...register("projectDemoReel", { required: true })} placeholder="Demo reel link" />
                        </InputGroup>
                        {errors.projectDemoReel && <span>This field is required</span>}    
                    </FormControl>
                    <FormControl id="Target amount">
                        <FormLabel>Enter target project amout</FormLabel>
                        <InputGroup size="sm">
                            <Input type="number" {...register("projectTargetFund", { required: true })} placeholder="Target Fund (MATIC)" />
                            <InputRightAddon children="MATIC" />
                        </InputGroup>
                        {errors.projectTargetFund && <span>This field is required</span>}    
                    </FormControl>
                </Stack>
        </div>
    )
}

export default ProjectForm
