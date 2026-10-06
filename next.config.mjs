/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false, // Desactiva SWC para evitar el error de GLIBC en el servidor
};

export default nextConfig;