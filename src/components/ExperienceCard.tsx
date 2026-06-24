import type { ReactNode } from 'react';

export interface ExperienceCardProps {
  readonly title: string;
  readonly subtitle: string;
  readonly logo?: ReactNode;
  readonly points: readonly string[];
}

export function ExperienceCard({ title, subtitle, logo, points }: Readonly<ExperienceCardProps>) {
  return (
    <div className="flex flex-col border border-gray-200 shadow-sm rounded-[2rem] overflow-hidden transition-all hover:shadow-md bg-surface-container-main">
      {/* Header section (Green) */}
      <div className="bg-surface-container-green-2 px-6 py-6 sm:px-8 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {/* Logo Box */}
          <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm overflow-hidden">
            {logo || <div className="w-8 h-8 bg-gray-200 rounded-full" />}
          </div>
          {/* Title */}
          <h3 className="text-2xl font-bold text-text-primary">
            {title}
          </h3>
        </div>
        {/* Subtitle */}
        <p className="text-text-primary font-medium">
          {subtitle}
        </p>
      </div>

      {/* Body section (White with bullet points) */}
      <div className="px-6 py-6 sm:px-8 bg-surface-container-main">
        <ul className="list-disc pl-5 space-y-3 text-text-primary leading-relaxed">
          {points.map((point) => (
            <li key={point} className="pl-1">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
