import React from "react";

import { Layout } from "./components/Layout.tsx";
// import styled from "styled-components";
import { Provider } from "./components/ui/provider.jsx";

import { Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "./services/login.tsx";

// const Box = styled.div`
//   background: orange;
//   border-radius: 25px;
//   padding-left: 15px;
// `

function App() {
  return (
    <Provider>
      <Layout>
        <Box minHeight="100vh" background="#4D5B9F" padding="25px">
          <Center marginBottom="20px">
            <Box fontSize="32px" fontWeight="700">Faça seu login</Box>
          </Center>
          <Box bg="bg" shadow="md" direction="column" background="#fff" borderRadius="25px" padding="15px" marginBottom="20px" >
             <Input placeholder="Email" size="sm" background="#f5f2f2" borderRadius="10px" paddingLeft="8px" borderColor="#BDBDBD" marginBottom="10px" color="#000"/>
             <Input placeholder="Senha" type="password" size="sm" background="#f5f2f2" borderRadius="10px" paddingLeft="8px" borderColor="#BDBDBD" color="#000" />
          </Box>
          <Center>
            <Button onClick={ login } variant="outline" size="xl" width="100%" marginTop="10px" borderRadius="20px" >Entrar</Button>
          </Center>
        </Box>
      </Layout>
    </Provider>
  );
}
export default App;
