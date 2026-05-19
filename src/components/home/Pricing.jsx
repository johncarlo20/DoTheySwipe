import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import PricingCard from "./PricingCard";
import { pricingPlans } from "../../data/pricingData";
import { PRICING } from "../../tokens/content";

const Pricing = () => (
  <Box
    as="section"
    py={16}
    px={4}
    bgGradient="to-b"
    gradientFrom="indigo.100"
    gradientTo="purple.50"
  >
    <Container maxW="6xl" mb={6}>
      <Heading as="h2" fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="gray.900" mb={4}>
        {PRICING.heading}{" "}
        <Text as="span" className="text-gradient-brand">{PRICING.headingHighlight}</Text>
      </Heading>
      <Text fontSize="xl" color="gray.700" mb={8} maxW="2xl">
        {PRICING.subtext}
      </Text>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            isPopular={plan.isPopular}
          />
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Pricing;
