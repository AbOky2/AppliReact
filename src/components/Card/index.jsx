import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/color'

function Card({ label, title, picture }) {
  const CardLabel = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #5843e4;
  `
  const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
  `
  const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px #e2e3e9;
    }
  `

  return (
    <CardWrapper>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
        <CardLabel>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" height={80} width={80} />
        <span>{title}</span>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}
Card.defaultProps = {
  title: 'Le titre par defaut',
  label: 'Le label shiny agency',
}

export default Card
