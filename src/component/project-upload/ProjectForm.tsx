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
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { CKEditor } = require("@ckeditor/ckeditor5-react");
import Header from "./Header";
import { useFormContext } from "react-hook-form";

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

const FieldRequired = () => (
  <Text color="brand.pink">This field is required</Text>
);

const ProjectForm = () => {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
    getValues,
  } = useFormContext();
  return (
    <div>
      <Stack bg="brand.yellow" spacing={3}>
        <FormControl id="title">
          <FormLabel>Project Title</FormLabel>
          <Input
            variant="brand"
            {...register("title", { required: true })}
            placeholder="Project Title"
          />
          {errors.projectTitle?.type === "required" && <FieldRequired />}
        </FormControl>
        <FormControl pt="5" id="description">
          <FormLabel>Describe more about your project</FormLabel>
          <CKEditor
            {...register("description", { required: true })}
            editor={ClassicEditor}
            data={getValues("description")}
            onChange={(event: any, editor: any) => {
              const data = editor.getData();
              setValue("description", data);
            }}
            onBlur={(event: any, editor: any) => {
              const data = editor.getData();
              setValue("description", data);
            }}
          />
          {errors.description && <FieldRequired />}
        </FormControl>
        <FormControl pt="5" id="script">
          <FormLabel>Upload Script</FormLabel>
          <Input
            variant="brand"
            padding="1"
            type="file"
            {...register("script", { required: true })}
            placeholder="Project Script"
          />
          {errors.script && <FieldRequired />}
        </FormControl>
        <FormControl pt="5" id="Demo reel">
          <FormLabel>Link to project demo reel</FormLabel>
          <InputGroup>
            <InputLeftAddon children="https://" />
            <Input
              variant="brand"
              type="url"
              {...register("demoReelLink", { required: true })}
              placeholder="Demo reel link"
            />
          </InputGroup>
          {errors.demoReelLink && <FieldRequired />}
        </FormControl>
        <FormControl pt="5" id="Target amount">
          <FormLabel>Enter target project amout</FormLabel>
          <InputGroup>
            <Input
              variant="brand"
              type="number"
              {...register("targetFund", { required: true })}
              placeholder="Target Fund (ETH)"
            />
            <InputRightAddon children="ETH" />
          </InputGroup>
          {errors.targetFund && (
            <Text color="brand.pink">This field is required</Text>
          )}
        </FormControl>
      </Stack>
    </div>
  );
};

export default ProjectForm;
