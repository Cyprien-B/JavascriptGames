const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20

// creat class block
class Block {
    constructor(xAxis, yAxis) {
      this.bottomLeft = [xAxis, yAxis]
      this.bottomRight = [xAxis + blockWidth, yAxis]
      this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
      this.topLeft = [xAxis, yAxis + blockHeight]
    }
  }
//ci dessous on construit tout les blocks
  const blocks = [
    new Block(10,270)
  ]
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        grid.appendChild(block)
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom ='100px'
        
    }

}

addBlocks()