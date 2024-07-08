import { Container } from "./styles.js";
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.png';

import { Header } from "../../components/Header";
import { MyCarousel } from "../../components/Carousel";
import { SectionCardMain1 } from "../../components/Section_card_main_01/index.jsx";
import { SectionCardMain2 } from "../../components/Section_card_main_02/index.jsx";
import { SectionCardMain3 } from "../../components/Section_card_main_03/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";

export default function Details() {
  return (
    <Container>
      <Header />
      <MyCarousel />

      <main>
         <SectionCardMain1 title="Laços e Tiaras">
          <div className="wrapperCard">
            <div className="box_card_main" id="boxCard1">
              <div className="img_main">
                <img src={img1} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard2">
              <div className="img_main">
                <img src={img2} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard3">
              <div className="img_main">
                <img src={img3} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard4">
              <div className="img_main">
                <img src={img4} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>
          </div>
        </SectionCardMain1>

      <SectionCardMain2 title="Laços e Tiaras">
          <div className="wrapperCard">
            <div className="box_card_main" id="boxCard1">
              <div className="img_main">
                <img src={img1} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard2">
              <div className="img_main">
                <img src={img2} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard3">
              <div className="img_main">
                <img src={img3} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard4">
              <div className="img_main">
                <img src={img4} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>
          </div>
        </SectionCardMain2>

         <SectionCardMain3 title="Laços e Tiaras">
          <div className="wrapperCard">
            <div className="box_card_main" id="boxCard1">
              <div className="img_main">
                <img src={img1} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard2">
              <div className="img_main">
                <img src={img2} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard3">
              <div className="img_main">
                <img src={img3} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>

            <div className="box_card_main" id="boxCard4">
              <div className="img_main">
                <img src={img4} alt="" />
                <div className="box"></div>
              </div>
              <p>Laço Marina | Tamanho RN, P, M</p>
              <span>R$ 49,99</span>
            </div>
          </div>
        </SectionCardMain3>
      </main>

      <Footer />
    </Container>
  );
}
