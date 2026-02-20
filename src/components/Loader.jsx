import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html center>
      <div
        class="w-10 h-10 border-4 border-t-[#2b77e7] border-gray-300 rounded-full animate-spin"
      ></div>
    </Html>
  );
};

export default Loader;
