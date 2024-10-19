import logo2 from "../assets/logo2.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import logobank from "../assets/bank-mandiri-logo.png";

import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <>
    <hr className="mt-5" />
      <footer expand="lg" className="mt-1">
        <Container>
          <Row>
            <Col lg={4}>
              <img src={logo2} alt="" width="150px" />
              <p className="mt-3">&copy; 2024 Hansmade. A11 Rights Reserved</p>
            </Col>
            <Col lg={4}>
              <p className="judul-footer">Alamat</p>
              <p>
                Jalan Betawi I, No. 1872A, Perumnas Sako, Palembang, Sumatera
                Selatan, 30163
              </p>
              <p className="judul-footer mt-5">Social Media</p>
              <Row>
                <Col lg={4}>
                  <a href="">
                    <img src={instagram} alt="" className="me-1" />
                    Instagram
                  </a>
                </Col>
                <Col lg={4}>
                  <a href="">
                    <img src={whatsapp} alt="" className="me-1" />
                    WhatsApp
                  </a>
                </Col>
              </Row>
              <Col lg={6} className="mt-1">
                <a href="">
                  <img src={facebook} alt="" className="me-1" />
                  Facebook
                </a>
              </Col>
            </Col>
            <Col lg={4}>
              <Row>
                <p className="judul-footer">Support Payment</p>
                <img src={logobank} alt="" className="logobank" />
                <Col>
                  <p className="mt-4">
                    <strong>AN: </strong>Rizqiana Car Rental
                  </p>
                </Col>
              </Row>
              <p className="judul-footer mt-2">Kontak</p>
              <p>&#128222; 6288999001</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterComponent;
