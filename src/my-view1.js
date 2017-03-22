(() => {

  /* Local constants & variables
   * ======================================================================= */


  /* ThreeJs demo
   * ======================================================================= */

  const element = {

    is: 'my-view1',

    properties: {
    },

    /**
     * Lifecycle callbacks
     */
    ready,

    /**
     * Public API
     */

    /**
     * Observers
     */

    /**
     * Computed properties
     */

    /**
     * Listeners
     */

    /**
     * UI hooks
     */

    /**
     * Internal methods
     */
  };


  /* Element Registration & Exporting
   * ======================================================================= */

  // Register element with Polymer.
  if (window && window.Polymer) {
    Polymer(element);
  }

  // Export for testing.
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = element;
  }


  /* Offline / Online Handling
   * ======================================================================= */

  // Fired when navigator.onLine is updated to 'offline'
  window.addEventListener('offline', handleOffline, false);

  // Fired when navigator.onLine is updated to 'online'
  window.addEventListener('online', handleOnline, false);

  /**
   * Handle offline event
   */
  function handleOffline() {
    console.log(`Online status of ${this.is}: ${navigator.onLine}`);

    // Do some stuff when offline
  }

  /**
   * Handle online event
   */
  function handleOnline() {
    console.log(`Online status of ${this.is}: ${navigator.onLine}`);

    // Do some stuff when back online
  }


  /* Lifecycle callbacks
   * ======================================================================= */

  /**
   * Called when component is ready
   */
  function ready() {
    // Get window size
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: this.$.canvas,
    });
    renderer.setSize(ww, wh);

    // Create an empty scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 100, 200);

    // Create a perpsective camera
    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    camera.position.z = 400;

    // Array of points
    const points = [
      [68.5, 185.5],
      [1, 262.5],
      [270.9, 281.9],
      [300, 212.8],
      [178, 155.7],
      [240.3, 72.3],
      [153.4, 0.6],
      [52.6, 53.3],
      [68.5, 185.5],
    ];

    const vectors = points.map((point) => {
      const x = point[0];
      const y = (Math.random() - 0.5) * 250;
      const z = point[1];
      return new THREE.Vector3(x, y, z);
    });

    const path = new THREE.CatmullRomCurve3(vectors);

    // Set colors
    const colours = [0xFF6138, 0xFFFF9D, 0xBEEB9F, 0x79BD8F, 0x00A388];

    colours.forEach((colour, i) => {
      // Create a new geometry with a different radius
      const geometry = new THREE.TubeBufferGeometry(path, 100, (i * 2) + 4, 10, true);
      // Set a new material with a new color and a different opacity
      const material = new THREE.MeshBasicMaterial({
        color: colour,
        transparent: true,
        wireframe: true,
        opacity: ((1 - i / 5) * 0.5 + 0.1),
      });
      // Create a mesh
      const tube = new THREE.Mesh(geometry, material);
      // Push the mesh into the scene
      scene.add(tube);
    });

    let percentage = 0;

    function render() {
      percentage += 0.0003;
      const p1 = path.getPointAt(percentage % 1);
      const p2 = path.getPointAt((percentage + 0.01) % 1);
      camera.position.set(p1.x, p1.y, p1.z);
      camera.lookAt(p2);

      // Render the scene
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  /* Public API
   * ======================================================================= */


  /* Observers
   * ======================================================================= */


  /* Computed properties
   * ======================================================================= */


  /* UI hooks
   * ======================================================================= */


  /* Internal methods
   * ======================================================================= */


})();