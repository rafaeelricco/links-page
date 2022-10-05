import Head from 'next/head'
import Script from 'next/script'
import styled from 'styled-components'
import { Container, Switch, Avatar, Text } from '@nextui-org/react'
import { SunIcon } from '../components/atoms/sunIcon'
import { MoonIcon } from '../components/atoms/moonIcon'
import useDarkMode from 'use-dark-mode'
import { GitHub } from '../components/atoms/github'
import { Instagram } from '../components/atoms/instagram'
import { WhatsApp } from '../components/atoms/whatsapp'
import { Linkdl } from '../components/atoms/linkdl'
import { CardProject } from '../components/atoms/card'

const CardsContainer = styled.div``

export default function Home() {
  const darkMode = useDarkMode(false)
  return (
    <div>
      <Head>
        <title>Rafael Ricco | Links</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Aqui você vai encontrar meus proncipais links e redes sociais."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg">
        <Container fluid>
          <div className="Container">
            <Switch
              className="switch"
              checked={darkMode.value}
              onChange={() => darkMode.toggle()}
              size="md"
              iconOn={<SunIcon fill="#ffff" />}
              iconOff={<MoonIcon fill="1px" />}
              css={{
                position: 'absolute',
                right: '5rem',
                margin: '1rem'
              }}
            />
            <Avatar
              src="/images/profile.png"
              color="gradient"
              bordered
              zoomed
              css={{
                width: '8rem',
                height: '8rem',
                margin: '4rem 0 0rem 0'
              }}
            />
            <Text
              h1
              size={32}
              css={{
                margin: '0'
              }}
            >
              Rafael Ricco
            </Text>
            <Text size={16} color="$gray500">
              Full Stack Developer | Designer
            </Text>
            <div className="icons">
              <a
                target="_blank"
                href="https://github.com/rafaeelricco"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-ricco-512b19228/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkdl />
              </a>
              <a
                href="https://www.instagram.com/ricco.dev/?hl=pt-br"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a href="http://wa.link/no53kg" target="_blank" rel="noreferrer">
                <WhatsApp />
              </a>
            </div>
            <div className="message">
              <Text
                size={24}
                css={{
                  margin: '0'
                }}
              >
                <strong>Olá visitante,</strong> seja bem-vindo!
              </Text>
              <Text
                size={16}
                css={{
                  textAlign: 'center',
                  margin: '0'
                }}
              >
                Sinta-se a vontade para acessar meus projetos.
              </Text>
            </div>
            <CardsContainer>
              <CardProject
                src={'/images/cover-vasconcelos.png'}
                key={1}
                href={'https://github.com/rafaeelricco/vasconcelos-agricola'}
              />
              <CardProject
                src={'/images/bella-cover.png'}
                alt={2}
                key={'bella'}
                href={'https://github.com/rafaeelricco/bella-vista-imoveis'}
              />
              <CardProject
                src={'/images/vasconcelos-api.png'}
                key={3}
                href={'https://github.com/rafaeelricco/vasconcelos-api'}
              />
              <CardProject
                src={'/images/django-cover.png'}
                key={4}
                href={'https://github.com/rafaeelricco/django-deploy'}
              />
              <CardProject
                src={'/images/carrinho-de-compras.png'}
                key={5}
                href={'https://github.com/rafaeelricco/shopping-cart-vuejs'}
              />
              <CardProject
                src={'/images/dr-tiago-m-souza.png'}
                key={6}
                href={'https://github.com/rafaeelricco/dr-tiago-nuxtjs'}
              />
            </CardsContainer>
          </div>
          <div className="copy">
            <Text
              color="$gray500"
              css={{
                fontSize: '0.8rem',
                position: 'absoulte',
                bottom: '0',
                left: '0',
                top: '0',
                right: '0',
                margin: '4rem 0px 2rem 0px'
              }}
            >
              &copy; 2022, Rafael Ricco.
            </Text>
          </div>
        </Container>
      </div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q6TP8E3QJL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Q6TP8E3QJL');
        `}
      </Script>
    </div>
  )
}
