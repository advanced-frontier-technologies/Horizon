import type { PreviewSurface } from "./PreviewBanner";

const NAV: { id: PreviewSurface; label: string }[] = [
  { id: "chatbot", label: "Chatbot PREVIEW" },
  { id: "containment", label: "Paladin Containment" },
  { id: "kids", label: "Kids PREVIEW" },
];

interface PlatformNavProps {
  active: PreviewSurface;
  onSelect: (surface: PreviewSurface) => void;
}

export function PlatformNav({ active, onSelect }: PlatformNavProps) {
  return (
    <nav className="platform-nav" aria-label="Horizon PREVIEW surfaces">
      <div className="platform-nav__brand">
        <span className="platform-nav__mark">Horizon</span>
        <span className="platform-nav__hold">PREVIEW</span>
      </div>
      <ul className="platform-nav__list">
        {NAV.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id}>
              <button
                type="button"
                className={
                  isActive
                    ? "platform-nav__link platform-nav__link--active"
                    : "platform-nav__link"
                }
                aria-current={isActive ? "page" : undefined}
                onClick={() => onSelect(item.id)}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
