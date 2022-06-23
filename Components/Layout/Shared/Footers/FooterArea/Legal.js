function Legal() {
  return (
    <section className="mt-auto py-3 legal-footer">
      <div className="container">
        <h5 className="legal-content">Legal</h5>
      </div>

      <style jsx>{`
      section{
        position: relative
      }
        .legal-footer {
          background: #e6e4e4;
        }
        .legal-content{
          font-size: 17px;line-height: 22px;
        }
      `}</style>
    </section>
  );
}

export default Legal;
