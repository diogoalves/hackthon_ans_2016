// @flow

import React from 'react'
import { ScrollView, Text, View, ListView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Kohana } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Metrics, Colors } from '../Themes'

import AlertMessage from '../Components/AlertMessage'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FullButton from '../Components/FullButton';

// Styles
import styles from './Styles/BuscaPlanosStyle'
import { planos } from './planos';

var g_searchTerm = '';

class BuscaPlanos extends React.Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(planos)
    }
  }

  _renderRow (row) {
    return (
      <FullButton onPress={() =>  NavigationActions.qualidadeDetalhada(row)} text={row.nome} highlight='AE' />
    )
  }

  componentWillReceiveProps (newProps) {
    if (newProps.results) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(planos)
      })
    }
  }

  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <ScrollView style={styles.container}>
          <View style={[{padding: 12, paddingTop: 55}, { backgroundColor: Colors.azulAns }]}>
            <Kohana
              style={[styles.input, { backgroundColor: '#f9f5ed' }]}
              label={'Digite nome do Plano'}
              iconClass={FontAwesomeIcon}
              iconName={'search'}
              iconColor={'#ddd'}
              iconColor={'#f4d29a'}
              labelStyle={{ color: '#91627b' }}
              inputStyle={{ color: '#91627b' }}
              onChangeText={(text) => (g_searchTerm = text)}
            />
          </View>
          <AlertMessage title='Operadora não encontrada' show={this._noRowData()} />
          <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={_renderRow2}
          pageSize={15}
          enableEmptySections
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(BuscaPlanos)

const _renderRow2 = (row) => {
  return (
    <FullButton onPress={NavigationActions.detalhaPlano} text={row} highlight={g_searchTerm} />
  )
}