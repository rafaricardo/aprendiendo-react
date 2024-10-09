import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernández',
  },
  {
    userName: 'rvelasquez',
    name: 'Rafael Velasquez',
  },
]

export function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <section className='App'>
      {
        users.map(user => {
          const { userName, name } = user
          return (
            <TwitterFollowCard 
              key={userName} 
              userName={userName} 
              formatUserName={formatUserName}
              name={name}
            />
          )
        })
      }
    </section>
  )
}