skillDisplay = document.getElementById("skillbar");
skillArray = [];

const addSkill = (description, skillLevel) => {
    skillArray.push({
        desc: description,
        skill: skillLevel
    })
}

const displaySkills = () => {
    skillArray.forEach(aSkill => {
        const para = document.createElement("p");
        const skillText = document.createTextNode(aSkill.desc);
        para.appendChild(skillText);
        skillDisplay.appendChild(para);    

        const barContainer = document.createElement("div");
        barContainer.classList.add("skillBarContainer");
        const bar = document.createElement("div");
        bar.classList.add("skillBar");
        animateSkills(bar, aSkill.skill, 0);
        barContainer.appendChild(bar);
        skillDisplay.appendChild(barContainer);
    }) 
}

const animateSkills = (bar, skill, counter) => {
   
    bar.style.width = `${counter}%`;
    counter++;

    if(counter<skill){
        setTimeout(()=>{animateSkills(bar, skill, counter)}, 15);
    }
}


