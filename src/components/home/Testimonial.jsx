import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { TESTIMONIAL } from "../../tokens/content";

const Testimonial = () => (
  <Box as="section" py={16} px={4} bg="pink.100">
    <Flex direction={{ base: "column", md: "row" }} maxW="6xl" mx="auto" gap={8}>
      {/* Header */}
      <Box flex="2" mb={{ base: 12, md: 0 }}>
        <Heading as="h2" fontSize="4xl" fontWeight="bold" color="gray.900" mb={6}>
          {TESTIMONIAL.heading} <br />
          <Text as="span" className="text-gradient-brand">{TESTIMONIAL.headingHighlight}</Text>
        </Heading>
        <Text fontSize="lg" color="gray.700" maxW="2xl">
          {TESTIMONIAL.description}
        </Text>
      </Box>

      {/* Card */}
      <Box
        flex="1"
        bg="white"
        border="1px solid"
        borderColor="gray.200"
        rounded="2xl"
        p={8}
        shadow="sm"
        mx="auto"
      >
        <Text color="gray.700" fontSize="lg" mb={6} textAlign="center">
          {TESTIMONIAL.quote}
        </Text>

        <Flex justify="center" mb={3} gap={1}>
          {[...Array(5)].map((_, i) => (
            <Text key={i} className="text-gradient-brand" fontSize="xl">✰</Text>
          ))}
        </Flex>

        <Text fontWeight="medium" textAlign="center" color="gray.900">{TESTIMONIAL.reviewer}</Text>
      </Box>
    </Flex>
  </Box>
);

export default Testimonial;
