# HopPassion_Client

Es un e-commerce de productos de selección exclusiva. El mismo permite realizar el circuito de selección, compra y pago de productos. Dispone de vista de perfil de usuario, detalle de compras anteriores, reseñas de los productos comprados, rol de administrador con métricas, entre otros.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Objetivos:
* Que el cliente pueda registrarse, acceder a los productos, seleccionarlos, realizar el circuito de pago y confirmación del mismo, vía mail. Luego podrá realizar calificaciones de los productos que haya comprado, o editar los datos de su perfil.
* Que el administrador pueda disponer de un dashboar que le permita manejar y controlar stock de productos, edición o creación de los mismos, pueda ver métricas respecto de las ventas o usuarios, acceder a las reviews que dejan los usuarios.

Los datos: se consumen desde un JSON, volcado a una base de datos que se encuentra deployada.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
