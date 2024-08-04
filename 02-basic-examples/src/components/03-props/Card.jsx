// TODO Component 第一個參數就是 props
const Card = (props) => {
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // Destructuring assignment
  const { img, name, children } = props;
  return (
    <div className="category-item">
      <img className="category-item__img" src={img} alt={name} />
      {/* <img > Error,  JSX 所有的 tag 都要 close */}
      <div className="category-item__name">{name}</div>
      <div className="category-item__quote">{children}</div>
    </div>
  );
};

export default Card;
