const Frame = ({ src, height = '100%', width = '100%' }: { src: string, height?: any, width?: any }) => {

  return (
    <iframe
      title={'video'}
      src={src}
      loading={'lazy'}
      width={height}
      height={width}
      scrolling="no"
      allowFullScreen
      style={{
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#fff'
      }}
    />
  );
};

export default Frame;
