/**
 * ProductItem component displays a single product/todo item with ID and title
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the item
 * @param {string} props.title - Title/description of the item
 * @returns {JSX.Element} A card displaying the product item
 */
const ProductItem = (props) => {
  const { title, id } = props;
  return (
    <div className="border p-2">
      <small className="text-sm text-gray-500">{id}</small>
      <p className="text-lg font-bold">{title}</p>
    </div>
  );
};

export default ProductItem;
