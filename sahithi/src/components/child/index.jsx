const Child = (mani) => {
    const {karthik} = mani;
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {karthik.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child;

