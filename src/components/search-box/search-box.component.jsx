import "./search-box.styles.css";

export const SearchBox = ({ placeholder, onSearchChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search monsters"
      onChange={onSearchChange}
    />
  );
};
