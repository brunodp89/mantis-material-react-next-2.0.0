// third-party
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

// project import
import useConfig from 'hooks/useConfig';

// ==============================|| LANDING - BROWSER  PAGE ||============================== //

const BrowserBlockPage = () => {
  const { presetColor } = useConfig();

  return (
    <ReactCompareSlider
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            background: 'white',
            border: 0,
            color: '#333'
          }}
        />
      }
      itemOne={<ReactCompareSliderImage src={`/assets/images/landing/${presetColor}-dark.jpg`} />}
      itemTwo={<ReactCompareSliderImage src={`/assets/images/landing/${presetColor}-light.jpg`} />}
    />
  );
};

export default BrowserBlockPage;
