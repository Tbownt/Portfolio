/* eslint-disable react/prop-types */
export const SkillItem = ({ name, image }) => {
  return (
    <div className="item">
      <img src={image} alt={name} style={{ width: "50%", marginTop: "10px" }} />
      <h5>{name}</h5>
    </div>
  );
};
