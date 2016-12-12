// @flow

import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Image } from 'react-native'
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
import styles from './Styles/PrazoDetalhadoStyle'

// I18n
import I18n from 'react-native-i18n'


const LegendaTipoPlano = ({tipo}) => {
  switch(tipo) {
    case 'OD': return <Text style={styles.sectionText} >Odontológico</Text>;
    case 'AMB': return <Text style={styles.sectionText} >Ambulatorial</Text>;
    case 'HCO': return <Text style={styles.sectionText} >Hospitalar Com Obstetrícia</Text>;
    case 'HSO': return <Text style={styles.sectionText} >Hospitalar Sem Obstetrícia</Text>;
    case 'REF': return <Text style={styles.sectionText} >Referência</Text>;
    default: return null;
  }
}

class PrazoDetalhado extends React.Component {

  render () {
    const { nome, valor: { tipoPlanos, prazoEletivo, ehPac, possuiDut, prazoHospitalizado, prazoEmergencia } } = this.props;
    return (
      <View style={styles.mainContainer}>
{/*        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' /> */}

        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText} >
              {nome}
            </Text>
          </View>
          <Text style={styles.sectionText} >
            {prazoEletivo}
          </Text>
          <View style={styles.componentLabelContainer}>
            {(tipoPlanos.length === 1) ?
              <Text style={styles.componentLabel}>Coberto pelo Plano</Text>
            : <Text style={styles.componentLabel}>Coberto pelos Planos</Text>}
          </View>
          {tipoPlanos.map( e => <LegendaTipoPlano key={e} tipo={e} />)}
          {ehPac && <Text style={styles.sectionText}>Procedimento é de Maior Complexidade.</Text>}
          {possuiDut ? <Text style={styles.sectionText}>{possuiDut}</Text> : null }
          <Text style={styles.sectionText} >
            Se hospitalizado: {prazoHospitalizado}
          </Text>
          <Text style={styles.sectionText} >
            Se emergência: {prazoEmergencia}
          </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(PrazoDetalhado)
