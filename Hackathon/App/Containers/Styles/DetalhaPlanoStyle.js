// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },  ...ApplicationStyles.screen,
  componentLabelContainer: {
    ...ApplicationStyles.darkLabelContainer
  },
  componentLabel: {
    ...ApplicationStyles.darkLabel
  },

})
