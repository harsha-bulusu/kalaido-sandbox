import { Button } from "@mui/material";
import Footer from "./Footer";

export default function Explore() {
    return (
        <div className="explore-container">
            <div className="advertisement-banner-container">
                <div className="advertisement-image">
                    <img src="https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/vr-lady.webp"></img>
                </div>

                <div className="advertisement-content">
                    <div className="advertisement-header">
                        <p>Get Started With</p>
                        <p>Kalaido.ai</p>
                    </div>
                    <div>
                        <p>Unleash your capabilities of creative thinking with our AI paint brush with limitless possibilities</p>
                    </div>
                    <div>
                        <Button variant="contained" color="info" sx={{backgroundColor: "#fff", color: "black", fontWeight: 'bold'}}>
                            Get Started
                        </Button>
                    </div>
                </div>

                <div className="advertisement-image hidden-advertisement-mobile">
                    <img src="https://cdn.web.imagine.art/imagine-frontend/assets/images/landing-page/space-from-earth.webp"></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}