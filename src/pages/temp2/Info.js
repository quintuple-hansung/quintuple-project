import self from "./img/self.png"
import mock1 from "./img/mock1.png"
import mock2 from "./img/mock2.png"
import mock3 from "./img/mock3.png"
import mock4 from "./img/mock4.png"
import mock5 from "./img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]; //이름,사진배경 등 그라데이션 색


export const info = {
    firstName: "gildong",
    lastName: "Hong",
    initials: "js", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🏢',
            text: '한성대학교'
        },
        {
            emoji: "💼",
            text: "웹공학트랙"
        },
        {
            emoji: "📧",
            text: "johnsmith@gmail.com"
        }
    ],
    
    
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", 
            source: "https://github.com/paytonjewell", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}