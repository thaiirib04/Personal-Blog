import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';
import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };
  const theme = useTheme();

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: Spacing.six,
      paddingBottom: Spacing.four,
    },
  });

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
      <ThemedView style={styles.container}>
              <ThemedView style={styles.titleContainer}>
      <Image
                      source={require('../../assets/images/culinaria.jpg')} 
                   style={{ width: 800, height: 300, marginBottom: 20 }} 
                    />
                <ThemedText type="subtitle">CULINÁRIA🍳</ThemedText>
                <ThemedText style={styles.centerText} themeColor="textSecondary">
                  "Cozinhar é a arte de usar comida para criar felicidade."
                </ThemedText>
              </ThemedView>
              
                <ThemedText style={styles.contentContainer}>
                  leia um pouco sobre culinária...
                </ThemedText>
      
              <ThemedView style={styles.sectionsWrapper}>
                <Collapsible title="Origem da palavra CULINÁRIA ">
                  <ThemedText type="small">
                    
                    
                  </ThemedText>
                  <ThemedText type="small">
                    A palavra culinária vem do latim culinarius (relativo à cozinha), que por sua vez deriva de culina, que significa "cozinha". Por trás disso, o termo 
                    remonta ao verbo latino coquere, que significa simplesmente "cozinhar".</ThemedText>
                  <ExternalLink href="https://origemdapalavra.com.br/palavras/culinaria/">
                    <ThemedText type="linkPrimary">Learn more</ThemedText>
                  </ExternalLink>
                </Collapsible>
      
                <Collapsible title="A culinária brasileira">
                  <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
                    <ThemedText type="small">
                      <ThemedText type="smallBold">A culinária brasileira é uma das mais ricas e diversas do mundo, fruto da fusão de tradições indígenas, africanas, 
                        portuguesas e de imigrantes de várias partes do globo. A gastronomia varia fortemente por região, destacando ingredientes locais como mandioca, milho, azeite de dendê e carnes variadas</ThemedText>
                    </ThemedText>
                    
                  </ThemedView>
                </Collapsible>
      
                <Collapsible title="Receita de Pamonha">
                  <ThemedText type="small">- 12 espigas de milho verde
                  </ThemedText>
                  <ThemedText type="small">- 1 xícara (chá) de açúcar</ThemedText>
                    <ThemedText type="small">- 1 xícara (chá) de leite</ThemedText> 
                     <ThemedText type="small">- 2 colheres (sopa) de manteiga</ThemedText> 
                    <ThemedText type="small">- 1 pitada de sal</ThemedText> 
                    <ThemedText type="small">- Se comprou as espigas com palha, descasque-as com cuidado para não rasgar as palhas maiores (caso vá usar para embalar). Limpe bem os cabelos do milho. Com uma faca afiada, corte os grãos rente à sabugo.</ThemedText> 
                    <ThemedText type="small">- No liquidificador, coloque o milho cortado, o leite, a manteiga derretida, o açúcar e a pitada de sal. Bata muito bem até obter um creme homogêneo. Se o seu liquidificador for menor, faça esse processo em duas etapas.</ThemedText> 
                    <ThemedText type="small">- Despeje essa massa em um refratário untado com um pouco de manteiga. Se quiser, espalhe pedaços de queijo pelo meio da massa. Cubra com papel-alumínio e leve ao forno preaquecido a 180°C por cerca de 40 a 50 minutos. Retire o papel nos últimos 15 minutos para dourar por cima. Está pronta quando estiver firme como um pudim pesado.</ThemedText>
                </Collapsible>
      
                <Collapsible title="Receita de Brigadeiro">
                  <ThemedText type="small">- 1 lata de leite condensado
                  </ThemedText>
                  <ThemedText type="small">- 1 colher (sopa) bem cheia de manteiga</ThemedText>
                    <ThemedText type="small">- 3 a 4 colheres (sopa) de chocolate em pó</ThemedText> 
                     <ThemedText type="small">- Chocolate granulado para confeitar (se for enrolar)</ThemedText> 
                    <ThemedText type="small">- Em uma panela de fundo grosso (isso evita que o brigadeiro queime no fundo), coloque o leite condensado, a manteiga e o chocolate em pó. Misture tudo muito bem com uma espátula de silicone (pão duro) ainda com o fogo desligado, até o chocolate dissolver por completo.</ThemedText> 
                    <ThemedText type="small">- Leve a panela ao fogo baixo. Mexa sem parar, fazendo movimentos circulares e passando a espátula bem nas bordas e no fundo da panela para não grudar.</ThemedText> 
                    <ThemedText type="small">- Ponto de Colher (Copo): Demora cerca de 6 a 8 minutos.</ThemedText> 
                    <ThemedText type="small">- Ponto de Enrolar (Festa): Demora cerca de 10 a 12 minutos.
                  </ThemedText>
                </Collapsible>
      
              </ThemedView>
            </ThemedView>
          </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: 'center',
    gap: Spacing.one,
    alignItems: 'center',
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
  collapsibleContent: {
    alignItems: 'center',
  },
  imageTutorial: {
    width: '100%',
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
