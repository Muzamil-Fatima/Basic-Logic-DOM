let emoji = document.querySelector('#emoji')
const emojis =[
    "😊",
    "😂",
    "❤",
    "😍",
    "😁",
    "🤥",
    "😥",
    "😅",
    "🥳",
    "😭",
    "💪",
    "🤣",
    "😌",
    "😆",
    "😂",
    "😒",
    "🙂",
    "😇",
    "🥰",
    "🧐",
    "😹",
    "🤨",
    "😶",
    "🤥",
    "😥",
    "😰",
    "😔",
    "🤪",
    "😊",
    "😁",
    "🥶",
    "😡",
    "😍",
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "🥵",
    "🤯",
    "🤬",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "OO WOW!",
]

emoji.addEventListener('mouseover', () =>{
    emoji.innerHTML = emojis[Math.floor(Math.random()* emojis.length)]
})