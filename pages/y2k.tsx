import { useEffect } from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import Wallpaper from "../components/Wallpaper/Wallpaper";

// obviously, an interactive VNC display will not work even a little bit server-side
const VNC = dynamic(() => import("../components/VNC/VNC"), { ssr: false });

const Y2K = () => {
  // print a fancy console message (in browser only) just for funsies
  useEffect(() => {
    console.log(
      `
%c🤓 %cHey there, fellow nerd!%c Looking for the magic behind this page?

%cCheck out this post: https://jarv.is/notes/y2k-sandbox/

...or the source code here: https://github.com/jakejarvis/y2k
`,
      "font-size: 20px",
      "color: black; background: yellow; font-size: 20px",
      "font-size: 20px",
      "font-size: 15px"
    );
  }, []);

  return (
    <>
      <NextSeo
        title="Y2K Sandbox: Powered by Windows Me™ 💾"
        description="My first website on a Windows Me-powered time machine. You've been warned."
        openGraph={{
          title: "Y2K Sandbox: Powered by Windows Me™",
        }}
      />

      {/* set a random retro wallpaper tile for the content area */}
      <Wallpaper image={`/static/images/y2k/tiles/tile_${Math.floor(20 * Math.random())}.png`} tile>
        <VNC server="wss://y2k.jrvs.io" />
      </Wallpaper>

      <style jsx global>{`
        /* make the viewport a bit larger by un-sticking the nav bar */
        header {
          position: relative !important;
        }

        /* make an exception for the wrapper (and its background) to fill up the normal content area */
        main {
          padding: 0 !important;
        }
        main > div {
          max-width: 100% !important;
        }
      `}</style>
    </>
  );
};

export default Y2K;
