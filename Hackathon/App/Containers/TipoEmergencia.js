// @flow

import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton';


// Styles
import styles from './Styles/TipoEmergenciaStyle'

class TipoEmergencia extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
          <RoundedButton onPress={NavigationActions.emergencia}>
            PS Infantil
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.emergencia}>
            PS Adulto
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.emergencia}>
            PS Ortopédico
          </RoundedButton>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TipoEmergencia)
