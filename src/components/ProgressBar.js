import { useEffect } from "react";

export default function ProgressBar() {
    useEffect(() => {
        const updateProgressBar = () => {
          const { scrollTop, scrollHeight } = document.documentElement;
          const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
          
          document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
        }
        document.addEventListener('scroll', updateProgressBar)
    
        return () => {
          document.removeEventListener('scroll', updateProgressBar);
        };
      }, [])

      return (
        <div id="progress-bar"></div>
      )
}