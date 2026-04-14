
function init() {
    renderProjects();
}

let projectArray = [
    {
        'projectName': 'Join',
        'projectDescription': 'Task manager inspired by the Kanban System.' + 
        'Create and organize tasks using drag and drop functions, assign users and categories. ',
        'projectImage': './img/join_BigFrame.png',
        'projectLink': './img/close_Icon.png',
        'projectGithub': 'https://www.google.com',
        'projectStack': [{'<img src="./img/miniHTML2.png" alt="HTML">' :'HTML'},{'<img src="./img/miniCSS.png" alt="HTML">' : 'CSS'},{'<img src="./img/miniJS.png" alt="HTML">' :'JS'}, {'<img src="./img/miniFirebase.png" alt="HTML">' :'Firebase'}]
    },
    {
        'projectName': 'El pollo Loco',
        'projectDescription': 'The project description goes here',
        'projectImage': './img/bspImg_bw.png',
        'projectLink': 'https://bsp-join.web.app/',
        'projectGithub': 'https://github.com/bsp-join/bsp-join',
        'projectStack': ['React', 'Firebase']
    }, {
        'projectName': 'Bubble',
        'projectDescription': 'The project description goes here',
        'projectImage': './img/bspImg_bw.png',
        'projectLink': 'https://bsp-join.web.app/',
        'projectGithub': 'https://github.com/bsp-join/bsp-join',
        'projectStack': ['React', 'Firebase']
    }]

function renderProjects(index) {
    let project = document.getElementById('projectMaxView')
    let o = Object.values(projectArray[index].projectStack)
    console.log(o)
    let i = (index + 1).toString();
    let iPlusZero = i.padStart(2, '0');
    project.style.transition = "0.5s";
    project.style.left = '0px'
    project.innerHTML = ''
    project.innerHTML += /*html*/ `
    <div class="closeSection"><img src="./img/close_Icon.png"></div>
    <div class="projectContent">
        <div class="projectInfo">
            <h3>${iPlusZero}</h3>
            <div class="projectName">${projectArray[index].projectName}</div>
            <div class="projectQuestion">What is this project about?</div>
            <div class="projectDescription">${projectArray[index].projectDescription}</div>
            <div class="projectStack">${projectArray[index].projectStack}</div>
            <div class="projectLinks">
                <a href="${projectArray[index].projectLink}"><img src="./img/close_Icon.png"></a>
                <a href="${projectArray[index].projectGithub}"><img src="./img/close_Icon.png"></a>
            </div>
        </div>
        <div class="projectImage">
        <div class="projectImage"><img src="${projectArray[index].projectImage}"></div>
        </div>
    </div>
    `

}