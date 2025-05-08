'use client';

import { useParams } from 'next/navigation';
import Historia from '@/components/sites/JB_Historia/page';
import Species from '@/components/sites/JB_Flora-Fauna/page'


export default function SlugPage() {
  const { slug } = useParams();

  const renderContent = () => {
    switch (slug) {
      case 'historia':
        return <Historia/>;
      case 'flora-y-fauna':
        return <Species/>;
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
