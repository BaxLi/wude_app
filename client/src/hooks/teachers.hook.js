import { useState, useEffect, useCallback, useMemo } from 'react'
import { useHttp } from './http.hook'

export const useTeachers = () => {
  const { request } = useHttp()

  const [loadingTeachers, setloadingTeachers] = useState(true)
  const [teachers, setteachers] = useState()

  // const loadTeachers=
  useMemo(async () => {
    const checkTeachers = async () => {
      // console.log('teachers.hook.js  called')
      if (!loadingTeachers) setloadingTeachers(true)
      try {
        const data = await request('/teachers/selectallteachers', 'GET')
        setteachers(data)
      } catch (err) {
        console.log('teacher error - >', err)
      }
      setloadingTeachers(false)
    }
    checkTeachers()
  }, [])
  return { teachers, loadingTeachers }
}
