import { ChevronRight } from "lucide-react";
import { Box, Flex, Grid, Heading, Text, Button, Image, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import heroImage from "../../assets/images/heroImage.png";
import { BRAND_GRADIENT } from "../../theme";
import { HERO, NAV } from "../../tokens/content";

const Hero = () => (
  <Box
    minH={{ lg: "100vh" }}
    mt={{ base: 16, lg: 12 }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    px={{ md: 4 }}
    py={16}
  >
    <Container maxW="6xl">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="center">
        {/* Left */}
        <Box textAlign={{ base: "center", md: "left" }} px={{ base: 4, md: 0 }}>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "2xl", lg: "5xl" }}
            fontWeight="bold"
            color="gray.950"
            mb={6}
          >
            <Text as="span" color="brand.500">{HERO.headingHighlight}</Text>
            {HERO.headingRest}
          </Heading>

          <Box mb={8}>
            <Text fontSize={{ md: "lg", lg: "2xl" }} color="gray.700" mb={4}>
              {HERO.statPrefix} <strong>{HERO.stat}</strong> {HERO.statSuffix}
            </Text>
            <Text fontSize={{ lg: "2xl" }} color="gray.700" mb={4}>
              {HERO.subtext}
            </Text>
          </Box>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
            justify={{ base: "center", md: "start" }}
            mb={8}
          >
            <Button
              as={RouterLink}
              to={NAV.searchCta.to}
              rounded="full"
              px={8}
              py={4}
              h="auto"
              color="white"
              fontWeight="semibold"
              style={{ backgroundImage: BRAND_GRADIENT }}
              _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
              transition="all 0.2s"
            >
              {HERO.ctaLabel} <ChevronRight size={20} />
            </Button>
          </Flex>
        </Box>

        {/* Right */}
        <Box p={6} display="flex">
          <Image src={heroImage} rounded="full" roundedTop="none" w="full" h="full" alt={HERO.imageAlt} />
        </Box>
      </Grid>
    </Container>
  </Box>
);

export default Hero;
