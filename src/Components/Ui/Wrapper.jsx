function Wrapper({children, classes, ...props}) {

  return (
    <div className={`wrapper ${classes}`} {...props} >
        {children}
    </div>
  )

}

export default Wrapper