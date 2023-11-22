import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';
import styles from './styles';

const RecomendationsScreen = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [visible, setVisible] = React.useState(false);

  const infoArticles = [
    {
      titulo: 'Alimentação na gravidez',
      resumo: 'Cuidar da alimentação durante a gravidez é crucial para garantir o bem-estar da mãe e o desenvolvimento saudável do feto.',
      texto: 'Você não precisa fazer grandes mudanças no cardápio, apenas evitar alguns alimentos que podem trazer riscos para o seu bem-estar e o do bebê. Na primeira lista, estão os itens crus, como sushi, sashimi carpaccio, devido ao risco de contaminação. Na segunda, a gordura, o sal, o café e o açúcar, que devem ser consumidos com moderação. “Dessa maneira, a gestante mantém o peso e a pressão arterialsob controle e previne problemas intestinais, que podem estufar o abdômen e provocar desconfortos" ',
      imageSource: require('../../../assets/alimentos.png'),
    },
    {
      titulo: 'Sono Adequado',
      resumo: ' Durante esse período, ocorrem alterações hormonais, físicas e emocionais que podem impactar o padrão de sono da gestante.',
      texto: 'O sono é crucial durante a gestação por várias razões. Em primeiro lugar, é essencial para o desenvolvimento saudável do feto, contribuindo para o crescimento do cérebro e do sistema nervoso. Além disso, o sono adequado promove a saúde física e mental da mãe, ajudando na regulação hormonal, no controle do estresse e da ansiedade. Uma boa qualidade de sono também está associada à prevenção de complicações como pressão alta e diabetes gestacional. Além disso, o sono adequado ajuda na gestão de sintomas desconfortáveis, na recuperação física do corpo em transformação e na prevenção da fadiga excessiva. Durante a gravidez, o sono desempenha um papel crucial na preparação para o parto e o pós-parto, garantindo que a mãe esteja fisicamente e emocionalmente preparada para os desafios associados ao cuidado com o recém-nascido. Em resumo, priorizar o sono durante a gestação é fundamental para o bem-estar tanto da mãe quanto do bebê.',
      imageSource: require('../../../assets/pessoa-dormindo.jpg'),
    },
    {
      titulo: 'Hidratação na Gestação',
      resumo: 'É crucial que as gestantes mantenham uma ingestão adequada de líquidos, preferencialmente água, ao longo do dia para apoiar não apenas sua própria saúde, mas também o desenvolvimento saudável do bebê durante a gravidez.',
      texto: 'A hidratação adequada durante a gestação é crucial por vários motivos. Primeiramente, a água é essencial para o desenvolvimento saudável do feto, contribuindo para a formação de células, órgãos e tecidos. Além disso, a hidratação mantém o volume sanguíneo necessário para garantir um fluxo sanguíneo adequado ao útero e à placenta, prevenindo complicações como constipação e infecções urinárias. Manter-se hidratada também ajuda na regulação térmica, aliviando sintomas como inchaço e cãibras musculares. A produção adequada de líquido amniótico, essencial para a proteção do feto, depende da hidratação. Além disso, a prevenção de pedras nos rins é outra razão pela qual a ingestão suficiente de líquidos é fundamental durante a gravidez. Em resumo, a hidratação desempenha um papel vital na saúde materna e no desenvolvimento saudável do bebê ao longo da gestação.',
      imageSource: require('../../../assets/imagem-agua.jpg')
    },
    {
      titulo: 'Saúde mental',
      resumo: ' A saúde mental positiva pode fortalecer o vínculo entre a mãe e o feto. A promoção de emoções positivas, como alegria e tranquilidade, pode contribuir para um ambiente emocionalmente saudável para o bebê em desenvolvimento.',
      texto: 'A saúde mental durante a gravidez é uma dimensão essencial do bem-estar materno e do desenvolvimento saudável do feto. Este período, marcado por mudanças físicas e emocionais significativas, destaca a importância de cuidar não apenas do corpo, mas também da mente. A gestação pode desencadear uma variedade de emoções, desde alegria e antecipação até ansiedade e preocupação. É normal experimentar uma gama tão ampla de sentimentos, mas é crucial que as gestantes estejam atentas à sua saúde mental. Altos níveis de estresse, ansiedade ou depressão não tratados podem ter implicações sérias tanto para a mãe quanto para o bebê. A pesquisa sugere que o ambiente emocional da mãe pode influenciar o desenvolvimento fetal. O estresse crônico, por exemplo, está associado a resultados adversos, como parto prematuro e baixo peso ao nascer. Nesse sentido, promover a saúde mental durante a gravidez não é apenas uma questão de bem-estar emocional, mas também uma medida preventiva para garantir o melhor começo possível para o bebê.',
      imageSource: require('../../../assets/saude-mental-imagem.png'),
    }
  ];

  const showDialog = (article) => {
    setSelectedArticle(article);
    setVisible(true);
  };

  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Artigos</Text>
      <ScrollView contentContainerStyle={styles.containerNotification} showsVerticalScrollIndicator={false}>
        {infoArticles.map((article, index) => (
          <TouchableOpacity key={index} onPress={() => showDialog(article)} style={styles.containerArticle}>
            <Image source={article.imageSource} style={styles.ArticleImage} />
            <Text style={styles.titleArticle}>{article.titulo}</Text>
            <Text style={styles.textArticle}>{article.resumo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.modalDetailArticle}>
          <Dialog.Title style={styles.titleModalDetailArticle}>Artigo sobre {selectedArticle?.titulo}</Dialog.Title>
          <Dialog.Content>
            <ScrollView>
            <Text>{selectedArticle?.texto}</Text>
            </ScrollView>
          </Dialog.Content>
          <Dialog.Actions>
            <TouchableOpacity onPress={hideDialog}>
              <Text style={styles.modalCloseButton}>Fechar</Text>
            </TouchableOpacity>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default RecomendationsScreen;
