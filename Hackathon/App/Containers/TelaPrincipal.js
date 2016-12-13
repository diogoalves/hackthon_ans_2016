// @flow

import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native';
import { Images, Fonts } from '../Themes';
import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux';
import RoundedButton from '../Components/RoundedButton';
// Styles
import styles from './Styles/TelaPrincipalStyle'

import { planos } from './planos';




class TelaPrincipal extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.mainContainer}>
{/*        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={[styles.sectionText, Fonts.style.h6]} >
              Busque aqui informações sobre prazos de atendimento dos
              procedimentos e cobertura do planos de saúde.
            </Text>
          </View>


          <RoundedButton onPress={NavigationActions.meuPlano}>
            Meu Plano
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.buscaPrazosProcedimentos}>
            Prazos de Procedimentos
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.buscaQualidade}>
            Reputação Operadoras
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.fazerReclamacao}>
            Faça uma Reclamação
          </RoundedButton>

          <RoundedButton onPress={() => NavigationActions.buscaPlanos({planos, filtros: {}})}>
            Planos de Saúde
          </RoundedButton>

          <RoundedButton onPress={() => NavigationActions.escolheHospital({planos, filtros: {}})}>
            Planos de Saúde para seu Hospital
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}> ️ </Text>
          </View>
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
