import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Stack, Button, Select, Text } from '@chakra-ui/react';

const AdvanceSearchAsesor = () => {
  return (
    <Stack
      mr={4}
      bg="white"
      py={6}
      px={6}
      shadow={'lg'}
      rounded={'lg'}
      display={{ base: 'none', xl: 'flex' }}
    >
      <Text fontWeight="bold" mb={2}>
        Busqueda Avanzada
      </Text>
      <Select fontSize="sm" size="lg" placeholder="Departamento">
        <option>Amazonas</option>
        <option>Tacna</option>
        <option>Ica</option>
        <option>Lima</option>
      </Select>
      <Select fontSize="sm" size="lg" placeholder="Provincia">
        <option>Lima</option>
        <option>Callao</option>
        <option>Barranca</option>
        <option>Cañete</option>
      </Select>
      <Select fontSize="sm" size="lg" placeholder="Distrito">
        <option>Lima</option>
        <option>Breña</option>
        <option>Comas</option>
        <option>Lince</option>
      </Select>
      <Flex justify="center">
        <Button mt={4} size="lg" colorScheme="red">
          Buscar
        </Button>
      </Flex>
    </Stack>
  );
};

AdvanceSearchAsesor.propTypes = {
  isDrawer: PropTypes.bool,
};

export default AdvanceSearchAsesor;
