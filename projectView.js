
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
        'projectStack': [{icon : "./img/miniHTML2.png", stack : 'HTML'}, {icon : "./img/miniCSS.png", stack : 'CSS'}, 
            {icon : "./img/miniJS.png", stack : 'JavaScript'}, {icon : "./img/miniFirebase.png", stack : 'Firebase'}]
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
    let o = projectArray[index].projectStack;
    let less = Object.entries(o);
    let result = less.map(item => item[1].stack);
    console.log(less)
    console.log(result)
    let i = (index + 1).toString();
    let iPlusZero = i.padStart(2, '0');
    project.style.transition = "0.5s";
    project.style.left = '0px'
    project.innerHTML = ''
    project.innerHTML += /*html*/ `
    <div class="closeSection"><img onclick="closeProject()" src="./img/close_Icon.png"></div>
    <div class="projectContent">
        <div class="projectInfo">
            <h3>${iPlusZero}</h3>
            <div class="projectName">${projectArray[index].projectName}</div>
            <div class="projectQuestion">What is this project about?</div>
            <div class="projectDescription">${projectArray[index].projectDescription}</div>
            <div class="projectStack">${o.map(item => `<img src="${item.icon}"><p>${item.stack}</p>`).join(' ')}</div>
            <div class="projectLinks">
                <a href="${projectArray[index].projectLink}">Github-Link<img src="./img/arrow_türkis.png"></a>
                <a href="${projectArray[index].projectGithub}">Live Test<img src="./img/arrow_türkis.png"></a>
            </div>
        </div>
        <div class="projectImage">
        <div class="projectImage"><img src="${projectArray[index].projectImage}"></div>
        <a href="./img/close_Icon.png">Next Project></a>
        </div>
    </div>
    `

}

function closeProject() {
    let project = document.getElementById('projectMaxView')
    project.style.transition = "3s";
    project.style.left = '-800%';
}