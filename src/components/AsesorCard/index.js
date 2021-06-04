import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { RiWhatsappFill } from 'react-icons/ri';
import {
  StarIcon,
  PhoneIcon,
  AtSignIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Icon,
  Link,
  Image,
  Heading,
  SimpleGrid,
  IconButton,
  Text,
} from '@chakra-ui/react';

const AsesorCard = ({ simple, drawer, ...props }) => {
  return (
    <Box
      {...props}
      w="full"
      mb={simple ? 2 : 10}
      as="article"
      mx="auto"
      bg="white"
      shadow={!drawer && 'md'}
      borderWidth={!drawer && 1}
      borderRadius={!drawer && 'lg'}
      overflow="hidden"
      borderColor="gray.300"
      transition="all 0.3s ease"
      _hover={{ shadow: !drawer ? 'xl' : 'none' }}
    >
      <Box>
        <Image
          h={64}
          w="full"
          fit="cover"
          alt="avatar"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />

        <Box alignItems="center" p={4}>
          <Heading as="h1" fontSize="lg" fontWeight="semibold" mb={2}>
            Victoria Diaz (Asesor)
          </Heading>
          <Text>13 Propiedades</Text>
          <Box d="flex" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon key={i} color={i < 5 ? 'teal.500' : 'gray.300'} />
              ))}
            <Box as="span" ml="2" color="gray.600">
              {12} Opiniones
            </Box>
          </Box>
          <NextLink href="/propiedades">
            <Link
              mt={2}
              d="flex"
              w="full"
              color="blue.500"
              colorScheme="blue"
              alignItems="center"
            >
              Ver Propiedades
              <Icon as={ChevronRightIcon} />
            </Link>
          </NextLink>
        </Box>
      </Box>
      <SimpleGrid
        borderTopWidth="1px"
        borderBottomWidth={drawer && '1px'}
        templateColumns="repeat(3, 1fr)"
      >
        <IconButton
          variant={drawer && ''}
          as="a"
          target="_blank"
          rel="​noopener noreferrer"
          href="https://wa.me/+51999999999"
          rounded="none"
          color="gray.500"
          _hover={{ color: 'whatsapp.500' }}
          icon={<RiWhatsappFill fontSize={25} />}
        />
        <IconButton
          variant={drawer && 'ghost'}
          as="a"
          href="tel:+51999999999"
          rounded="none"
          color="gray.500"
          borderLeftWidth="1px"
          _hover={{ color: 'gray.700' }}
          icon={<PhoneIcon fontSize={20} />}
        />
        <IconButton
          variant={drawer && 'ghost'}
          as="a"
          rounded="none"
          color="gray.500"
          borderLeftWidth="1px"
          _hover={{ color: 'gray.700' }}
          href="mailto:vdiaz@example.com"
          icon={<AtSignIcon fontSize={20} />}
        />
      </SimpleGrid>
    </Box>
  );
};

AsesorCard.propTypes = {
  simple: PropTypes.bool,
  drawer: PropTypes.bool,
};

export default AsesorCard;