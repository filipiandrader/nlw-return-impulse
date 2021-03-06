import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative'
  },
  removeIcon: {
    position: 'absolute',
    bottom: 2,
    right: 2
  },
  image: {
    width: 50,
    height: 50,
  }
});