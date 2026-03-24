type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  tight = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${tight ? "py-12 sm:py-16" : "py-16 sm:py-24"} scroll-mt-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        {children}
      </div>
    </section>
  );
}
