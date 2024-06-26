const MenuIcon = ({ w = 24, h = 24, color = "#CCCCCC" }: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5 12H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M5 17H19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default MenuIcon;
