'use client';
import Breadcrumb from '@/components/admin/Breadcrumbs/Breadcrumb';
// import ChartOne from '@/components/admin/Charts/ChartOne';
// import ChartTwo from '@/components/admin/Charts/ChartTwo';
// import ChartThree from '@/components/admin/Charts/ChartThree';
import dynamic from 'next/dynamic';

const ChartOne = dynamic(() => import('@/components/admin/Charts/ChartOne'), {
  ssr: false
});
const ChartTwo = dynamic(() => import('@/components/admin/Charts/ChartTwo'), {
  ssr: false
});
const ChartThree = dynamic(
  () => import('@/components/admin/Charts/ChartThree'),
  {
    ssr: false
  }
);

import React from 'react';

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;

