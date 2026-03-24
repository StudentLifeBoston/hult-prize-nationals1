type PageHeroProps = {
  title: string;
  subtitle?: string;
  accent?: string;
};

export default function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <section className="gradient-midnight text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #FF329B 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, #FF931D 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        {accent && (
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-heritage text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-white/10 shadow-md">
            {accent}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
