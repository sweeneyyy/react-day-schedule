import React, { Component } from 'react';
import { ReactAgenda , guid } from 'react-agenda';
import moment from 'moment';

// set colors for event blocks
const colors = {
  "color-1": "rgb(46, 204, 113)",
  "color-2": "rgb(230, 126, 34)",
  "color-3": "rgb(231, 76, 60)",
  "color-4": "rgb(221, 160, 221)"
}

class DayScheduleContainer extends Component {
  constructor(props) {
    super(props);

    const now = new Date();

    // updated initial data set - need to go back and figure out how
    // react-agenda will parse original strings correctly - already using moment ?
    // drag/drop/resize would only work by replacing the id with the build in guid()
    const initialEventData = [
      {
        _id: guid(),
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 30),
        name: 'Morning Event',
        classes: "color-1"
     }, {
        _id: guid(),
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 30),
        name: 'Afternoon Event',
        classes: "color-4"
      }, {
        _id: guid(),
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 21, 30),
        name: 'Evening Event',
        classes: "color-2"
      }, {
        _id: guid(),
        startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 14, 0),
        endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 16, 30),
        name: 'Next Day Event',
        classes: "color-3"
      }
    ];

    this.state = {
      startDate: new Date(),
      items: initialEventData,
      selected: [],
      cellHeight: 30,
      showModal: false,
      locale: 'en',
      rowsPerHour: 2,
      numberOfDays: 1
    }
    this.handleCellSelection = this.handleCellSelection.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleItemSize = this.handleItemSize.bind(this);
  }

  componentWillReceiveProps(next, last) {
    if(next.items) {
      this.setState({ items: next.items })
    }
  }
  // drag and drop
  handleItemChange(items, item) {
    this.setState({ items: items })
  }
  // drag and resize
  handleItemSize(items, item) {
    this.setState({ items: items })
  }
  // grabs selected cell and is required
  handleCellSelection(item) {
    this.setState({ selected: [item] })
  }

  render() {
    const {
      startDate,
      items
    } = this.state;

    const maxDate = moment(startDate).add(2, 'd');
    // display event blocks with description and time
    const AgendaItem = function(props) {
      const startHour = moment(props.item.startDateTime).format("h:mm");
      const endHour = moment(props.item.endDateTime).format("h:mm");

      return <div style={{display: 'block', position: 'absolute'}}>
        <h3>{props.item.name}</h3>
        <h4>{startHour} to {endHour}</h4>
      </div>
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
        onChangeEvent={this.handleItemChange}
        onChangeDuration={this.handleItemSize}
        onCellSelect={this.handleCellSelection} />
    );
  }
}

export default DayScheduleContainer;
