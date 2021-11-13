import React, {useState, useRef, useEffect} from 'react';
import { Input, Stack } from "@chakra-ui/react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const { CKEditor } = require('@ckeditor/ckeditor5-react');
import Header from "./Header";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const UploadForm = () => {
    const [files, setFiles, ] = useState({});
 
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        register('input')
      });

    const onSubmit = (data: any) => console.log(data);
  const fileInputField = useRef(null);
    return (
        <Flex borderTop="5px solid black" borderBottom="5px solid black">
             <Box p="5" flex="1">
             <Header />
                <form onSubmit={handleSubmit(onSubmit)}>

                <Stack spacing={3}>
                    <FormControl id="title">
                        <FormLabel>Project Title</FormLabel>
                        <Input   {...register("projectTitle", { required: true })} placeholder="Project Title" />
                    </FormControl>
                    <FormControl id="title">
                        <FormLabel>Project Title</FormLabel>
                            <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(event: any, editor: any) => {
                                        const data = editor.getData();
                                        setValue('input', data)
                                    }}
                                    />
                    </FormControl>
                    <FormControl id="image">
                        <FormLabel>Thumbnail</FormLabel>
                        <Input type="file"  {...register("projectThumbnail", { required: true })} placeholder="Project Thumbnail" />
                    </FormControl>
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" />
                        </Stack>
                </form>
                {/* <form>
                    <label>{"label"}</label>
                    <p>Drag and drop your files anywhere or</p>
                    <input type="file" ref={fileInputField} />
                </form> */}
        </Box>
        </Flex>
    )
}

export default UploadForm
