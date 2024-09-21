import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import Slider from "../components/Slider";
import HeroCard from "../components/heroCard";
import Stats from "../components/Stats";
import FeaturedProperty from "../components/Featured";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Contact from "./Contact";

import img from "../assets/svg/images/header.svg";
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
          <Container maxW={"7xl"}>
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
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
                  <Text as={"span"} className="text-primary">
                    Dream Family Home
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Explore a vast selection of over 1 million rental options,
                  including apartments, houses, and townhomes!
                </Text>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <Link
                    to="/AllListings"
                    className="transition-all inline-flex justify-center w-fit shadow-sm px-4 py-3 border border-[#095c41] text-md font-medium text-gray-50 hover:text-gray-900 bg-[#095c41]  hover:bg-white hover:font-bold mb-10 rounded-full cursor-pointer pt-2"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                    href="#featured"
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
              </Stack>
          <Flex
  flex={1}
  justify={"center"}
  align={"center"}
  position={"relative"}
  w={"full"}
  h={"full"}
>
  <Blob
    w={"150%"}
    h={"150%"}
    position={"absolute"}
    top={"-20%"}
    left={0}
    zIndex={-1}
    color={useColorModeValue("green.50", "green.400")}
  />

  <Image
    src={img}
    w="100%" // Increase width to make the image larger
    h="120%" // Increase height to make the image larger
    objectFit="contain" // Adjust as needed (cover, contain, etc.)
    position="relative" // Ensure it's positioned correctly above the Blob
    zIndex={1} // Bring the image above the Blob
  />
</Flex>

            </Stack>
            <HeroCard
              listing={listing}
              setListings={setListings}
              updateListings={updateListings}
            />
          </Container>
        </div>
        {/* <div className="px-2 container overflow-x-none rounded">
          <div className="pb-2 px-2 py-2">
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rounded="full"
                  size="lg"
                  fontWeight="bold"
                  px={8}
                  bg="#095c41" 
                  color="white" 
                  _hover={{ bg: "#0a7d58" }} 
                >
                  Recent Listings
                </Button>
              </Stack>
            </Stack>
          </div>
          <Slider />
        </div> */}
        <Stats />
        <div className="px-2 rounded-xl">
          <FeaturedProperty />
        </div>{" "}
        <Newsletter />
        <Testimonial/>
        <Contact />
      </div>
    </>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
