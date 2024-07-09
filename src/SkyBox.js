import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
  TextureLoader,
} from "three";

export const SkyBox = () => {
  const { scene } = useThree();
  const cubeTextureLoader = new CubeTextureLoader();
  const textureLoader = new TextureLoader();

  const cubeTexture = cubeTextureLoader.load([
		"/1.jpg",
		"/2.jpg",
		"/3.jpg",
		"/4.jpg",
		"/5.jpg",
		"/6.jpg",
  ]);

  const texture = textureLoader.load(
    "/skybox_scifi/textures/Material.002_baseColor.png"
  );


  // Set the scene background property to the resulting texture.
  scene.background = cubeTexture;
  
  return null;
}
