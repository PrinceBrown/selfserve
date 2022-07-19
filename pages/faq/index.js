import Layout from "../../Components/Layout/Layout"
import FAQList from "../../Components/Pages/FAQ/FAQList"
import { createClient } from 'contentful'


export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    // Get Items From Contentful Space
    const res = await client.getEntries({ content_type: '6lrMRhvIg8EgCyMWiY4EsE' })

    // console.log(res.items)

    return {
        props: {
            FAQS: res.items
        }
    }

}












function enercareFAQ({FAQS}) {

    console.log(FAQS)


    let titles = ['Why is my product not listed or incorrect?', 
    'Why is my plan not listed or incorrect?',
     'My contact number is incorrect?', 
     'I can&apos;t find a suitable date and time', 
     'Technical issues with the app?']


    return (
        <Layout title={`FAQ`}>

            <section className="pt-5 pb-3">

                <div className="container">
                    <h1 className=" mb-3 pb-2 section-title border-below">
                        FAQs
                    </h1>
                </div>

            </section>



        {titles.map(title => (
            <FAQList title={title} />
        ))}




        </Layout>
    )
}

export default enercareFAQ