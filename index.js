import {STLLoader} from './STLLoader';

/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Stl Model component for A-Frame.
 */
AFRAME.registerComponent('stl-model', {
  schema: {
    src:         { type: 'asset' }
  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    this.model = null;
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) {
    let loader;
    var model;
    var el = this.el;
    const data = this.data;
    if (!data.src) return;

    this.remove();
    loader = new STLLoader();
    if (data.crossorigin) loader.setCrossOrigin(data.crossorigin);
    loader.load(data.src, function ( geometry ) {
      // Apply material.
      var material = el.components.material;
      // if (material) {
      //   geometry.traverse(function (child) {
      //     if (child instanceof THREE.Mesh) {
      //       child.material = material.material;
      //     }
      //   });
      // }

      if (material) {
        model = new THREE.Mesh( geometry , material.material);
      } else {
        model = new THREE.Mesh( geometry, new THREE.MeshStandardMaterial());
      }

      el.setObject3D('mesh', model);
      el.emit('model-loaded', {format: 'stl', model: model});
    }, function(progress) {}, function(err) {console.log(err)});
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    if (this.model) this.el.removeObject3D('mesh');
  },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { },

  /**
   * Write cached attribute data to the entity DOM element.
   *
   * @param {boolean} isDefault - Whether component is a default component. Always flush for
   *   default components.
   */
  flushToDOM: function (isDefault) {
    return;
    // var attrValue = isDefault ? this.data : this.attrValue;
    // if (!attrValue) { return; }
    // //console.log('src', this.data.src)
    // window.HTMLElement.prototype.setAttribute.call(this.el, this.attrName, '#model');

  },
});
