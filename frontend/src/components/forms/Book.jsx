const AddBookResourceForm = ({ book, handleChange, handleClick }) => {
  return (
    <form className="form" onSubmit={handleClick}>
      <div className="input-container">
        <label htmlFor="category">Type</label>
        <select name="category" id="">
          <option value="">Book</option>
          <option value="">Video</option>
          <option value="">Audio</option>
          <option value="">Article</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="name"
        onChange={handleChange}
        name="title"
        required
        value={book.title}
      />
      <input
        type="text"
        placeholder="tags"
        onChange={handleChange}
        name="tags"
        required
        value={book.tags}
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
        required
        value={book.cover}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};
export default AddBookResourceForm;
