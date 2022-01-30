import { NextSeo } from "next-seo";
import Content from "../components/Content/Content";
import PageTitle from "../components/PageTitle/PageTitle";
import Link from "../components/Link/Link";
import Video from "../components/Video/Video";

import thumbnail from "../public/static/images/hillary/thumb.png";

const Hillary = () => (
  <>
    <NextSeo
      title="My Brief Apperance in Hillary Clinton's DNC Video"
      description="My brief apperance in one of Hillary Clinton's 2016 DNC convention videos on substance abuse."
      openGraph={{
        title: "My Brief Apperance in Hillary Clinton's DNC Video",
      }}
    />

    <PageTitle>My Brief Apperance in Hillary Clinton's DNC Video</PageTitle>
    <Content>
      <Video
        webm="/static/images/hillary/convention-720p.webm"
        mp4="/static/images/hillary/convention-720p.mp4"
        thumbnail={thumbnail.src}
        subs="/static/images/hillary/subs.en.vtt"
      />

      <p className="copyright">
        Video is property of{" "}
        <Link href="https://www.hillaryclinton.com/" style={{ fontWeight: 700 }}>
          Hillary for America
        </Link>
        , the{" "}
        <Link href="https://democrats.org/" style={{ fontWeight: 700 }}>
          Democratic National Committee
        </Link>
        , and{" "}
        <Link href="https://cnnpressroom.blogs.cnn.com/" style={{ fontWeight: 700 }}>
          CNN / WarnerMedia
        </Link>
        . &copy; 2016.
      </p>
    </Content>

    <style jsx>{`
      .copyright {
        text-align: center;
        font-size: 0.9em;
        line-height: 1.8;
        margin: 1.25em 1em 0 1em;
        color: var(--medium-light);
      }
    `}</style>
  </>
);

export default Hillary;
