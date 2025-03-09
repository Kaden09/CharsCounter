function WordsIcon() {
  return (
    <svg width="210" height="210">
      <defs>
        <mask id="wordsMask">
          <rect width="210" height="210" x="0" y="0" fill="white" />
          <rect width="70" height="71" x="70" y="-1" fill="black" />
          <rect width="71" height="70" x="-1" y="70" fill="black" />
          <rect width="70" height="71" x="70" y="140" fill="black" />
          <rect width="71" height="70" x="140" y="70" fill="black" />
        </mask>
      </defs>
      <rect
        width="210"
        height="210"
        x="0"
        y="0"
        fill="#ffb844"
        mask="url(#wordsMask)"
      />
    </svg>
  );
}

export default WordsIcon;
