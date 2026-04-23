
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
        'projectDescription': 'Jump, run and throw game based on object-oriented approach. Help Pepe' + 
        'to find coins and tabasco salsa to fight against the crazy hen.',
        'projectImage': './img/Elpollo_bigFrame.png',
        'projectLink': 'https://bsp-join.web.app/',
        'projectGithub': 'https://github.com/bsp-join/bsp-join',
        'projectStack': [{icon : "./img/miniHTML2.png", stack : 'HTML'}, {icon : "./img/miniCSS.png", stack : 'CSS'}, 
            {icon : "./img/miniJS.png", stack : 'JavaScript'}]
    }, {
        'projectName': 'DABubble',
        'projectDescription': 'This App is a Slack Clone App. It revolutionizes team communication' + 
        ' and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        'projectImage': './img/bubble_bigFrame.png',
        'projectLink': 'https://bsp-join.web.app/',
        'projectGithub': 'https://github.com/bsp-join/bsp-join',
        'projectStack': [{icon : "./img/mini_Angular.png", stack : 'Angular'}, {icon : "./img/mini_typeScript.png", stack : 'TypeScript'}, 
            {icon : "./img/miniFirebase.png", stack : 'Firebase'}]
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
    project.style.transition = "1s";
    project.style.left = '50%';
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
                <button class="nextProjectMobile" onclick="renderProjects(${index + 1 < projectArray.length ? index + 1 : 0})">Next Project <img src="./img/arrow_horizontal_türkis.png"></button>
        </div>
        <div class="projectImageDiv">
        <div class="projectImage"><img src="${projectArray[index].projectImage}"></div>
        <button onclick="renderProjects(${index + 1 < projectArray.length ? index + 1 : 0})">Next Project <img src="./img/arrow_horizontal_türkis.png"></button>
        </div>
    </div>
    `

}

function closeProject() {
    let project = document.getElementById('projectMaxView')
    project.style.transition = "3s";
    project.style.left = '-800%';
}