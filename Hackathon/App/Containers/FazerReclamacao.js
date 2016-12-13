// @flow

import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton';

// Styles
import styles from './Styles/FazerReclamacaoStyle'

class FazerReclamacao extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
          <RoundedButton onPress={NavigationActions.reclamarOuvidorias}>
            para Ouvidoria de sua Operadora
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.reclamarAns}>
            para ANS
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.reclamarReclameAqui}>
            o Reclama AQUI
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.reclamarReclameAqui}>
            Envie uma reclamação para todos os Canais
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

export default connect(mapStateToProps, mapDispatchToProps)(FazerReclamacao)
