import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row'
  },
  image: {
    marginTop: 3
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    paddingRight: 24
  },
  options: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  },
  copyright: {
    marginTop: 58
  }
});