export default function Skeleton({ className }: { className: string }) {
  return <div className={`bg-[#24273d] motion-safe:animate-pulse rounded ${className}`} />;
}
