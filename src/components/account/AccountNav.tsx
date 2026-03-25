import { NavLink } from 'react-router-dom';
import { User, Package, MapPin, Settings, Heart } from 'lucide-react';
import { accountStats } from '@/data/accountMock';

const tabs = [
  { to: '/account/overview', label: 'Overview', icon: User, badge: null as number | null },
  { to: '/account/orders', label: 'My Orders', icon: Package, badge: accountStats.totalOrders },
  { to: '/account/addresses', label: 'Addresses', icon: MapPin, badge: null },
  { to: '/account/settings', label: 'Settings', icon: Settings, badge: null },
  { to: '/account/liked', label: 'Liked Items', icon: Heart, badge: null },
] as const;

export function AccountNav() {
  return (
    <aside className="w-full lg:w-[260px] lg:shrink-0" aria-label="Account navigation">
      <nav className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0 lg:rounded-2xl lg:bg-white lg:border lg:border-[#0D0D0D]/10 lg:p-2 lg:shadow-sm">
        {tabs.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/account/overview'}
            className={({ isActive }) => {
              const base =
                'group inline-flex items-center gap-2 rounded-full lg:rounded-xl px-4 py-2.5 text-[11px] lg:text-xs font-bold uppercase tracking-[0.1em] border transition-colors shrink-0 lg:w-full lg:justify-between';
              if (isActive) {
                return `${base} bg-[#0D0D0D] text-white border-[#0D0D0D]`;
              }
              if (to === '/account/liked') {
                return `${base} bg-white text-[#DC2626] border-[#DC2626]/25 hover:border-[#DC2626]/40`;
              }
              return `${base} bg-white text-[#0D0D0D]/65 border-[#0D0D0D]/10 hover:border-[#0D0D0D]/25`;
            }}
          >
            {({ isActive }) => (
              <>
                <span className="inline-flex items-center gap-2 min-w-0">
                  <Icon size={16} strokeWidth={2} className="shrink-0" />
                  <span className="whitespace-nowrap">{label}</span>
                </span>
                {badge != null && badge > 0 && (
                  <span
                    className={`min-w-[22px] h-5 px-1.5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white text-[#DC2626]' : 'bg-neutral-200 text-neutral-600'
                    }`}
                  >
                    {badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
