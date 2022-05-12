const Button = ({ text, type = 'primary' }) => {
    return (
      <button
        className={`button rounded-full py-2 px-4 ${type}`}
        type="button"
      >
        {text}
      </button>
    )
};

export default Button;