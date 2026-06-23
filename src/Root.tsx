// Racine de l'application : route entre le site public et le panneau admin.
// L'admin est accessible via l'URL  ...#admin
import { useEffect, useState } from 'react';
import App from './App';
import AdminApp from './admin/AdminApp';
import { ContentProvider } from './content/ContentProvider';

function isAdminHash(): boolean {
  return window.location.hash.replace('#', '').startsWith('admin');
}

export default function Root() {
  const [admin, setAdmin] = useState<boolean>(isAdminHash());

  useEffect(() => {
    const onHash = () => setAdmin(isAdminHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <ContentProvider>
      {admin ? <AdminApp /> : <App />}
    </ContentProvider>
  );
}
