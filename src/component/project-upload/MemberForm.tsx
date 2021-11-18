/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */

import { Input, Textarea, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Box, Flex, Heading, Center, Button } from "@chakra-ui/react";

import { SimpleGrid } from "@chakra-ui/react";

import { FormControl, FormLabel } from "@chakra-ui/react";

import { CloseButton } from "@chakra-ui/react";

import { useFieldArray, useFormContext } from "react-hook-form";

const MembersForm = ({ teamMemberPics, setTeamMemberPics }: any) => {
  const {
    register,
    formState: { errors },
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
    append({ name: "", role: "", about: "", linkedIn: "", photo: "" });
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
                <Flex color="white" width="100%" justifyContent="flex-end">
                  <Box>
                    <CloseButton
                      color="black"
                      position="relative"
                      right="right"
                      onClick={() => {
                        removeTeamMember(index);
                      }}
                    />
                  </Box>
                </Flex>

                <FormControl id={`team[${index}].name`}>
                  <FormLabel>Team member Name</FormLabel>
                  <Input
                    variant="pinkbg"
                    {...register(`team[${index}].name`, { required: true })}
                    placeholder={`Team Member name`}
                  />

                  {errors[`team[${index}].name`]?.type === "required" && (
                    <span>This field is required</span>
                  )}
                </FormControl>

                {teamMemberPics[index] && (
                  <Box mt="5" width="100%">
                    <Center>
                      <img
                        src={teamMemberPics[index]}
                        alt={`Team member image`}
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100%",
                        }}
                      />
                    </Center>
                  </Box>
                )}
                {console.log("Team member array is: ", teamMemberPics)}

                <FormControl id={`team[${index}].photo`}>
                  <FormLabel mt="5">Upload team member Picture</FormLabel>
                  <Input
                    variant="pinkbg"
                    p="1"
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
                  <FormLabel mt="5">
                    What's their role in the project?
                  </FormLabel>
                  <Input
                    variant="pinkbg"
                    {...register(`team[${index}].role`, { required: true })}
                    placeholder={`Team Member role`}
                  />
                  {errors[`team[${index}].name`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
                <FormControl id={`team[${index}].linkedIn`}>
                  <FormLabel mt="5">LinkedIn / Twitter handle</FormLabel>
                  <InputGroup>
                    <InputLeftAddon children="https://" />
                    <Input
                      variant="pinkbg"
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
                  <FormLabel mt="5">Where are they from</FormLabel>
                  <Input
                    variant="pinkbg"
                    {...register(`team[${index}].place`, { required: true })}
                    placeholder={`Team Member place`}
                  />
                  {errors[`team[${index}].place`] && (
                    <span>This field is required</span>
                  )}
                </FormControl>
                <FormControl id={`team[${index}].about`}>
                  <FormLabel mt="5">Tell us more about them</FormLabel>
                  <Textarea
                    variant="pinkbg"
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

export default MembersForm;
