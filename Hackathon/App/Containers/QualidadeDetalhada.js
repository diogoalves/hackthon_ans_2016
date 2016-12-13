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

import { buscaIndices, acreditacao, reclameAqui } from '../Redux/indicesQualidade'


// Styles
import styles from './Styles/QualidadeDetalhadaStyle'

// I18n
import I18n from 'react-native-i18n'


class QualidadeDetalhada extends React.Component {
  render () {
    const { nome, reg, benificiarios, idss, modalidade } = this.props;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Identificação</Text>
          </View>
          <Text style={styles.sectionText} >
            {`${nome} \nRegistro ANS: ${reg}`}
          </Text>

          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Características</Text>
          </View>
          <Text style={styles.sectionText} >
            {`Modalidade: ${modalidade}\nNúmero médio benificiarios: ${benificiarios}`}
          </Text>

          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Índices de Qualidade onde é citada</Text>
          </View>
          <Text style={styles.sectionText} >
            {`Qualificação ANS (IDSS): ${idss}`}
          </Text>

          {acreditacao.some((e) => e.nome.contains(reg)) &&  <Text style={styles.sectionText}>Selo de Acreditação ANS</Text>}



          <View style={styles.componentLabelContainer}>
            <Text style={styles.componentLabel}>Índices de Reclamações onde é citada</Text>
          </View>
          { buscaIndices(reg).length > 0 ?
            <Text style={styles.sectionText} >
              {buscaIndices(reg).map((e) => e.tipo + '\n')}
            </Text>
          : <Text style={styles.sectionText} >
              Não aparece nos índices de reclamações pesquisados.
            </Text>
          }


          { buscaIndices(reg).some((e) => e.tipo == "Site Reclame Aqui") ?
            <RoundedButton onPress={geraFuncaoLink(reg)}>
              Ver Reclame Aqui
            </RoundedButton>
           : null }

          <RoundedButton onPress={NavigationActions.pop}>
            Voltar
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

export default connect(mapStateToProps, mapDispatchToProps)(QualidadeDetalhada)


const geraFuncaoLink = (reg) => {
  const link = reclameAqui.filter((e) => e.reg == reg)[0].link;
  return () => NavigationActions.telaWeb(link);
}
