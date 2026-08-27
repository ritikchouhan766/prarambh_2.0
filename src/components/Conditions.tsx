import Link from "next/link";
import { CONDITIONS } from "@/lib/constants";

interface ConditionsProps {
  preview?: boolean;
}

export default function Conditions({ preview = true }: ConditionsProps) {
  return (
    <section className="section-pad bg-off">
      <div className="site-container">
        <div className="max-w-[600px]">
          <span className="tag-pill">Conditions We Treat</span>
          <h2 className="font-serif text-[clamp(28px,4vw,38px)] text-slate mb-3">
            Is Your Child Facing Any of These?
          </h2>
          <p className="text-[17px] text-muted">
            Early support leads to significantly better outcomes. We help with a wide range
            of developmental and physical conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {CONDITIONS.map((cond) => (
            <Link href="/conditions" key={cond.title} className="cond-card group">
              <div className="w-11 h-11 rounded-[10px] flex-shrink-0 bg-teal-pale flex items-center justify-center text-[20px]">
                {cond.icon}
              </div>
              <div>
                <h4 className="font-sans font-semibold text-[16px] text-slate mb-1">
                  {cond.title}
                </h4>
                <p className="text-[13px] text-muted">{cond.preview}</p>
              </div>
            </Link>
          ))}
        </div>

        {preview && (
          <div className="mt-8 text-center">
            <Link href="/conditions" className="btn-outline">
              View All Conditions & How We Help →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
