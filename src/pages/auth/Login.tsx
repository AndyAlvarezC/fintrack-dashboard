import { useState } from 'react';

type LoginProps = {
  onLogin: () => void;
};

export default function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('username', name);
    onLogin();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden select-none">
      {/* Glow orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      {/* Login card */}
      <div className="relative z-10 flex flex-col items-center p-8 gap-8 md:backdrop-blur-sm md:bg-slate-900/60 md:rounded-3xl md:border md:border-slate-700/50 md:shadow-2xl max-w-md w-full mx-4">
        {/* Logo */}
        <div
          className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-600 
          rounded-2xl flex items-center justify-center 
          shadow-[0_0_10px_rgba(59,130,246,0.3)] 
          transition-all duration-200 ease-in-out 
          hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] cursor-pointer"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-300 tracking-wide mb-2">
            FinTrack Dashboard
          </h1>
          <p className="text-slate-400 text-sm">
            Manage your finances with elegance
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 items-center w-full"
        >
          <div className="w-full">
            <label className="text-sm font-medium text-slate-400 mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3.5 text-white 
              placeholder-slate-500 transition-all duration-300 
              focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 
              hover:border-slate-600"
            />
          </div>

          <button
            type="submit"
            className="w-full text-lg font-semibold uppercase tracking-wider py-3.5 
            bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl 
            hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 
            active:translate-y-0 transition-all duration-200 
            relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </form>

        <p className="text-xs text-slate-500 text-center mt-2">
          Securely access your financial dashboard
        </p>
      </div>
    </div>
  );
}
