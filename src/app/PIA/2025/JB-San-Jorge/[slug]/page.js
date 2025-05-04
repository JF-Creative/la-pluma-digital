'use client';

import { useParams } from 'next/navigation';

export default function SlugPage() {
  const { slug } = useParams();

  const renderContent = () => {
    switch (slug) {
      case 'historia':
        return <div>Soy componente historia</div>;
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
