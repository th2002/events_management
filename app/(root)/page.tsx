'use client';

import BannerDefault from '@/components/BannerDefault';
import CategoriesList from '@/components/CategoriesList';
import HightLightThisWeek from '@/components/HightLightThisWeek';
import MoreEvents from '@/components/MoreEvents';
import NewEvents from '@/components/NewEvents';
import UpComing from '@/components/UpComing';

const Home = () => {
  return (
    <>
      <div className="mb-20 md:mb-44">
        <BannerDefault />
      </div>

      {/* section */}
      <div className="px-4 md:px-[50px] lg:px-[150px]">
        <NewEvents />
        <CategoriesList />
        <UpComing />
        <HightLightThisWeek />
        <MoreEvents />
      </div>
    </>
  );
};

export default Home;
