import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import options from '../../assets/name'
import data from '../../assets/data2'
import { Line } from 'react-chartjs';
import { Header, Table } from 'semantic-ui-react'

import styles from './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }){
    this.setState({ items: value })
  }

  render() {
    console.log(data[0]["name"].split(' ').join(''))
    console.log(data[0]["data"])
    // <Line data={item["data"]} />

    return(
      <div className="Home">
        <div className="Search">
        <h1>Economic Projections</h1>
        <Dropdown
          placeholder='Sector'
          fluid multiple search selection
          options={options}
          onChange={this.handleChange}
        />
        </div>
          <div className="Table">
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={3} className="TableName">Name</Table.HeaderCell>
                <Table.HeaderCell width={1}>Current_Employment(2016)</Table.HeaderCell>
                <Table.HeaderCell width={1}>Employment_Projection(2040)</Table.HeaderCell>
                <Table.HeaderCell>Trend From 2001 to 2040</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {data.map((item, i) => this.state.items.includes(item["name"]) ?
              <Table.Row>
                <Table.Cell  width={3}>
                  {item["name"]}
                </Table.Cell>
                <Table.Cell width={1}>
                  {item["data"][16].split('.')[0]}
                </Table.Cell>
                <Table.Cell width={1}>
                  {item["data"][38].split('.')[0]}
                </Table.Cell>
                <Table.Cell>
                  <iframe className="chart" src={`/assets/${item["name"].split(' ').join('')}.html`}></iframe>
                </Table.Cell>
              </Table.Row> : null
            )}
            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}

export default Home
