function Wrapper({children, ...props}) {

  return (
    <div {...props} className="wrapper">
        {children}
    </div>
  )

}

export default Wrapper