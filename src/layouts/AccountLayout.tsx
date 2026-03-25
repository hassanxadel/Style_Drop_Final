import { Outlet } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { ProfileBanner } from '@/components/account/ProfileBanner';
import { AccountNav } from '@/components/account/AccountNav';

const AccountLayout = () => (
  <MainLayout>
    <div className="min-h-screen bg-[#F5F0EB] pb-24">
      <ProfileBanner />
      <AccountNav />
      <div className="container px-5 pt-6 md:pt-8 pb-8">
        <Outlet />
      </div>
    </div>
  </MainLayout>
);

export default AccountLayout;
