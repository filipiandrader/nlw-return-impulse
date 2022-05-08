import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { X } from 'phosphor-react-native';

import successImage from '../../assets/success.png'
import { theme } from '../../theme';
import { Copyright } from '../copyright';

import { styles } from './styles';

interface Props {
  onSendAnotherFeedback: () => void
  onBottomSheetClose: () => void
}

export function Success({ onSendAnotherFeedback, onBottomSheetClose }: Props) {
  return (
    <View >
      <View style={styles.header}>
        <TouchableOpacity onPress={onBottomSheetClose}>
          <X
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Image
          source={successImage}
          style={styles.image}
        />

        <Text style={styles.title}>
          Agradecemos o feedback
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onSendAnotherFeedback}
        >
          <Text style={styles.buttonTitle}>
            Quero enviar outro
          </Text>
        </TouchableOpacity>

        <View style={styles.copyright}>
          <Copyright />
        </View>
      </View>
    </View>
  );
}