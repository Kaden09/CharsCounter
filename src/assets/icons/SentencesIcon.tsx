function SentencesIcon() {
  return (
    <svg width="220" height="220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="sentencesMask">
          <rect width="220" height="220" x="0" y="0" fill="white" />
          <rect width="100" height="100" x="-50" y="-50" fill="black" rx="20" />
          <rect width="100" height="100" x="60" y="-50" fill="black" rx="20" />
          <rect width="100" height="100" x="170" y="-50" fill="black" rx="20" />
          <rect width="100" height="100" x="-50" y="60" fill="black" rx="20" />
          <rect width="100" height="100" x="60" y="60" fill="black" rx="20" />
          <rect width="100" height="100" x="170" y="60" fill="black" rx="20" />
          <rect width="100" height="100" x="-50" y="170" fill="black" rx="20" />
          <rect width="100" height="100" x="60" y="170" fill="black" rx="20" />
          <rect width="100" height="100" x="170" y="170" fill="black" rx="20" />
        </mask>
      </defs>
      <rect
        width="220"
        height="220"
        x="0"
        y="0"
        fill="#f99a84"
        mask="url(#sentencesMask)"
      />
    </svg>
  );
}

export default SentencesIcon;
