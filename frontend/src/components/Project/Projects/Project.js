import NetflixImg from "../../../image/Netflix.png"
import Ecommerce from '../../../image/ecommerce.png'
import Ecommerce2 from "../../../image/ecommerce1.png";
import Recipe from "../../../image/recipe.png";
import Todo from "../../../image/todo.png"
import Chat from "../../../image/chat.png"

export const project =[
    {
        title:"Netflix",
        project:1,
        desc:"Basic Netflix clone and major work on authentication using firebase, I created this just for learning how firebase works and using movie api and integrate with reactjs",
        imageSrc:NetflixImg,
    },
    {
    title:"Ecommerce webapp",
    project:2,
    desc:"You can now make payment through stripe and have search function and many functonality which you ganna love after taking demo of my project",
    imageSrc:Ecommerce,
},
{
    title:"Ecommerce-2",
    project:3,
    desc:"Learning to implement an Add to Cart functionality within an e-commerce system involves more than just basic HTML and CSS. It entails diving into JavaScript to handle the logic of adding items to a cart, managing the cart's state, and updating it dynamically without reloading the entire page.",
    imageSrc:Ecommerce2,
},
{
    title:"Recipi-app",
    project:4,
    desc:"Building a recipe app utilizing the MERN stack has been an exciting venture. Leveraging MongoDB for data storage, Express for robust backend handling, React for a dynamic frontend, and Node.js for server-side operations ensured a well-rounded, scalable application.",
    imageSrc:Recipe,
},

{
    title:"Form-validation",
    project:5,
    desc:"Creating a full-stack todo app has been an enriching experience, offering a seamless workflow. Implementing additional features like reminders and priority sorting enhanced its productivity. ",
    imageSrc:Todo,
},
{
    title:"ChatApp",
    project:6,
    desc:"Created a Chat App where you can talk multiple pleople in realtime,means whenever you send the message the second user got instant messages,using socket.io which helps to communicate in realtime. ",
    imageSrc:Chat,
},

]