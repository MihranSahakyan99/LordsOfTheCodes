import React from 'react';
import ReactDOM from 'react-dom';

// #define
window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
        function ( callback ) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
const WINDOW_WIDTH  = window.innerWidth;
const WINDOW_HEIGHT = window.innerHeight;
const _particles = new WeakMap();

class Canvas extends React.Component {
    componentDidMount() {
        this.drawCanvas = this.drawCanvas.bind(this);
        this.refs.canvas.height = WINDOW_HEIGHT;
        this.refs.canvas.width  = WINDOW_WIDTH;
        this.particle_count     = this.props.prt_count;
        this.min_dist           = this.props.min_dist;
        _particles.set(this, []);
        requestAnimationFrame(this.drawCanvas);
    }

    getParticles() {
        return _particles.get(this);
    }

    getCtx() {
        return document.getElementById("home_canvas").getContext('2d');
    }

    paintCanvas() {
        const grd = this.getCtx().createLinearGradient(0, 0, 0, WINDOW_HEIGHT);
        grd.addColorStop(0,   '#355C7D');
        grd.addColorStop(0.5, '#6C5B7B');
        grd.addColorStop(1,   '#C06C84');
        this.getCtx().fillStyle = grd;
        this.getCtx().fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    }

    drawParticlesOnCanvas() {
        for (let i = 0; i < this.particle_count; ++ i) {
            this.getParticles().push(new Particle());
        }

        for (let i = 0; i < this.particle_count; ++ i) {
            this.getParticles()[i].draw();
        }
    }

    // Canvas controller
    drawCanvas() {
        this.paintCanvas();
        this.drawParticlesOnCanvas();
        this.update();
        requestAnimationFrame(this.drawCanvas);
    }

    update() {
        for (let i = 0; i < this.particle_count; ++ i) {
            this.getParticles()[i].x += this.getParticles()[i].vx;
            this.getParticles()[i].y += this.getParticles()[i].vy;

            this.getParticles()[i].x += this.getParticles()[i].vx;
            this.getParticles()[i].y += this.getParticles()[i].vy;

            if(this.getParticles()[i].x + this.getParticles()[i].radius > WINDOW_WIDTH)
                this.getParticles()[i].x = this.getParticles()[i].radius;

            else if(this.getParticles()[i].x - this.getParticles()[i].radius < 0)
                this.getParticles()[i].x = WINDOW_WIDTH - this.getParticles()[i].radius;

            if(this.getParticles()[i].y + this.getParticles()[i].radius > WINDOW_HEIGHT)
                this.getParticles()[i].y = this.getParticles()[i].radius;

            else if(this.getParticles()[i].y - this.getParticles()[i].radius < 0)
                this.getParticles()[i].y = WINDOW_HEIGHT - this.getParticles()[i].radius;

            for (let j = 0; j < this.particle_count; ++ j) {
                this.distance(this.getParticles()[i], this.getParticles()[j]);
            }
        }
    }

    distance (p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx*dx + dy*dy);

        if(dist < this.min_dist) {
            this.getCtx().beginPath();
            this.getCtx().strokeStyle = "rgba(255,255,255,"+ (1.2-dist/this.min_dist) +")";
            this.getCtx().moveTo(p1.x, p1.y);
            this.getCtx().lineTo(p2.x, p2.y);
            this.getCtx().stroke();
            this.getCtx().closePath();

            const ax = dx/50000;
            const ay = dy/50000;

            p1.vx -= ax;
            p1.vy -= ay;
        }
    };

    render() {
        return (
            <canvas ref="canvas" id="home_canvas"/>
        );
    }
}

class Particle extends Canvas {
    constructor() {
        super();
        this.x      = Math.random() * WINDOW_WIDTH;
        this.y      = Math.random() * WINDOW_HEIGHT;
        this.vx     = -1 + Math.random() * 2;
        this.vy     = -1 + Math.random() * 2;
        this.radius = 4;
    }

    draw() {
        this.getCtx().fillStyle = "#9e9e9ed4";
        this.getCtx().beginPath();
        this.getCtx().arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.getCtx().fill();
    }
}

ReactDOM.render( <Canvas prt_count = {300} min_dist = {120} />, document.getElementById("home"));
