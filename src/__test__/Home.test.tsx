import Home from "../pages";
import { renderWithProvider } from "./Utils";

describe('<Home />',(): void =>{

    test('see render component', (): void => {
      const { getByText } = renderWithProvider(<Home />);
      expect(getByText('Galeria de Fotos')).toBeDefined();
    })
})
