import styled from '@emotion/styled'

const H1 = styled.h1`
  text-align: center;
  color: #234465;
  text-decoration: underline;
  margin: 1% 0 2% 0;
`
const H2 = styled.h2`
  margin: 2.5rem;
`
const Music = () => (
  <div>
    <H1>Music Page</H1>
    <H2>
      This page is for relaxing in the moments when you are overworked, there are no ideas and you want new inspiration
      to come to you! :){' '}
    </H2>
    <H1>
      <iframe
        title='music'
        width='984'
        height='407'
        src='https://www.youtube.com/embed/BheqVR4zr84'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>
    </H1>
  </div>
)

export default Music
