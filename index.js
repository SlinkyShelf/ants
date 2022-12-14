const antCount = 300
const wanderStrength = .005
const speed = .5

const antContainer = document.createElement("div")
document.body.appendChild(antContainer)

const ants = []
for (var i = 0; i < antCount; i++)
{
    const ant = document.createElement("div")
    ant.classList.add("ant")
    ant.style.to
    antContainer.appendChild(ant)
    ant.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);

    const antObj = {
        dom: ant, 
        x: window.innerWidth/2, 
        y: window.innerHeight/2, 
        direction: Math.random()*Math.PI*2,
        pullDirection: 0
    }
    ants.push(antObj)
}

function rand()
{
    return (Math.random()-.5)* 2
}

var lastTime = new Date().getTime()
function Update()
{
    var newTime = new Date().getTime()
    var deltaTime = newTime - lastTime
    lastTime = newTime

    deltaTime = Math.min(deltaTime, 1000)

    ants.map(ant => {
        ant.pullDirection = rand() *.1 - (1 - Math.abs(ant.pullDirection))/2
        ant.direction += ant.pullDirection * deltaTime * wanderStrength
        ant.x += Math.cos(ant.direction)* speed * deltaTime
        ant.y += Math.sin(ant.direction)* speed * deltaTime

        // ant.dom.style.left = `${ant.x}px`
        // ant.dom.style.top = `${ant.y}px`
        ant.dom.style.transform = `translate(${ant.x}px, ${ant.y}px) rotate(${ant.direction}rad)`
    })

    requestAnimationFrame(Update)
}

Update()