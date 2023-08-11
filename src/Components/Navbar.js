import { Button, HStack, Image, Center, VStack } from "@chakra-ui/react";
import { useDisclosure, Text } from "@chakra-ui/react";
import {
  faBars,
  faChalkboard,
  faCircleCheck,
  faHome,
  faMedal,
  faPeopleGroup,
  faPhotoFilm,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image1 from "../Images/snooker-removebg-preview.png";
import Image2 from "../Images/stick.png";
import { useMediaQuery } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import $ from "jquery";
import 'jquery-ui-dist/jquery-ui';
import { useEffect } from "react";


export default function Navbar() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const mov = useNavigate();
  const shift = () => {
    mov("/membership");
  };
  const shiftHome = () => {
    mov("/");
  };
  const shiftReservation = () => {
    mov("/reservation");
  };
  const shifttournament = () => {
    mov("/tournaments");
  };
  const shifttoCommunity = () => {
    mov("/community");
  };
  const shiftCoaching = () => {
    mov("/coaching");
  };
  const shiftGallery = () => {
    mov("/gallery");
  };
  return (

  <>
  <Text className="text" fontSize={{ base: 20, lg: 35 }} color={'white'} align={'center'}>  SNOOKER </Text>





{/* 
  <div class="text-effect">
  <a href="./Navbar.css"></a>
  <h1  class="neon" data-text="SNOOKER" contenteditable>SNOOKER</h1>
  <div class="gradient"></div>
  <div class="spotlight"></div>
  
</div> */}


    <div justifyContent={{ lg: "space-between" }}>
      
      <HStack justifyContent={"center"}>
        <Button
          colorScheme="green"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          onClick={shiftHome}
        >
          <FontAwesomeIcon icon={faHome} />
        </Button>
        <Button
          colorScheme="blackAlpha"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          onClick={shift}
          leftIcon={<FontAwesomeIcon icon={faUsers} />}
        >
          <Text fontSize={{ base: 10, lg: 15 }}> Membership </Text>
        </Button>
        <Button
          colorScheme="blackAlpha"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          leftIcon={<FontAwesomeIcon icon={faMedal} />}
        >
          <Text fontSize={{ base: 10, lg: 15 }} onClick={shifttournament}>
            {" "}
            Tournaments{" "}
          </Text>
        </Button>

        <Button
          colorScheme="blackAlpha"
          color={"#ffffff"}
          size={{ base: "sm", lg: "md" }}
          leftIcon={<FontAwesomeIcon icon={faCircleCheck} />}
        >
          <Text fontSize={{ base: 10, lg: 15 }} onClick={shiftReservation}>
            {" "}
            Reservation{" "}
          </Text>
        </Button>

        <Button
          ref={btnRef}
          size={{ base: "sm", lg: "md" }}
          color={"#ffffff"}
          colorScheme="blackAlpha"
          onClick={onOpen}
          leftIcon={<FontAwesomeIcon icon={faBars} />}
        >
          {" "}
          <Text fontSize={{ base: 10, lg: 15 }}> Menu </Text>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faPeopleGroup} />}
                  colorScheme="blackAlpha"
                  onClick={shifttoCommunity}
                >
                  Community Forum
                </Button>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faChalkboard} />}
                  colorScheme="blackAlpha"
                  onClick={shiftCoaching}
                >
                  Coaching Resource
                </Button>
                <Button
                  leftIcon={<FontAwesomeIcon icon={faPhotoFilm} />}
                  colorScheme="blackAlpha"
                  onClick={shiftGallery}
                >
                  Gallery

                </Button>

               


              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </div>
    <div justifyContent={{ lg: "space-between" }}>
      {isLargerThan800 ? (
        <Image src={Image2} w={2500} h={10} />
      ) : (
        <Center>
          <Image src={Image2} w={300} h={100} />
        </Center>
      )}
          </div>
    </>
    
    
  );
}
