import React from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {IoLocation} from "react-icons/io5";
import {BsTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {BiLogoFacebook, BiLogoGithub, BiLogoLinkedin} from "react-icons/bi";
import {AiFillGithub, AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {useLocation} from "react-router-dom";


const Footer = () => {

  const location = useLocation();

  return <>
    {
        !location.pathname.includes("admin") &&
        <footer id="footer" className="secondary-bg-color">
          <Container className="pt-3 pb-2">
            <Row>
              <Col>
                <h1 className="fs-1 text-center quinary-color">Rent a Car</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Subscribe Now</h4>
                    <p className="fs-6 text-white m-0 mb-1">There are many variations of passages of Lorem Ipsum available, Ipsum.</p>
                    <div className="form-group">
                      <Form.Control as="textarea" rows={1} placeholder="Enter Your Email"/>
                      <Button variant="primary" className="primary-bg-color border-0 w-100 mt-1">Subscribe</Button>
                    </div>
                  </Col>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Information</h4>
                    <p className="fs-6 text-white m-0">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                  </Col>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Helpful Links</h4>
                    <p className="fs-6 text-white m-0">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                  </Col>
                  <Col>
                    <h4 className="fs-4 text-white fw-700">Contact Us</h4>
                    <p className="fs-6 text-white m-0">
                  <span>
                    <IoLocation className="header-line-2-icon"/>&nbsp;
                    <a href="https://www.google.com/maps?sca_esv=72c864a1bde62694&output=search&q=Vinnytsia&source=lnms&fbs=AEQNm0C6QdndJT8tQD7YM9LCYy1QTTXjEwhgLkwCgXnCQeWtJla2t93nk7W9I4jO1wlCMJMTl2JHFgxi1qlFLRTeAgVjSe7yWKRrw4wSKPvBYhCPCB89afHmX6No65yCYHTUm7aQeWJS-eKHYrICWhg6zJ1NgmDNxTGIdFeniy8fatjA8YAbrkuMrvov34Oh8ULze2RF-hyLjt3uHf05MPSURYGU5g6sbxJ3PSuDLpe0hYP8GQQ2XKVvOYj3fmQlB8GYtgnIlluZ&entry=mc&ved=1t:200715&ictx=111" target="_blank" className="text-white">Vinnytsia</a>
                  </span>
                      <br/>
                      <span>
                    <BsTelephoneFill size="0.9em" className="header-line-2-icon"/>&nbsp;
                        <a href="tel:+380683412368" target="_blank" className="text-white">(068) 341-2368</a>
                  </span>
                      <br/>
                      <span>
                    <GrMail className="header-line-2-icon"/>&nbsp;
                        <a href="mailto:aztec007.2004@gmail.com" target="_blank" className="text-white">aztec007.2004@gmail.com</a>
                  </span>
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li><a href="https://github.com/rostislav3110" target="_blank"><BiLogoGithub/></a></li>
                        <li><a href="https://www.linkedin.com/in/%D1%80%D0%BE%D1%81%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%BA%D1%83%D1%80%D0%B6%D1%96%D0%B9-827375287/" target="_blank"><BiLogoLinkedin/></a></li>
                        <li><a href="https://www.instagram.com/rostik0073/" target="_blank"><AiFillInstagram/></a></li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-white text-center fs-6 mt-2 mb-1">
                  {new Date().getFullYear()} All Rights Reserved. Developed & Designed by Rostislav
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
    }
    </>
};
export default Footer;