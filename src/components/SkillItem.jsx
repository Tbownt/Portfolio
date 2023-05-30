/* eslint-disable react/prop-types */
export const SkillItem = ({ name, image }) => {
  return (
    <div className="item">
      <img src={image} alt={name} style={{ width: "56%" }} />
      <h5>{name}</h5>
    </div>
  );
};
