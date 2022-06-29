function AppFooter() {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex">
              <h6 className="me-3">© 2022 Enercare</h6>
              <a className="me-2 footer-item" href="#">
                Legal
              </a>
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
        footer {
          position: absolute;
          bottom:0;
          width: 100%;
          background: #f5f2f2;
          padding: 10px;
        }

        .footer-item {
          text-decoration: none;
          color: black;
          font-size: 12px
        }

        .accessibility-icon {
          width: 20px;
        }
      `}</style>
    </footer>
  );
}

export default AppFooter;
