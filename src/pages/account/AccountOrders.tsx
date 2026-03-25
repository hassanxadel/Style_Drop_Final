import { orders } from '@/data/accountMock';
import { statusBadgeClass, statusLabel } from '@/components/account/orderStatus';

const ACCENT = '#DC2626';

const btnGrey =
  'inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] bg-neutral-100 text-[#0D0D0D]/80 hover:bg-neutral-200/80 transition-colors';

const AccountOrders = () => (
  <div className="space-y-4 md:space-y-5">
    {orders.map((o) => (
      <article
        key={o.id}
        className="rounded-[20px] bg-white border border-[#0D0D0D]/8 p-4 md:p-6 shadow-sm"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#0D0D0D]/8 pb-4 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-[#0D0D0D]">#{o.id}</span>
              <span
                className={`text-[10px] md:text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${statusBadgeClass(o.status)}`}
              >
                {statusLabel(o.status)}
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#0D0D0D]/50 mt-1">
              {o.date} · {o.itemCount} item{o.itemCount === 1 ? '' : 's'}
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold text-[#0D0D0D] text-base md:text-lg">${o.total}</p>
            <p className="text-[10px] md:text-xs text-[#0D0D0D]/45 uppercase tracking-wide">{o.currency}</p>
          </div>
        </div>

        <ul className="space-y-4 mb-5">
          {o.lines.map((line, i) => (
            <li key={i} className="flex gap-3 md:gap-4">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-xl overflow-hidden bg-muted shrink-0 border border-[#0D0D0D]/8">
                <img src={line.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0 flex justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[1px] text-[#0D0D0D]/45">{line.brand}</p>
                  <p className="font-semibold text-[#0D0D0D] text-sm md:text-base leading-snug">{line.name}</p>
                  <p className="text-xs text-[#0D0D0D]/50 mt-0.5">{line.sizeQty}</p>
                </div>
                <p className="font-bold text-[#0D0D0D] text-sm shrink-0">{line.price}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {o.status === 'shipped' && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-sky-800 bg-sky-100 hover:bg-sky-200/80 transition-colors"
            >
              Track order
            </button>
          )}
          {o.status === 'delivered' && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em]"
              style={{ backgroundColor: `${ACCENT}1a`, color: ACCENT }}
            >
              Buy again
            </button>
          )}
          {(o.status === 'delivered' || o.status === 'shipped' || o.status === 'returned') && (
            <button type="button" className={btnGrey}>
              View details
            </button>
          )}
        </div>
      </article>
    ))}
  </div>
);

export default AccountOrders;
