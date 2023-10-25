// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <NextUIProvider>
            {children}
        </NextUIProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
