import "./App.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { TeamTable } from "./TeamTable";

function App() {
  const [teamList, setTeamList] = useState([]);
  const [favoriteTeamInputChecked, setFavoriteTeam] = useState([]);
  // make independent util and put it there
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
      );
      console.log("data", data);
      const teams = data.teams.map((team) => ({ ...team, isChecked: false }));
      setTeamList(teams);
      console.log("teamList", teamList);
    } catch (error) {
      console.log(error);
    }
  };
  const favoriteInputHandler = (id) => {
    console.log("id", id);
    if (favoriteTeamInputChecked.includes(id)) {
      setFavoriteTeam((prevState) => prevState.filter((item) => item !== id));
    } else {
      setFavoriteTeam((prevState) => [...prevState, id]);
    }
  };

  useEffect(() => fetchData(), []);

  return (
    <div className="container">
      <TeamTable
        teamList={teamList}
        favoriteElements={favoriteTeamInputChecked}
        addToFavoriteInputHandler={favoriteInputHandler}
      />
    </div>
  );
}
export default App;
