import data from "../../data/data.json";
const MinisterSelect = () => {
  let ministerList = [];
  data.regjeringer.forEach((government) => {
    government.ministers.forEach((ministers) => {
      ministerList.push(ministers.role);
    });
  });

  let sortedMinisterList = [...new Set(ministerList)];

  console.log(sortedMinisterList);

  return (
    <select name="minister-posistion" id="selectPosition">
      <option value="-1">Ingen...</option>
      {sortedMinisterList.map((position, index) => {
        return <option value={index}>{position}</option>;
      })}
    </select>
  );
};

export default MinisterSelect;
