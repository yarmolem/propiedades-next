import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, SimpleGrid } from '@chakra-ui/layout'
import { Button, IconButton } from '@chakra-ui/button'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { motion } from 'framer-motion'

import { stagger } from '../../motions/stagger'
import { fadeInUp } from '../../motions/fadeInUp'

const AsesorCard = dynamic(() => import('../AsesorCard'), { ssr: false })

const AsesoresList = ({ asesores, setVariables }) => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    setVariables((v) => ({
      ...v,
      asesor: text
    }))
    setText('')
  }

  return (
    <Box flex={1} d="flex" flexDir="column" justifyContent="flex-start">
      <motion.div variants={fadeInUp}>
        <SimpleGrid
          mb={6}
          bg="white"
          shadow="lg"
          rounded="lg"
          align="center"
          p={{ base: 2, xl: 4 }}
          gap={{ base: 2, md: 6 }}
          justify="space-between"
          templateColumns={{
            base: 'minmax(0, 1fr)',
            sm: 'minmax(0, 2fr) 150px'
          }}
        >
          <InputGroup>
            <Input
              value={text}
              name="search"
              placeholder="Buscar asesor"
              onChange={({ target: { value } }) => setText(value)}
            />
            <InputRightAddon>
              <IconButton onClick={handleSubmit} icon={<SearchIcon />} />
            </InputRightAddon>
          </InputGroup>

          <Menu ml={6}>
            <MenuButton
              as={Button}
              fontSize={{ base: 'sm' }}
              rightIcon={<ChevronDownIcon />}
            >
              Ordenar
            </MenuButton>
            <MenuList>
              <MenuItem fontSize={{ base: 'sm' }}>Nuevos</MenuItem>
              <MenuItem fontSize={{ base: 'sm' }}>Antiguos</MenuItem>
              <MenuItem fontSize={{ base: 'sm' }}>Menor precio</MenuItem>
              <MenuItem fontSize={{ base: 'sm' }}>Mayor precio</MenuItem>
            </MenuList>
          </Menu>
        </SimpleGrid>
      </motion.div>

      <SimpleGrid
        gap={4}
        as={motion.div}
        variants={stagger}
        boxSizing="border-box"
        templateColumns={{
          base: 'minmax(0, 1fr)',
          sm: 'repeat(2, minmax(0, 1fr))',
          xl: 'repeat(3, minmax(0, 1fr))'
        }}
      >
        {asesores.map((asesor, i) => (
          <AsesorCard key={i} i={i} {...{ asesor }} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default AsesoresList
