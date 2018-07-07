'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #define
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();
var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;
var _particles = new WeakMap();

var Canvas = function (_React$Component) {
    _inherits(Canvas, _React$Component);

    function Canvas() {
        _classCallCheck(this, Canvas);

        return _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).apply(this, arguments));
    }

    _createClass(Canvas, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.drawCanvas = this.drawCanvas.bind(this);
            this.refs.canvas.height = WINDOW_HEIGHT;
            this.refs.canvas.width = WINDOW_WIDTH;
            this.particle_count = this.props.prt_count;
            this.min_dist = this.props.min_dist;
            _particles.set(this, []);
            requestAnimationFrame(this.drawCanvas);
        }
    }, {
        key: 'getParticles',
        value: function getParticles() {
            return _particles.get(this);
        }
    }, {
        key: 'getCtx',
        value: function getCtx() {
            return document.getElementById("home_canvas").getContext('2d');
        }
    }, {
        key: 'paintCanvas',
        value: function paintCanvas() {
            var grd = this.getCtx().createLinearGradient(0, 0, 0, WINDOW_HEIGHT);
            grd.addColorStop(0, '#355C7D');
            grd.addColorStop(0.5, '#6C5B7B');
            grd.addColorStop(1, '#C06C84');
            this.getCtx().fillStyle = grd;
            this.getCtx().fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
        }
    }, {
        key: 'drawParticlesOnCanvas',
        value: function drawParticlesOnCanvas() {
            for (var i = 0; i < this.particle_count; ++i) {
                this.getParticles().push(new Particle());
            }

            for (var _i = 0; _i < this.particle_count; ++_i) {
                this.getParticles()[_i].draw();
            }
        }

        // Canvas controller

    }, {
        key: 'drawCanvas',
        value: function drawCanvas() {
            this.paintCanvas();
            this.drawParticlesOnCanvas();
            this.update();
            requestAnimationFrame(this.drawCanvas);
        }
    }, {
        key: 'update',
        value: function update() {
            for (var i = 0; i < this.particle_count; ++i) {
                this.getParticles()[i].x += this.getParticles()[i].vx;
                this.getParticles()[i].y += this.getParticles()[i].vy;

                this.getParticles()[i].x += this.getParticles()[i].vx;
                this.getParticles()[i].y += this.getParticles()[i].vy;

                if (this.getParticles()[i].x + this.getParticles()[i].radius > WINDOW_WIDTH) this.getParticles()[i].x = this.getParticles()[i].radius;else if (this.getParticles()[i].x - this.getParticles()[i].radius < 0) this.getParticles()[i].x = WINDOW_WIDTH - this.getParticles()[i].radius;

                if (this.getParticles()[i].y + this.getParticles()[i].radius > WINDOW_HEIGHT) this.getParticles()[i].y = this.getParticles()[i].radius;else if (this.getParticles()[i].y - this.getParticles()[i].radius < 0) this.getParticles()[i].y = WINDOW_HEIGHT - this.getParticles()[i].radius;

                for (var j = 0; j < this.particle_count; ++j) {
                    this.distance(this.getParticles()[i], this.getParticles()[j]);
                }
            }
        }
    }, {
        key: 'distance',
        value: function distance(p1, p2) {
            var dx = p1.x - p2.x;
            var dy = p1.y - p2.y;
            var dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.min_dist) {
                this.getCtx().beginPath();
                this.getCtx().strokeStyle = "rgba(255,255,255," + (1.2 - dist / this.min_dist) + ")";
                this.getCtx().moveTo(p1.x, p1.y);
                this.getCtx().lineTo(p2.x, p2.y);
                this.getCtx().stroke();
                this.getCtx().closePath();

                var ax = dx / 50000;
                var ay = dy / 50000;

                p1.vx -= ax;
                p1.vy -= ay;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('canvas', { ref: 'canvas', id: 'home_canvas' });
        }
    }]);

    return Canvas;
}(_react2.default.Component);

var Particle = function (_Canvas) {
    _inherits(Particle, _Canvas);

    function Particle() {
        _classCallCheck(this, Particle);

        var _this2 = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this));

        _this2.x = Math.random() * WINDOW_WIDTH;
        _this2.y = Math.random() * WINDOW_HEIGHT;
        _this2.vx = -1 + Math.random() * 2;
        _this2.vy = -1 + Math.random() * 2;
        _this2.radius = 4;
        return _this2;
    }

    _createClass(Particle, [{
        key: 'draw',
        value: function draw() {
            this.getCtx().fillStyle = "#9e9e9ed4";
            this.getCtx().beginPath();
            this.getCtx().arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            this.getCtx().fill();
        }
    }]);

    return Particle;
}(Canvas);

_reactDom2.default.render(_react2.default.createElement(Canvas, { prt_count: 300, min_dist: 120 }), document.getElementById("home"));
//# sourceMappingURL=home.js.map