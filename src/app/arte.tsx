import { Image } from "expo-image";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ExternalLink } from "@/components/external-link";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Collapsible } from "@/components/ui/collapsible";
import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

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
      contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <Image
            source={require("../../assets/images/arte.jpg")}
            style={{ width: 800, height: 300, marginBottom: 20 }}
          />
          <ThemedText type="subtitle">ARTE🖌️</ThemedText>
          <ThemedText style={styles.centerText} themeColor="textSecondary">
            "Os espelhos são usados para ver o rosto; a arte para ver a alma."
          </ThemedText>
        </ThemedView>

        <ThemedText style={styles.contentContainer}>
          leia um pouco sobre o que é a arte...
        </ThemedText>

        <ThemedView style={styles.sectionsWrapper}>
          <Collapsible title="Origem da palavra ARTE">
            <ThemedText type="small"></ThemedText>
            <ThemedText type="small">
              A palavra arte deriva do latim ars (ou artis), que significa
              literalmente "técnica", "habilidade" ou "capacidade de fazer
              alguma coisa". Por sua vez, o termo latino está associado à raiz
              indo-europeia ar-, que traz o sentido de "ajustar" ou "unir".
            </ThemedText>
            <ExternalLink href="https://etimologia.com.br/arte/">
              <ThemedText type="linkPrimary">Learn more</ThemedText>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="A arte no Brasil">
            <ThemedView
              type="backgroundElement"
              style={styles.collapsibleContent}
            >
              <ThemedText type="small">
                <ThemedText type="smallBold">
                  A identidade cultural brasileira não é um rótulo único: ela se
                  formou historicamente pela soma de heranças europeias,
                  indígenas e africanas, aos quais se agregaram, ao longo do
                  século XIX, fluxos intensos de imigração (especialmente no
                  Sul) que trouxeram novos hábitos, ofícios, repertórios
                  musicais, festas e modos de viver. A arte registra a história
                  brasileira com diferentes símbolos estéticos e linguagens
                  artísticas que foram se tornando sinais de pertencimento e
                  memória do Brasil. São eles: pintura, escultura, arquitetura,
                  música, dança e festas.
                </ThemedText>
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <Collapsible title="Algumas obras...">
            <ThemedText type="small">
              Alguma obras famosas e brasileiras:
            </ThemedText>
            <ThemedText type="small">
              Abaporu (1928) - Tarsila do Amaral
            </ThemedText>
            <ThemedText type="small">
              Os Retirantes (1944) - Cândido Portinari
            </ThemedText>
            <ThemedText type="small">
              Operários (1933) - Tarsila do Amaral
            </ThemedText>
            <ThemedText type="small">
              Primeira Missa no Brasil (1861) - Victor Meirelles
            </ThemedText>
            <ThemedText type="small">
              Independência ou Morte (1888) - Pedro Américo
            </ThemedText>
            <ThemedText type="small">A Boba (1916) - Anita Malfatti</ThemedText>
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
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    maxWidth: MaxContentWidth,
    flexGrow: 1,
  },
  titleContainer: {
    gap: Spacing.three,
    alignItems: "center",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.six,
  },
  centerText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
  linkButton: {
    flexDirection: "row",
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    justifyContent: "center",
    gap: Spacing.one,
    alignItems: "center",
  },
  sectionsWrapper: {
    gap: Spacing.five,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
  },
  collapsibleContent: {
    alignItems: "center",
  },
  imageTutorial: {
    width: "100%",
    aspectRatio: 296 / 171,
    borderRadius: Spacing.three,
    marginTop: Spacing.two,
  },
  imageReact: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
