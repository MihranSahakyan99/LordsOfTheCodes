import React from "react";
import { Canvas, Particle } from "./canvas";

export class ProfilePageCanvasAnimation extends Canvas {
    CreateParticles() {
        const col = Math.floor(this.refs.canvas.width / this.particle_count);
        const row = Math.floor(this.refs.canvas.height / this.particle_count);
        const col_corrector = (this.particle_count + (this.refs.canvas.width - col * this.particle_count)) / 2;
        const row_corrector = (this.particle_count + (this.refs.canvas.height - row * this.particle_count)) / 2;

        this.particles = [];
        for (let i = 0; i < col; ++ i) {
            for (let j = 0; j < row; ++ j) {
                let x = i * this.particle_count + col_corrector;
                let y = j * this.particle_count + row_corrector;
                this.particles.push(new LerpParticle(x, y, 2, "#9e9e9ed4", this.context));
            }
        }
    }

    update() {
        for (let i = 0; i < this.particles.length; ++ i) {
            const r = 1;
            const x = this.particles[i].x - r;
            const y = this.particles[i].y - r;

            if (Math.abs(this.particles[i].targetX - this.particles[i].currentX) < this.particles[i].movement * 0.1) {
                this.particles[i].targetX = x + Math.random() * this.particles[i].movement * (Math.random() < 0.5 ? -0.5 : 0.5);
            }
            if (Math.abs(this.particles[i].targetY - this.particles[i].currentY) < this.particles[i].movement * 0.1) {
                this.particles[i].targetY = y + Math.random() * this.particles[i].movement * (Math.random() < 0.5 ? -0.5 : 0.5);
            }

            this.particles[i].currentX += (this.particles[i].targetX - this.particles[i].currentX) * this.particles[i].lerp;
            this.particles[i].currentY += (this.particles[i].targetY - this.particles[i].currentY) * this.particles[i].lerp;
        }
    }

    init() {
        this.paintCanvas();
        this.drawParticles();
        requestAnimationFrame(this.init);
    }

    render() {
        return (
            <canvas ref="canvas" id= { this.props.context } />
        );
    }
}

class LerpParticle extends Particle {
    constructor(x, y, radius, color, context) {
        super();
        this.x        = this.currentX = this.targetX = x;
        this.y        = this.currentY = this.targetY = y;
        this.color    = color;
        this.radius   = radius;
        this.bounce   = false;
        this.movement = 10;
        this.lerp     = 0.05;
        this.context  = context;
    }

    // methods...
}
