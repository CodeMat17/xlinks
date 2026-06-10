export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950'>
      {/* Animated logo mark */}
      <div className='relative mb-8'>
        <div className='w-20 h-20 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-full shadow-emerald-500/40 animate-pulse'>
          <svg
            className='w-10 h-10 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={1.8}
            aria-hidden='true'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            />
          </svg>
        </div>
        {/* Orbiting ring */}
        <span className='absolute inset-0 rounded-full border-2 border-emerald-400/40 animate-ping' />
      </div>

      {/* Brand name */}
      <h1 className='text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-1'>
        Xlinks
        <span className='bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent'>
          {" "}
          Education & Travel
        </span>
      </h1>
      <p className='text-sm text-gray-400 dark:text-gray-500 font-medium mb-10 tracking-wide'>
        Your Gateway to the World
      </p>

      {/* Progress bar */}
      <div className='w-48 h-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden'>
        <div className='h-full bg-linear-to-r from-emerald-500 to-teal-500 rounded-full animate-[loading_1.4s_ease-in-out_infinite]' />
      </div>

      <style>{`
        @keyframes loading {
          0%   { width: 0%;   margin-left: 0; }
          50%  { width: 70%;  margin-left: 15%; }
          100% { width: 0%;   margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
