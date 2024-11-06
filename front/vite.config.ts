import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Configuración de la salida de build
    outDir: "dist", // Directorio de salida
    assetsDir: "assets", // Carpeta para los recursos estáticos (como imágenes)
    rollupOptions: {
      output: {
        // Controlar nombres y hash en los archivos de salida
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  server: {
    port: 3000, // Cambia el puerto si lo necesitas
  },
  // Aquí agregas la opción assetsInclude
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
});
