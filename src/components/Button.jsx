const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group rhombus-hover relative z-10 w-fit text-black cursor-pointer overflow-hidden px-7 py-3 flex items-center gap-2 ${containerClass}`}
    >
      <span className="rhombus-text">{leftIcon}</span>
      <span className="rhombus-text font-general text-xs uppercase">{title}</span>
      <span className="rhombus-text">{rightIcon}</span>
    </button>
  );
};

export default Button;
