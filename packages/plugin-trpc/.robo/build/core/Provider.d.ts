import React from 'react';
interface TRPCProviderProps {
    children: React.ReactNode;
    queryClient: any;
    trpc: any;
    trpcClient: any;
}
export declare function TRPCProvider(props: TRPCProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
