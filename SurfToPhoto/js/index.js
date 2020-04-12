"use strict";

import { start as startCanvas, stop as stopCanvas } from './canvas.js';
import { enableBgAnim } from './backgroundAnimation.js';

enableBgAnim();
// startCanvas(); // Le canvas c'est trop relou

window.stopCanvas = stopCanvas;