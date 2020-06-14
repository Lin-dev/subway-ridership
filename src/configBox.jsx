import React from 'react';
import { Segment, Header, Form, Menu, Checkbox, Divider } from "semantic-ui-react";
import { DateInput } from 'semantic-ui-calendar-react';

const significantDates = [
  ['2020-03-12'], // geatherings banned
  ['2020-03-16'], // NYC schools close
  ['2020-03-22'], // PAUSE
  ['2020-05-06'], // subway suspends overnight service
  ['2020-06-01'], // curfew
  ['2020-06-08']  // phase 1
]

class ConfigBox extends React.Component {
  render() {
    const { mode, handleModeClick, latestDate, selectedDate, compareWithAnotherDate, handleToggle, compareWithDate, handleDateInputChange } = this.props;
    return (
      <Segment inverted vertical className="configbox">
        <div>
          <Header inverted as='h1' color='blue'>
            NYC Subway Ridership
            <Header.Subheader>
              Based on turnstile usage data, updated weekly
            </Header.Subheader>
          </Header>
        </div>
        <Divider horizontal hidden />
        <Form inverted>
          <Menu inverted fluid widths={2} size='mini'>
            <Menu.Item name='entries' active={mode === 'entries'} onClick={handleModeClick} />
            <Menu.Item name='exits' active={mode === 'exits'} onClick={handleModeClick} />
          </Menu>
          <DateInput
            placeholder='Date'
            closable
            inlineLabel
            clearable={false}
            label='Date'
            name='selectedDate'
            dateFormat='YYYY-MM-DD'
            minDate='2020-01-01'
            maxDate={latestDate}
            value={selectedDate}
            onChange={handleDateInputChange}
            marked={significantDates.map((d) => new Date(`${d}Z-04:00`))}
            markColor='blue'
            popupPosition='bottom center'
            size='mini'
          />
          <Checkbox label='Compare with another date' name='compareWithAnotherDate' checked={compareWithAnotherDate} onChange={handleToggle} />
          <DateInput
            className='compare-date-input'
            placeholder='Compare with Date'
            closable
            inlineLabel
            clearable={false}
            disable={selectedDate}
            name='compareWithDate'
            dateFormat='YYYY-MM-DD'
            minDate='2020-01-01'
            maxDate={latestDate}
            value={compareWithDate}
            onChange={handleDateInputChange}
            marked={significantDates.map((d) => new Date(`${d}Z-04:00`))}
            markColor='blue'
            popupPosition='bottom center'
            disabled={!compareWithAnotherDate}
            size='mini'
          />
        </Form>
      </Segment>
    )
  }
}

export default ConfigBox;