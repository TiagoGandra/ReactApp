import { VStack, Text, Button, ScrollView, HStack, Input} from "native-base";
import React, {useState} from 'react';
import {View} from 'react-native'
import { EntradaTexto } from "../components/entradaTexto";
import { Titulo } from "../components/titulo";

const Card = ({ id, removeCard }) => (
  <HStack alignItems='center' flex={1} p={5} m={5} bgColor='#ddd' borderRadius="lg">
    <Input
        placeholder='Tarefa'
        size="lg"
        w="90%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
      />
    <Button bg="#5F33E1" ml={3} onPress={() => removeCard(id)}>-</Button>
  </HStack>
)

export default function Cards() {
  const [cards, setCards] = useState([])

  const addCard = () => {
    setCards([...cards, {id: cards.length, text: 'Novo Card'}])
  }

  const removeCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  }


  return (
    <VStack flex={1}>
      <HStack px={5} mt={3} alignItems='center' justifyContent='space-between'>
        <Titulo mt={0}>To-Do List</Titulo>
        <HStack>
          <Button mr={2} bg="#5F33E1" >filtro</Button>
          <Button bg="#5F33E1" >config</Button>
        </HStack>
      </HStack>
      <ScrollView flex={1}>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} removeCard={removeCard}/>
        ))}
      </ScrollView>
      <Button  mb={4} ml={335} w='12%' bg="#5F33E1" borderRadius='3xl' _text={{color: "white"}} onPress={addCard}>+</Button>
    </VStack>
  );
}
