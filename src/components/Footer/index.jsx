import { Container } from "./styles";

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importe os ícones que você deseja usar


export function Footer(){
  return (
    <Container>
      <div className="wrapper-footer">
        <div className="wrapper-box-footer">
          <h1>Laços Meus</h1>
          <div className="wrapper-sections">
            <div className="box-section">
              <h3>Company info</h3>
                <ul>
                  <li>Quem somos</li>
                  <li>Quem somos</li>
                  <li>Quem somos</li>
                  <li>Quem somos</li>
                </ul>
            </div>

            <div className="box-section">
              <h3>Produtos</h3>
                <ul>
                  <li>Produto A</li>
                  <li>Produto A</li>
                  <li>Produto A</li>
                  <li>Produto A</li>
                </ul>
            </div>

            <div className="box-section">
              <h3>Help & Support</h3>
                <ul>
                  <li>Suporte</li>
                  <li>Suporte</li>
                  <li>Suporte</li>
                  <li>Suporte</li>
                </ul>
            </div>

            <div className="box-section">
              <h3>Contact</h3>
                <ul>
                  <li> <a href="tel:+5585985350707"> (85) 85 98535-0707</a></li>
                  <li><a href="mailto:contato@lacosmeus">contato@lacosmeus.com</a></li>
                </ul>
            </div>
          </div>
        </div>

        <div className="wrapper-box-social">
          <div className="social-footer">
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
          </div>
        </div>


      </div>
      <div className="footer-info">
        <span> Copyright Laços Meus - 2024. Todos os direitos reservados. </span>
      </div>
    </Container>
  )
}