import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, SimpleGrid, Divider, Image, Stack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const posts = [
  {
    title: "My First Post",
    date: "December 1, 2022",
    content: "This is a preview of my first post. Stay tuned for more!",
  },
  {
    title: "A Glimpse into My Life",
    date: "December 5, 2022",
    content: "Here's a sneak peek into my daily adventures...",
  },
];

const Index = () => {
  return (
    <Container maxW="7xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} p={4}>
        <VStack align="start" spacing={4}>
          <Heading size="lg">Latest Posts</Heading>
          {posts.map((post, index) => (
            <Box key={index} w="100%">
              <Heading size="md">{post.title}</Heading>
              <Text color="gray.500" fontSize="sm">{post.date}</Text>
              <Text>{post.content}</Text>
              <Link href="#" color="blue.500">Read more</Link>
              {index < posts.length - 1 && <Divider my={4} />}
            </Box>
          ))}
        </VStack>

        <Stack spacing={4} align="start">
          <Box>
            <Heading size="md">About Me</Heading>
            <Text>
              Welcome to my personal blog. I love sharing my thoughts and experiences with the world.
            </Text>
          </Box>
          <Box>
            <Heading size="md">Recent Posts</Heading>
            <VStack align="start" spacing={2}>
              {posts.map((post, index) => (
                <Link key={index} href="#" color="blue.500">
                  {post.title}
                </Link>
              ))}
            </VStack>
          </Box>
        </Stack>
      </SimpleGrid>

      {/* Footer */}
      <Flex as="footer" bg="gray.800" color="white" p={4} align="center">
        <Spacer />
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;