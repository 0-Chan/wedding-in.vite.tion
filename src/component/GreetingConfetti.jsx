import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const GreetingConfetti = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        life: {
          count: 1,
          duration: {
            value: 5,
          },
        },
        emitters: {
          position: {
            x: 50,
            y: 87,
          },
          rate: {
            quantity: 16,
            delay: 100,
          },
        },
        particles: {
          move: {
            decay: 0.05,
            direction: 'top',
            enable: true,
            gravity: {
              enable: true,
              maxSpeed: 50,
            },
            outModes: {
              top: 'none',
              default: 'destroy',
            },
            speed: { min: 25, max: 70 },
          },
          number: {
            value: 0,
          },
          opacity: {
            value: 1,
          },
          rotate: {
            value: {
              min: 0,
              max: 180,
            },
            direction: 'random',
            animation: {
              enable: true,
              speed: 10,
            },
          },
          tilt: {
            direction: 'random',
            enable: true,
            value: {
              min: 0,
              max: 90,
            },
            animation: {
              enable: true,
              speed: 5,
            },
          },
          size: {
            value: 8,
          },
          roll: {
            darken: {
              enable: true,
              value: 25,
            },
            enable: true,
            speed: {
              min: 2,
              max: 3,
            },
          },
          wobble: {
            distance: 10,
            enable: true,
            speed: {
              min: -2,
              max: 2,
            },
          },
          shape: {
            type: ['character', 'character', 'character'],
            options: {
              character: [
                {
                  fill: true,
                  font: 'Verdana',
                  value: ['😍', '🌸', '🌼', '🐱'],
                  style: '',
                  weight: 400,
                },
              ],
            },
          },
        },
      }}
    />
  );
};

export default GreetingConfetti;
