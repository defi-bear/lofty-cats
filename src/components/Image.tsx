import React, { useState } from 'react';
import { Image as DefaultImage } from 'react-native';

import thumbnail from 'src/assets/images/thumbnail.png';

/**
 * Image is a function that takes in a source and props and returns a DefaultImage
 * component that has an onLoad function that sets the loading state to false and
 * a source that is either the thumbnail or the source passed in
 * @param  - DefaultImage - the component that will be used to render the image.
 */
function Image({ source, ...props }: DefaultImage['props']) {
  const [loading, setLoading] = useState(true);

  const onLoadEnd = () => {
    if (loading) {
      setLoading(false);
    }
  };
  return (
    <DefaultImage
      onLoad={() => onLoadEnd()}
      source={loading ? thumbnail : source}
      {...props}
    />
  );
}

const MemoizedImage = React.memo(
  Image,
  (prevProps, nextProps) => prevProps.source === nextProps.source,
);

export default MemoizedImage;
