import * as BABYLON from 'babylonjs';

export class Viewer {

  public scene: BABYLON.Scene;
  public canvas: any;
  public camera: BABYLON.FreeCamera;

  constructor(canvas: any) {
    var engine = new BABYLON.Engine(canvas, true);

    var scene = this.createScene(engine, canvas);

    engine.runRenderLoop(function () {
      scene.render();
    });

    // Resize
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }

  createScene(engine: BABYLON.Engine, canvas: any) {
    this.canvas = canvas;
    // This creates a basic Babylon Scene object (non-mesh)
    this.scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    this.camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);

    // This targets the camera to scene origin
    this.camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    //camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this.scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
    var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, this.scene);

    // Move the sphere upward 1/2 its height
    sphere.position.y = 1;

    // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
    var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, this.scene);

    return this.scene;

  };

}