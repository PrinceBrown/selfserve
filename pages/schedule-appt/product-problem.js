
import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AdditionalDetails from '../../Components/Pages/Schedule/ProductProblem/AdditionalDetails'
import HowCanWeHelp from '../../Components/Pages/Schedule/ProductProblem/HowCanWeHelp'

function ProductProblem() {
    return (
        <Layout title={"How Can We Help?"}>

        <HowCanWeHelp />
        <AdditionalDetails />

        </Layout>
    )
}

export default ProductProblem