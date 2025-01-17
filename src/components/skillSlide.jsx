import React from 'react'

const bgColors = [
        'bg-teal-300',
        'bg-orange-300',
        'bg-green-300',
        'bg-blue-300',
        'bg-yellow-300',
        'bg-purple-300',
        'bg-pink-300',
      ];
    
const getRandomColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];

const frontendSkill = ['React', 'Gatsby', 'Redux', 'Zustand', 'Tailwind CSS', 'Nx Workspace'];
const backendSkill = ['Node.js', 'Express', 'MongoDB'];
const devOps = ['Jenkins (CI/CD)', 'Git', 'GitHub', 'VPS Setup (Nginx, SSL Certs)'];
const softSkill = ['Communication', 'Problem-Solving', 'Team Collaboration'];


const SkillSlideFrontend = () => {

    return (
        <div>
            <div className="max-w-[1020px] py-10 text-white flex flex-col gap-16 items-center justify-center">
                <h1 className="text-4xl font-bold">Front-End</h1>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    {
                        frontendSkill.map((item, index) => (
                            <div key={index} className={`${getRandomColor()} text-lg text-black rounded-full px-4 py-1 w-fit`} >{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

const SkillSlideBackend = () => {
    return (
        <div>
            <div className="max-w-[1020px] py-10 text-white flex flex-col gap-16 items-center justify-center">
                <h1 className="text-4xl font-bold">Back-End</h1>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    {
                        backendSkill.map((item, index) => (
                            <div key={index} className={`${getRandomColor()} text-lg text-black rounded-full px-4 py-1 w-fit`} >{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

const SkillSlideDevOps = () => {
    return (
        <div>
            <div className="w-[1020px] py-10 text-white flex flex-col gap-16 items-center justify-center">
                <h1 className="text-4xl font-bold">DevOps & Tools</h1>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    {
                        devOps.map((item, index) => (
                            <div key={index} className={`${getRandomColor()} text-lg text-black rounded-full px-4 py-1`} >{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

const SkillSlideSoftSkill = () => {
    return (
        <div>
            <div className="w-[1020px] py-10 text-white flex flex-col gap-16 items-center justify-center">
                <h1 className="text-4xl font-bold">Soft Skills</h1>
                <div className='flex flex-col lg:flex-row items-center gap-5'>
                    {
                        softSkill.map((item, index) => (
                            <div key={index} className={`${getRandomColor()} text-lg text-black rounded-full px-4 py-1`} >{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export const skillSlides = [SkillSlideFrontend, SkillSlideBackend, SkillSlideDevOps, SkillSlideSoftSkill]