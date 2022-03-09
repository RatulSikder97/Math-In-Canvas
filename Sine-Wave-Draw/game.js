class Game {
    constructor(height=480, width=600, container='body', border="black", backgroundType="color", background = "white") {
        this.height = height
        this.width = width
        this.container = container
        this.background = background
        this.backgroundType = backgroundType
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
    } 

    init() {
        this.canvas.setAttribute('height', this.height)
        this.canvas.setAttribute('width', this.width)
        this.canvas.style.border = "1px solid #000"
        this.canvas.style.transform = "rotateX(180deg)"
        document.querySelector(this.container).append(this.canvas)
    }

    clearRender() {
        this.context.clearRect(0,0,this.width,this.height)
    }

}