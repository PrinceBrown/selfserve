function OtherProductsAndServices() {
  return (
    <section className="other-services pb-5 section-bg-faint">
      <div className="container py-5">
        <h2>Other Products and Services Available</h2>
        <p>
          Find out more about additional products and services you qualify for
        </p>
        <p> View More</p>
      </div>

      <style jsx>{`
        .other-services {
          padding: 20px;
          // margin-bottom: 100px !important;
        }

        .other-services-title {
          font-weight: 700;
          font-size: 30px;
          line-height: 38px;
          color: #29292c;
        }
      `}</style>
    </section>
  );
}

export default OtherProductsAndServices;
