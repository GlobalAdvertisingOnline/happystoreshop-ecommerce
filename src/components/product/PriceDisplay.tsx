export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export function PriceDisplay({
  price,
  compareAtPrice,
  interval,
}: {
  price: number;
  compareAtPrice?: number;
  interval?: string;
}) {
  const hasDiscount = compareAtPrice && compareAtPrice > price;
  const savingsPercent = hasDiscount
    ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
    : 0;

  return (
    <div className="flex items-baseline gap-3">
      <span className="text-2xl font-bold text-slate-900">
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <span className="price-compare text-lg">
          {formatPrice(compareAtPrice)}
        </span>
      )}
      {hasDiscount && (
        <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-brand-red">
          Save {savingsPercent}%
        </span>
      )}
      {interval && (
        <span className="text-sm text-slate-500">/{interval}</span>
      )}
    </div>
  );
}
