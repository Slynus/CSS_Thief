"use strict";

import { start as startCanvas, stop as stopCanvas } from './canvas.js';
import { enableBgAnim } from './backgroundAnimation.js';
import { enableRoughAnim } from './roughAnimation.js';



enableBgAnim();
enableRoughAnim();
// startCanvas(); // Le canvas c'est trop relou

window.stopCanvas = stopCanvas;