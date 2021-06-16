import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@chakra-ui/button";
import { FormControl, Input, FormLabel } from "@chakra-ui/react";
import {
  Box,
  Text,
  Stack,
  Heading,
  Container,
  AspectRatio,
} from "@chakra-ui/layout";
import Modal from "../components/Modal";
import Catchap from "../components/Catchap";
import { useDisclosure } from "@chakra-ui/hooks";

import { FaPlay } from "react-icons/fa";

const BeAsesor = () => {
  const formRef = useRef();
  const modalHandler = useDisclosure();

  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box bg="gray.200">
        <Head>
          <title>Inmobiliara</title>
        </Head>

        <Box minH="550px">
          <Box
            w="full"
            h="70vh"
            mt="-82px"
            minH="550px"
            rounded="3xl"
            overflow="hidden"
            pos="relative"
          >
            <Image
              layout="fill"
              quality="100"
              objectFit="cover"
              src="/bannerasesor.png"
            />
            <Box w="full" h="full" pos="absolute" bg="rgba(0,0,0,0.5)"></Box>
          </Box>
          <Container
            pos="absolute"
            top={52}
            left={0}
            right={0}
            bottom={0}
            maxW="container.xl"
          >
            <div className="glass">
              <Heading
                mb={6}
                color="gray.100"
                lineHeight="shorter"
                letterSpacing="tight"
                fontWeight="extrabold"
                fontSize={{ base: "3xl", sm: "4xl" }}
              >
                <Text display="block" color="white" mb={{ base: 1 }}>
                  ¿Deseas unirte a nuestro equipo?
                </Text>
                <Text display="block" color="white">
                  Sé un Asesor RE/MAX.
                </Text>
              </Heading>
              <Stack
                mt={2}
                spacing={2}
                justifyContent={{ base: "center" }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button onClick={scrollToForm} size="lg" shadow="lg">
                  Sé un asesor
                </Button>
                <Button
                  size="lg"
                  shadow="lg"
                  colorScheme="red"
                  leftIcon={<FaPlay />}
                  onClick={() => modalHandler.onOpen()}
                >
                  Ver video
                </Button>
              </Stack>
            </div>
          </Container>
        </Box>
      </Box>
      <Box bg="gray.200">
        <Container maxW="container.lg" py={5}>
          <Stack spacing={5}>
            <Box
              p={8}
              w="full"
              bg="white"
              rounded="lg"
              borderWidth={1}
              borderColor="gray.300"
            >
              <Heading as="h3" mb={5}>
                Los asesores
              </Heading>
              <Text>
                Los asesores RE / MAX trabajan de forma autónoma, pero no están
                solos. Cuentan con el apoyo del Broker y de toda la Organización
                RE / MAX, reconocida en todo el mundo por desarrollar su propia
                cartera de clientes a cambio de las comisiones más altas del
                mercado. <br /> <br /> El asesor RE / MAX tiene todo lo que
                necesita para disfrutar de una carrera exitosa. Entrenamiento
                constante, tecnología revolucionaria, comisiones máximas y
                crecimiento constante. En RE / MAX, el único límite es su propia
                capacidad de trabajo.
              </Text>
            </Box>
            <Box
              p={8}
              w="full"
              bg="white"
              rounded="lg"
              borderWidth={1}
              borderColor="gray.300"
            >
              <Heading as="h3" mb={5} fontSize={{ base: "xl" }}>
                Formulario de contacto para ser asesor asociado de RE/MAX Perú
              </Heading>

              <Stack ref={formRef} mb={5}>
                <Stack direction={{ base: "column", sm: "row" }}>
                  <FormControl id="nombres" isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl id="apellidos" isRequired>
                    <FormLabel>Apellidos</FormLabel>
                    <Input />
                  </FormControl>
                </Stack>
                <Stack direction={{ base: "column", sm: "row" }}>
                  <FormControl id="direccion" isRequired>
                    <FormLabel>Direccion</FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl id="ciudad" isRequired>
                    <FormLabel>Ciudad</FormLabel>
                    <Input />
                  </FormControl>
                </Stack>
                <Stack direction={{ base: "column", sm: "row" }}>
                  <FormControl id="correo" isRequired>
                    <FormLabel>Correo</FormLabel>
                    <Input />
                  </FormControl>
                  <FormControl id="celular" isRequired>
                    <FormLabel>Celular</FormLabel>
                    <Input />
                  </FormControl>
                </Stack>
                <Box mx="auto" w="full">
                  <FormControl id="celular" isRequired>
                    <FormLabel>Catchap de seguridad</FormLabel>
                    <Catchap onChange={console.log} />
                  </FormControl>
                </Box>
              </Stack>
              <Button
                size="lg"
                colorScheme="teal"
                w={{ base: "full", sm: "unset" }}
              >
                Enviar
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Modal {...modalHandler}>
        <AspectRatio ratio={16 / 9} w="full">
          <iframe
            src="https://www.youtube.com/embed/d67NNpbhMuk"
            title="Propiedad"
            allowFullScreen
          />
        </AspectRatio>
      </Modal>
      <style jsx>
        {`
          .glass {
            width: 700px;
            text-align: center;
            padding-block: 5rem;
            padding-inline: 1rem;
            margin-inline: auto;
          }

          @media screen and (max-width: 826px) {
            .glass {
              width: 500px;
            }
          }
          @media screen and (max-width: 526px) {
            .glass {
              width: 90%;
              padding-block: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

{
  /* <Box
            px={4}
            py={20}
            mx="auto"
            w="600px"
            rounded="lg"
            className="glass"
            textAlign={{ base: "left", md: "center" }}
          > */
}

BeAsesor.getInitialProps = () => {
  return { dark: true };
};

export default BeAsesor;