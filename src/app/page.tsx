import BaseView from '@/components/base-view/BaseView';
import { ProfileSection } from '@/components/home/ProfileSection';
import { ProjectSection } from '@/components/home/ProjectSection';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { Button } from '@akturanilyas/ui/button';

export const revalidate = 604800;

export default function Home() {
  return (
    <BaseView className={'h-full justify-center gap-8 my-24'}>
        <Button>ajsbdnjsasd</Button>
      <ErrorBoundary errorComponent={undefined}>
        <ProfileSection />
      </ErrorBoundary>

      <ErrorBoundary errorComponent={undefined}>
        <ProjectSection />
      </ErrorBoundary>

      <ErrorBoundary errorComponent={undefined}>
        <ExperienceSection />
      </ErrorBoundary>
    </BaseView>
  );
}
