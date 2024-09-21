import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import HeroCard from "../components/heroCard";
import Stats from "../components/Stats";
import FeaturedProperty from "../components/Featured";
import Newsletter from "../components/Newsletter";
import Contact from "./Contact";

import img from "../assets/home/home_bg.jpg";
import Testimonial from "./Testomonials";

export default function CallToActionWithVideo({
  listing,
  updateListings,
  setListings,
}) {
  const handleClick = () => {
    const element = document.getElementById("featured");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="pb-3 pt-2">
          <Container maxW={"10xl"} p={0}> {/* Remove padding */}
            <Stack>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
                h={"90vh"} // Set Flex height to match the image height
              >
                <Image
                  src={img}
                  height="91vh" 
                  objectFit="cover"
                  position="absolute"
                  zIndex={0}
                  width="100%" // Ensure it takes full width
                  left={0} // Ensure image starts at the left edge
                  right={0} // Ensure image ends at the right edge
                />
                <Box
                  position="relative"
                  zIndex={1}
                  textAlign="center"
                  className="bg-black bg-opacity-50 w-full h-full flex flex-col items-center"
                >
                  <Box pt="36" mb="36"> {/* Use padding for top spacing */}
                    <Heading
                      lineHeight={1.1}
                      fontWeight={600}
                      fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                      color="white"
                    >
                      <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                          content: "''",
                          width: "full",
                          height: "30%",
                          position: "absolute",
                          bottom: 1,
                          left: 0,
                          zIndex: -1,
                        }}
                      >
                        Discover Your,
                      </Text>
                      <br />
                      <Text as={"span"} className="text-white">
                        Dream Family Home
                      </Text>
                    </Heading>
                    <Text color={"gray.200"} mt={4}>
                      Explore a vast selection of over 1 million rental options,
                      including apartments, houses, and townhomes!
                    </Text>
                    <Stack
                      spacing={{ base: 4, sm: 6 }}
                      direction={{ base: "column", sm: "row" }}
                      mt={8}
                    >
                      <Link
                        to="/AllListings"
                        className="transition-all inline-flex justify-center w-fit shadow-sm px-4 py-3 border border-[#095c41] text-md font-medium text-gray-50 hover:text-gray-900 bg-[#095c41] hover:bg-white hover:font-bold rounded-full cursor-pointer"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        Get started &rarr;
                      </Link>
                      <Link href="#featured">
                        <Button
                          rounded={"full"}
                          size={"lg"}
                          fontWeight={"normal"}
                          px={6}
                          onClick={handleClick}
                        >
                          How It Works
                        </Button>
                      </Link>
                    </Stack>
                  </Box>
                </Box>
              </Flex>
            </Stack>
            <HeroCard />
          </Container>
        </div>
        <Stats />
        <div className="px-2 rounded-xl">
          <FeaturedProperty />
        </div>
        <Newsletter />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
}
