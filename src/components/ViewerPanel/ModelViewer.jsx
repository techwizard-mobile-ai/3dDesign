// src/components/ModelViewer/ModelViewer.tsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PresentationControls,
  useGLTF,
  Center,
} from "@react-three/drei";

// Internal Model component
function Model(path) {
  const gltf = useGLTF(path.path);
  return <primitive object={gltf.scene} scale={5} position={[0, -2, 0]} />;
}

const LoadingSpinner = () => (
  <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
  </div>
);

export const ModelViewer = ({ isLoading, modelPath }) => {
  return (
    <div className="bg-[radial-gradient(#37373b_1px,#1D1F1C00_1px)] bg-[size:20px_20px] rounded-xl shadow-sm overflow-hidden h-full md:h-full w-full  relative">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="w-full h-full "
      >
        {/* <color attach="background" args={["#e5e7eb"]} /> */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            {modelPath && (
              <Center>
                <Model path={modelPath} />
              </Center>
            )}
          </PresentationControls>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
      {isLoading && <LoadingSpinner />}
    </div>
  );
};
