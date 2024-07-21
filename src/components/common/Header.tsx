import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const Title = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`
const Menu = styled.div`
  display: flex;
  gap: 15px;
  font-size: 36px;

  & > a {
    display: flex;
    color: initial;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <Title to="/">Joowon Hyun</Title>
      <Menu>
        <a href="https://github.com/joowonhyun" target="_blank">
          <AiFillGithub />
        </a>
      </Menu>
    </Wrapper>
  )
}
