import { NavLink } from 'react-router-dom';
import { User, Package, MapPin, Settings, Heart } from 'lucide-react';
import { accountStats } from '@/data/accountMock';

const ACCENT = '#DC2626';

const tabs = [
  { to: '/account/overview', label: 'Overview', icon: User, badge: null as number | null },
  { to: '/account/orders', label: 'My Orders', icon: Package, badge: accountStats.totalOrders },
  { to: '/account/addresses', label: 'Addresses', icon: MapPin, badge: null },
  { to: '/account/settings', label: 'Settings', icon: Settings, badge: null },
  { to: '/account/liked', label: 'Liked Items', icon: Heart, badge: null },
] as const;

export function AccountNav() {
  return (
    <div className="container px-5 mt-5 md:mt-6">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin md:flex-wrap md:overflow-visible">
        {tabs.map(({ to, label, icon: Icon, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/account/overview'}
            className={({ isActive }) =>
              `inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.1em] border transition-colors ${
                isActive
                  ? 'bg-[#0D0D0D] text-white border-[#0D0D0D]'
                  : 'bg-white text-[#0D0D0D]/65 border-[#0D0D0D]/10 hover:border-[#0D0D0D]/25'
              }`
            }
          >
            <Icon size={16} strokeWidth={2} className="shrink-0" />
            <span>{label}</span>
            {badge != null && badge > 0 && (
              <span
                className="min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold flex items-center justify-center"
                style={{ backgroundColor: ACCENT, color: '#fff' }}
              >
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
