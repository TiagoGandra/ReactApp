import { VStack, Text, Button, ScrollView, HStack, Input} from "native-base";
import React, {useState} from 'react';
import {View} from 'react-native'
import { EntradaTexto } from "../components/entradaTexto";

const Card = ({ id, removeCard }) => (
  <HStack flex={1} p={5} m={5} bgColor='#ddd' borderRadius="lg">
    <Input
        placeholder='Tarefa'
        size="lg"
        w="90%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
      />
    <Button ml={3} onPress={() => removeCard(id)}>-</Button>
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
      <ScrollView flex={1}>
        {cards.map((card) => (
          <Card key={card.id} id={card.id} removeCard={removeCard}/>
        ))}
      </ScrollView>
      <Button onPress={addCard}>+</Button>
    </VStack>
  );
}
