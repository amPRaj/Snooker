import {
  Card,
  Text,
  CardHeader,
  Image,
  GridItem,
  SimpleGrid,
  CardBody,
  Heading,
  CardFooter,
  Center,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import image from "../Images/snooker.jpeg";
import image2 from "../Images/news1.png";
import image3 from "../Images/news2.png";
import image4 from "../Images/3.jpeg";
import image5 from "../Images/1.jpeg";
import image6 from "../Images/news3.png";

import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <SimpleGrid
      gridTemplateColumns={"repeat(6,2fr)"}
      spacing={100}
      mt={{ base: 10, lg: 30, md: 10 }}>

      
      <GridItem colSpan={{ base: 2, lg: 2 }}>
        <Center mt={"25%"}>
          <Text fontSize={25} color={"white"}>
            
          </Text>
        </Center>
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 2 }} height={''}>
        <Center mt={"25%"}>
          <Text fontSize={25} color={"white"}>
          Welcome to a World of Snooker Excellence!
          </Text>
        </Center>
      </GridItem>

      <GridItem colSpan={{ base: 2, lg: 2 }}>
        <Center mt={"25%"}>
          <Text fontSize={25} color={"white"}>
            
          </Text>
        </Center>
      </GridItem>
      
              {/* <GridItem colSpan={2}></GridItem> */}

      <GridItem colSpan={{ base: 5, lg: 2, md: 3 }} padding={'10%'}>
        <Card maxWidth={400} w={"auto"} >
          <CardHeader>
            <Center> Latest News</Center>
          </CardHeader>
          <CardBody>
            <Image src={image2} w={'200'}/>
          </CardBody>
          <CardFooter>
            <VStack>
              <Text size={"sm"} color={"black"}>
                {" "}
                <Heading size={"sm"}>
                  The Ultimate Snooker Guide for Beginners March 15, 2023{" "}
                </Heading>
                This is the ultimate snooker guide for beginners.
              </Text>
              <br />
              <FontAwesomeIcon icon={faEye} />
              <a href="https://snookerfreaks.com/the-ultimate-snooker-guide-for-beginners/">
                Click
              </a>
            </VStack>
          </CardFooter>
        </Card>
      </GridItem>




      <GridItem colSpan={{ base: 6, lg: 2, md: 3 }} padding={'5%'}>
        <Card maxWidth={400} w={"auto"}>
          <CardHeader>
            <Center> Latest News</Center>
          </CardHeader>
          <CardBody>
            <Image src={image3} />
          </CardBody>
          <CardFooter>
            <VStack>
              <Text size={"sm"} color={"black"}>
                {" "}
                <Heading size={"sm"}>
                  Anatomy of a Snooker Cue may 7, 2023
                </Heading>
                Discover the ins and outs of a snooker cue in this detailed
                guide. From the tip to the butt, we
              </Text>
              <br />
              <FontAwesomeIcon icon={faEye} />
              <a href="https://snookerfreaks.com/anatomy-of-a-snooker-cue/">
                Click
              </a>
            </VStack>
          </CardFooter>
        </Card>
      </GridItem>


      {/* <GridItem colSpan={2}></GridItem> */}


      <GridItem colSpan={{ base: 6, lg: 2, md: 3 }} >
        <Card maxWidth={400} w={"auto"}>
          <CardHeader>
            <Center> Latest News</Center>
          </CardHeader>
          <CardBody>
            <Image src={image6} height={'70%'}/>
          </CardBody>
          <CardFooter>
            <VStack>
              <Text size={"sm"} color={"black"}>
                {" "}
                <Heading size={"sm"}>
                  How to Choose the Right Snooker Table – Buyer’s Guide June 25,
                  2023
                </Heading>
                Looking to purchase a snooker table? Our comprehensive buyer's
                guide on how to choose the right snooker table covers everything
              </Text>
              <br />
              <FontAwesomeIcon icon={faEye} />
              <a href="https://snookerfreaks.com/how-to-choose-the-right-snooker-table-buyers-guide/">
                Click
              </a>
            </VStack>
          </CardFooter>
        </Card>
      </GridItem>

{/* <GridItem colSpan={2}></GridItem> */}

    
      {/* <GridItem colSpan={2}></GridItem> */}


      <GridItem colSpan={{ base: 6, lg:3, md: 2}}padding={'5%'} >
        <Card   w={'210%'} background={'green.100'} >
          <CardHeader>
            {" "}
            <Heading fontSize={25} alignContent={'center'}>
            <Center>Upcoming Events</Center>
            </Heading>
          </CardHeader>
          {/* <CardBody>
            <Flex>
            <center>
            <Image src={image} height={'290px'} width={'18%'} boxSize="100px" />

            <Image src={image4} height={'290px'} width={'18%'} />

            <Image src={image5} height={'290px'} width={'18%'} />

            </center>
            </Flex>
          </CardBody> */}



<Box>
  <Flex alignItems="center" justifyContent="space-between">
    <Image src={image}  boxSize="500px" />
    <Image src={image4}  boxSize="500px" />
    <Image src={image5}  boxSize="500px" />
  </Flex>
</Box>
         
          <CardHeader >
            <center>
            <Heading fontSize={15} alignContent={'center'}>
              Visit Tournaments Section To Know About Upcomming Events
            </Heading>
            </center>
          </CardHeader>
          
        </Card>
      </GridItem>



  </SimpleGrid>

     

  );


}
