import { useState, useEffect } from "react";
import { UserCard, MatchCard, H1 } from "../styles/UserDetailStyle.js";
import icon from "../static/icon.png";
import {API_BASE_URL} from '../constants';

const UserDetail = (props) => {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const user = params.get("user");

  const [userInfo, setUserInfo] = useState([]);
  const [userMatchDetail, setUserMatchDetail] = useState([]);
  const [matchResult, setMatchResult] = useState([]);
  const [champions, setChampions] = useState([]);

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
    const getChampions = async () => {
      let championsFromApi = await fetchChampions();
      championsFromApi = Object.entries(championsFromApi).map((e) => e[1]);
      setChampions(championsFromApi);
    };
    getUserInfo();
    getUserMatchDetail();
    getMatchResult();
    getChampions();
  }, [user]);

  const fetchChampions = async () => {
    const res = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json"
    );
    const data = await res.json();
    return data.data;
  };

  const fetchUserInfo = async () => {
    const res = await fetch(
      `${API_BASE_URL}/summoners/by-name/${user}`
    );
    const userData = await res.json();

    // // user info API
    // const userData = {
    //   name: "bodisB",
    //   profileIconId: 4607,
    //   summonerLevel: 269,
    // };
    //
    return userData;
  };

  const fetchUserMatchDetails = async () => {
    // matches by accountId
    // const res = await fetch(
    //   `https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/${userInfo.accountId}`
    // );
    // const matchDetails = await res.json();
    const matchDetails = [
      {
        gameId: "2837017914",
        champion: "235",
      },
      {
        gameId: "2836955515",
        champion: "41",
      },
      {
        gameId: "2836991413",
        champion: "75",
      },
      {
        gameId: "2836929120",
        champion: "110",
      },
      {
        gameId: "2836905505",
        champion: "518",
      },
    ];

    return matchDetails;
  };

  const fetchMatchResult = async () => {
    // match detail by gameId
    // const res = await fetch(
    //   `https://eun1.api.riotgames.com/lol/match/v4/matches/${userInfo.accountId}`
    // );
    // const matchResult = await res.json();
    const matchResults = [
      {
        gameId: "2837017914",
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
      },
      {
        gameId: "2836955515",
        platformId: "EUN1",
        gameDuration: 994,
        gameMode: "ARAM",
        teams: [
          {
            teamId: 100,
            win: "Fail",
          },
          {
            teamId: 200,
            win: "Win",
          },
        ],
      },
      {
        gameId: "2836991413",
        platformId: "EUN1",
        gameDuration: 1358,
        gameMode: "ARAM",
        teams: [
          {
            teamId: 100,
            win: "Fail",
          },
          {
            teamId: 200,
            win: "Win",
          },
        ],
      },
      {
        gameId: "2836929120",
        platformId: "EUN1",
        gameDuration: 1695,
        gameMode: "ARAM",
        teams: [
          {
            teamId: 100,
            win: "Fail",
          },
          {
            teamId: 200,
            win: "Win",
          },
        ],
      },
      {
        gameId: "2836905505",
        platformId: "EUN1",
        gameDuration: 1252,
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
      },
    ];

    return matchResults;
  };

  return (
    <div>
      <H1>User:</H1>

      <UserCard>
        <img src={icon} alt="avatar"></img>
        <div>User: {userInfo.name}</div>
        <div>Level : {userInfo.summonerLevel}</div>
      </UserCard>

      <H1>Last 5 Matches:</H1>
      {matchResult.map((match) => (
        <MatchCard key={match.gameId}>
          <p>Match duration: {Math.floor(match.gameDuration / 60)} min</p>
          <p>Game mode: {match.gameMode} </p>
          <p>Match Result: {match.teams[0].win}</p>
          {userMatchDetail.map(
            (matchDetail) =>
              matchDetail.gameId === match.gameId &&
              champions.map(
                (champion) =>
                  champion.key === matchDetail.champion && (
                    <div>
                      <p>Played champion:</p>
                      <img
                        key={match.gameId}
                        width="100%"
                        alt="test"
                        src={`https://ddragon.canisback.com/img/champion/tiles/${
                          champion.id === "Fiddlesticks"
                            ? "FiddleSticks"
                            : champion.id
                        }_0.jpg`}
                      ></img>
                    </div>
                  )
              )
          )}
        </MatchCard>
      ))}
    </div>
  );
};

export default UserDetail;
