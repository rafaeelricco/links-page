import { Card } from '@nextui-org/react'

export const CardProject = ({ src, alt, href }) => (
  <>
    <a href={href} target={'_blank'} rel="noreferrer">
      <Card
        css={{ borderRadius: '1.618rem', w: '100%', margin: '1rem 0 1rem 0' }}
      >
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 8, left: 8 }}>
          {/* <Col>
          <Text
            h4
            style={{
              fontSize: '1.3vh'
            }}
            color={color}
          >
            {text}
          </Text>
          <Text p>

          </Text>
        </Col> */}
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image src={src} width="100%" alt={alt} />
        </Card.Body>
      </Card>
    </a>
  </>
)
