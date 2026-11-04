window.CYR_PORTAL_DATA = (() => {
  const portal = {
  titulo: "Codigos y Recuerdos: El ultimo commit",
  navegacion: [
    { nombre: "Inicio", href: "#inicio" },
    { nombre: "Módulos", href: "#modulos" },
  ],
  portada: {
    etiqueta: "ARCHIVO 2026 // RUTA DE APRENDIZAJE",
    tituloPrincipal: "Codigos y Recuerdos:",
    subtitulo: "El ultimo commit",
    descripcion: "Una ruta para construir, conectar y lanzar ideas. Explora los módulos y encuentra todo lo necesario para tu siguiente commit.",
    metadatos: "07 MÓDULOS · C# → WEB → MAUI",
    tituloModulos: "Selecciona tu siguiente nivel",
    descripcionModulos: "Busca, filtra y completa los quizzes para avanzar en tu ruta.",
  },
  };

  const modulos = [
  {
    id: "modulo-1",
    categoria: "Programación",
    nombre: "Fundamentos de POO en C#",
    docente: "Arcides Canales",
    resumen: "Aprende a modelar soluciones con clases, objetos y los principios esenciales de la programación orientada a objetos en C#.",
    instrumentos: ["Computadora", "Guía de ejercicios"],
    programas: ["Visual Studio", ".NET SDK"],
    herramientas: ["Clases y objetos", "Encapsulamiento", "Herencia", "Polimorfismo"],
    recursos: [
      { nombre: "Documentación de C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { nombre: "Clases y objetos", url: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/tutorials/classes" },
      { nombre: "Programación orientada a objetos", url: "https://learn.microsoft.com/es-es/dotnet/csharp/fundamentals/tutorials/oop" },
    ],
    evidencia: "Aplicación de consola en C# que modele un problema usando clases, encapsulamiento y relaciones entre objetos.",
    quiz: [
      {
        pregunta: "¿Qué diferencia existe entre una clase y un objeto?",
        opciones: ["La clase es el plano y el objeto es una instancia creada a partir de ese plano.", "Son dos nombres para el mismo concepto.", "Un objeto define el plano y una clase es siempre una instancia."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué principio de POO permite ocultar los detalles internos de una clase?",
        opciones: ["Herencia", "Encapsulamiento", "Compilación"],
        respuesta: 1,
      },
      {
        pregunta: "¿Cómo se relacionan la herencia y el polimorfismo?",
        opciones: ["La herencia permite reutilizar y especializar tipos; el polimorfismo permite tratarlos mediante una interfaz común.", "Ambos se usan únicamente para crear variables locales.", "La herencia reemplaza la necesidad de métodos."],
        respuesta: 0,
      },
    ],
  },
  {
    id: "modulo-1",
    categoria: "Datos y control de versiones",
    nombre: "Acceso a Datos (ADO.NET), GitHub y Análisis",
    docente: "Arcides Canales",
    resumen: "Conecta aplicaciones .NET con bases de datos mediante ADO.NET y organiza el análisis y control de versiones de un proyecto.",
    instrumentos: ["Computadora", "Caso de análisis"],
    programas: ["Visual Studio", ".NET SDK", "SQL Server"],
    herramientas: ["ADO.NET", "Git", "GitHub", "Historias de usuario"],
    recursos: [
      { nombre: "ADO.NET", url: "https://learn.microsoft.com/es-es/dotnet/framework/data/adonet/" },
      { nombre: "Documentación de GitHub", url: "https://docs.github.com/es" },
      { nombre: "Git: documentación oficial", url: "https://git-scm.com/doc" },
    ],
    evidencia: "Repositorio en GitHub con una aplicación .NET que consulte datos usando ADO.NET y un documento breve de análisis.",
    quiz: [
      {
        pregunta: "¿Qué responsabilidad cumple una conexión en ADO.NET?",
        opciones: ["Establecer la comunicación entre la aplicación y el origen de datos.", "Diseñar la interfaz gráfica.", "Publicar el repositorio en GitHub."],
        respuesta: 0,
      },
      {
        pregunta: "¿Para qué se utiliza un commit en Git?",
        opciones: ["Para borrar el historial del proyecto.", "Para guardar una instantánea identificable de los cambios.", "Para instalar una base de datos."],
        respuesta: 1,
      },
      {
        pregunta: "¿Qué información debe describir una historia de usuario?",
        opciones: ["El usuario, lo que necesita y el beneficio que busca.", "Solo el nombre del archivo ejecutable.", "La lista completa de contraseñas del proyecto."],
        respuesta: 0,
      },
    ],
  },
  {
    id: "modulo-1",
    categoria: "Desarrollo web",
    nombre: "Bases de Datos SQL, ASP.NET Web Forms y Razor Pages",
    docente: "Arcides Canales",
    resumen: "Diseña y consulta bases de datos relacionales, y construye páginas web dinámicas con tecnologías de ASP.NET.",
    instrumentos: ["Computadora", "Modelo entidad-relación"],
    programas: ["SQL Server", "Visual Studio", "ASP.NET"],
    herramientas: ["SQL", "ASP.NET Web Forms", "Razor Pages", "CRUD"],
    recursos: [
      { nombre: "Introducción a SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/what-is-sql-server" },
      { nombre: "Razor Pages en ASP.NET Core", url: "https://learn.microsoft.com/es-es/aspnet/core/razor-pages/" },
      { nombre: "Tutorial de SQL", url: "https://learn.microsoft.com/es-es/sql/t-sql/tutorial-writing-transact-sql-statements" },
    ],
    evidencia: "Sitio web conectado a una base de datos que permita crear, consultar, actualizar y eliminar registros.",
    quiz: [
      {
        pregunta: "¿Qué diferencia hay entre una clave primaria y una clave foránea?",
        opciones: ["La primaria identifica un registro; la foránea relaciona registros con otra tabla.", "La primaria siempre contiene texto y la foránea siempre fechas.", "No existe diferencia entre ambas."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué operaciones representa el acrónimo CRUD?",
        opciones: ["Crear, leer, actualizar y eliminar.", "Conectar, reiniciar, usar y desplegar.", "Compilar, reescribir, unificar y depurar."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué función cumplen las páginas Razor en ASP.NET Core?",
        opciones: ["Permiten crear páginas web con marcado y lógica de servidor organizados por página.", "Sustituyen el motor de base de datos.", "Solo sirven para editar imágenes."],
        respuesta: 0,
      },
    ],
  },
  {
    id: "modulo-2",
    categoria: "Aplicaciones móviles",
    nombre: ".NET MAUI Avanzado, Persistencia SQLite y Scrum",
    docente: "Arcides Canales",
    resumen: "Lleva una aplicación multiplataforma más allá de lo básico, guarda datos localmente y organiza el trabajo con Scrum.",
    instrumentos: ["Computadora", "Dispositivo o emulador"],
    programas: [".NET MAUI", "Visual Studio", "SQLite"],
    herramientas: ["Persistencia local", "SQLite", "MVVM", "Scrum"],
    recursos: [
      { nombre: "Documentación de .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { nombre: "SQLite en .NET MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/data-cloud/database-sqlite" },
      { nombre: "Guía de Scrum", url: "https://scrumguides.org/download.html" },
    ],
    evidencia: "Aplicación .NET MAUI multiplataforma que persista información con SQLite, acompañada por evidencias del sprint.",
    quiz: [
      {
        pregunta: "¿Qué ventaja ofrece SQLite para una aplicación móvil sin conexión?",
        opciones: ["Permite almacenar y consultar datos localmente sin depender de un servidor.", "Obliga a mantener conexión permanente a internet.", "Reemplaza la interfaz de la aplicación."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué responsabilidad tiene el ViewModel en MVVM?",
        opciones: ["Gestionar los datos y la lógica de presentación que conecta la vista con el modelo.", "Dibujar directamente todos los píxeles de la pantalla.", "Almacenar exclusivamente imágenes del sistema."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué objetivo tiene la retrospectiva al finalizar un sprint?",
        opciones: ["Inspeccionar cómo trabajó el equipo e identificar mejoras.", "Asignar calificaciones a los clientes.", "Eliminar los elementos terminados del producto."],
        respuesta: 0,
      },
    ],
  },
  {
    id: "modulo-2",
    categoria: "Comercio electrónico",
    nombre: "Comercio Electrónico con PrestaShop",
    docente: "Arcides Canales",
    resumen: "Configura una tienda en línea, organiza su catálogo y prepara una experiencia de compra con PrestaShop.",
    instrumentos: ["Computadora", "Catálogo de productos"],
    programas: ["PrestaShop", "Navegador web", "Servidor local"],
    herramientas: ["Catálogo de productos", "Categorías", "Carrito de compras", "Gestión de pedidos"],
    recursos: [
      { nombre: "Documentación de PrestaShop", url: "https://devdocs.prestashop-project.org/" },
      { nombre: "Centro de ayuda de PrestaShop", url: "https://help-center.prestashop.com/" },
      { nombre: "Guía de usuario de PrestaShop", url: "https://docs.prestashop-project.org/" },
    ],
    evidencia: "Tienda PrestaShop funcional con catálogo organizado, productos configurados y flujo de compra demostrable.",
    quiz: [
      {
        pregunta: "¿Qué información esencial debe incluir la ficha de un producto?",
        opciones: ["Nombre, descripción, precio e imágenes relevantes.", "Solo el nombre del proveedor.", "Únicamente el código interno."],
        respuesta: 0,
      },
      {
        pregunta: "¿Para qué sirven las categorías en el catálogo de una tienda?",
        opciones: ["Para organizar productos y ayudar a los clientes a encontrarlos.", "Para procesar los pagos bancarios por sí solas.", "Para reemplazar las descripciones de producto."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué pasos componen el flujo básico desde el carrito hasta un pedido?",
        opciones: ["Revisar el carrito, introducir datos de entrega, elegir pago y confirmar el pedido.", "Crear una categoría y cerrar la tienda.", "Cambiar la contraseña y borrar el catálogo."],
        respuesta: 0,
      },
    ],
  },
  {
    id: "modulo-3-3",
    categoria: "Bases de datos",
    nombre: "Módulo 3.3 Administración de Bases de Datos",
    docente: "Javier Mineros",
    resumen: "Aprende a organizar, consultar y proteger bases de datos para mantener la información íntegra y disponible.",
    instrumentos: ["Computadora", "Modelo de base de datos"],
    programas: ["Sistema gestor de bases de datos", "Editor SQL"],
    herramientas: ["Consultas SQL", "Claves y relaciones", "Respaldos", "Seguridad de datos"],
    recursos: [
      { nombre: "Documentación de SQL Server", url: "https://learn.microsoft.com/es-es/sql/sql-server/" },
      { nombre: "Tutorial de SQL", url: "https://learn.microsoft.com/es-es/sql/t-sql/tutorial-writing-transact-sql-statements" },
    ],
    evidencia: "Base de datos organizada con consultas de administración y un respaldo de sus datos.",
    quiz: [
      {
        pregunta: "¿Para qué sirve una clave primaria en una tabla?",
        opciones: ["Para identificar de forma única cada registro.", "Para duplicar los datos de otra tabla.", "Para ordenar las columnas alfabéticamente."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué permite una clave foránea?",
        opciones: ["Relacionar registros entre tablas.", "Eliminar automáticamente todas las tablas.", "Convertir una tabla en un archivo de texto."],
        respuesta: 0,
      },
      {
        pregunta: "¿Por qué es importante realizar copias de seguridad de una base de datos?",
        opciones: ["Para poder recuperar la información ante pérdidas o fallos.", "Para evitar que se ejecuten consultas SQL.", "Para hacer que los datos sean públicos."],
        respuesta: 0,
      },
    ],
  },
  {
    id: "modulo-3-4",
    categoria: "Documentación de sistemas",
    nombre: "Módulo 3.4 Elaboración de documentación de Sistemas informaticos",
    docente: "Javier Mineros",
    resumen: "Aprendimos a saber hacer documentacion sobre nuestros sistemas, o manuales de usuario y el recorrido de como hicimos nuestros sistemas",
    instrumentos: ["Computadora", "Sistema desarrollado", "Capturas de pantalla"],
    programas: ["Procesador de texto", "Herramienta para diagramas"],
    herramientas: ["Manual de usuario", "Documentación técnica", "Diagramas de flujo", "Evidencias del desarrollo"],
    recursos: [
      { nombre: "Documentación de Microsoft Learn", url: "https://learn.microsoft.com/es-es/" },
      { nombre: "Guía de Markdown", url: "https://www.markdownguide.org/basic-syntax/" },
    ],
    evidencia: "Documentación del sistema que incluya un manual de usuario y el recorrido de su proceso de desarrollo.",
    quiz: [
      {
        pregunta: "¿Cuál es el propósito principal de un manual de usuario?",
        opciones: ["Explicar cómo utilizar las funciones del sistema.", "Describir únicamente el código fuente.", "Reemplazar las pruebas del sistema."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué información ayuda a explicar el recorrido de desarrollo de un sistema?",
        opciones: ["Las etapas realizadas, las decisiones tomadas y las evidencias del proceso.", "Solo el nombre final del programa.", "Una lista de contraseñas de los usuarios."],
        respuesta: 0,
      },
      {
        pregunta: "¿Para quién se redacta principalmente la documentación técnica?",
        opciones: ["Para quienes mantienen o desarrollan el sistema.", "Exclusivamente para quienes compran el equipo.", "Para sustituir la interfaz del sistema."],
        respuesta: 0,
      },
    ],
  },
   {
    id: "modulo-3-6",
    categoria: "Documentación de sistemas",
    nombre: "Módulo 3.6 Conversación en inglés sobre mantenimiento de sistemas informáticos",
    docente: "Javier Mineros",
    resumen: "Aprendimos a desarrollar la comprensión y expresión oral en inglés para describir equipos, comunicar fallas y explicar tareas de mantenimiento informático.",
    instrumentos: ["Computadora", "Sistema desarrollado", "Traductor"],
    programas: ["Procesador de texto", "Herramienta para diagramas"],
    herramientas: ["Manual de usuario", "Documentación técnica", "Transcripciones de conversación", "Evidencias del desarrollo"],
    recursos: [
      { nombre: "Documentación del módulo", url: "https://es.scribd.com/document/647789576/Modulo-3-6-Ingles-TERCER-ANO" },
    ],
    evidencia: ["Conversación en exposiciones de diagnóstico y mantenimiento", "Documentación en inglés", "Glosario bilingüe de términos informáticos"],
    quiz: [
      {
        pregunta: "¿Que pregunta ayuda a iniciar el diagnóstico de un problema?",
        opciones: ["What seems to be the problem?", "Where is the blue yesterday?", "How many screen is it?"], 
        respuesta: 0 
      },
      { 
        pregunta: "¿Qué expresión se usa para dar una instrucción de mantenimiento?", 
        opciones: ["Please restart the computer.", "The restart yesterday blue.", "Computer because quickly."], 
        respuesta: 0 
      },
      { 
        pregunta: "¿Cómo se puede describir un fallo de manera clara?", 
        opciones: ["Describe the symptoms and any error messages.", "Yesterday blue is not working.", "Computer is very fast."], 
        respuesta: 0 
      },
    ],
  },
  {
    id: "modulo-3-8",
    categoria: "Desarrollo de software",
    nombre: "Módulo 3.8 Proyecto innovador de Desarrollo de Software",
    docente: "Javier Mineros",
    resumen: "Con Arduino IDE y dos guías introductorias de Arduino, diseñamos proyectos para resolver problemas reales: un brazo robótico con servomotores y Arduino, y como proyecto extra, un basurero inteligente activado por un sensor.",
    instrumentos: ["Arduino", "Servomotores", "Sensor", "Componentes electrónicos"],
    programas: ["Arduino IDE"],
    herramientas: ["Programación de Arduino", "Control de servomotores", "Lectura de sensores", "Prototipado de soluciones"],
    recursos: [
      { nombre: "Arduino IDE", url: "https://docs.arduino.cc/software/ide-v2/" },
      { nombre: "Documentación oficial de Arduino", url: "https://docs.arduino.cc/" },
    ],
    evidencia: "Prototipo de un brazo robótico controlado con servomotores y Arduino, junto con un basurero inteligente que utiliza un sensor.",
    quiz: [
      {
        pregunta: "¿Qué componentes se utilizaron para construir el brazo robótico?",
        opciones: ["Arduino y servomotores.", "Un teclado y una pantalla.", "Un router y una base de datos."],
        respuesta: 0,
      },
      {
        pregunta: "¿Qué componente permite que el basurero inteligente detecte cuándo debe activarse?",
        opciones: ["Un sensor.", "Un servomotor solamente.", "El Arduino IDE."],
        respuesta: 0,
      },
      {
        pregunta: "¿Cuál fue el propósito de los proyectos del módulo?",
        opciones: ["Resolver problemas reales mediante prototipos con Arduino.", "Crear únicamente documentos de texto.", "Reemplazar la programación por componentes sin conexión."],
        respuesta: 0,
      },
    ],
  },
  ];

  return { portal, modulos };
})();
