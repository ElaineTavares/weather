import './Footer.css'
import whats from '../../src/assets/whats.svg'
import email from '../../src/assets/email.png'

export default function Footer() {
  return (
    <footer className="footer">
      <h4>Desenvolvido por Elaine Tavares</h4>
      <a className='email' href="mailto:elainetavares.dev@gmail.com" target='blank'>elainetavares.dev@gmail.com<img className='emaill' src={email} alt="" /></a>
      <a className='whatss' href="https://wa.me/5521984510746" target="_blank">Fale comigo no WhatsApp<img className='whats' src={whats} alt="" /></a>
    </footer>
  )
}
