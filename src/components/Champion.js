const Champion = ({ champion, urlName }) => {
  return (
    <tr>
      <td>
        <img
          width="50px"
          alt="test"
          src={`https://ddragon.canisback.com/img/champion/tiles/${
            urlName === "Fiddlesticks" ? "FiddleSticks" : urlName
          }_0.jpg`}
        ></img>
      </td>
      <td>
        {champion.name}
        <br />
        {champion.title}
      </td>
      <td>{champion.tags}</td>
      <td>{champion.blurb}</td>
    </tr>
  );
};

export default Champion;
