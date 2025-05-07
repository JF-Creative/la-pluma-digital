'use client';

import { useParams } from 'next/navigation';
import Historia from '@/components/sites/JB_Historia/page'


export default function SlugPage() {
  const { slug } = useParams();

  const renderContent = () => {
    switch (slug) {
      case 'historia':
        return <Historia/>;
      case 'flora-y-fauna':
        return <div>Soy componente flora y fauna</div>;
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <main>
      {renderContent()}
    </main>
  );
}
