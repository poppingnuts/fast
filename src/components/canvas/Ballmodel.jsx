import { Decal, Float, useTexture } from "@react-three/drei";

const BallModel = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronBufferGeometry args={[1, 1]} />
        
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            map={decal}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
          />
        </mesh>
      </Float>
    );
  };

  export default BallModel