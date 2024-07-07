import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importe os ícones que você deseja usar


import { Container, Nav_header } from "./styles";

//img
import Logo_Header from '../../assets/logo.jpg'


export function Header(){
  return(
    <Container>
      <div className="wrapper_logo_header">
        <img src={Logo_Header} alt="logo laços meus" />
        <span>Laços Meus</span>
      </div>

      <div className="wrapper_nav_social">
        <Nav_header>
          <nav className='nav_header'>
            <ul>
              <li><span>Home</span></li>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              {/* <li><span>Prazo de Produção e envio</span></li> */}
              <li><span>Contato</span></li>
            </ul>
          </nav>
        </Nav_header>


        <div className="social_header">
          <FaInstagram/>
          <FaFacebook/>
          <FaTwitter/>
        </div>
      </div>
    </Container>
  )
}
