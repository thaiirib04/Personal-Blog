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
                      source={require('../../assets/images/gastronomia.jpg')} 
                   style={{ width: 800, height: 300, marginBottom: 20 }} 
                    />
                <ThemedText type="subtitle">GASTRONOMIA☕</ThemedText>
                <ThemedText style={styles.centerText} themeColor="textSecondary">
                  "Gastronomia é comer olhando pro céu"
                </ThemedText>
              </ThemedView>
              
                <ThemedText style={styles.contentContainer}>
                  leia um pouco sobre o melhor da gastronomia em SJC...
                </ThemedText>
      
              <ThemedView style={styles.sectionsWrapper}>
                <Collapsible title="Origem da palavra GASTRONOMIA">
                  <ThemedText type="small">
                    
                    
                  </ThemedText>
                  <ThemedText type="small">
                    A palavra gastronomia vem do grego antigo e significa, literalmente, "o estudo ou as regras do estômago". Ela é a união dos termos gregos gastros (estômago) e nomos (leis, regras ou conhecimento).</ThemedText>
                  <ExternalLink href="https://www5.pucsp.br/maturidades/sabor_saber/gastronomia_44.html">
                    <ThemedText type="linkPrimary">Learn more</ThemedText>
                  </ExternalLink>
                </Collapsible>
      
                <Collapsible title="Quiero Café">
                  <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
                    <ThemedText type="small">O Quiero Café é uma franquia que combina cafeteria, restaurante e bar, oferecendo um cardápio extenso com mais de 400 itens para todos os momentos do dia. Na região de São José dos Campos, unidades como a do Madrid Open Mall são bastante elogiadas pela variedade e ambiente acolhedor.</ThemedText>
                    
                  </ThemedView>
                </Collapsible>
      
                <Collapsible title="Brooks Hamburgueria">
                  <ThemedText type="small">A Brooks Hamburgueria destaca-se pelo cardápio de burgers suculentos e opções monstruosas como o Double Brooks, mas as avaliações apontam para uma experiência um pouco inconstante. O ambiente costuma ser agradável, porém o atendimento e o tempo de espera oscilam, exigindo atenção durante dias de pico.</ThemedText>
                </Collapsible>
      
                <Collapsible title="Bar Coronel">
                  <ThemedText type="small">O Bar Coronel, localizado no centro de São José dos Campos (Rua Francisco Raphael, 298), é um dos botecos mais tradicionais do Vale do Paraíba. Famoso pelo chopp trincado e ambiente ideal para uma boa resenha, destaca-se pelo torresmo, bolinho de carne seca, picanha na chapa e feijoada</ThemedText>
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
