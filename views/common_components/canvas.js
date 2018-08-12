import React from "react";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../helpers/constants";
import  CanvasParticlesHelper from "../../helpers/helper";

/**
 * Every <canvas>(BACKGROUND-ANIMATION-WITH-PARTICLES) implements ---> Canvas(<Abstract Class>)
 */
export class Canvas extends React.Component {
    componentDidMount() {
        this.CreateParticles    = this.CreateParticles.bind(this);
        this.init               = this.init.bind(this);
        this.context            = CanvasParticlesHelper.getCtx(this.props.context);
        this.refs.canvas.height = WINDOW_HEIGHT;
        this.refs.canvas.width  = WINDOW_WIDTH;
        this.particle_count     = this.props.prt_count;
        this.min_dist           = this.props.min_dist;
        this.fill_dist          = this.props.fill_dist;
        this.CreateParticles();
        window.requestAnimFrame = (function () {
            return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( callback ) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
        requestAnimationFrame(this.init);
    }

    paintCanvas() {
        const grd = this.context.createLinearGradient(0, 0, 0, WINDOW_HEIGHT);
        grd.addColorStop(0,   '#355C7D');
        grd.addColorStop(0.5, '#6C5B7B');
        grd.addColorStop(1,   '#C06C84');
        this.context.fillStyle = grd;
        this.context.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    }

    drawParticles() {
        this.update();
        if (this.particles) {
            for (let i = 0; i < this.particles.length; ++ i) {
                this.particles[i].draw();
            }
        }
    }

    /**
     *  Implementation required
     */
    CreateParticles() { }

    /**
     *  Implementation required
     */
    update() { }

    /**
     *  Implementation required
     */
    effect (...args) { };

    // Canvas controller
    init() {
        this.paintCanvas();
        this.drawParticles();
        requestAnimationFrame(this.init);
    }
}

export class Particle {
    constructor(x, y, radius, color, context) {
        this.x       = this.currentX = this.targetX = x;
        this.y       = this.currentY = this.targetY = y;
        this.radius  = radius;
        this.color   = color;
        this.context = context;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.beginPath();
        this.context.arc(this.currentX, this.currentY, this.radius, 0, 2 * Math.PI, false);
        this.context.fill();
    }
}

