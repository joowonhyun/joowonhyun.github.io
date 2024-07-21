import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useEffect, useRef, useState } from 'react'

const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const SubText = styled.div`
  font-size: 30px;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export default function Introduction() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(200 - Math.random() * 100) // Delta 범위를 좁힘
  const toRotate = ["I'm Frontend Developer"]
  const period = 1000
  const ticker = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    ticker.current = setInterval(() => {
      tick()
    }, delta)

    return () => {
      if (ticker.current) {
        clearInterval(ticker.current)
      }
    }
  }, [text, delta])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(100) // 삭제 속도를 일정하게 설정
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(200 - Math.random() * 100) // 초기 delta로 복귀
    }
  }
  return (
    <div>
      <ProfileImage>
        <StaticImage src="../../images/thumbnail.jpeg" alt="Profile Image" />
      </ProfileImage>

      <SubText>Nice to Meet You!</SubText>
      <MainText>{text}</MainText>
    </div>
  )
}
