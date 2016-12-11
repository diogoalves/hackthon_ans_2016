// @flow

import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native';
import { Images } from '../Themes';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux';
import RoundedButton from '../Components/RoundedButton';
// Styles
import styles from './Styles/TelaPrincipalStyle'

class TelaPrincipal extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Busque aqui informaçõe sobre prazos de antendimento dos
              procedimentos e cobertura do planos de saúde.
            </Text>
          </View>

          <RoundedButton onPress={NavigationActions.buscaPrazosProcedimentos}>
            Prazos de Procedimentos
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.componentExamples}>
            Plano de Saúde para seu Hospital
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.componentExamples}>
            Reputação Planos de Saúde
          </RoundedButton>


        </ScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(TelaPrincipal)