import React from 'react'
import {Table as BtsTable, Container} from 'reactstrap'
import {Table} from '../../Models/table'
import PropTypes from 'prop-types';
import {IProps} from '../../Models/props'

export const CustomTable = (props:IProps) => {
  const {data} = props
  
  return (
    <Container>
    <BtsTable striped bordered>
    <thead>
      <tr>
        <th>Name</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      
    {data.map((val:Table) => (
      <tr key={val.id}>
          <td>{val.name}</td>
          <td>{val.body}</td>
      </tr>
    ))}
      </tbody>
      </BtsTable>
      </Container>
  )
}

CustomTable.prototype = {
  data: PropTypes.array
}


