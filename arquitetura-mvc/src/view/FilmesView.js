import React from 'react';
import { View, Text } from 'react-native';

function TelaDetalhesFilme({ route }) {
    const { filme } = route.params;

    return (
        <View>
            <Text>Título: {filme.titulo}</Text>
            <Text>Classificação Etária: {filme.classificacaoEtaria}</Text>
            <Text>Diretor: {filme.diretor}</Text>
            <Text>Ano de Lançamento: {filme.anoLancamento}</Text>
            <Text>Duração em minutos: {filme.duracao}</Text>
            <Text>Atores: {filme.atores.map((ator) => ator).join(', ')}</Text>
        </View>
    );
}

export default TelaDetalhesFilme;
