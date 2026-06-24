import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Tag } from './Tag';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export interface ProjectCardProps {
  readonly title: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly tags: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-surface-container-main rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden transition-all hover:shadow-md">
      {/* Image Area */}
      <div className="w-full h-56 md:h-64 bg-[#D1D5DB] flex items-center justify-center relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder */
          <div className="flex flex-col items-center justify-center text-gray-400">
            <ImageIcon size={48} strokeWidth={1.5} />
            <span className="mt-2 font-medium">No Image</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-text-primary mb-4">{title}</h3>
        <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* Footer Area (Tags and Links) */}
        <div className="flex items-end justify-between mt-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Tag key={tag} size="md">
                {tag}
              </Tag>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-action-primary ml-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={24} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Live Demo"
              >
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
