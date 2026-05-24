import fs from 'fs';
import { createCanvas } from 'canvas';

const width = 1200;
const height = 900;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#1e293b');
gradient.addColorStop(0.5, '#986699');
gradient.addColorStop(1, '#1e293b');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = '#ffffff';
ctx.font = 'bold 72px Inter, sans-serif';
ctx.textAlign = 'center';
ctx.fillText('Mediscan Lab', width / 2, height / 2 - 20);

ctx.font = '28px Inter, sans-serif';
ctx.fillStyle = '#cbd5e1';
ctx.fillText('Advanced Medical Diagnostics & Health Checkups', width / 2, height / 2 + 60);

const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('mediscan-react-theme/screenshot.png', buffer);
console.log('screenshot.png created');
