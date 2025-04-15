interface HamburgerMenuProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerMenu = ({ onClick, isOpen }: HamburgerMenuProps) => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none z-20"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
      >
        {isOpen ? (
          // X icon for close state
          <>
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        ) : (
          // Hamburger icon for closed state
          <>
            <path
              d="M4 18L20 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </button>
  );
};

export default HamburgerMenu;
