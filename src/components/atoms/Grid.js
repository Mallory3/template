const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-items-center content-center container mx-auto sm:max-w-7xl">
      {children}
    </div>
  )
};

export default Grid;