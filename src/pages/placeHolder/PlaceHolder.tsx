interface PlaceholderProps {
  title?: string;
  subtitle?: string;
}

export default function Placeholder({
  title = '🚧 Coming Soon',
  subtitle = 'This page is still under construction. We are working on it!',
}: PlaceholderProps) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-950 text-slate-300 relative overflow-hidden px-4 sm:px-6 lg:px-0">
      {/* Glow orbs */}
      <div className="absolute top-16 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/20 rounded-full blur-3xl" />

      {/* Big gradient glow behind the card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 sm:w-96 md:w-[400px] h-40 sm:h-60 md:h-72 bg-linear-to-br from-blue-500/30 via-blue-600/20 to-purple-500/20 rounded-3xl blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative z-10 text-center p-6 sm:p-10 md:backdrop-blur-sm rounded-3xl md:border md:border-slate-700/50 md:shadow-2xl flex flex-col items-center gap-4 sm:gap-6 max-w-full sm:max-w-md">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-wide">
          {title.replace(/^🚧\s*/, '')}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg text-slate-300 max-w-xs sm:max-w-md">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
