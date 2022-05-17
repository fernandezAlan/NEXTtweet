export const formatDate = (date) => {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
    timeStyle: "full",
  }).format(date);
};

export const splitDate = (d) => {
  const dateWithOutTimeStandar = d.split("(")[0];
  const [day, onlyDate, year] = dateWithOutTimeStandar.split(",");
  return { day, onlyDate, year };
};
