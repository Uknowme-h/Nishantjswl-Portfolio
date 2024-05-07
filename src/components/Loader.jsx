import { Html, useProgress } from "@react-three/drei";
import 'ldrs/helix';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <span class="relative flex h-5 w-5 mt-[250px]">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
        <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      </span> */}

  
    <l-helix
      size="45"
      speed="0.7"
      color="white" 
      class="mt-[250px]"
    ></l-helix>
    <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      
    </Html>
  );
};

export default CanvasLoader;
