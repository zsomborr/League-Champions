const Champion = ({ champion, urlName }) => {
  //   let urlName = champion.name
  //     .replace(" ", "")
  //     .replace("'", "")
  //     .replace(".", "");
  return (
    <div>
      {champion.name}
      <img
        alt="test"
        src={`https://ddragon.canisback.com/img/champion/tiles/${urlName}_0.jpg`}
      ></img>
    </div>
  );
};

export default Champion;
