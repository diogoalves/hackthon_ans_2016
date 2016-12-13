// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.add('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

type FullButtonProps = {
  text: string,
  highlight: string,
  onPress: () => void,
  styles?: Object
}

//        <Text style={styles.buttonText}>{this.props.text}<Text style={{color: 'red'}}>123</Text></Text>
/*
          { highlight && {renderHighlightedText(text, highlight)}}
          { !highlight && {text}}

*/

export default class FullButton extends React.Component {
  props: FullButtonProps

  render () {
    const { text, highlight } = this.props;
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          { highlight ? <Text>{renderHighlightedText(text, highlight.toUpperCase())}</Text> : <Text>{text}</Text>}
        </Text>
       </TouchableOpacity>
    )
  }
}

const renderHighlightedText = (textInput, highlight) => {
  var tmpText = textInput;
  var pos = tmpText.indexOf(highlight);
  var ret = [];
  while (pos >= 0) {
    ret.push(<Text style={styles.buttonText}>{tmpText.substring(0, pos)}</Text>);
    ret.push(<Text style={{color: 'red'}}>{highlight}</Text>);
    tmpText = tmpText.substring(pos+highlight.length);
    pos = tmpText.indexOf(highlight);
  }
  ret.push(<Text style={styles.buttonText}>{tmpText.substring(0)}</Text>);
  return ret;
}
