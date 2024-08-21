export const getPlaceholderImage = (name) => {
  const encodedName = encodeURIComponent(name); // Codifica el nombre del personaje para usarlo en la URL
  return `https://via.placeholder.com/210x295/ffffff/666666/?text=${encodedName}`;
};
