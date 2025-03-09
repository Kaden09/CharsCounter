function CharsIcon() {
  return (
    <svg width="215" height="215">
      <defs>
        <mask id="charsMask">
          <rect width="215" height="215" x="0" y="0" fill="white" />
          <rect width="100" height="100" x="165" y="-50" fill="black" rx="24" />
          <rect width="100" height="100" x="-50" y="165" fill="black" rx="24" />
          <rect width="100" height="100" x="165" y="165" fill="black" rx="24" />
          <rect width="100" height="100" x="-50" y="-50" fill="black" rx="24" />

          <rect width="50" height="100" x="55" y="-50" fill="black" rx="24" />
          <rect width="50" height="100" x="110" y="-50" fill="black" rx="24" />

          <rect width="100" height="50" x="-50" y="55" fill="black" rx="24" />
          <rect width="100" height="50" x="-50" y="110" fill="black" rx="24" />

          <rect width="100" height="50" x="165" y="55" fill="black" rx="24" />
          <rect width="100" height="50" x="165" y="110" fill="black" rx="24" />

          <rect width="50" height="100" x="55" y="165" fill="black" rx="24" />
          <rect width="50" height="100" x="110" y="165" fill="black" rx="24" />

          <rect width="50" height="50" x="55" y="55" fill="black" rx="24" />
          <rect width="50" height="50" x="110" y="55" fill="black" rx="24" />
          <rect width="50" height="50" x="55" y="110" fill="black" rx="24" />
          <rect width="50" height="50" x="110" y="110" fill="black" rx="24" />
        </mask>
      </defs>
      <rect
        width="215"
        height="215"
        x="0"
        y="0"
        fill="#ddbbfc"
        mask="url(#charsMask)"
      />
    </svg>
  );
}

export default CharsIcon;
