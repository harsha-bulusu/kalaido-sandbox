export default function Footer() {
    return (
        <div className="footer-container p-5">
                <div className="organization-logo">
                    <img src="fractal-logo.png" alt="Fractal Analytics"/>
                </div>

                <div className="footer-group-wrapper">
                    <div className="footer-group-container">
                        <div className="footer-group-title">Company</div>
                        <div className="footer-group">
                            <div className="footer-group-element">Contact US</div>
                            <div className="footer-group-element">Our Journey With AI</div>
                            <div className="footer-group-element">Leadership team</div>
                        </div>
                    </div>

                    <div className="footer-group-container">
                        <div className="footer-group-title">Legal</div>
                        <div className="footer-group">
                            <div className="footer-group-element">Terms and Conditions</div>
                            <div className="footer-group-element">Privacy Policy</div>
                        </div>
                    </div>

                    <div className="footer-group-container">
                        <div className="footer-group-title">Our Products</div>
                        <div className="footer-group">
                            <div className="footer-group-element">Kalaido</div>
                            <div className="footer-group-element">Eugene</div>
                            <div className="footer-group-element">Vaidya.ai</div>
                            <div className="footer-group-element">Marshall Goldsmith</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}