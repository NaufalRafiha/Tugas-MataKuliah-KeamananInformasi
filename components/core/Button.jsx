const Button = ({ title, onClick }) => {
  return (
    <div className="max-w-[170px] rounded-md px-6 py-3 place-content-center text-[#ffffff] bg-theme-primary" onClick={onClick}>
      {title}
    </div>
  )
}

export default Button;
