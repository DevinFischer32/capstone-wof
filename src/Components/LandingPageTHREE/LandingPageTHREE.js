import React, { Component } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import font from "../Logos/SF Fortune Wheel_Regular.json";

export default class LandingPageTHREE extends Component {
  componentDidMount() {
    // SCENE
    const scene = new THREE.Scene();
    const length = 16 * 2;
    const width = 2.10644 * 2;
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      85,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // INIT CAMERA
    camera.position.x = -10;
    camera.position.y = 10;
    camera.position.z = 100;

    // RENDERER
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    // RESIZE HAMDLER
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    // INIT HEMISPHERE LIGHT
    scene.add(new THREE.AmbientLight(0xffffff, 1));

    // SCENE
    scene.background = new THREE.Color(0x9d5e90);

    // POINT LIGHT
    const light1 = new THREE.PointLight(0xffffff, 1, 100);
    light1.castShadow = true;
    light1.shadow.mapSize.width = 4096;
    light1.shadow.mapSize.height = 4096;
    scene.add(light1);

    const light2 = new THREE.PointLight(0xffffff, 1, 100);
    light2.castShadow = true;
    light2.shadow.mapSize.width = 4096;
    light2.shadow.mapSize.height = 4096;
    scene.add(light2);

    // TEXT
    const loader = new FontLoader();
    const newFont = loader.parse(font);

    const text = new TextGeometry("WHEEL OF\n FORTUNE", {
      font: newFont,
      size: 15,
      height: 3,
      curveSegments: 10,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 4,
      bevelOffset: -0.2,
      bevelSegments: 8,
    });
    let colors = [0xa224f4, 0xa10c3c, 0xe19600, 0x0319d1, 0xa10c3c, 0x038c20];
    let colorstwo = [
      0x038c20, 0xa10c3c, 0x0319d1, 0xe19600, 0xa10c3c, 0xa224f4,
    ];
    const textMesh = new THREE.Mesh(text, [
      new THREE.MeshPhongMaterial({ color: 0xffffff }),
      new THREE.MeshPhongMaterial({ color: 0x000000 }),
    ]);
    textMesh.castShadow = true;
    textMesh.position.x = -60;

    scene.add(textMesh);
    const wedgeGroup = new THREE.Group();
    const wedgeGrouptwo = new THREE.Group();
    const mainGroup = new THREE.Group();

    function createWedge(colors) {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(length * 1.75, width * 3.5);
      shape.lineTo(length * 1.75, -width * 3.5);
      shape.lineTo(0, 0);

      const extrudeSettings = {
        steps: 2,
        depth: 4,
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const material = new THREE.MeshStandardMaterial({ color: colors });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.rotation.z = 1;

      return mesh;
    }
    function createWedges() {
      for (let i = 0; i < 6; i++) {
        let triangle = createWedge(colors[i]);
        triangle.rotation.z = 1 * i;
        wedgeGroup.add(triangle);
        for (let j = 0; j < 5; j++) {
          let triangle = createWedge(colorstwo[j]);
          triangle.rotation.z = 1.2 * j;

          wedgeGrouptwo.add(triangle);
        }
      }
    }
    wedgeGroup.position.z = -4;
    wedgeGroup.position.x = 0;
    wedgeGrouptwo.position.z = -9;
    wedgeGrouptwo.position.x = 0;
    mainGroup.add(wedgeGroup, wedgeGrouptwo);
    scene.add(mainGroup);

    const geometry = new THREE.CircleGeometry(70, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    circle.position.z = -10;
    circle.position.x = 0;
    circle.position.y = 0;

    createWedges();
    // ANIMATE
    function animate() {
      const now = Date.now() / 1000;
      light1.position.y = 20;
      light1.position.x = Math.cos(now) * 25;
      light1.position.z = Math.sin(now) * 25;

      light2.position.y = 20;
      light2.position.x = Math.sin(now) * 25;
      light2.position.z = Math.cos(now) * 25;

      // camera.rotation.z = Math.cos(now * 0.75);

      wedgeGroup.rotation.z += 0.015;
      wedgeGrouptwo.rotation.z -= 0.015;

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}
