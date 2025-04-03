const SearchBox = ({ value, OnChangeFilter }) => {
  return (
    <>
      <div>
        <p>Find contact by name</p>
        <input
          type="text"
          value={value}
          onChange={(e) => OnChangeFilter(e.target.value)}
        ></input>
      </div>
    </>
  );
};
export default SearchBox;
