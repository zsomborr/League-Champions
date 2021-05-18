import { withRouter } from "react-router";
import Card from "../styles/CardStyle";

const championDetail = (props) => {
  return (
    <Card>
      <li>Attack: {props.location.state.champion.info.attack}</li>
      <li>Defense: {props.location.state.champion.info.defense}</li>
      <li>Magic: {props.location.state.champion.info.magic}</li>
      <li>Difficulty: {props.location.state.champion.info.difficulty}</li>
      <li>Hp: {props.location.state.champion.stats.hp}</li>
      <li>PlusHp/lvl: {props.location.state.champion.stats.hpperlevel}</li>
      <li>manaPoints: {props.location.state.champion.stats.mp}</li>
      <li>manaPoint/lvl: {props.location.state.champion.stats.mpperlevel}</li>
      <li>moveSpeed: {props.location.state.champion.stats.movespeed}</li>
      <li>armor: {props.location.state.champion.stats.armor}</li>
      <li>armor/lvl: {props.location.state.champion.stats.armorperlevel}</li>
      <li>magicResist: {props.location.state.champion.stats.spellblock}</li>
      <li>
        magicResist/lvl:
        {props.location.state.champion.stats.spellblockperlevel}
      </li>
      <li>attackRange: {props.location.state.champion.stats.attackrange}</li>
      <li>hpRegen: {props.location.state.champion.stats.hpregen}</li>
      <li>
        hpRegen/lvl: {props.location.state.champion.stats.hpregenperlevel}
      </li>
      <li>manaRegen: {props.location.state.champion.stats.mpregen}</li>
      <li>
        manaRegen/lvl:
        {props.location.state.champion.stats.mpregenperlevel}
      </li>
      <li>critChance: {props.location.state.champion.stats.crit}</li>
      <li>
        critChance/lvl: {props.location.state.champion.stats.critperlevel}
      </li>
      <li>attackDamage: {props.location.state.champion.stats.attackdamage}</li>
      <li>
        attackDamage/lvl:
        {props.location.state.champion.stats.attackdamageperlevel}
      </li>
      <li>attackSpeed: {props.location.state.champion.stats.attackspeed}</li>
      <li>
        attackSpeed/lvl:
        {props.location.state.champion.stats.attackspeedperlevel}
      </li>
    </Card>
  );
};

export default withRouter(championDetail);
