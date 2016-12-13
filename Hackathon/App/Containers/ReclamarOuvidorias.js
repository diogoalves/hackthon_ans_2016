// @flow

import React from 'react'
import { ScrollView, Text, WebView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ReclamarOuvidoriasStyle'

class ReclamarOuvidorias extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <WebView
        source={{uri: 'http://www.ans.gov.br/aans/ouvidoria/lista-de-ouvidorias-privadas-cadastradas/index.php?option=com_ouvidoria&view=ouvidoria&view=ouvidoria&task=search&origin=aHR0cDovL3d3dy5hbnMuZ292LmJyL2FhbnMvb3V2aWRvcmlhL291dmlkb3JpYXMtZG9zLXBsYW5vcy1kZS1zYXVkZS9saXN0YS1kZS1vdXZpZG9yaWFzLXByaXZhZGFzLWNhZGFzdHJhZGFz&start=390'}}
        style={{marginTop: 20}}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReclamarOuvidorias)
