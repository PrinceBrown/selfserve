import Layout from "../../Components/Layout/Layout"
import AboutEnercare from "../../Components/Pages/Support/AboutEnercare"
import ConatactEnercare from "../../Components/Pages/Support/ConatactEnercare"
import CustomerSupport from "../../Components/Pages/Support/CustomerSupport"
import FAQ from "../../Components/Pages/Support/FAQ"



function supportIndex() {
    return (
        <Layout title={`Support`}>

            <section className="pt-5 pb-3">

                <div className="container">
                    <h1 className=" mb-3 pb-2 section-title border-below">
                        Support
                    </h1>
                </div>

            </section>

            <CustomerSupport />
            <FAQ />
            <AboutEnercare />
            <ConatactEnercare />

        </Layout>
    )
}

export default supportIndex