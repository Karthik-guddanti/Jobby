function List(props){
    const {handledelete,taskArr} =props;
    return (
        <div>
            <ul>
                {taskArr.map((eachTask, ide) => {
            return <li key={ide} onClick={
                ()=>{
                    handledelete(ide)
                }
            }>{eachTask}</li>
          })}
            </ul>
        </div>
    )
}
export default List