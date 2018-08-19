import React from "react";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../helpers/Constants";
import { Canvas, Particle } from "./canvas";

export class LoginRegisterPageCanvasAnimation extends Canvas {
    CreateParticles() {
        this.particles = [];
        for (let i = 0; i < this.particle_count; ++ i) {
            this.particles.push(new RandomMovingParticle(Math.random() * WINDOW_WIDTH, Math.random() * WINDOW_HEIGHT, 4, "#9e9e9ed4", this.context));
            this.particles[i].draw();
        }
    }

    update() {
        for (let i = 0; i < this.particles.length; ++ i) {
            this.particles[i].currentX += this.particles[i].vx;
            this.particles[i].currentY += this.particles[i].vy;

            this.particles[i].currentX += this.particles[i].vx;
            this.particles[i].currentY += this.particles[i].vy;

            if(this.particles[i].currentX + this.particles[i].radius > WINDOW_WIDTH) {
                this.particles[i].currentX = this.particles[i].radius;
            }

            else if(this.particles[i].currentX - this.particles[i].radius < 0) {
                this.particles[i].currentX = WINDOW_WIDTH - this.particles[i].radius;
            }

            if(this.particles[i].currentY + this.particles[i].radius > WINDOW_HEIGHT) {
                this.particles[i].currentY = this.particles[i].radius;
            }

            else if (this.particles[i].currentY - this.particles[i].radius < 0) {
                this.particles[i].currentY = WINDOW_HEIGHT - this.particles[i].radius;
            }

            for (let j = 0; j < this.particles.length; ++ j) {
                this.effect(this.particles[i], this.particles[j]);
            }
        }
    }

    effect (p1, p2) {
        const dx = p1.currentX - p2.currentX;
        const dy = p1.currentY - p2.currentY;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if(dist < this.min_dist) {
            this.context.beginPath();
            this.context.strokeStyle = this.fill_dist;
            this.context.moveTo(p1.currentX, p1.currentY);
            this.context.lineTo(p2.currentX, p2.currentY);
            this.context.stroke();
            this.context.closePath();

            const ax = dx/50000;
            const ay = dy/50000;

            p1.vx -= ax;
            p1.vy -= ay;
        }
    };

    // Canvas controller
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

export class RandomMovingParticle extends Particle {
    constructor(x, y, radius, color, context) {
        super();
        this.x       = this.currentX = this.targetX = x;
        this.y       = this.currentY = this.targetY = y;
        this.vx      = -1 + Math.random() * 2;
        this.vy      = -1 + Math.random() * 2;
        this.radius  = radius;
        this.color   = color;
        this.context = context;
    }

    // methods...
}

