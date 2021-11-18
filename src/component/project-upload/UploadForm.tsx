import React, { useState, useRef, useEffect } from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import Header from "./Header";
import { Button, ButtonGroup } from "@chakra-ui/react";

import {
  useForm,
  useFieldArray,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import ProjectForm from "./ProjectForm";
import MembersFormv2 from "./MemberFormv2";
import Preview from "./Preview";

interface teamMemberPicsProps {
  [key: number]: any;
}

const UploadForm = () => {
  const [formStep, setFormStep] = useState(() => 0);
  // const [teamDetails, setTeamDetails] = useState(() => [{ name: "", role : "", place: "", about: "", linkedIn: ""}]);
  const [teamMemberPics, setTeamMemberPics] = useState<teamMemberPicsProps>({});
  // const { register, unregister, handleSubmit, watch, formState: { errors, isValid }, setValue,  } = useForm({mode: "all"});
  const methods = useForm({
    mode: "all",
    defaultValues: {
      team: [{ name: "", role: "" }],
    },
  });
  // const {fields, } = useFieldArray()

  // useEffect(() => {
  //     register('input')
  //   });

  const renderButton = () => {};

  const nextStep = () => {
    setFormStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setFormStep((prevStep: number) => prevStep - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    let teamB64: any = [];
    for (let i = 0; i < data.team.length; i++) {
      let reader = new FileReader();
      let file = data.team[i].photo[0];
      console.log("Item photo: ", data.team[i].photo[0]);
      reader.onloadend = () => {
        teamB64.push({ ...data.team[i], photo: reader.result });
      };

      reader.readAsDataURL(file);
    }

    console.log("Form submit: ", { ...data, team: teamB64 });
  };

  const fileInputField = useRef(null);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header />
        <Stack bg="brand.yellow" padding="20" pt="5">
          {formStep === 0 && <ProjectForm />}
          {formStep === 1 && (
            <MembersFormv2
              teamMemberPics={teamMemberPics}
              setTeamMemberPics={setTeamMemberPics}
            />
          )}
          {formStep >= 2 && <Preview />}
          <Flex p="5" justifyContent="space-between" flexDirection="row" pt="5">
            <Button
              width="200px"
              colorScheme="teal"
              variant="outline"
              onClick={prevStep}
              visibility={formStep >= 1 ? "visible" : "hidden"}
            >
              Back
            </Button>

            <Button
              width="200px"
              colorScheme="teal"
              disabled={!methods.formState.isValid}
              variant="solid"
              onClick={nextStep}
            >
              Next
            </Button>

            <Button
              width="200px"
              type="submit"
              colorScheme="teal"
              disabled={!methods.formState.isValid}
              variant="solid"
              onClick={() => {}}
              visibility={formStep >= 1 ? "visible" : "hidden"}
            >
              Submit
            </Button>
          </Flex>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default UploadForm;
