// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handlePrazosProcedimento = () => {
    this.toggleDrawer();
    NavigationActions.buscaPrazosProcedimentos();
  }

  handleReputacao = () => {
    this.toggleDrawer();
    NavigationActions.buscaQualidade();
  }

  handleReclamacao = () => {
    this.toggleDrawer();
    NavigationActions.fazerReclamacao();
  }

  handleP = () => {
    this.toggleDrawer();
    NavigationActions.buscaPlanos();
  }

  handlePH = () => {
    this.toggleDrawer();
    NavigationActions.escolheHospital();
  }

  handlePHV = () => {
    this.toggleDrawer();
    NavigationActions.escolheLimiteValor();
  }


  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Prazos de Procedimentos' onPress={this.handlePrazosProcedimento} />
        <DrawerButton text='Reputação Operadoras' onPress={this.handleReputacao} />
        <DrawerButton text='Faça uma Reclamação' onPress={this.handleReclamacao} />
        <DrawerButton text='Planos de Saúde' onPress={this.handleP} />
        <DrawerButton text='Planos de Saúde para seu Hospital' onPress={this.handlePH} />
        <DrawerButton text='Planos de Saúde por Valor Máximo e Faixa Etária' onPress={this.handlePHV} />
{/*     <DrawerButton text='Sobre o aplicativo' onPress={this.handlePressComponents} />
        <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
        <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
        <DrawerButton text='Themes' onPress={this.handlePressTheme} />
        <DrawerButton text='Device Info' onPress={this.handlePressDevice} /> */}
      </ScrollView>
    )
  }
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
