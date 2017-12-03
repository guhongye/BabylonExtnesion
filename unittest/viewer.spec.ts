import { expect } from 'chai';
import 'mocha';
import * as BABYLON from "../src/viewer"

describe('Viewer Test', () => {
  it('Viewer initialize', () => {
    var canvas = document.createElement('canvas');
    var viewer = new BABYLON.Viewer(canvas);
    expect(viewer).to.be.an('object');
  });
});
