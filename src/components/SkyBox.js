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
		"/skybox-cube/1.jpg",
		"/skybox-cube/2.jpg",
		"/skybox-cube/3.jpg",
		"/skybox-cube/4.jpg",
		"/skybox-cube/5.jpg",
		"/skybox-cube/6.jpg",
  ]);

  const texture = textureLoader.load(
    "/skybox_scifi/textures/Material.002_baseColor.png"
  );


  // Set the scene background property to the resulting texture.
  scene.background = cubeTexture;
  
  return null;
}
