import React, { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { IconButton } from '@chakra-ui/button';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import {
  Box,
  Text,
  Flex,
  Stack,
  Badge,
  HStack,
  Divider,
  LinkBox,
} from '@chakra-ui/layout';
import { Avatar } from '../tools';
import { StarIcon } from '@chakra-ui/icons';

const PropertyCard = ({ i, fullW }) => {
  const [isLike, setIsLike] = useState(false);
  const w = { base: '290px', ms: '300px', xl: '350px' };

  return (
    <NextLink href={`/propiedades/${i}`}>
      <LinkBox as="article" w="100%">
        <Box
          p={3}
          mb={4}
          mx="auto"
          bg="white"
          shadow="md"
          borderWidth={1}
          borderRadius="lg"
          borderColor="gray.300"
          maxW={fullW ? { base: '100%', ms: '95%' } : w}
        >
          <Box pos="relative">
            <Box w={{ base: 280, ms: 290, xl: 340 }} h={{ base: 250 }}>
              <Image src="/casa1_cp.webp" layout="fill" />
            </Box>
            <HStack pos="absolute" top={2} left={2} w="100%">
              <Badge colorScheme="green">Nueva</Badge>
              <Badge colorScheme="blue">Venta</Badge>
            </HStack>
            <IconButton
              size="sm"
              right={2}
              bottom={2}
              pos="absolute"
              opacity={isLike ? 1 : 0.7}
              color={isLike ? 'red.600' : ''}
              onClick={() => setIsLike(!isLike)}
              _hover={{ opacity: 1, color: 'red.600' }}
              icon={isLike ? <BsHeartFill /> : <BsHeart />}
            />
          </Box>
          <Box py={4}>
            <Box mb={4}>
              <Text fontSize="sm">Casa {i}</Text>
              <Text fontSize="sm">Breña</Text>
              <Text fontWeight="700">S/ 200.000,00</Text>
              <Text fontSize="sm">Av. Coronel Portillo #1088.</Text>
            </Box>

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {4} Cuartos &bull; {4} Baños
            </Box>

            <Box d="flex" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    fontSize="sm"
                    key={i}
                    color={i < 4 ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {33} Opiniones
              </Box>
            </Box>
          </Box>
          <Divider />
          <Flex justify="space-between" alignItems="center" pt={2}>
            <Flex alignItems="center">
              <Box w={'50px'} h={'50px'}>
                <Avatar
                  width={50}
                  height={50}
                  alt="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              </Box>
              <Text ml={1} fontSize="sm">
                Dan Abrahmov
              </Text>
            </Flex>
            <Text fontSize="sm">hace 1 año</Text>
          </Flex>
        </Box>
      </LinkBox>
    </NextLink>
  );
};

PropertyCard.propTypes = {
  i: PropTypes.number,
  fullW: PropTypes.bool,
};

export default PropertyCard;
