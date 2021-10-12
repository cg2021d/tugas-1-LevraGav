///<reference types="three" />

function main() {
  const canvas = document.querySelector("#myCanvas");
  const renderer = new THREE.WebGLRenderer({ canvas });

  const fov = 40;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 120;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x010203);

  let lights = [];
  {
    const directLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directLight1.position.set(-1, 2, 4);
    lights.push(directLight1);

    const directLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directLight2.position.set(1, -2, -4);
    lights.push(directLight2);
  }

  {
    const ambientLight1 = new THREE.AmbientLight(0xffffff, 1);
    ambientLight1.position.set(-1, 2, 4);
    lights.push(ambientLight1);

    const ambientLight2 = new THREE.AmbientLight(0xffffff, 1);
    ambientLight2.position.set(1, -2, -4);
    lights.push(ambientLight2);
  }

  {
    const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight1.position.set(-1, 2, 4);
    lights.push(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight2.position.set(1, -2, -4);
    lights.push(pointLight2);
  }

  {
    const hemisphereLight1 = new THREE.HemisphereLight(0xffffff, "#357ef5", 1);
    hemisphereLight1.position.set(-1, 2, 4);
    lights.push(hemisphereLight1);

    const hemisphereLight2 = new THREE.HemisphereLight(0xffffff, "#357ef5", 1);
    hemisphereLight2.position.set(1, -2, -4);
    lights.push(hemisphereLight2);
  }

  {
    const spotLight1 = new THREE.SpotLight(0xffffff, 1, 50);
    spotLight1.position.set(-1, 2, 4);
    lights.push(spotLight1);

    const spotLight2 = new THREE.SpotLight(0xffffff, 1, 50);
    spotLight2.position.set(1, -2, -4);
    lights.push(spotLight2);
  }

  lights.forEach((light) => {
    scene.add(light);
    light.visible = false;
  });

  lights[0].visible = true;
  lights[1].visible = true;

  const selectedLight = document.getElementById("light");
  selectedLight.addEventListener("change", (e) => {
    const selected = e.target.value;

    for (let light = 0; light < lights.length; light += 2) {
      lights[light].visible = false;
      
      lights[light + 1].visible = false;
      
    }

    console.log(selected);
    console.log(parseInt(selected) + 1);
    lights[selected].visible = true;
    lights[parseInt(selected) + 1].visible = true;
  });

  const objects = [];
  const spread = 15;

  function addObject(x, y, obj) {
    obj.position.x = x * spread;
    obj.position.y = y * spread;

    scene.add(obj);
    objects.push(obj);
  }

  function createMaterial(material, color = material.color.setHSL(Math.random(), 1, 0.5)) {
    return material;
  }

  function addSolidGeometry(x, y, geometry, material, color) {
    const mesh = new THREE.Mesh(geometry, createMaterial(material, color));
    addObject(x, y, mesh);
  }

  function addLineGeometry(x, y, geometry) {
    const material = new THREE.LineBasicMaterial({ color: 0x000000 });
    const mesh = new THREE.LineSegments(geometry, material);
    addObject(x, y, mesh);
  }

  {
    const width = 8;
    const height = 8;
    const depth = 8;
    addSolidGeometry(
      -2,
      2,
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const radius = 7;
    addSolidGeometry(
      2,
      2,
      new THREE.DodecahedronGeometry(radius),
      new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const verticesOfCube = [
      -1, -1, -1,    1, -1, -1,    1,  1, -1,    -1,  1, -1,
      -1, -1,  1,    1, -1,  1,    1,  1,  1,    -1,  1,  1,
    ];
    const indicesOfFaces = [
      2, 1, 0,    0, 3, 2,
      0, 4, 7,    7, 3, 0,
      0, 1, 5,    5, 4, 0,
      1, 2, 6,    6, 5, 1,
      2, 3, 7,    7, 6, 2,
      4, 5, 6,    6, 7, 4,
    ];
    const radius = 7;  
    const detail = 2;
    addSolidGeometry(
      -2,
      0,
      new THREE.PolyhedronGeometry(
        verticesOfCube, indicesOfFaces, radius, detail),
      new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const radius = 6;
    const height = 8;
    const radialSegments = 16;
    addSolidGeometry(
      0,
      0,
      new THREE.ConeGeometry(radius, height, radialSegments),
      new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const radius = 7; 
    addSolidGeometry(
      2,
      0,
      new THREE.TetrahedronGeometry(radius),
      new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const radius = 5;
    const tubeRadius = 2;
    const radialSegments = 8;
    const tubularSegments = 24;
    const geometry = new THREE.TorusGeometry(
      radius,
      tubeRadius,
      radialSegments,
      tubularSegments
    );

    addSolidGeometry(-2, 0, geometry,
      new THREE.MeshToonMaterial({
        side: THREE.DoubleSide,
        wireframe: true,
      })
    );
  }

  {
    const shape = new THREE.Shape();
    const x = -2.5;
    const y = -5;
    shape.moveTo(x + 2.5, y + 2.5);
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

    const extrudeSettings = {
      steps: 2,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 2,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    addSolidGeometry(
      2,
      -2,
      geometry,
      new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const radius = 3.5;
    const tubeRadius = 1.5;
    const radialSegments = 8;
    const tubularSegments = 64;
    const p = 2;
    const q = 3;
    const geometry = new THREE.TorusKnotGeometry(
      radius,
      tubeRadius,
      tubularSegments,
      radialSegments,
      p,
      q
    );
    addSolidGeometry(
      2,
      0,
      geometry,
      new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        wireframe: true,
      })
    );
  }

  {
    class CustomSinCurve extends THREE.Curve {
      constructor(scale) {
        super();
        this.scale = scale;
      }
      getPoint(t) {
        const tx = t * 3 - 1.5;
        const ty = Math.sin(2 * Math.PI * t);
        const tz = 0;
        return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
      }
    }

    const path = new CustomSinCurve(4);
    const tubularSegments = 20;
    const radius = 1;
    const radialSegments = 8;
    const closed = false;
    const geometry = new THREE.TubeGeometry(
      path,
      tubularSegments,
      radius,
      radialSegments,
      closed
    );
    addSolidGeometry(
      -2,
      -2,
      geometry,
      new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  {
    const innerRadius = 2;
    const outerRadius = 7;
    const thetaSegments = 18;
    const geometry = new THREE.RingGeometry(
      innerRadius,
      outerRadius,
      thetaSegments
    );
    addSolidGeometry(
      2,
      -2,
      geometry,
      new THREE.MeshStandardMaterial({
        side: THREE.DoubleSide,
        wireframe: false,
      })
    );
  }

  function animateTranslate(obj) {
    const speed = 0.3;
    console.log(obj.position.x);
    if (obj.position.x <= 30 && obj.position.y >= 29) 
    {
      obj.position.x += speed;
    } 
    
    else if (obj.position.x >= 29 && obj.position.y >= -30) 
    {
      obj.position.y -= speed;
    } 
    
    else if (obj.position.x >= -30) 
    {
      obj.position.x -= speed;
    } 
    
    else if (obj.position.y <= 30) 
    {
      obj.position.y += speed;
    }
  }

  function animateCircularX(obj, time, reverse, z) {
    const speed = time;

    obj.position.x = 10 * Math.sin(speed) * 5;
    obj.position.z = 10 * Math.cos(speed) * z;
    if (reverse) {
      obj.position.x = -obj.position.x;
      obj.position.z = -obj.position.z;
    }
  }

  function animateZ(obj, time, reverse, z) {
    const speed = time;

    obj.position.z = 10 * Math.cos(speed) * z;
    if (reverse) {
      obj.position.z = -obj.position.z;
    }
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.0006;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    animateCircularX(objects[2], time, false, 5);
    animateCircularX(objects[4], time, true, 5);
    animateZ(objects[3], time, true, 2);
    animateTranslate(objects[0]);
    animateTranslate(objects[1]);
    animateTranslate(objects[5]);
    animateTranslate(objects[6]);
    objects.forEach((obj, ndx) => {
      const speed = 0.1 + ndx * 0.1;
      const rot = time * speed;
      obj.rotation.x = rot;
      obj.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();