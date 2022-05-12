const Flex = ({ children, styles }) => {
  return (
    <div className={`flex flex-col justify-center ${styles}`}>
      {children}
    </div>
  )
};

export default Flex;