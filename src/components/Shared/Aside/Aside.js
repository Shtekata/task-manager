import {css} from '@emotion/react'
import {useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom'

const Aside = ({labels, onAsideItemClick}) => {
  const [index, setIndex] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (
      !location.pathname.includes('/home') &&
      !location.pathname.includes('/tasks/add') &&
      !location.pathname.includes('/old-tasks') &&
      !location.pathname.includes('/about') &&
      !location.pathname.includes('/musical') &&
      !location.pathname.includes('/contact-us') &&
      !location.pathname.includes('/ala-bala')
    ) {
      setIndex(null)
    }
  }, [index, location.pathname])

  return (
    <aside
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 1rem;
        max-height: 85vh;
      `}>
      {labels.map((x, i) => (
        <NavLink
          key={i}
          to={`/${x[0]}`}
          onClick={() => {
            onAsideItemClick(x[1])
            setIndex(x => i)
          }}
          css={css`
            width: 100px;
            border-left: 2px solid #4b61a1;
            border-right: 2px solid #4b61a1;
            margin: 11px auto;
            padding: 10px 0;
            border-radius: 50px;
            text-decoration: none;
            outline: none;
            background-color: aliceblue;
            &:hover {
              border-left: none;
              border-right: none;
              font-weight: bold;
              border-top: 2px solid #4b61a1;
              border-bottom: 2px solid #4b61a1;
              color: #ffa000;
              background-color: antiquewhite;
            }
          `}>
          {x[1]}
        </NavLink>
      ))}
      <style>{`
        .active {
          color: white;
          background-color: #4b61a1;
        }
      `}</style>
    </aside>
  )
}

export default Aside
