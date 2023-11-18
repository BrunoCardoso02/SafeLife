import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './styles';


const RecomendationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Artigos</Text>
      <ScrollView contentContainerStyle={styles.containerNotification} showsVerticalScrollIndicator={false}>
        <View style={styles.containerArticle}>
          <Image source={require('../../../assets/alimentos.png')} style={styles.ArticleImage}/>
          <Text style={styles.titleArticle}>
            Alimentação
          </Text>
          <Text style={styles.textArticle}>
          Consuma uma dieta equilibrada com uma variedade de alimentos. Certifique-se de incluir frutas, vegetais, grãos integrais, proteínas magras e laticínios em sua alimentação. Evite alimentos processados e com alto teor de açúcar.
          </Text>
        </View>
        <View style={styles.containerArticle}>
          <Image source={require('../../../assets/pessoa-dormindo.jpg')} style={styles.ArticleImage}/>
          <Text style={styles.titleArticle}>
          Descanso adequado
          </Text>
          <Text style={styles.textArticle}>
          Certifique-se de descansar o suficiente. Durma pelo menos 7-9 horas por noite e tire sestas, se necessário. Um bom descanso é vital para o desenvolvimento do bebê e para a sua própria saúde.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default RecomendationsScreen;