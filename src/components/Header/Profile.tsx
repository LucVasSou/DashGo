import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Vasconcelos de Souza</Text>
          <Text color="gray.300" fontSize="small">
            lucasbmbr@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md"
        name="Lucas Vasconcelos de Souza"
        src="https://github.com/LucVasSou.png" />
    </Flex>
  );
}