import { VStack, Text, Button, Link, Box} from "native-base";
import { TouchableOpacity } from 'react-native';
import { Titulo } from "./components/titulo";
import { EntradaTexto } from "./components/entradaTexto";

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Titulo> Faça login em sua conta </Titulo>
      <EntradaTexto label="Usuário: " placeholder="Usuário"/>
      <EntradaTexto label="Senha: " placeholder="Senha"/>
      <Button
        w=" 100%"
        bg="blue.400"
        mt={20}
        borderRadius="lg"
        onPress={() => navigation.navigate("Tabs")}
      >
        Entrar
      </Button>
      <Link href='https://github.com/TiagoGandra' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
