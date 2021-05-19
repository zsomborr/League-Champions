import { useHistory } from "react-router-dom";

const Tags = () => {
  let history = useHistory();
  const changeChampions = (e) => {
    history.push(`?tag=${e.target.value}`);
  };

  return (
    <div>
      <select name="tags" id="tags" selected onChange={changeChampions}>
        <option value="Fighter">Fighter</option>
        <option value="Tank">Tank</option>
        <option value="Mage">Mage</option>
        <option value="Assassin">Assassin</option>
        <option value="Support">Support</option>
        <option value="Marksman">Marksman</option>
      </select>
    </div>
  );
};

export default Tags;
