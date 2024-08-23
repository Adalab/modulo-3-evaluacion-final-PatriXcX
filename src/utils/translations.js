export const translateGender = (gender) => {
  if (gender === "female") {
    return "Femenino";
  } else if (gender === "male") {
    return "Masculino";
  } else {
    return "Otro";
  }
};

export const translateSpecies = (species) => {
  console.log(species);
  if (species === "human") {
    return "Human@";
  } else if (species === "half-giant") {
    return "Semi-gigante";
  } else if (species === "werewolf") {
    return "Hombre-lobo";
  } else if (species === "ghost") {
    return "Fantasma";
  } else {
    return "Otro";
  }
};
