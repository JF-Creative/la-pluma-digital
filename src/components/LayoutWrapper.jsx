'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Oculta Header/Footer solo en estas rutas específicas
    const hideLayout = pathname.startsWith('/PIA/2025/JB-San-Jorge/');

    // Define la clase del main basado en hideLayout
    const mainClassName = hideLayout ? 'main-full' : 'main-adapted';

  return (
    <>
      {!hideLayout && <Header />}
      <main className={mainClassName}>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
