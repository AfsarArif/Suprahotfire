import { View, StyleSheet, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  // Get the background color based on the theme
  const backgroundColor =
    useThemeColor({ light: lightColor, dark: darkColor }, 'background') || '#D32F2F'; // Default to red if no theme color

  return (
    <View
      style={[styles.fullScreen, { backgroundColor }, style]} // Ensure full-screen layout
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1, // Ensure it occupies the full screen
  },
});
