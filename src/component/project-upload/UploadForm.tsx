import React, { useState, useRef, useEffect } from "react";
import { Stack } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import { Button } from "@chakra-ui/react";

import { useForm, FormProvider } from "react-hook-form";
import ProjectForm from "./ProjectForm";
import MembersForm from "./MemberForm";
import Preview from "./Preview";

import { addFilm } from "../../API/main";
import { addToIPFS } from "../../API/ipfs";

import { convertToB64 } from "../../helper";
import { useRouter } from "next/router";

import { useAppContext } from "../../context/AppContext";

interface teamMemberPicsProps {
  [key: number]: any;
}

import Loading from "../common/Loading";

const UploadForm = () => {
  const [formStep, setFormStep] = useState(() => 0);

  const router = useRouter();

  const [teamMemberPics, setTeamMemberPics] = useState<teamMemberPicsProps>({});

  const [selectedAddress]: any = useAppContext();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedAddress) {
      router.push("/projects");
    }
  }, []);

  const methods = useForm({
    mode: "all",
    defaultValues: {
      team: [{ name: "", role: "" }],
    },
  });

  const nextStep = () => {
    setFormStep((prevStep: number) => prevStep + 1);
  };

  const prevStep = () => {
    setFormStep((prevStep: number) => prevStep - 1);
  };

  const inputPassPhrase = () => {
    return prompt("Enter passphrase");
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    let teamB64: any = [];
    const passPhrase = inputPassPhrase();
    for (let i = 0; i < data.team.length; i++) {
      const result = await convertToB64(data.team[i].photo[0]);
      teamB64.push({ ...data.team[i], photo: result });
    }
    console.log("Form data: ", {
      ...data,
      team: teamB64,
      passPhrase,
      script: await addToIPFS(
        await convertToB64(data.script[0]),
        data.script[0].name
      ),
    });

    const dataToAdd = {
      ...data,
      team: teamB64,
      passPhrase,
      script: await addToIPFS(
        await convertToB64(data.script[0]),
        data.script[0].name
      ),
      ownerPublicAddress: selectedAddress,
    };

    console.log(dataToAdd);

    const resp: any = await addFilm(dataToAdd);
    setLoading(false);
    alert("Successfully added film");
    router.push("/projects");
  };

  if (loading) {
    return <Loading color="yellow" emptyColor="black" />;
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header />
        <Stack bg="brand.yellow" padding="20" pt="5">
          {formStep === 0 && <ProjectForm />}
          {formStep === 1 && (
            <MembersForm
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
