import { useEffect, useState } from "react"

export default function Features() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 720);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
        window.removeEventListener('resize', handleResize);
        };
  }, []);

    useEffect(() => {
        if (!isMobile) {
            const features = document.querySelectorAll(".feature");

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                })
            }, {
                threshold: 0.8
            })

            features.forEach((feature, index) => {
                observer.observe(feature)
                feature.style.transitionDelay = `${(index + 1) * 0.2}s`;
            });

            return () => {
                features.forEach(feature => observer.unobserve(feature));
            }
        }
    }, [isMobile])

    return (<div className="features-container">
        <div className="features-heading"><h1>Why Kalaido.ai?</h1></div>
        <div className="features-description-container">
            <div className="feature">
                <div className="feature-number">
                    01
                </div>
                <div className="feature-title">
                    Empower Your Creativity
                </div>
                <div className="feature-description">
                    Effortlessly generate stunning visuals with AI, tailored to your style and campaign needs.
                </div>
            </div>
            <div className="feature">
                <div className="feature-number">
                    02
                </div>
                <div className="feature-title">
                    All-in-One Toolkit
                </div>
                <div className="feature-description">
                    Create, Edit, Enhance, and Upscale images with powerful features designed for content creators.
                </div>
            </div>
            <div className="feature">
                <div className="feature-number">
                    03
                </div>
                <div className="feature-title">
                    Time-Saving & Intuitive
                </div>
                <div className="feature-description">
                    Simplified workflows with instant results, ensuring high-quality outputs without hassle.
                </div>
            </div>
        </div>
    </div>)
}