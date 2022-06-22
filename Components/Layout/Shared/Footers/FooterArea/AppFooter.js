function AppFooter() {
  return (
    <section className="py-5 footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex">
              <p className="me-3">© 2022 Enercare</p>
              <a className="me-2 footer-item" href="#">
                Privacy Policy
              </a>
              <a className="me-2 footer-item" href="#">
                Terms of Use
              </a>
              <a className="me-2 footer-item" href="#">
                ECRA/ESA Licence #7010500
              </a>
            </div>
          </div>
          <div className="col text-end">
            <img
              className="accessibility-icon"
              src="https://cdn-icons-png.flaticon.com/512/1512/1512790.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: #f5f2f2;
        }

        .footer-item {
          text-decoration: none;
          color: black;
        }

        .accessibility-icon {
          width: 20px;
        }
      `}</style>
    </section>
  );
}

export default AppFooter;
