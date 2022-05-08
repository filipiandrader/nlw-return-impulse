import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Copyright } from '../copyright';
import { Option } from '../option';
import { FeedbackType } from '../widget';

import { feedbackTypes } from '../../utils/feedbackTypes'
import { styles } from './styles';
import { X } from 'phosphor-react-native';
import { theme } from '../../theme';

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
  onBottomSheetClose: () => void
}

export function Options({ onFeedbackTypeChanged, onBottomSheetClose }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBottomSheetClose}>
          <X
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
            style={styles.image}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text
            style={styles.text}
          >
            Deixe seu feedback
          </Text>
        </View>
      </View>

      <View
        style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </View>

      <View style={styles.copyright}>
        <Copyright />
      </View>
    </View >
  );
}