'use client';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface FlowContextProps {
  handleNext: (nextPage: string, pageData: Record<string, unknown>) => void;
  data: Record<string, unknown>;
  activePage: string | null;
}

export type StepComponent = React.FC<
  {
    onNext(nextPage: string, data?: unknown): void;
    data?: Record<string, unknown>;
    isLoading?: boolean;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  } & PropsWithChildren
>;

export const FlowContext = createContext<FlowContextProps>({
  handleNext: () => null,
  data: {},
  activePage: null,
});

const UserFlow: React.FC<
  {
    startWith: string;
    initState?: Record<string, unknown>;
  } & PropsWithChildren
> = ({ children, startWith, initState = {} }) => {
  const [data, setData] = useState<Record<string, unknown>>(initState);
  const [activePage, setActivePage] = useState<string>(startWith);

  const handleNext = useCallback(
    (nextPage: string, pageData: Record<string, unknown>) => {
      setData((prev) => ({ ...prev, ...pageData }));
      setActivePage(nextPage);
    },
    []
  );

  const memoFlowContext = useMemo(
    () => ({
      handleNext,
      data,
      activePage,
    }),
    [handleNext, data, activePage]
  );

  return (
    <FlowContext.Provider value={memoFlowContext}>
      {children}
    </FlowContext.Provider>
  );
};

export default UserFlow;
