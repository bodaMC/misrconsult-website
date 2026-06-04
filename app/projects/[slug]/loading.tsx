export default function ProjectLoading() {
  return (
    <div className="relative min-h-[85vh] overflow-hidden bg-misr-950">
      <div className="absolute inset-0 grid-architecture opacity-20" />
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="h-3 w-24 animate-pulse bg-misr-gold/30" />
        <div className="mt-6 h-12 max-w-md animate-pulse bg-white/10" />
        <div className="mt-4 h-4 max-w-sm animate-pulse bg-white/5" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-misr-gold/50 to-transparent" />
    </div>
  );
}
