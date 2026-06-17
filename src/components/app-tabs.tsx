import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
   <NativeTabs
  backgroundColor={colors.background}
  indicatorColor={colors.backgroundElement}
  labelStyle={{ selected: { color: colors.text } }}>
  
  <NativeTabs.Trigger name="index">
    <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/foto.jpg')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="explore">
    <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/explore.png')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

  {/* ---- SEUS NOVOS TÓPICOS ABAIXO ---- */}

  <NativeTabs.Trigger name="arte">
    <NativeTabs.Trigger.Label>Arte</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/explore.png')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="gastronomia">
    <NativeTabs.Trigger.Label>Gastronomia</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/explore.png')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="hobbies">
    <NativeTabs.Trigger.Label>Hobbies</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/explore.png')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="fe">
    <NativeTabs.Trigger.Label>Fé</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/explore.png')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

  <NativeTabs.Trigger name="culinaria">
    <NativeTabs.Trigger.Label>Culinária</NativeTabs.Trigger.Label>
    <NativeTabs.Trigger.Icon
      src={require('@/assets/images/tabIcons/explore.png')}
      renderingMode="template"
    />
  </NativeTabs.Trigger>

</NativeTabs>
  );
}
