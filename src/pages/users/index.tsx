import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Index";
import { Pagination } from "../../components/Pagination/Index";
import { Sidebar } from "../../components/Sidebar/Index";


export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Box>
      <Header />
      <Flex 
      w="100%" 
      my="6" 
      mx="auto" 
      maxWidth={14080} 
      px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800">
          <Flex mb="8" justify="space-between" align-itens="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
            <Button 
            as="a" 
            size="sm" 
            fontSize="sm" 
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
              Criar novo
            </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                  <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de Cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Souza</Text>
                    <Text fontSize="sm" color="gray.300">lucas****@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril, 2022</Td>}
                <Td>
                
                </Td>
              </Tr><Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Souza</Text>
                    <Text fontSize="sm" color="gray.300">lucas****@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>04 de Abril, 2022</Td>}
                <Td>
                
                </Td>
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Souza</Text>
                    <Text fontSize="sm" color="gray.300">lucas****@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}