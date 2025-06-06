import { BrowserRouter as Router } from 'react-router';

import { AppRouter } from '@/routes/AppRouter';
import { AuthProvider } from '@/contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Router>
  );
}

export default App;
