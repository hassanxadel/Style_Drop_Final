import { Check, MapPin, Pencil, Trash2 } from 'lucide-react';
import { addresses } from '@/data/accountMock';

const ACCENT = '#DC2626';

const AccountAddresses = () => (
  <div className="space-y-5">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="text-sm text-[#0D0D0D]/55">
        {addresses.length} saved address{addresses.length === 1 ? '' : 'es'}
      </p>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full bg-[#0D0D0D] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#1a1a1a] transition-colors w-fit"
      >
        + Add address
      </button>
    </div>

    <div className="space-y-4">
      {addresses.map((a) => (
        <article
          key={a.id}
          className={`rounded-[20px] bg-white p-5 md:p-6 shadow-sm ${
            a.isDefault ? 'border-2 border-[#0D0D0D]' : 'border border-[#0D0D0D]/8'
          }`}
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-start gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  a.isDefault ? 'bg-[#0D0D0D] text-white' : 'bg-neutral-100 text-[#0D0D0D]/45'
                }`}
              >
                <MapPin size={18} strokeWidth={2} />
              </div>
              <div>
                <p className="font-bold text-[#0D0D0D]">{a.label}</p>
              </div>
            </div>
            {a.isDefault && (
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] bg-[#0D0D0D] text-white px-2.5 py-1 rounded-full">
                Default
              </span>
            )}
          </div>
          <div className="text-sm text-[#0D0D0D]/55 space-y-0.5 mb-5 pl-0 md:pl-[52px]">
            {a.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] bg-neutral-100 text-[#0D0D0D]"
            >
              <Pencil size={14} strokeWidth={2} />
              Edit
            </button>
            {!a.isDefault && (
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] bg-neutral-100 text-[#0D0D0D]"
              >
                <Check size={14} strokeWidth={2} />
                Set default
              </button>
            )}
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] ml-auto sm:ml-0"
              style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
            >
              <Trash2 size={14} strokeWidth={2} />
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default AccountAddresses;
