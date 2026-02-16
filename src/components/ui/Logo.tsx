export function LogoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="HappyStoreShop logo"
    >
      <title>HappyStoreShop</title>
      {/* Blue rounded square */}
      <rect width="40" height="40" rx="10" fill="#1E40AF" />
      {/* Shopping bag body */}
      <path
        d="M13 17h14l-1.75 14h-10.5L13 17z"
        stroke="white"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Bag handles */}
      <path
        d="M16.5 17v-2.5a3.5 3.5 0 0 1 7 0V17"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Happy smile */}
      <path
        d="M17 24.5c1.2 1.8 4.8 1.8 6 0"
        stroke="#F59E0B"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eyes */}
      <circle cx="18" cy="22" r="0.9" fill="white" />
      <circle cx="22" cy="22" r="0.9" fill="white" />
    </svg>
  );
}

export function LogoFull({ iconClassName, textClassName }: { iconClassName?: string; textClassName?: string }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoIcon className={iconClassName || "h-10 w-10"} />
      <span className={`font-bold tracking-tight ${textClassName || "text-xl text-slate-900"}`}>
        Happy<span className="text-brand-blue">Store</span>Shop
      </span>
    </span>
  );
}
