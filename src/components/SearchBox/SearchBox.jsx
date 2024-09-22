import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        name="search"
        type="text"
        id={id}
        value={nameFilter}
        onChange={handleSearch}
        className={css.input}
      />
    </div>
  );
}