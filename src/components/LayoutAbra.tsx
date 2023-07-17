'use client';

import Image from 'next/image';
import { Container, Header, Layout, Stack } from '@uala/abra';

export default function LayoutAbra({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Header css={{ display: 'flex', justifyContent: 'center' }}>
        <Stack align="center" justify="center">
          <Image
            src="/uala-isotipo-horizontal.svg"
            height={40}
            width={117}
            alt="uala logo"
          />
        </Stack>
      </Header>
      {children}
    </Layout>
  );
}
