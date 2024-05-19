// Définition de la variable `basename` en fonction du mode de l'environnement
const basename = import.meta.env.MODE === "production" ? "/ArgentBank/" : "";

// Exportation de la variable `basename` pour l'utiliser dans d'autres fichiers
export { basename };
