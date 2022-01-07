
//styling and assets ----------------------------
import './index.scss'
import data from './data/data.json'

//components ----------------------------
import { Header } from "./components/header/header";
import { IphoneMockup } from "./components/iphone-mockup/iphone-mockup";
import { ClientLogos } from "./components/client-logos/client-logos";
import { TextFlyingIn } from "./components/text-flying-in/text-flying-in";
import { TextAndImage } from "./components/text-and-image/text-and-image";
import { BigTitle } from "./components/big-title/big-title";
import { ImagePanels } from './components/image-panels/image-panels';
import { ImagesFlyingIn } from './components/images-flying-in/images-flying-in';
import { ParallaxOne } from './components/parallax-one/parallax-one';
import { ParallaxTwo } from './components/parallax-two/parallax-two';
// import { VideoScrub } from './components/video-scrub/video-scrub';


function App() {

  return (
    <div className="App">
      <ParallaxOne parallaxOne={data.parallaxOne} />
      <ParallaxTwo parallaxTwo={data.parallaxTwo} />
      {/* <VideoScrub video={data.video} /> */}
      <IphoneMockup iphone={data.iphone} />
      <ClientLogos clients={data.clients} />
      <TextFlyingIn textFlyingIn={data.textFlyingIn} />
      <TextAndImage textAndImage={data.textAndImage} />
      <BigTitle bigTitle={data.bigTitle} />
      <ImagePanels />
      <ImagesFlyingIn imagesFlyingIn={data.imagesFlyingIn} />
      <Header header={data.header} />
    </div>
  );
}

export default App;
