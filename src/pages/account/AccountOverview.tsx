import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, Package, ShoppingBag } from 'lucide-react';
import { accountStats, recentOrdersPreview } from '@/data/accountMock';
import { statusBadgeClass, statusLabel } from '@/components/account/orderStatus';

const ACCENT = '#DC2626';

const statCards = [
  { key: 'orders', label: 'Total Orders', value: accountStats.totalOrders, icon: ShoppingBag },
  { key: 'liked', label: 'Liked Items', value: accountStats.likedItems, icon: Heart },
  { key: 'addr', label: 'Saved Addresses', value: accountStats.savedAddresses, icon: MapPin },
  { key: 'cart', label: 'Cart Items', value: accountStats.cartItems, icon: Package },
] as const;

const AccountOverview = () => (
  <div className="space-y-6 md:space-y-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {statCards.map(({ key, label, value, icon: Icon }) => (
        <div
          key={key}
          className="rounded-2xl bg-white border border-[#0D0D0D]/8 p-4 md:p-5 shadow-sm flex flex-col gap-2"
        >
          <Icon size={22} strokeWidth={2} style={{ color: ACCENT }} className="shrink-0" />
          <p className="text-2xl md:text-3xl font-bold text-[#0D0D0D] tabular-nums">{value}</p>
          <p className="text-xs md:text-sm text-[#0D0D0D]/50 font-medium">{label}</p>
        </div>
      ))}
    </div>

    <div className="rounded-[20px] bg-white border border-[#0D0D0D]/8 p-5 md:p-7 shadow-sm">
      <div className="flex items-center justify-between gap-4 mb-5 md:mb-6">
        <h2 className="font-condensed font-bold text-sm md:text-base uppercase tracking-[0.14em] text-[#0D0D0D]">
          Recent orders
        </h2>
        <Link
          to="/account/orders"
          className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold uppercase tracking-[0.08em]"
          style={{ color: ACCENT }}
        >
          View all
          <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
      <ul className="divide-y divide-[#0D0D0D]/10">
        {recentOrdersPreview.map((o) => (
          <li key={o.id} className="flex gap-3 md:gap-4 py-4 first:pt-0 last:pb-0">
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl overflow-hidden bg-muted shrink-0 border border-[#0D0D0D]/8">
              <img src={o.lines[0]?.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <p className="font-bold text-[#0D0D0D] text-sm md:text-base">#{o.id}</p>
                <p className="text-xs md:text-sm text-[#0D0D0D]/50 mt-0.5">
                  {o.date}
                  <span className="hidden sm:inline"> · </span>
                  <span className="sm:hidden"> — </span>
                  {o.itemCount} item{o.itemCount === 1 ? '' : 's'}
                </p>
              </div>
              <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 shrink-0">
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${statusBadgeClass(o.status)}`}>
                  {statusLabel(o.status)}
                </span>
                <p className="font-bold text-[#0D0D0D] text-sm md:text-base">${o.total}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AccountOverview;
