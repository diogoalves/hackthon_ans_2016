// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  componentLabelContainer: {
    ...ApplicationStyles.darkLabelContainer
  },
  componentLabel: {
    ...ApplicationStyles.darkLabel
  },
})
