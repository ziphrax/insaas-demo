import * as React from 'react'
import { useCallback } from 'react'

import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/axios-hook'

export default () => {
  const { keycloak } = useKeycloak()

  const axiosInstance = useAxios('http://localhost:5000');
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get('/jwt/decode')
  }, [axiosInstance])

  return (
    <div>
      <div>User is {!keycloak?.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak?.authenticated && (
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  )
}