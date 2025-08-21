import axios from 'axios'

const url="https://jsonplaceholder.typicode.com/todos"
const fetchData = async ()=>{
      const response= await axios.get(url)
     return response.data
  }
export default async function Blogs(){
  const blogs = await  fetchData()
   return <div>
     {
    blogs.map((blog: ITodo)=>{
        // eslint-disable-next-line react/jsx-key
        return <Todo title={blog.title}  completed={blog.completed}/>
    })
 }
   </div>
}
interface ITodo{
    title:string;
    completed:boolean
}
function Todo({title,completed}:ITodo){
  return (<>
  <pre>
    {title}
   {completed}
   </pre>
   
  </>)


}