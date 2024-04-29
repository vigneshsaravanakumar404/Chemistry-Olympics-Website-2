import Map, {Source, Layer} from 'react-map-gl';
import GeoJSON from './../images/map.json';
import { useState, useCallback } from 'react';
import "./../styles/InteractiveMap.css";

function InteractiveMap() {
  const [source, setSource] = useState('solar');
  const [hoverInfo, setHoverInfo] = useState(null);

  var zoom = 0;
  if(window.innerWidth <= 450)
  {
    zoom = 2;
  }
  else if(window.innerWidth <= 1000)
  {
    zoom = 2.5;
  }
  else if(window.innerWidth <= 1600)
  {
    zoom = 3.5;
  }
  else if(window.innerWidth > 1600)
  {
    zoom = 4;
  }

  const dataLayer = {
    "solar": {
      id: 'data',
      type: 'fill',
      paint: {
        'fill-color': {
          property: 'SOLAR',
          stops: [
            [0, 'rgb(90, 20, 0)'],
            [1, 'rgb(110, 20, 0)'],
            [2, 'rgb(130, 30, 0)'],
            [3, 'rgb(150, 30, 0)'],
            [4, 'rgb(170, 40, 0)'],
            [5, 'rgb(190, 40, 0)'],
            [6, 'rgb(210, 50, 0)'],
            [7, 'rgb(230, 50, 0)'],
            [8, 'rgb(250, 60, 0)']
          ]
        },
        'fill-opacity': 0.3
      }
    },
    "bio": {
      id: 'data',
      type: 'fill',
      paint: {
        'fill-color': {
          property: 'BIO',
          stops: [
            [2.5, 'rgb(0, 0, 40)'],
            [5, 'rgb(0, 0, 60)'],
            [7.5, 'rgb(0, 0, 80)'],
            [10, 'rgb(0, 0, 100)'],
            [12.5, 'rgb(0, 20, 130)'],
            [15, 'rgb(0, 40, 160)'],
            [17.5, 'rgb(0, 60, 190)'],
            [20, 'rgb(0, 80, 220)'],
            [22.5, 'rgb(0, 100, 250)']
          ]
        },
        'fill-opacity': 0.3
      }
    },
    "geothermal": {
      id: 'data',
      type: 'fill',
      paint: {
        'fill-color': {
          property: 'GEOTHERMAL',
          stops: [
            [0, 'rgb(0, 40, 20)'],
            [0.2, 'rgb(0, 60, 30)'],
            [0.4, 'rgb(0, 80, 40)'],
            [0.6, 'rgb(0, 100, 50)'],
            [0.8, 'rgb(0, 120, 60)'],
            [1.0, 'rgb(0, 140, 70)'],
            [1.2, 'rgb(0, 160, 80)'],
            [1.4, 'rgb(0, 180, 90)'],
            [1.6, 'rgb(0, 200, 100)']
          ]
        },
        'fill-opacity': 0.3
      }
    }
  };

  const onHover = useCallback(event => {
    const {
      features,
      point: {x, y}
    } = event;
    const hoveredFeature = features && features[0];
    if(hoveredFeature && hoveredFeature.hasOwnProperty('properties'))
    {
      setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
    }
    else
    {
      setHoverInfo(null);
    }
  }, []);

  return (
    <div style={{height: 'calc(100vh - 100px)', overflowY: 'hidden'}}>
      <div id='map-buttons'>
        <p class={source === 'solar' ? ' map-selected':'map-button'} onClick={() => {
          setSource('solar');
        }} 
        style={{
          color: 'rgb(160, 120, 0)'
        }}>SOLAR</p>
        <p class={source === 'bio' ? ' map-selected':'map-button'} onClick={() => {
          setSource('bio');
        }}
        style={{
          color: 'rgb(0, 80, 220)'
        }}>BIO</p>
        <p class={source === 'geothermal' ? ' map-selected':'map-button'} onClick={() => {
          setSource('geothermal');
        }}
        style={{
          color: 'rgb(0, 120, 60)'
        }}>GEOTHERMAL</p>
      </div>
      <Map
        initialViewState={{
          latitude: 38,
          longitude: -96,
          zoom: zoom
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken='pk.eyJ1IjoidGVqYXNyYWdodXJhbSIsImEiOiJjbHZjamI0ZWowanUyMmlvMDhwcDNpeXc0In0.q7ussQtQ_GNv67kJpqKK7w'
        interactiveLayerIds={['data']}
        scrollZoom={false}
        onMouseMove={onHover}
        style={{
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 215px)',
          marginLeft: 20,
          marginTop: 0,
          marginBottom: 40,
          fontFamily: 'DM Sans',
          textAlign: 'center'
        }}>
        <Source type="geojson" data={GeoJSON}>
          <Layer {...dataLayer[source]}/>
        </Source>
      </Map>
      { hoverInfo && 
        <div style={{
          width: 300,
          position: 'absolute',
          left: hoverInfo.x,
          top: hoverInfo.y,
          transform: 'translateX(calc(-50% + 40px)) translateY(100%)',
          backgroundColor: 'rgb(30, 30, 30)',
          padding: 20,
          borderRadius: 10,
          pointerEvents: 'none'
        }}>
          <p style={{
            fontSize: 14,
            margin: 0,
            fontWeight: 'bold'
          }}>{hoverInfo.feature.properties.NAME}</p>
          <div>
            <p style={{
              fontSize: 14,
              margin: 0,
              marginTop: 10,
              textDecoration: 'underline',
              display: 'inline-block'
            }}>Solar Energy Percentage: 
            </p>
            <p style={{
              fontSize: 14,
              margin: 0,
              marginLeft: 10,
              display: 'inline-block'
            }}>
              {hoverInfo.feature.properties.SOLAR}%
            </p>
          </div>
          <div>
            <p style={{
              fontSize: 14,
              margin: 0,
              marginTop: 10,
              textDecoration: 'underline',
              display: 'inline-block'
            }}>Bio Energy Percentage:</p>
            <p style={{
              fontSize: 14,
              margin: 0,
              marginLeft: 10,
              display: 'inline-block'
            }}>
              {hoverInfo.feature.properties.BIO}%
            </p>
          </div>
          <div>
            <p style={{
              fontSize: 14,
              margin: 0,
              marginTop: 10,
              textDecoration: 'underline',
              display: 'inline-block'
            }}>Geothermal Energy Percentage:
            </p>
            <p style={{
              fontSize: 14,
              margin: 0,
              marginLeft: 10,
              display: 'inline-block'
            }}>
              {hoverInfo.feature.properties.GEOTHERMAL}%
            </p>
          </div>
        </div>
      }
    </div>
  );
}

export default InteractiveMap;
