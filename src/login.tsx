import { VStack, Text, Button, Link, Box, Image} from "native-base";
import { TouchableOpacity } from 'react-native';
import { Titulo } from "./components/titulo";
import { EntradaTexto } from "./components/entradaTexto";
import logo from './assets/note.png'

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={logo} alt="logo-image" />
      <Titulo fontSize='3xl' color='black'> To-Do List </Titulo>
      <Titulo w='75%' fontSize='sm'>This productive tool is designed to help you better manage your task project-wise conveniently!</Titulo>
      {/* <EntradaTexto label="Usuário: " placeholder="Usuário"/>
      <EntradaTexto label="Senha: " placeholder="Senha"/> */}
      <Button
        w=" 100%"
        bg="#5F33E1"
        mt={20}
        borderRadius='xl'
        onPress={() => navigation.navigate("Tabs")}
      >
        Let's Start!
      </Button>
      {/* <Link href='https://github.com/TiagoGandra' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box> */}
    </VStack>
  );
}
