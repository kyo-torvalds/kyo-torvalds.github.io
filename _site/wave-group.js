import { Wave } from './wave.js';

export class WaveGroup {
    constructor() {
        this.totalWaves = 5;
        this.totalPoints = 8;

        this.color = ['rgba(254, 166, 30,0.4)', 'rgba(255, 95, 95,0.4)', 'rgba(216, 79, 147,0.4)', 'rgba(94, 79, 144,0.4)', 'rgba(0, 61, 92,0.4)']

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}