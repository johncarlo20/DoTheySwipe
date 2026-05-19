import { NavLink, useLocation } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import {
  Box, Flex, HStack, Image, Text, Separator,
} from "@chakra-ui/react";
import SocialIcon from "./SocialIcon";
import logo from "../../assets/images/logo.png";
import { SITE, NAV } from "../../tokens/content";

const SOCIAL_ICONS = { Facebook, Twitter, LinkedIn: Linkedin, Instagram };

const Footer = () => {
  const location = useLocation();
  const isMapPage = location.pathname === "/profile";

  if (isMapPage) return <Box display={{ base: "none", md: "block" }} as="footer" />;

  return (
    <Box as="footer" pb={{ sm: 10 }} px={{ sm: 4 }}>
      <Box
        maxW="6xl"
        mx="auto"
        bg="gray.100"
        rounded="xl"
        px={4}
        pt={{ base: 6, md: 16 }}
        pb={6}
      >
        {/* Logo + Nav */}
        <Flex direction="column" align="center" mb={{ base: 0, md: 4 }}>
          <Flex align="center" gap={2} mb={6}>
            <Image src={logo} w={{ base: "32px", lg: "36px" }} alt={SITE.logoAlt} />
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Text fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" className="text-gradient-brand">
                {SITE.name}
              </Text>
            </NavLink>
          </Flex>

          <Flex as="nav" wrap="wrap" justify="center" gap={{ base: 6, md: 8 }} mb={6} fontSize={{ base: "sm", md: "lg" }}>
            {NAV.footerLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  color: isActive ? "#E11D48" : "#0f172a",
                  textDecoration: "none",
                  transition: "color 0.2s",
                })}
              >
                {label}
              </NavLink>
            ))}
          </Flex>
        </Flex>

        <Separator borderColor="gray.300" />

        {/* Copyright + Socials */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          pt={6}
          gap={{ base: 4, md: 0 }}
        >
          <Text color="#142546">{SITE.copyright}</Text>
          <HStack gap={3}>
            {NAV.socialLinks.map((item) => (
              <SocialIcon
                key={item.label}
                href={item.href}
                label={item.label}
                Icon={SOCIAL_ICONS[item.label]}
              />
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
