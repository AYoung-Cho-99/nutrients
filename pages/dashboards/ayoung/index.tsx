import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import { QueryClient, QueryClientProvider } from 'react-query';
import DashboardAyoungContent from 'src/content/DashboardPages/ayoung';
const queryClient = new QueryClient();

function DashboardAutomation() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Automation Dashboard</title>
      </Head>
      <DashboardAyoungContent />
    </QueryClientProvider>
    </>
  );
}

DashboardAutomation.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardAutomation;
