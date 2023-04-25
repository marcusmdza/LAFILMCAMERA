import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const CameraModel = ({isMobile}) => {
  const { scene } = useGLTF('./vintage_polaroid_camera/scene.gltf');

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.01 : 0.02 }
      position={isMobile ? [1, -2, 0] :[1, -2, 0]}
      rotation={[0, 1.9, 0]}
    />
  );
};

const Cameras = () => {
  return (
    <mesh>
      <ambientLight intensity={5} />
      <pointLight intensity={1} position={[0, 0, 0]} />
      <spotLight
        position={[0, 2, 20]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <CameraModel />
    </mesh>
  );
};

const CamerasCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia(
    '(max-width: 500px)');

    //set initial value of isMobile state
    setIsMobile(mediaQuery.matches);

    //define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    //add a callback function as a listener for changes to media query 
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    //remove listener when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cameras isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CamerasCanvas;