interface ButtonProps {
  onClick: () => void;
  color: string;
  title?: string;
}

const Button = ({ onClick, color, title }: ButtonProps) => {
  return (
    <>
      <button onClick={onClick}>{title}</button>
      <style jsx>{`
        button {
          width: 50px;
          height: 50px;
          background-color: ${color};
          border: 3px solid black;
          border-radius: 25px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default Button;
