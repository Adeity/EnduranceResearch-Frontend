"use client"
import Recaptcha from "react-recaptcha";

function MyRecaptcha(props) {
    const {show} = props

    const className = show ? "d-flex" : "d-none"

    function handleVerify(value) {
        if (value) {
            props.enableFinishButton()
        }
    }

   return (
       <div className={className + " justify-content-center pb-2 align-items-center"}>
           <Recaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      render={"explicit"}
                      hl={"cs"}
                      verifyCallback={handleVerify}
           />
       </div>
   )
}

export default MyRecaptcha