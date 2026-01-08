const copiarNombre = (nombre) => {
  navigator.clipboard.writeText(nombre);
  toast.success("Nombre copiado", {
    description: "Copiado al portapapeles para buscar más tarde."
  });
};
