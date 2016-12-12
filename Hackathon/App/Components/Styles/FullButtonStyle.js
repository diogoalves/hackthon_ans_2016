// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.azulAns,
    borderBottomColor: Colors.azulAns,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.snow
  },
  buttonText: {
    margin: 18,
    textAlign: 'left',
    color: Colors.panther,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
