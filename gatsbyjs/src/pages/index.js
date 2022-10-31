import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Particles from 'react-particles-js';
import LanguageProvider from '@deadline/common/LanguageSwitcher/context/language.provider';
import LanguageSwitcher from '@deadline/common/LanguageSwitcher';
import languageConfig from '@deadline/common/LanguageSwitcher/config';
import NormalClock from '@deadline/components/NormalClock/NormalClock';
import MainWrapper, {
  MainContentSection,
  NormalClockWrapper,
  FooterSection,
  ContactFormWrap,
  LogoImageContainer,
  ParticleContainer,
  ContentWrapper,
  NotifyButton,
} from '@deadline/common/ui/eleven.style';
import LogoImage from '@deadline/common/static/images/logoOne.png';
import { SOCIAL_PROFILES } from '@deadline/common/data/social-share/eleven';
// Language translation files
import localEng from '@deadline/common/data/translation/eleven/en.json';
import localAr from '@deadline/common/data/translation/eleven/ar.json';
import localEs from '@deadline/common/data/translation/eleven/es.json';
import localDe from '@deadline/common/data/translation/eleven/de.json';
import localCn from '@deadline/common/data/translation/eleven/zh.json';
import localIl from '@deadline/common/data/translation/eleven/he.json';
import { Container, SocialShare, Seo } from '../components';
import ContactForm from '@deadline/components/ContactForm/ContactForm';
import Button from '@deadline/components/Button';
import Particle1 from '@deadline/common/static/images/0x-01.png';
import Particle2 from '@deadline/common/static/images/0x-02.png';
import Particle3 from '@deadline/common/static/images/0x-03.png';
import Particle4 from '@deadline/common/static/images/0x-04.png';
import Particle5 from '@deadline/common/static/images/0x-05.png';
import Particle6 from '@deadline/common/static/images/0x-06.png';
import Particle7 from '@deadline/common/static/images/0x-07.png';
// Language translation Config
const messages = {
  en: localEng,
  ar: localAr,
  es: localEs,
  de: localDe,
  zh: localCn,
  he: localIl,
};

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 14,
              density: { enable: true, value_area: 1400 },
            },

            shape: {
              type: ['images'],
              images: [
                {
                  src: `${Particle1}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${Particle2}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${Particle3}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${Particle4}`,
                  width: 50,
                  height: 50,
                },
                {
                  src: `${Particle5}`,
                  width: 50,
                  height: 50,
                },

                {
                  src: `${Particle6}`,
                  width: 50,
                  height: 50,
                },

                {
                  src: `${Particle7}`,
                  width: 50,
                  height: 50,
                },
              ],
            },
            opacity: {
              value: 1,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

const IndexPage = () => {
  const [visible, setVisible] = useState(false);
  const toggleContact = () => {
    setVisible(true);
  };

  return (
    <LanguageProvider messages={messages}>
      <React.Fragment>
        <Seo
          title="0x | Blockchain Consulting"
          description="0xConsulting"
        />
        <MainWrapper>
          <ParticleContainer>
            <ParticlesComponent />
          </ParticleContainer>
          <LogoImageContainer>
            <Link href={'/'}>
              <a>
                <img src={LogoImage} alt="logo" />
              </a>
            </Link>
          </LogoImageContainer>
          <Container className="mainContainer">
            <MainContentSection>
              <img 
                src={'https://cryptologos.cc/logos/ethereum-eth-logo.svg'} 
                style={{
                  maxWidth:'25%',
                }}
              />
              <ContentWrapper>
                <p>
                  <FormattedMessage id="ticker" />
                </p>
                <h2>
                  <FormattedMessage id="mainMessage" />
                </h2>
                {visible ? (
                  <ContactFormWrap>
                    <ContactForm />
                  </ContactFormWrap>
                ) : (
                  ''
                )}

                {!visible ? (
                  <NotifyButton>
                    <Button
                      type="submit"
                      title="notifyText"
                      onClick={toggleContact}
                    />
                  </NotifyButton>
                ) : (
                  ''
                )}
              </ContentWrapper>
            </MainContentSection>
          </Container>
          <FooterSection>
            <SocialShare items={SOCIAL_PROFILES} />
            <p>
              <FormattedMessage id="copyrightText" />
            </p>
          </FooterSection>
        </MainWrapper>
        <LanguageSwitcher languageConfig={languageConfig} />
      </React.Fragment>
    </LanguageProvider>
  );
};

export default IndexPage;
