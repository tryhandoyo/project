import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import arrow from "../assets/arrow-right.svg";
import calya from "../assets/calya-bg.png";
import innova from "../assets/innova-bg.png";
import avanza from "../assets/avanza-bg.png";
import whatsapp from "../assets/whatsapp.svg";
import FooterComponent from "../components/FooterComponent";

const LandingPage = () => {
  return (
    <>
      <NavbarComponent />
      <div id="banner">
        <Container>
          <div className="bg-banner">
            <Row>
              <Col className="p-4 ms-5">
                <h1>Rizqiana Car Rental</h1>
                <p>
                  Sewa Mobil Murah Terpercaya di Kota <br /> Palembang.
                </p>
                <p className="mt-5 pt-4">
                  Butuh Mobil Cepat ? Segera Hubungi Kami
                </p>
                <Button variant="outline-light" className="btn-banner">
                  Pesan Sekarang <img src={arrow} alt="" className="ms-1" />
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="d-flex justify-content-center text-center p-5 m-3">
        <h5>
          Mencari Layanan Sewa Mobil Yang Terpercaya Dan Terjangkau Untuk <br />
          Wilayah Palembang? Rizqiana Car Rental Solusinya!
        </h5>
      </div>

      <div id="armada" className="d-flex justify-content-center">
        <Container>
          <h4>armada</h4>
          <h2>Piihan Mobil Kami</h2>
          <p>Katalog Mobil - Rental Mobil Rizqiana</p>
          <Row className="mt-3">
            <Col lg={1} className="mobil-innova"></Col>
            <Col
              lg={10}
              className="d-flex justify-content-center align-items-center"
            >
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={innova}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>Mobil Innova</h5>
                    <p>
                      Lepas Kunci - Tersedia Automatic / Manual -
                      Rp.500.000,00/Hari
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={avanza}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Mobil Avanza</h5>
                    <p>
                      Lepas Kunci - Tersedia Automatic / Manual -
                      Rp.350.000,00/Hari
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={calya}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Mobil Calya</h5>
                    <p>Lepas Kunci - Tersedia Manual - Rp.250.000,00/Hari</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="tentang-kami">
        <Container>
          <div className="bg-tentang-kami">
            <Row>
              <Col>
                <h4>Tentang Kami</h4>
                <h2 className="mt-4">
                  Selamat datang di Rizqiana Car Rental <br /> solusi
                  transportasi Murah dan terpercaya di <br /> kota Palembang!
                </h2>
                <p>
                  Rental Mobil Rizqiana - Solusi Tepat Anda!, Kami melayani sewa
                  mobil Harian, Mingguan, <br /> Bulanan, Tahunan dan tentunya
                  Lepas Kunci (Ketentuan syarat berlaku). Kami juga <br />{" "}
                  menyediakan jasa Sopir dan penjemputan secara langsung.
                </p>
                <p className="mt-5 pt-4">Info lebih lanjut Hubungi :</p>
                <Button variant="outline-dark" className="btn-tentang-kami">
                  WhatsApp <img src={whatsapp} alt="" className="ms-1" />
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <FooterComponent />
    </>
  );
};

export default LandingPage;
