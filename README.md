# Planetas App 🌌

Aplicación móvil para consultar información detallada sobre los planetas del sistema solar.
- Link APK: https://expo.dev/accounts/daveb4r/projects/astronautas/builds/1e3668a7-5363-4d5b-8852-35ed8d6c0ec2

## 💡 Tecnologías y Dependencias

- **Expo:** Framework para React Native que simplifica el desarrollo y despliegue de aplicaciones móviles.
- **APIs Utilizadas:**
  - [Le Systeme Solaire API](https://api.le-systeme-solaire.net): Proporciona datos científicos de los planetas.
  - [Unsplash API](https://api.unsplash.com): Permite obtener imágenes de alta calidad de los planetas.
- **Almacenamiento Local:** `@react-native-async-storage/async-storage` para gestionar los planetas favoritos.

## 🚀 Instalación y Ejecución

- Cambie el nombre del archivo **.env.local** a **.env** y pegue el codigo enviado al correo donde se indica.

```bash
# Clonar el repositorio
git clone https://github.com/DaveB4r/planets.git

# Acceder al directorio del proyecto
cd planetas

# Instalar dependencias
npm install

# Iniciar la aplicación
npm start
```

## 📊 Estructura del Proyecto

```
planetas/
├── app/                    # Carpeta principal de la aplicación
│   └── (tabs)/             # Pestañas principales de navegación
├── assets/                 # Recursos estáticos (imágenes, fuentes)
│   ├── fonts/              # Fuentes personalizadas
│   └── images/             # Iconos y logotipos
├── components/             # Componentes reutilizables (cards, listas)
├── constants/              # Variables de configuración (temas, colores)
├── hooks/                  # Hooks personalizados (gestión de temas)
└── provider/               # Contexto de la aplicación (manejo de estados y AsyncStorage)
```

## 🌐 Características Principales

- **Listado de Planetas:** Visualización de todos los planetas del sistema solar.
- **Detalles del Planeta:** Al seleccionar un planeta, se muestra información detallada.
- **Favoritos:** Marcar planetas como favoritos usando la funcionalidad de almacenamiento local.

## ⚖️ Decisiones Técnicas

- **Uso de Expo:** Por su facilidad de configuración, soporte para módulos nativos y amplia documentación.
- **AsyncStorage:** Para un almacenamiento ligero y persistente de datos locales.
- **Estructura Modular:** Facilita la escalabilidad y el mantenimiento del código.

## 🚫 Problemas Conocidos

- Las imágenes pueden tardar en cargarse dependiendo de la conexión a Internet.
- La API de Unsplash tiene límites de peticiones gratuitos que podrían afectar la visualización de imágenes si se exceden.

## 🙌 Contribuciones

Las contribuciones son bienvenidas. Puedes abrir un *pull request* o reportar errores en la sección de *issues* del repositorio.

---

Desarrollado con 🚀 por DaveB4r.

