const Map = ({ mapEmbedded }) => {
  return (
    <div className="m-6 p-6 border bg-gray-100">
      <iframe className="map" src={mapEmbedded} loading="lazy"></iframe>
    </div>
  )
};

export default Map;
