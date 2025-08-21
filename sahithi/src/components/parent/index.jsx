import Child from "../child";   
const ParentComponent = () => {
    const list = [1, 2, 3, 4, 5];
  return (
    <div>
      <Child karthik={list} />
    </div>
  );
};

export default ParentComponent;