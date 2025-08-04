// src/components/ViewContext.tsx
import { createContext, type RefObject } from 'react';

// The context is typed to accept refs that can be null initially.
interface ViewContextType {
  parkViewRef: RefObject<HTMLDivElement>;
  footerViewRef: RefObject<HTMLDivElement>;
}

export const ViewContext = createContext<ViewContextType>({
  parkViewRef: null!, // Using non-null assertion as we know it will be provided
  footerViewRef: null!,
});
