import { Outlet } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ProfileBanner } from '@/components/account/ProfileBanner';
import { AccountNav } from '@/components/account/AccountNav';

const AccountLayout = () => (
  <MainLayout>
    <div className="min-h-screen bg-[#F5F0EB] pb-24">
      <ProfileBanner />
      <div className="container px-5 pt-4 md:pt-6 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-10">
          <AccountNav />
          <div className="flex-1 min-w-0 pt-5 lg:pt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default AccountLayout;
