import DefaultPicture from '../../../src/styles/logo192.png'
import Card from './../../components/Card/index'
import styled from 'styled-components'

const freelanceProfiles = [
  {
    name: 'Abdramane Issa',
    jobTitle: 'Full Stack Developer',
    picture: DefaultPicture,
  },
  {
    name: 'Oki',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Soumaine',
    jobTitle: 'Senior Software Engineer',
    picture: DefaultPicture,
  },
]
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}
export default Freelances
