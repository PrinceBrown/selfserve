
import Link from "next/link"
import { AiOutlineHome, AiFillPlusCircle } from "react-icons/ai"



function FAQ() {
  return (
      <section className="mb-3">
          <div className="container">
              <div className="border-below ">

                  <h5 className=" mb-3 pb-2 ">
                      <Link href="/faq">
                        <a >
                          <AiFillPlusCircle className="text-primary" /> FAQ
                        </a>
                    </Link>
                  </h5>
      
              </div>


          </div>

      </section>
  )
}

export default FAQ