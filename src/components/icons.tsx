type IconProps = { className?: string };

export function LogoMark({ className }: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={className}>
      <rect width="32" height="32" rx="9" fill="var(--khukh)" />
      <path
        d="M12.5 6.5h7l6 3.6-2.6 6.4-2.4-1.2V26h-9V15.3l-2.4 1.2-2.6-6.4z"
        fill="#fff"
      />
      <path d="M11 17.4h10v2.4H11z" fill="var(--shar)" />
      <path d="M16 6.8c2.2 1 3.6 2.8 4.2 5.2" fill="none" stroke="var(--ulaan)" strokeWidth="1.6" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Line icons for the five everyday uses of a deel, keyed by ROLES id. */
export function RoleIcon({ id, className }: IconProps & { id: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} {...stroke}>
      {id === "khuvtsas" && (
        <>
          <path d="M9 3.5h6l5 3.2-2.4 5.3-2.1-1.1v9.6H8.5v-9.6l-2.1 1.1L4 6.7z" />
          <path d="M12 3.6c1.4.8 2.3 2.1 2.6 3.8" />
        </>
      )}
      {id === "khunjil" && (
        <>
          <path d="M19.5 14.6A7.8 7.8 0 0 1 9.4 4.5a7.8 7.8 0 1 0 10.1 10.1z" />
          <path d="M17 4v3M15.5 5.5h3" />
        </>
      )}
      {id === "devsger" && (
        <>
          <path d="M3 7.5h18v9H3z" />
          <path d="M7 12l2.5-2 2.5 2 2.5-2 2.5 2" />
          <path d="M5 16.5v3M9 16.5v3M15 16.5v3M19 16.5v3" />
        </>
      )}
      {id === "khalaas" && (
        <>
          <path d="M3.5 10h17a8.5 8.5 0 0 1-17 0z" />
          <path d="M9 19.5h6M9 6.5c0-1.2 1-1.6 1-2.8M13 6.5c0-1.2 1-1.6 1-2.8" />
        </>
      )}
      {id === "suuder" && (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" />
        </>
      )}
    </svg>
  );
}

/** Line icons for the pieces worn with a deel, keyed by KIT id. */
export function KitIcon({ id, className }: IconProps & { id: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} {...stroke}>
      {id === "malgai" && (
        <>
          <path d="M3.5 17h17" />
          <path d="M6 17c0-4.7 2.7-8.2 6-8.2s6 3.5 6 8.2" />
          <path d="M12 8.8V6" />
          <circle cx="12" cy="4.6" r="1.4" />
          <path d="M9 13.2c1.9-.7 4.1-.7 6 0" />
        </>
      )}
      {id === "gutal" && (
        <>
          <path d="M7.5 3.5h6v9.2l3.6 1.6c1.5.7 2.4 1.5 2.9 2.6.4-.8 1-1.3 1.6-1.6l-.6 4.2H5.6c-1.4 0-2.3-.8-2.3-1.9 1.9 0 3.3-1.3 4.2-2.9z" />
          <path d="M7.5 7.5h6" />
        </>
      )}
      {id === "bus" && (
        <>
          <path d="M2.5 9h19M2.5 13.5h19" />
          <rect x="8" y="7.5" width="5" height="7.5" rx="1.8" />
          <path d="M9 15l-1.2 5.5M12 15l1.2 5.5" />
        </>
      )}
      {id === "khutga" && (
        <>
          <rect x="8.5" y="9" width="5" height="11.5" rx="2.5" />
          <path d="M10 9V4.5a1 1 0 0 1 2 0V9" />
          <path d="M16 5.5v15M18.5 5.5v15" />
        </>
      )}
      {id === "khuurug" && (
        <>
          <path d="M10 3.5h4" />
          <path d="M10.5 3.5V6M13.5 3.5V6" />
          <path d="M9 6h6l.6 1.6c1.9 1.2 2.9 3.3 2.9 6 0 3.6-2.9 6.9-6.5 6.9S5.5 17.2 5.5 13.6c0-2.7 1-4.8 2.9-6z" />
          <path d="M9.5 13.5c0-1.4 1.1-2.5 2.5-2.5" />
        </>
      )}
      {id === "uuj" && (
        <>
          <path d="M8.5 3.5h7l3 3-1.2 5 1.7 9H5l1.7-9-1.2-5z" />
          <path d="M10 3.5 12 7l2-3.5M12 7v13.5" />
        </>
      )}
    </svg>
  );
}
