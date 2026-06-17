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
                      source={require('../../assets/images/fe.jpg')} 
                   style={{ width: 800, height: 300, marginBottom: 20 }} 
                    />
                <ThemedText type="subtitle">FÉ🙏</ThemedText>
                <ThemedText style={styles.centerText} themeColor="textSecondary">
                  "Ter fé é assinar uma folha em branco e deixar que Deus nela escreva o que quiser"</ThemedText>
              </ThemedView>
              
                <ThemedText style={styles.contentContainer}>
                  leia um pouco sobre a fé católica...
                </ThemedText>
      
              <ThemedView style={styles.sectionsWrapper}>
                <Collapsible title="Origem da palavra FÉ">
                  <ThemedText type="small">
                    
                    
                  </ThemedText>
                  <ThemedText type="small">
                    Em português, a palavra fé deriva do termo latino fides, que significa "confiança", "crença", "lealdade" e "fidelidade". Originalmente, o conceito não se limitava ao campo religioso, sendo amplamente utilizado nas relações sociais, civis e diplomáticas do Império Romano.</ThemedText>
                  <ExternalLink href="https://origemdapalavra.com.br/palavras/fe/">
                    <ThemedText type="linkPrimary">Learn more</ThemedText>
                  </ExternalLink>
                </Collapsible>
      
                <Collapsible title="Obras de caridade da Igreja">
                  <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
                    <ThemedText type="small">A Igreja Católica é considerada a maior rede privada de assistência social, saúde e educação do planeta. Globalmente, a instituição administra mais de 115.000 instituições de caridade, incluindo cerca de 5.400 hospitais, 15.000 lares para idosos e deficientes, além de milhares de orfanatos, escolas e clínicas.</ThemedText>
                    
                  </ThemedView>
                </Collapsible>
      
                <Collapsible title="O catolicismo">
                  <ThemedText type="small">
                    Ser católico já significava “ser plenamente cristão”. O catolicismo, portanto, é o cristianismo na sua “totalidade”. O catolicismo é a forma mais completa de obedecer ao mandato do Mestre antes de sua volta para o Pai. O mesmo mandato pode ser lido no Evangelho de Marcos 16,15: “Ide e pregai o Evangelho a toda criatura”. Há, portanto, uma catolicidade vertical, que é ter o Cristo todo, ou seja, ser discípulo; e uma catolicidade horizontal, que é levar o Cristo a todos, ou seja, ser missionário. Isso é ser católico: totalmente discípulo, totalmente missionário, totalmente cristão!

Ao que tudo indica, o termo “católico”, tornou-se mais popular a partir de Santo Inácio de Antioquia (discípulo de São João) no ano 110 d.C. Pode significar tanto a “universalidade” da Igreja como a sua “autenticidade”.<ThemedText type="code"></ThemedText> 
                  </ThemedText>
                </Collapsible>
      
                <Collapsible title="Algumas frases de santos...">
                  <ThemedText type="small">- “Coloque todas as suas preocupações sobre o futuro com confiança nas mãos de Deus e deixe-se guiar pelo Senhor como uma criança”.</ThemedText>
                  <ThemedText type="small">- “Reze, espere e não se preocupe. A preocupação é inútil. Deus é misericordioso e ouvirá sua oração”.</ThemedText>
                    <ThemedText type="small">- "Por amor Deus os criou, sem amor não podeis viver."</ThemedText> 
                     <ThemedText type="small">- "Tarde te amei, ó Beleza tão antiga e tão nova, tarde te amei! Eis que estavas dentro e eu fora."</ThemedText> 
                    <ThemedText type="small">- "Se o mundo todo for contra a verdade, então eu irei contra o mundo."</ThemedText> 
                    <ThemedText type="small">- "A felicidade é olhar para Deus, a tristeza é olhar para si mesmo"</ThemedText>
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
