// vite.config.js
import { defineConfig, loadEnv } from "file:///home/muteka/Documentos/works/pf/Portal-Admin-Geral/node_modules/vite/dist/node/index.js";
import react from "file:///home/muteka/Documentos/works/pf/Portal-Admin-Geral/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const baseUrl = mode == "production" ? env.BASE_URL : "/";
  return {
    base: baseUrl,
    plugins: [react()],
    build: {
      outDir: "build"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tdXRla2EvRG9jdW1lbnRvcy93b3Jrcy9wZi9Qb3J0YWwtQWRtaW4tR2VyYWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL211dGVrYS9Eb2N1bWVudG9zL3dvcmtzL3BmL1BvcnRhbC1BZG1pbi1HZXJhbC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tdXRla2EvRG9jdW1lbnRvcy93b3Jrcy9wZi9Qb3J0YWwtQWRtaW4tR2VyYWwvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKVxuICBjb25zdCBiYXNlVXJsID0gbW9kZSA9PSAncHJvZHVjdGlvbicgPyBlbnYuQkFTRV9VUkwgOiAnLydcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBiYXNlVXJsLFxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICBidWlsZDoge1xuICAgIG91dERpcjogJ2J1aWxkJ1xuICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLFNBQVMsY0FBYyxlQUFlO0FBQ2pYLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsUUFBTSxVQUFVLFFBQVEsZUFBZSxJQUFJLFdBQVc7QUFDdEQsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDQTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
