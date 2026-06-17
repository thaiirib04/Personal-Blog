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
                      source={require('../../assets/images/hobby.jpg')} 
                   style={{ width: 800, height: 400, marginBottom: 20 }} 
                    />
                <ThemedText type="subtitle">HOBBIES🎢</ThemedText>
                <ThemedText style={styles.centerText} themeColor="textSecondary">
                  Um hobby não é apenas um passatempo; é um refúgio criativo, uma forma de recarregar as energias, e um momento para si mesmo.</ThemedText>
              </ThemedView>
              
                <ThemedText style={styles.contentContainer}>
                  leia um pouco sobre os meus hobbies😊...
                </ThemedText>
      
              <ThemedView style={styles.sectionsWrapper}>
                <Collapsible title="Origem da palavra HOBBY">
                  <ThemedText type="small">
                    
                    
                  </ThemedText>
                  <ThemedText type="small">
                    A palavra hobby vem do inglês hobby, uma abreviação de hobby-horse. O termo original referia-se a um "cavalo de pau" (brinquedo infantil com uma cabeça de cavalo na ponta de um bastão).A evolução do significado ocorreu porque as crianças "montavam" nesses brinquedos para se divertir, passando o tempo de forma lúdica. Com o passar dos séculos, a expressão passou a designar qualquer atividade favorita, feita por puro prazer, sem o compromisso de trabalho ou estudo. </ThemedText>
                  <ExternalLink href="https://en.wikipedia.org/wiki/Hobby">
                    <ThemedText type="linkPrimary">Learn more</ThemedText>
                  </ExternalLink>
                </Collapsible>
      
                <Collapsible title="Filmes">
                  <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
                    <ThemedText type="small">É mais do que só entretenimento, é um vício bom. É o prazer de maratonar uma filmografia inteira, debater teorias, caçar referências escondidas e ter aquela sensação incrível de encontrar uma obra-prima desconhecida. Minha mente virou um catálogo vivo e meus finais de semana são verdadeiras viagens sem sair do sofá.</ThemedText>
                    
                  </ThemedView>
                </Collapsible>
      
                <Collapsible title="Escrever">
                  <ThemedText type="small">
                    É traduzir o que sinto em ritmo, rima e silêncio. É o vício de reparar nos detalhes do mundo que quase ninguém nota e tentar eternizar um instante em duas ou três linhas. Para mim, escrever poesia é uma necessidade: uma forma de organizar o caos da mente e dar voz à alma, mesmo quando as palavras parecem faltar.<ThemedText type="code"></ThemedText> 
                  </ThemedText>
                </Collapsible>
      
                <Collapsible title="Outras ideias">
                  <ThemedText type="small">
                    Segue algumas ideias de hobbies para vocês!
                  </ThemedText>
                  <ThemedText type="small">Cozinhar</ThemedText>
                    <ThemedText type="small">Fotografia</ThemedText> 
                     <ThemedText type="small">Jardinagem</ThemedText> 
                    <ThemedText type="small">Corrida</ThemedText> 
                    <ThemedText type="small">Pintura</ThemedText> 
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
