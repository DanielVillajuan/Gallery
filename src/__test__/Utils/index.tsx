import { render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function WithProviders() {
  return function Wrapper({ children }: PropsWithChildren){
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </BrowserRouter>
    )
  }
}

function renderWithProvider( component: React.ReactElement ){
  return { ...render(component,{ wrapper: WithProviders() }) }
}

export { WithProviders, renderWithProvider }
