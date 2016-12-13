// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image, Modal, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

import RoundedButton from '../Components/RoundedButton';

import { Images } from '../Themes';


// Styles
import styles from './Styles/DetalhaPlanoStyle'

class DetalhaPlano extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Operadora</Text>
          </View>
          <Text style={styles.sectionTextLeft} >
            {`PAME - Associação de Assistência Plena em Saúde`}
            {`\nRegistro ANS: 342408`}
            {`\nCNPJ: 01.591.800/0001-97`}
          </Text>

          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Plano de Saúde</Text>
          </View>
          <Text style={styles.sectionTextLeft} >
            {`Nome do produto: RUBI 230`}
            {`\nRegistro ANS: 470348131`}
            {`\nTipo de Contratação: Coletivo por adesão`}
            {`\nAbrangência Geográfica: Nacional`}
            {`\nCobertura: Ambulatorial e Hospitalar com obstetrícia`}
            {`\nComercialização: Liberada`}
            {`\nNão possui fator moderador`}
            {`\nModalidade Financiamento: Pré-estabelecido`}
          </Text>

          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Faixas Etárias</Text>
          </View>
          <Text style={styles.sectionTextLeft} >
            {`Até 18 anos até R$ 173,43`}
            {`\nDe 19 a 23 até R$ 203,63`}
            {`\nDe 24 a 28 até R$ 270,83`}
            {`\n...`}
            {`\nDe 54 a 58 até R$ 708,11`}
            {`\n59 ou mais até R$ 1040,49`}
          </Text>

          <RoundedButton onPress={NavigationActions.mapviewExample}>
            Mostrar Rede Credênciada no Mapa
          </RoundedButton>

          <RoundedButton onPress={NavigationActions.pop}>
            Voltar
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

export default connect(mapStateToProps, mapDispatchToProps)(DetalhaPlano)
