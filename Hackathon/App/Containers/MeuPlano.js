// @flow

import React from 'react'
import { ScrollView, Text, WebView} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/MeuPlanoStyle'

class MeuPlano extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <WebView
        source={{uri: 'https://ans.gov.br/ESIB-web/consumidor.xhtml'}}
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

export default connect(mapStateToProps, mapDispatchToProps)(MeuPlano)
