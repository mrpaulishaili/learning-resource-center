import { useNavigate } from 'react-router-dom';

const AddButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add');
  };

  return (
    <div className="addBtn" onClick={handleClick}>
      +
    </div>
  );
};
export default AddButton;
