import React, {useState, useRef, useEffect} from 'react';
import { Input, Stack, Textarea } from "@chakra-ui/react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import Header from "./Header";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { useForm, useFieldArray, FormProvider, useFormContext } from "react-hook-form";
import ProjectForm from './ProjectForm';
import MembersFormv2 from './MemberFormv2';

interface teamMemberPicsProps{
    [key : number] : any
}

const UploadForm = () => {
   const [formStep, setFormStep] = useState(() => 0);
    // const [teamDetails, setTeamDetails] = useState(() => [{ name: "", role : "", place: "", about: "", linkedIn: ""}]);
    const [teamMemberPics, setTeamMemberPics] = useState<teamMemberPicsProps>({});
    // const { register, unregister, handleSubmit, watch, formState: { errors, isValid }, setValue,  } = useForm({mode: "all"});
    const methods = useForm({mode: "all",  defaultValues: {
        team: [{ name: "", role: "" }]
      }});
    // const {fields, } = useFieldArray()

    // useEffect(() => {
    //     register('input')
    //   });

      const renderButton = () => {

    }
    
    const nextStep = () => {
        setFormStep((prevStep: number) => prevStep + 1)
    }

    const prevStep = () => {
        setFormStep((prevStep: number) => prevStep - 1)
    }

    const onSubmit = (data: any) => console.log(data);
    
  const fileInputField = useRef(null);
    return (
        <Flex borderTop="5px solid black" borderBottom="5px solid black">
             <Box  p="5" flex="1">
             <FormProvider {...methods} > 
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Header />
                    <Stack bg="brand.yellow" spacing={3} padding="10">
                        {formStep===0 && <ProjectForm />}
                        {formStep===1 && <MembersFormv2 teamMemberPics={teamMemberPics} setTeamMemberPics={setTeamMemberPics}/>}

                            
                            <Stack direction="row" spacing={4} align="center">
                                <Button colorScheme="teal" variant="outline" onClick={prevStep} display={formStep>0?"block":"none"}>
                                    Back
                                </Button>
                                <Button colorScheme="teal" disabled={!methods.formState.isValid} variant="solid" display={formStep<2?"block":"none"} onClick={nextStep}>
                                    Next
                                </Button>
                                <Button type="submit" colorScheme="teal" disabled={!methods.formState.isValid} variant="solid" display={formStep===2?"block":"none"} onClick={() => {}}>
                                    Submit
                                </Button>
                                
                            </Stack>
                    </Stack>
                </form>
                </FormProvider>
                <pre>
                    {JSON.stringify(methods.watch(), null, 2)}
                </pre>
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
