import React, { useEffect, useState } from 'react';
import FlipLink from "../components/ui/FlipLink"; // Adjust path as needed
import { LinkedinIcon, GithubIcon, GmailIcon } from "../components/Icons"; // Adjust path as needed
import NavBar from './NavBar';
import { Footer } from './Footer';

function MyPage() {
   const [showContent, setShowContent] = useState(false);
      const [animate, setAnimate] = useState(false);
      const [hideOverlay, setHideOverlay] = useState(false);
    
      useEffect(() => {
        const overlayTimeout = setTimeout(() => {
          setShowContent(true);
          setTimeout(() => setAnimate(true), 100);
          setTimeout(() => setHideOverlay(true), 500);
        }, 100);
        return () => clearTimeout(overlayTimeout);
      }, []);
    
  return (
    <>
    {!hideOverlay && (
        <div
          className={`absolute inset-0 z-50 bg-white transition-all duration-700 ${
            showContent ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transform: showContent ? "translateY(-100%)" : "translateY(0)",
            transition:
              "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease 0.7s",
          }}
        />
      )}
    <div>
      <NavBar/>
      <div className="grid h-screen place-content-center bg-black text-white gap-4">

      <FlipLink href="https://www.linkedin.com/in/dev-pratap-39543b288/" icon={<LinkedinIcon />}>
        Linkedin
      </FlipLink>
      <FlipLink href="https://github.com/yujiitadoriyadav" icon={<GithubIcon />}>
        Github
      </FlipLink>
      <FlipLink href="mailto:working.devpratap.iiitbh27@gmail.com" icon={<GmailIcon />}>
        Gmail
      </FlipLink>
    
    </div>
    <Footer />
    </div>
    
    </>
  );
}

export default MyPage;