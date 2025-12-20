import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchAllUsers } from '../api/fetchAllUsers'
import { UsersCards } from '../components/UsersCards'

function Users() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  return (
    <div>
      <h1 style={{ textAlign: 'center', }}>Users</h1>

      <UsersCards users={users.usersList} />
    </div>
  )
}

export default Users  