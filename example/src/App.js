import React, { Component } from 'react';

// assumes that you have run `npm link react-map-interaction`
import { MapInteractionCSS } from 'react-map-interaction';

class App extends Component {
  render() {
    // set container node at an origin other than client 0,0 to make sure we handle this case
    const offset = 20;

    const style = {
      position: 'absolute',
      top: offset,
      left: offset,
      width: `calc(100vw - ${offset}px)`,
      height: `calc(100vh - ${offset}px)`
    }

    return (
      <div style={style}>
        <MapInteractionCSS minScale={.05} maxScale={5} showControls>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 30, top: 30 }}>
              <button
                onClick={() => console.log('Click')}
                onTouchEnd={() => console.log('TouchEnd')}
                onTouchStart={() => console.log('TouchStart')}
              >
                Touch/Click Test
              </button>
            </div>
            <img src="/grid.png" style={{ pointerEvents: 'none' }} alt="" />
          </div>
        </MapInteractionCSS>
      </div>
    );
  }
}

export default App;
