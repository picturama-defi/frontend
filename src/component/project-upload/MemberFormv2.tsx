/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import React, { useState, useRef, useEffect } from "react";
import {
  Input,
  Stack,
  Textarea,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { Box, Flex, Heading, Text, Center, Square } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";

import Header from "./Header";

import { Button, ButtonGroup } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { CloseButton } from "@chakra-ui/react";

import {
  useFieldArray,
  useFormContext,
  useWatch,
  Controller,
} from "react-hook-form";

const MembersFormv2 = ({ teamMemberPics, setTeamMemberPics }: any) => {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
    control,
  } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "team", // unique name for your Field Array
    }
  );

  const addTeamMember = () => {
    console.log("Adding team member");
    append({ name: "", role: "", about: ", place: ", linkedIn: "", photo: "" });
  };

  const removeTeamMember = (index: any) => {
    if (fields.length <= 1) {
      alert("You need to add atleast a team member");
      return;
    } else {
      const { [index]: tmp, ...rest } = teamMemberPics;
      setTeamMemberPics(rest);
      remove(index);
    }
  };

  const checkAnyErrors = () => {
    return fields.some((item: any, index: number) => {
      if (Object.keys(errors).length > 0) return true;
    });
  };
  let reader = new FileReader();

  const handleImageChange = (e: any, picIndex: number) => {
    e.preventDefault();
    let file = e.target.files[0];
    reader.onloadend = () => {
      var image: any = new Image();
      image.src = reader.result;

      let extension = file.type;
      if (!(extension == "image/jpg" || extension == "image/jpeg")) {
        alert("Only JPG/JPEG format is allowed");
        setValue(`team[${picIndex}].photo`, "");
        return false;
      }

      image.onload = () => {
        // if(image.width>1720 || image.width<240 || image.height>1940 || image.height<320) {
        //   alert('Maximum size allowed is 480*640 pixels.\nMinimum size allowed is 240*320 pixels')
        //   setValue(`team[${picIndex}].photo`, '');
        //   return false;
        // }
        // if(file.size>151*1024 || file.size<2*1024) {
        //   alert('Maximum file size allowed is 150kB\nMinimum file size allowed is 2KB')
        //   setValue(`team[${picIndex}].photo`, '');
        //   return false;
        // }
        // setValue(`team[${picIndex}].photo`, JSON.stringify(reader.result))
        setTeamMemberPics((prevPics: any) => ({
          ...prevPics,
          [picIndex]: image.src,
        }));
      };
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <FormControl id="team members">
        <Box textAlign="center">
          <Heading fontSize="5xl">Add team members</Heading>
        </Box>
        <SimpleGrid columns={2}>
          {fields.map((field: any, index: any) => {
            return (
              <Box
                key={field.id}
                bg="brand.pink"
                size="35rem"
                flexDirection="column"
                justifyContent="space-between"
                p="5"
                m="5"
              >
                <Flex color="white" width="100%" justifyContent="space-between">
                  <Text>Team member</Text>
                  <CloseButton
                    size="sm"
                    onClick={() => {
                      removeTeamMember(index);
                    }}
                  />
                </Flex>

                <FormControl id={`team[${index}].name`}>
                  <FormLabel>Team member Name</FormLabel>
                  <Input
                    variant="brand"
                    {...register(`team[${index}].name`, { required: true })}
                    placeholder={`Team Member name`}
                  />

                  {errors[`team[${index}].name`]?.type === "required" && (
                    <span>This field is required</span>
                  )}
                </FormControl>

                {teamMemberPics[index] && (
                  <img src={teamMemberPics[index]} alt={`Team member image`} />
                )}
                {console.log("Team member array is: ", teamMemberPics)}

                <FormControl id={`team[${index}].photo`}>
                  <FormLabel>Upload team member Picture</FormLabel>
                  {/* <Controller
                                                                                    control={control}
                                                                                    name="test"
                                                                                    render={({
                                                                                        field: { onChange, onBlur, value, name, ref },
                                                                                        fieldState: { invalid, isTouched, isDirty, error },
                                                                                        formState,
                                                                                    }) => (
                                                                                        <Input 
                                                                                        type="file" 
                                                                                        value={teamMemberPics[index]}
                                                                                        placeholder={`Team Member ${index} photo`}
                                                                                         onChange={(e: any) => (onChange(handleImageChange(e, index)))}  />
                                                                                         
                                                                                    )}
                                                                            /> */}
                  <Input
                    type="file"
                    {...register(`team[${index}].photo`, { required: true })}
                    placeholder={`Team Member photo`}
                    onChange={(e: any) => handleImageChange(e, index)}
                  />

                  {errors[`team[${index}].photo`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
                <FormControl id={`team[${index}].role`}>
                  <FormLabel>What's their role in the project?</FormLabel>
                  <Input
                    {...register(`team[${index}].role`, { required: true })}
                    placeholder={`Team Member role`}
                  />
                  {errors[`team[${index}].name`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
                <FormControl id={`team[${index}].linkedIn`}>
                  <FormLabel>LinkedIn / Twitter handle</FormLabel>
                  <InputGroup size="sm">
                    <InputLeftAddon children="https://" />
                    <Input
                      type="url"
                      {...register(`team[${index}].linkedIn`, {
                        required: true,
                      })}
                      placeholder={`Team Member LinkedIn`}
                    />
                  </InputGroup>
                  {errors[`team[${index}].linkedIn`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
                <FormControl id={`team[${index}].place`}>
                  <FormLabel>Where are they from</FormLabel>
                  <Input
                    {...register(`team[${index}].place`, { required: true })}
                    placeholder={`Team Member place`}
                  />
                  {errors[`team[${index}].place`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
                <FormControl id={`team[${index}].about`}>
                  <FormLabel>Tell us more about them</FormLabel>
                  <Textarea
                    {...register(`team[${index}].about`, { required: true })}
                    placeholder={`Team Member about`}
                  />
                  {errors[`team[${index}].about`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
              </Box>
            );
          })}
        </SimpleGrid>
        <Box textAlign="center">
          <Button
            m="5"
            mb="0"
            width="200px"
            colorScheme="teal"
            variant="outline"
            onClick={() =>
              checkAnyErrors()
                ? alert("Finish data of other team members")
                : addTeamMember()
            }
          >
            Add Team member
          </Button>
        </Box>
      </FormControl>
    </div>
  );
};

export default MembersFormv2;
