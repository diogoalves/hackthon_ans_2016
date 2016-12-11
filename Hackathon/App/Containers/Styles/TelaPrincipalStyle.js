// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo/2,
    width: Metrics.images.logo/2,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})
