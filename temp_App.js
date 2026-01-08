import { Toaster } from 'sonner';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Toaster position="top-right" richColors />
      {/* El resto de tu App (Navbar, InicioView, etc) */}
    </UserProvider>
  );
}

export default App;
