// @flow

import React from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
// For empty lists
import AlertMessage from '../Components/AlertMessage'
// Styles
import styles from './Styles/BuscaPrazosProcedimentosStyle'

import RoundedButton from '../Components/RoundedButton';
import FullButton from '../Components/FullButton';

import { Actions as NavigationActions } from 'react-native-router-flux';



class BuscaPrazosProcedimentos extends React.Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    this.state = {
      dataSource: ds.cloneWithRows(props.results)
    }
  }

  /* ***********************************************************
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (searchTerm) {
    return (
      <FullButton onPress={() => NavigationActions.prazoDetalhado(searchTerm)} text={searchTerm.nome} />
    )
  }


  /* ***********************************************************
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
  *************************************************************/
  componentWillReceiveProps (newProps) {
    if (newProps.results) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.results)
      })
    }
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Procedimento não encontrado, tente algo mais genérico' show={this._noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          pageSize={15}
          enableEmptySections
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.search.searchTerm,
    results: state.search.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BuscaPrazosProcedimentos)
