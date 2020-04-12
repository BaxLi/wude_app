import React from 'react'
import { Card, Table } from 'react-bootstrap'
export const UserInfoTable = ({ user }) => {
    const { name, family, weight, height, gender } = user
  return (
    <Card>
      <Table>
        <tbody>
          <tr>
            <td>User Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>User Family</td>
            <td>{family}</td>
          </tr>
          <tr>
            <td>User weight</td>
            <td>{weight}</td>
          </tr>
          <tr>
            <td>User height</td>
            <td>{height}</td>
          </tr>
          <tr>
            <td>User gender</td>
            <td>{gender ? 'M' : 'F'}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}
