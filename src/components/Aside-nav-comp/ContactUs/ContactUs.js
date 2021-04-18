import styled from '@emotion/styled'

const H1 = styled.h1`
  text-align: center;
  color: #234465;
  text-decoration: underline;
  padding: 6rem 0 1rem 0;
`
const H2 = styled.h2`
  padding: 1rem;
`
const H3 = styled.h3`
  margin: 0.5rem 0 2rem 0;
  font-size: 1.3rem;
`
const H4 = styled.h4`
  margin: 1rem;
  font-size: 1.1rem;
`
const GitProfile = styled.h2`
  padding: 3rem 24rem;
`

const ContactUs = () => (
  <div>
    <div>
      <H1>Contact Us Page</H1>
      <H2>Us, this is me Asen Geshev !</H2>
      <H3>If you want to contact me, here is my contact information:</H3>
      <H4>Email: gesheval@gmail.com</H4>
      <H4>Telefon: +359 887 65 85 29</H4>
      <GitProfile>
        I have other ready-made projects that you can view on my github profile at the following address:
        https://github.com/Shtekata
      </GitProfile>
    </div>
  </div>
)

export default ContactUs
