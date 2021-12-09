const animales =["perro", "gato", "raton"];
const color = "verde";

// formato commondJS
module.exports = animales;

module.exports = {
    animales:animales,
    color:color
}

// cuando propiedad y variable coincide pueden comprimirse
/* module.exports = {
    animales,
    color
} */