import {
  useEffect,
  useState,
  ReactNode,
  useContext,
  Context,
  createContext,
} from "react";

interface ViewPortProviderProps {
  children: ReactNode;
}

interface ViewPortContextData {
  width: number;
}

const ViewPortContext: Context<ViewPortContextData> = createContext(
  {} as ViewPortContextData
);

export function ViewportProvider({ children }: ViewPortProviderProps) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewPortContext.Provider value={{ width }}>
      {children}
    </ViewPortContext.Provider>
  );
}

export function useViewport() {
  const context = useContext(ViewPortContext);

  return context;
}
