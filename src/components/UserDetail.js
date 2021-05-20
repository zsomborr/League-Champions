import { useState, useEffect } from "react";

const UserDetail = (props) => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const user = params.get("user");

  const [userInfo, setUserInfo] = useState([]);
  const [userMatchDetail, setUserMatchDetail] = useState([]);
  const [matchResult, setMatchResult] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfoFromApi = await fetchUserInfo();
      setUserInfo(userInfoFromApi);
    };
    const getUserMatchDetail = async () => {
      const matchDetailFromApi = await fetchUserMatchDetails();
      setUserMatchDetail(matchDetailFromApi);
    };
    const getMatchResult = async () => {
      const matchResultFromApi = await fetchMatchResult();
      setMatchResult(matchResultFromApi);
    };
    getUserInfo();
    getUserMatchDetail();
    getMatchResult();
  }, [user]);

  const fetchUserInfo = async () => {
    // const res = await fetch(
    //   `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${user}`
    // );
    // const userData = await res.json();

    // user info API
    const userData = {
      name: "bodisB",
      profileIconId: 4607,
      summonerLevel: 269,
    };

    return userData;
  };

  const fetchUserMatchDetails = async () => {
    // matches by accountId
    // const res = await fetch(
    //   `https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/${userInfo.accountId}`
    // );
    // const matchDetails = await res.json();
    const matchDetails = {
      matches: [
        {
          gameId: 2837017914,
          champion: 235,
        },
        {
          gameId: 2836955515,
          champion: 41,
        },
        {
          gameId: 2836991413,
          champion: 75,
        },
        {
          gameId: 2836929120,
          champion: 110,
        },
        {
          gameId: 2836905505,
          champion: 518,
        },
      ],
    };
    return matchDetails;
  };

  const fetchMatchResult = async () => {
    // match detail by gameId
    // const res = await fetch(
    //   `https://eun1.api.riotgames.com/lol/match/v4/matches/${userInfo.accountId}`
    // );
    // const matchResult = await res.json();
    const matchResult = {
      gameId: 2837017914,
      platformId: "EUN1",
      gameDuration: 974,
      gameMode: "ARAM",
      teams: [
        {
          teamId: 100,
          win: "Win",
        },
        {
          teamId: 200,
          win: "Fail",
        },
      ],
    };
    return matchResult;
  };

  return <div>{userInfo.name}</div>;
};

export default UserDetail;
