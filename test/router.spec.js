import {
  setRootEl,
  setRoutes,
  navigateTo,
  onURLChange,
} from "../src/router.js";
  
let ROOT;
  
describe("Test on router functions", () => {
  beforeEach(() => {
    // Crear un elemento div como el root de la prueba
    ROOT = document.createElement("div");
    document.body.appendChild(ROOT);
    setRootEl(ROOT); // Configurar el root para la prueba
  });
  
  afterEach(() => {
    document.body.removeChild(ROOT); // Limpiar el DOM después de cada prueba
    ROOT = null; // Restablecer ROOT
  });
  
  describe("navigateTo", () => {
    it("debería llamar a renderView con el pathname y props y renderizar la vista correspondiente", () => {
      const mockViewChat = jest.fn(() => {
        const viewChat = document.createElement("div");
        viewChat.innerHTML = `
              <div>
                <h1>Chatea con nosotros</h1>
              </div>`;
        return viewChat;
      });
  
      const mockView404 = jest.fn(() => {
        const view404 = document.createElement("div");
        view404.innerHTML = `
              <div>
                <h1>Error 404</h1>
              </div>`;
        return view404;
      });
  
      // Asegúrate de incluir la ruta '/NotFound'
      setRoutes({ "/chat": mockViewChat, "/NotFound": mockView404 });
  
      const pathname = "/chat";
      const props = { id: 1, name: "chat" };
      navigateTo(pathname, props);
  
      expect(mockViewChat).toHaveBeenCalledWith(props); // Verificar que se llamara a la vista correcta con las props
      expect(ROOT.innerHTML).toContain("Chatea con nosotros"); // Verificar que el contenido correcto se renderizó
    });
  
    it("debería redirigir a /NotFound si la ruta no existe", () => {
      const mockView404 = jest.fn(() => {
        const view404 = document.createElement("div");
        view404.innerHTML = `
              <div>
                <h1>Error 404</h1>
              </div>`;
        return view404;
      });
  
      // Definir solo la ruta '/NotFound'
      setRoutes({ "/NotFound": mockView404 });
      const pathname = "/ruta-inexistente";
      const props = { id: 1, name: "chat" };
      navigateTo(pathname, props);
  
      expect(mockView404).toHaveBeenCalled(); // Verificar que se llamara a la vista 404
      expect(ROOT.innerHTML).toContain("Error 404"); // Verificar que el contenido 404 se renderizó
    });
  
    it("debería lanzar un error si rootEl no está definido", () => {
      setRootEl(null); // Simular que no hay rootEl
      const mockView404 = jest.fn(() => {
        const view404 = document.createElement("div");
        view404.innerHTML = `
              <div>
                <h1>Error 404</h1>
              </div>`;
        return view404;
      });
  
      setRoutes({ "/chat": jest.fn(), "/NotFound": mockView404 });
  
      const pathname = "/chat";
      const props = { id: 1, name: "chat" };
        
      // Verificar que se lance un error cuando rootEl no está definido
      expect(() => navigateTo(pathname, props)).toThrow("Root element is not set.");
    });
  });
  
  describe("onURLChange", () => {
    it("debería cambiar la vista basado en la nueva ubicación", () => {
      const mockViewChat = jest.fn(() => {
        const viewChat = document.createElement("div");
        viewChat.id = "chatGroup";
        viewChat.innerHTML = `
              <h1>Chatea con nosotros</h1>`;
        return viewChat;
      });
  
      const mockView404 = jest.fn(() => {
        const view404 = document.createElement("div");
        view404.innerHTML = `
              <div>
                <h1>Error 404</h1>
              </div>`;
        return view404;
      });
  
      // Asegúrate de incluir la ruta '/NotFound'
      setRoutes({ "/chatGroup": mockViewChat, "/NotFound": mockView404 });
  
      // Simulación del objeto location
      const location = {
        pathname: "/chatGroup",
        search: "?id=1&name=chat",
      };
  
      // Simular el cambio de URL
      delete window.location;
      window.location = { ...location, assign: jest.fn() };
  
      onURLChange(window.location);
  
      // Verificar que se llamó la vista correcta
      expect(mockViewChat).toHaveBeenCalledWith({ id: "1", name: "chat" });
      expect(ROOT.innerHTML).toContain("Chatea con nosotros");
    });
  });
});
  