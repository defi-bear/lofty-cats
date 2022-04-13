import React, { useState } from 'react';
import { Image as DefaultImage } from 'react-native';

import thumbnail from 'src/assets/images/thumbnail.png';

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
