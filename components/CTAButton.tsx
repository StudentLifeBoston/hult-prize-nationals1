import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

type CTAButtonProps = {
  label: string;
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-heritage hover:bg-heritage-dark text-white shadow-lg shadow-heritage/25 hover:shadow-xl hover:shadow-heritage/35 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-midnight hover:bg-midnight-light text-white shadow-lg shadow-midnight/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0",
};

export default function CTAButton({
  label,
  href,
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-heritage focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}
