'use client';

import { useState } from 'react';

/** Components */
import { StepComponent } from '../FlowStep';
import { Container, IconButton, Input, Spacer, Stack, Text } from '@uala/abra';

/** Hooks */
import { getSize, useBreakpoint } from '@uala/abra-utils';

const ResetPassword: StepComponent = ({ onNext }) => {
  const [isLoading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(true);
  const isDesktop = useBreakpoint('md');

  const renderShowPassBtn = () => {
    setShowPass(!showPass);
  };

  return (
    <Container layout="50">
      <Stack direction="column" align="center">
        <Text css={{ fontSize: getSize(22) }}>
          Cambia tu contraseña actual de Ualá
        </Text>
        <Stack direction="column" css={{ width: '320px' }}>
          <Text size="md">Cumple con los requisitos de abajo al crearla.</Text>
          <Spacer y={24} />

          <Input
            type={showPass ? 'password' : 'text'}
            label="Nueva contraseña"
            id="new-password"
            // value={searchText}
            // onChange={({ target }) => handleInputChange(target.value)}
            isDisabled={isLoading}
            action={
              <IconButton
                as="button"
                onClick={() => renderShowPassBtn()}
                label="Filtros"
                icon={showPass ? 'show-password' : 'hide-password'}
              />
            }
          />
          <Input
            type={showPass ? 'password' : 'text'}
            label="Confirmar contraseña"
            id="check-new-password"
            // value={searchText}
            // onChange={({ target }) => handleInputChange(target.value)}
            isDisabled={isLoading}
            action={
              <IconButton
                as="button"
                onClick={() => renderShowPassBtn()}
                label="Filtros"
                icon={showPass ? 'show-password' : 'hide-password'}
              />
            }
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default ResetPassword;
