const TodoItem = (props) => {
  const { title, id } = props;
  return (
    <div className="border">
      <p>{title}</p>
      <small>{id}</small>
    </div>
  );
};

export default TodoItem;
