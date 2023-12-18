function BulletList(props) {
  const { itemArr } = props;

  return (
    <ul>
      {itemArr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default BulletList;
