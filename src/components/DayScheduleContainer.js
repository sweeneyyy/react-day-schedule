import React, { Component } from 'react';
import { ReactAgenda , ReactAgendaCtrl } from 'react-agenda';
import moment from 'moment';

const colors = {
  "color-1": "rgb(46, 204, 113)",
  "color-2": "rgb(230, 126, 34)",
  "color-3": "rgb(231, 76, 60)"
}

class DayScheduleContainer extends Component {
  constructor(props) {
    super(props);

    const date = '2018-11-14T08:00:00Z';
    const initialEventData = [
      {
        id: 1,
        startTime: '2018-11-14T16:00:00Z',
        endTime: '2018-11-14T18:00:00Z',
        name: 'Morning Event',
        classes: "color-1"
      }, {
        id: 2,
        startTime: '2018-11-14T20:00:00Z',
        endTime: '2018-11-14T23:00:00Z',
        name: 'Afternoon Event',
        classes: "color-1"
      }, {
        id: 3,
        startTime: '2018-11-15T06:00:00Z',
        endTime: '2018-11-15T10:00:00Z',
        name: 'Evening Event',
        classes: "color-2"
      }, {
        id: 3,
        startTime: '2018-11-15T16:00:00Z',
        endTime: '2018-11-15T18:00:00Z',
        name: 'Next Day Event',
        classes: "color-3"
      }
    ];

    this.state = {
      startDate: date,
      items: initialEventData,
      selected: [],
      cellHeight: 30,
      showModal: false,
      locale: 'en',
      rowsPerHour: 2,
      numberOfDays: 1
    }
    this.handleCellSelection = this.handleCellSelection.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);
    this.handleRangeSelection = this.handleRangeSelection.bind(this);
  }

  // handleEventUpdate(event) {

  // }
  componentDidMount() {
    // this.setState({ items: items });
    console.log(this.state.items);
    console.log(this.state.startDate)
  }

  handleCellSelection(item) {
    console.log('handleCellSelection', item)
  }

  handleItemEdit(item) {
    console.log('handleItemEdit', item)
  }

  handleRangeSelection(item) {
    console.log('handleRangeSelection', item)
  }

  render() {
    const {
      startDate,
      items
    } = this.state;

    const maxDate = moment(startDate).add(2, 'd');

    const AgendaItem = function(props) {
      console.log('item component props' , props);
      return <div style={{display: 'block', position: 'absolute', background: '#FFF'}}>{props.item.name}</div>
    }

    return (
      <ReactAgenda
        items={items}
        minDate={startDate}
        maxDate={maxDate}
        disablePrevButton={false}
        startDate={startDate}
        cellHeight={this.state.cellHeight}
        locale={this.state.locale}
        numberOfDays={this.state.numberOfDays}
        rowsPerHour={this.state.rowsPerHour}
        itemComponent={AgendaItem}
        itemColors={colors}
        autoScale={false}
        fixedHeader={true}
        onItemEdit={this.handleItemEdit}
        onCellSelect={this.handleCellSelection}
        onRangeSelection={this.handleRangeSelection} />
    );
  }
}


export default DayScheduleContainer;
