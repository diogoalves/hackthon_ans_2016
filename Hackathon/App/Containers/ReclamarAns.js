// @flow

import React from 'react'
import { ScrollView, Text, WebView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/ReclamarAnsStyle'

class ReclamarAns extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <WebView
        source={{uri: 'http://www.ans.gov.br/planos-de-saude-e-operadoras/espaco-do-consumidor/acompanhamento-de-solicitacoes'}}
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

export default connect(mapStateToProps, mapDispatchToProps)(ReclamarAns)
