export default class CanvasParticlesHelper {
    static getCtx(canvas_id) {
        return document.getElementById(canvas_id).getContext('2d');
    }
}
