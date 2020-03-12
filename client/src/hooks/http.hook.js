import { useState, useCallback, } from 'react'
export const useHttp = () => {
  const [loading, setloading] = useState(false)
  const [err, seterr] = useState(null)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

    // console.log("front - http.hook - url=", url);

    setloading(true)
    try {
      
      if (body) {
        body=JSON.stringify(body)
        headers['content-type']='application/json'
      }

      const resp = await fetch(url, {
        method,
        body,
        headers
      })

      const data = await resp.json()

console.log("fetched data=", data)

      setloading(false)
      if (!resp.ok) {
        seterr(data.message)
        throw new Error(data.message || 'http hook - fetch request return an error :( !')
      }
      return data
    } catch (e) {
        setloading(false)
        // console.log('http hook - fetch request CATCHED & return an error :( !', e)
        seterr(e.message)
        throw e
    }
  }, [])

  const clearError = () => {
    seterr(null)
  }
  return { loading, request, err, clearError }
}
