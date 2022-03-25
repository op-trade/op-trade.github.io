var DEFAULT_PARTICLE = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: '#111111',
      },
      shape: {
        type: 'none',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 10,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 2,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 175,
        color: '#87CEFA',
        opacity: 4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        attract: {
          enable: false,
          rotateX: 1200,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 2000,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 5,
        },
      },
    },
    retina_detect: true,
  };
  
  function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split('&').forEach(function(part) {
      var item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }
  
  var decoded = getJsonFromUrl();
  
  // background setup
  var backgroundColor = decoded.backgroundColor || '000';
  document.getElementById('particles-js').style.backgroundColor =
    '#' + backgroundColor;
  
  // particle setup
  var particlesFromUrl = decoded.particles ? JSON.parse(decoded.particles) : {};
  var particlesConfig = deepmerge(DEFAULT_PARTICLE, particlesFromUrl);
  particlesJS('particles-js', particlesConfig);
  