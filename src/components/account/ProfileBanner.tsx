import { Camera } from 'lucide-react';
import { profileUser } from '@/data/accountMock';

const ACCENT = '#DC2626';

export function ProfileBanner() {
  return (
    <div className="container px-5 pt-8 md:pt-10">
      <div className="relative rounded-[20px] md:rounded-[24px] bg-[#0D0D0D] text-white overflow-hidden px-5 py-6 md:px-8 md:py-8">
        <div
          className="absolute inset-0 opacity-35 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 25% 25%, rgba(80,50,40,0.5) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(50,35,28,0.45) 0%, transparent 40%)',
          }}
        />
        <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div
                className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center text-xl md:text-2xl font-bold tracking-tight text-white"
                style={{ backgroundColor: ACCENT }}
              >
                {profileUser.initials}
              </div>
              <span
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-[#0D0D0D] text-[#0D0D0D] shadow-sm"
                aria-hidden
              >
                <Camera size={14} strokeWidth={2} />
              </span>
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-condensed font-bold text-lg md:text-2xl uppercase tracking-[0.12em] md:tracking-[0.14em]">
                {profileUser.name}
              </h1>
              <p className="text-sm text-white/55 mt-1">{profileUser.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
