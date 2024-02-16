'use client';

import React from 'react';
import propTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Ratio from 'react-bootstrap/Ratio';
import Image from 'next/image';
import Link from 'next/link';
import speakerslist from '@/data/speakers.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import Avatar from '@/app/[lang]/speakers/images/avatar.jpeg';

const KeynoteCards = () => {
  return (
    <section className="keynotes">
      <div className="keynotes-bg">
        <Container>
          <Row>
            <Col>
              <div className="title-container text-center">
                <h2>
                  <span className="bold">Keynote Speakers</span>
                </h2>
                <p className="text-center">We are the new voices</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="keynote-card">
            <Col xs={6} md={4}>
              <Ratio aspectRatio="1x1">
                <Image
                  className="img-keynote"
                  src=""
                  alt="Keynote Image"
                  width={300}
                  height={300}
                />
              </Ratio>
            </Col>
            <Col>
              <Row>
                <Col xs={12} md={9}>
                  <h2>
                    <span className="bold">John Doe</span>
                    <span className="flag">🇧🇪 </span>
                  </h2>
                </Col>
                <Col>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam
                  laoreet sollicitudin. Donec euismod condimentum mauris, nec luctus nisl
                </p>
              </Row>
              <Row>
                <Col>
                  <a href="#">More info</a>
                </Col>
                <Col className="text-border">The new age in fintech | 4 Junio 2024</Col>
              </Row>
            </Col>
          </Row>
          <Row className="keynote-card card-reverse">
            <Col xs={6} md={4}>
              <Ratio aspectRatio="1x1">
                <Image
                  className="img-keynote"
                  src=""
                  alt="Keynote Image"
                  width={300}
                  height={300}
                />
              </Ratio>
            </Col>
            <Col>
              <Row className="items-reverse">
                <Col xs={12} md={9}>
                  <h2 className="title text-right">
                    <span className="bold">John Doe </span>
                    <span className="flag">🇧🇪</span>
                  </h2>
                </Col>
                <Col>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
                    </div>
                  </a>
                </Col>
              </Row>
              <Row>
                <p className="text-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam
                  laoreet sollicitudin. Donec euismod condimentum mauris, nec luctus nisl
                </p>
              </Row>
              <Row className="items-reverse">
                <Col className="text-right">
                  <a href="#">More info</a>
                </Col>
                <Col className="text-border">The new age in fintech | 4 Junio 2024</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default KeynoteCards;

// const Speakers = ({ params: { lang } }) => {
//   return (
//     <>
//       {speakerslist.map(
//         (speaker) =>
//           speaker.type === 'keynote' && (
//             <Row key={speaker.id}>
//               <Col md={4}>
//                 <Link href={`/keynotes/${speaker.id}`} locale={lang}>
//                   <Image src={Avatar} width={200} height={200} alt="Picture of the author" />
//                 </Link>
//               </Col>
//               <Col md={8}>
//                 <Link href={`/keynotes/${speaker.id}`} locale={lang}>
//                   <h1>
//                     {speaker.first_name} {speaker.last_name}
//                   </h1>
//                   <h2>{speaker.affiliation}</h2>
//                 </Link>
//                 <Link href={`https://twitter.com/${speaker.twitter}`} target="_blank">
//                   <span>{speaker.twitter}</span>
//                 </Link>
//               </Col>
//             </Row>
//           )
//       )}
//     </>
//   );
// };

// Speakers.propTypes = {
//   params: propTypes.shape({
//     lang: propTypes.string.isRequired
//   }).isRequired
// };

// export default Speakers;
