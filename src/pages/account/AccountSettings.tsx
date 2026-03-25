import { useState } from 'react';
import { Eye, LogOut, Pencil, Trash2 } from 'lucide-react';
import { profileUser } from '@/data/accountMock';

const ACCENT = '#DC2626';

const inputClass =
  'w-full rounded-xl bg-[#E8E4DF] border-0 px-4 py-3 text-sm text-[#0D0D0D] placeholder:text-[#0D0D0D]/35 outline-none focus:ring-2 focus:ring-[#0D0D0D]/15';

const labelClass = 'block text-[10px] font-bold uppercase tracking-[0.14em] text-[#0D0D0D]/45 mb-2';

const AccountSettings = () => {
  const [showPw, setShowPw] = useState({ cur: false, next: false, confirm: false });

  return (
    <div className="space-y-5 md:space-y-6 max-w-3xl mx-auto">
      <section className="rounded-[20px] bg-white border border-[#0D0D0D]/8 p-5 md:p-7 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h2 className="font-condensed font-bold text-sm md:text-base uppercase tracking-[0.12em] text-[#0D0D0D]">
            Personal info
          </h2>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#E8E4DF] px-3 py-1.5 text-xs font-semibold text-[#0D0D0D]"
          >
            <Pencil size={14} strokeWidth={2} />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label className={labelClass}>First name</label>
            <input className={inputClass} readOnly defaultValue="Alex" />
          </div>
          <div>
            <label className={labelClass}>Last name</label>
            <input className={inputClass} readOnly defaultValue="Johnson" />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Email address</label>
            <input className={inputClass} readOnly defaultValue={profileUser.email} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Phone number</label>
            <input className={inputClass} readOnly defaultValue="+1 (555) 012-3456" />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>Bio</label>
            <textarea
              className={`${inputClass} min-h-[100px] resize-y`}
              placeholder="Tell us about your style..."
              rows={4}
            />
          </div>
        </div>
      </section>

      <section className="rounded-[20px] bg-white border border-[#0D0D0D]/8 p-5 md:p-7 shadow-sm">
        <h2 className="font-condensed font-bold text-sm md:text-base uppercase tracking-[0.12em] text-[#0D0D0D] mb-6">
          Change password
        </h2>
        <div className="space-y-4 max-w-lg">
          {(['cur', 'next', 'confirm'] as const).map((key, idx) => (
            <div key={key}>
              <label className={labelClass}>
                {key === 'cur' && 'Current password'}
                {key === 'next' && 'New password'}
                {key === 'confirm' && 'Confirm new password'}
              </label>
              <div className="relative">
                <input
                  type={showPw[key] ? 'text' : 'password'}
                  className={`${inputClass} pr-11`}
                  placeholder="••••••••"
                  autoComplete={idx === 0 ? 'current-password' : 'new-password'}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0D0D0D]/40 hover:text-[#0D0D0D]/70 p-1"
                  aria-label="Toggle password visibility"
                  onClick={() => setShowPw((s) => ({ ...s, [key]: !s[key] }))}
                >
                  <Eye size={18} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0D0D0D] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#1a1a1a] transition-colors"
        >
          Update password
        </button>
      </section>

      <section className="rounded-[20px] bg-white border border-[#0D0D0D]/8 p-5 md:p-7 shadow-sm">
        <h2 className="font-condensed font-bold text-sm md:text-base uppercase tracking-[0.12em] mb-2" style={{ color: ACCENT }}>
          Danger zone
        </h2>
        <p className="text-sm text-[#0D0D0D]/50 mb-5">These actions are permanent and cannot be undone.</p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em]"
            style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}
          >
            <Trash2 size={16} strokeWidth={2} />
            Delete account
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 text-[#0D0D0D] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em]"
          >
            <LogOut size={16} strokeWidth={2} />
            Sign out
          </button>
        </div>
      </section>
    </div>
  );
};

export default AccountSettings;
