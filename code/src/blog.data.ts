export const blog = {
  "golang-app-what-does-that-look-like-from-a-typescript-mindset": {
    title: "Golang app, what does that look like from a Typescript mindset?",
    content: [
      {
        type: "blockquote",
        quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney",
      },
      {
        type: "p",
        p: "It's me again. I have been thinking about moving to another language (I use Typescript / Javascript in my daily job). After some investigation, I wanted to either do Rust or Golang. I ended up using Golang for its strong typing usage, quick/easy learning curve, hot market, and large community. I tried some small projects using Rust but it was a lot of time-consuming because of the complexity. After watching some YouTube tutorials and an Udemy course, I decided to deep learn Golang.",
      },
      {
        type: "p",
        p: "I’d like to share how it went the first time I created a web app using Golang. After starting to do backend work (if you are curious, take a look a my previous post), I appreciated the beauty of the language. I loved how Golang + htmx worked together (I have to be honest, I was influenced by a ton of videos I watched on YouTube). I would like to share some pieces of code I had to work with.",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://go.dev/doc/",
            text: "documentation",
          },
          {
            href: "http://www.blackbox.ai",
            text: "Blackbox",
          },
        ],
        p: "In the beginning, I cheated a little bit because of the tutorials I watched first (that is the way I learn). The language has pretty good <-a->, if you are thinking starting with the language, it would be a good idea to take a look at them. I put my hands to work on small projects to kind of understand fundamental stuff and during development helped me a lot to ask questions to an AI called <-a->.",
      },
      {
        type: "p",
        p: "For this project, I used Golang version 1.21.6 (at the time I was writing this, the version 1.22.0 was released). I also used “air” which is a live reloading tool that is super helpful to avoid putting up and down the service while developing to test new changes.",
      },
      {
        type: "p",
        p: 'I set up MySQL as a database. The version I used was 5.7.37 and I created two tables ("users" and "sessions"). Also, I used UUID as identifiers instead of numbers. Then I created an “index” of the “sessions” table (the name of the table where I store sessions created by users when logging in) to make the retrieval operations optimized in the future (when having tons of rows).',
      },
      {
        type: "p",
        p: "Now, I was ready to start writing routes:",
      },
      {
        type: "code",
        pre: `import ( // Set up routes logic lives in different files
  HomeRoutes "github.com/cjairm/…/home"
  UserRoutes "github.com/cjairm/…/user"
)

...

// The / home route will be a GET route that will send requests when users log
// in or sign up.
mux.HandleFunc(“/home", Home.Index)

// /login POST request will handle users that want to log in the user should send
// a valid email and password to be able to set a cookie.
mux.HandleFunc("/login", User.Login)

// /register POST requests will handle users who want to create a new register
// and should send the email and password they want to use.
mux.HandleFunc(“/register", User.Register)

// HTTP GET route that uses a middleware that allows our app to confirm whether
// the user was already authenticated or not. This route can be accessed only by
// authorized users.
mux.HandleFunc(“/dashboard", sessionMiddleware(http.HandlerFunc(User.Dashboard)).ServeHTTP)

// Removes references of authentication data (row from database and cookie).
mux.HandleFunc("/logout", http.HandlerFunc(User.Logout).ServeHTTP)

// I use port :3000 for simplicity. It’s React’s default, so… you know… to not
// think about it
log.Fatal(http.ListenAndServe(":3000", mux))
`,
      },
      {
        type: "p",
        p: 'If this is your first time working with Golang and "net/http", you may be asking yourself... where do we tell the app which "verbs" we will be using? If we are coming from a Typescript/Node world like me... we may be expecting something like:',
      },
      {
        type: "code",
        pre: `// Ex. This defines a route for handling GET requests to /home
app.get('/home', (req, res) => {
  res.send('Welcome to the homepage!');
});`,
      },
      {
        type: "p",
        p: 'Where we can see that this is using the GET verb. Well, "net/http" didn’t work like that. Not sure if the best approach but I had to do something like:',
      },
      {
        type: "code",
        pre: `func Index {
  if r.Method != http.MethodGet {
    http.NotFound(w, r)
    return
  }
  ...
  // logic
}`,
      },
      {
        type: "p",
        archors: [
          {
            href: "https://gorilla.github.io/",
            text: "Gorilla",
          },
          {
            href: "https://gin-gonic.com/",
            text: "Gin",
          },
          {
            href: "https://gofiber.io/",
            text: "Fiber",
          },
        ],
        p: 'At this point, another thought can be perfectly valid. Why not simply use "<-a->", "<-a->", or "<-a->"? Well, the point of this project was to understand Golang from the foundation. And at the moment I’m writing this, there is an updated version (1.22.0) that allows us to do something like:',
      },
      {
        type: "code",
        pre: `http.HandleFunc("GET /home", Home.Index)`,
      },
      {
        type: "p",
        p: "It’s time to start using something new to me, htmx. I was pretty excited because I saw a lot of benefits of the technology like it works even without javascript activated in browsers (with some limitations, but still works) and you have to think less about adding more logic on top of our main logic (inside of Golang).",
      },
      {
        type: "code",
        pre: `{{block "register-form" .}}
  <form hx-post="/register" hx-trigger="submit" hx-swap="outerHTML" hx-target="this">
    <!-- .Validations contain descriptive error texts if the value sent is -->
    <!-- not valid. -->

    <!-- .FormValues is a helper map that stores values sent. If there is an -->
    <!-- error while validation, the form is re-rendered including values in -->
    <!-- the input. -->

    <input
      type="email"
      class="{{if .Validations.Email}} is-invalid{{end}}"
      name="email"
      value="{{.FormValues.Email}}" />
    {{if .Validations.Email}}
      <div>{{.Validations.Email}}</div>
    {{end}}

    <input
      type="password"
      class="{{if .Validations.Password}} is-invalid{{end}}"
      name="password"
      value="{{.FormValues.Password}}" />
    {{if .Validations.Password}}
      <div>{{.Validations.Password}}</div>
    {{end}}

    <!-- .CreatedUser contains the name of the user if it was correctly created. --> 
    <!-- I used it to make the app more dynamic and pretty -->
    {{if .CreatedUser}}
      <div>User {{.CreatedUser}} was created!</div>
    {{end}}

    {{if .Validations}}
      <div>Check fields before continuing, please</div>
    {{end}}

    <button type="submit">Save</button>
  </form>
{{end}}`,
      },
      {
        type: "p",
        archors: [
          {
            href: "https://htmx.org/docs/#ajax",
            text: "hx-post",
          },
          {
            href: "https://htmx.org/docs/#triggers",
            text: "hx-trigger",
          },
          {
            href: "https://htmx.org/docs/#swapping",
            text: "hx-swap",
          },
        ],
        p: 'The previous form sends a request. "<-a->" tells us that we are using a POST verb to "/register" endpoint. The event will happen only if a "submit" event happens and we know that from "<-a->". "<-a->" helps us to swap specific HTML elements, which I opted to replace the entire <form>. On every successful response (200) the replacement happens. If different that code 200, we need to do a small hack (in case a validation happens -code 400-).',
      },
      {
        type: "code",
        pre: `// HACK. It will help to replace the form with information if validation does
// not pass.
document.body.addEventListener("htmx:beforeSwap", function (e) {
  if (e.detail.xhr.status === 400) {
    e.detail.shouldSwap = true;
  }
});`,
      },
      {
        type: "p",
        p: "The router should look like:",
      },
      {
        type: "code",
        pre: `func Register(w http.ResponseWriter, r *http.Request) {
  err := r.ParseForm()
  
  // handle error
  userValues := &validations.User{
    Email:    r.FormValue("email"),
    Password: r.FormValue("password"),
  }
  validationErrors := validations.Register(userValues)

  if userErrors != nil {
    // set code 400
    w.WriteHeader(http.StatusBadRequest)
    tmpl := template.Must(template.ParseFiles("web/views/register.html"))
    err = tmpl.ExecuteTemplate(w, "register-form", Page {
      Validations: validationErrors,
      FormValues:  *userValues,
    })
    // handle error
    return
  }

  // logic…
  tmpl := template.Must(template.ParseFiles("web/views/register.html"))
  err = tmpl.ExecuteTemplate(w, "register-form", Page{
    CreatedUser: “<name-from-db>”,
  })

  // handle error
}`,
      },
      {
        type: "p",
        archors: [
          {
            href: "https://pkg.go.dev/github.com/go-playground/validator/v10",
            text: "validator package",
          },
        ],
        p: "To validate the information we used a <-a->. You can take a look at it and do your own exploration. Super easy to use.",
      },
      {
        type: "p",
        p: "To create the login step, we should follow pretty similar steps we just did with small tweaks.",
      },
      {
        type: "code",
        pre: `func Login(w http.ResponseWriter, r *http.Request) {
  ...
  // logic
  ...
  creds := models.Credentials{
    Email:    r.FormValue("email"),
    Password: r.FormValue("password"),
  }

  targetUser, err := models.GetUserByEmail(creds.Email)
  ...
  // handle error
  ...
  
  // Confirm that the password is the same as the one saved in the database.
  // I know you know this, but remember to always encrypt them. :)
  ...
  
  // We store the session in the database.
  createdSession, err := models.CreateSession(targetUser.Id)

  // Set the cookie
  http.SetCookie(w, &http.Cookie{
    Name:    "session_token",
    Value:   createdSession.Token,
    Expires: createdSession.Expires,
  })

  // If the request is successful, we redirect the user to the dashboard page
  w.Header().Add("HX-Redirect", "/dashboard")
  w.WriteHeader(http.StatusOK)
}`,
      },
      {
        type: "p",
        p: "When the user is logged in, we need to confirm credentials by reading the cookies' values stored.",
      },
      {
        type: "code",
        pre: `func sessionMiddleware(next http.Handler) http.Handler {
  // We need to return a function because this is a wrapper and we need to
  // return the expected function structure
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    // We can obtain the session token from the request's cookies, which come
    // with every request
    c, err := r.Cookie("session_token")
    // handle errors
    ...

    sessionToken := c.Value

    // We then get the session from the db "sessions" table
    userSession, err := models.GetSession(sessionToken)
    // handle errors
    ...

    // If the session is present but has expired, we can delete the session,
    // and return an unauthorized status
    if userSession.IsExpired() {
      _ = models.DeleteSession(userSession.Token)
      w.WriteHeader(http.StatusUnauthorized)
      return
    }

    user, err := models.GetUser(userSession.Id)
    // handle errors
    ...

    // Intentionally remove the password to not expose it
    user.Password = ""

    // Set the session in the context to have access to it without having to
    // make requests against the db
    ctx := context.WithValue(r.Context(), "userSession", user)

    // Call the next handler with the updated context
    next.ServeHTTP(w, r.WithContext(ctx))
  })
}`,
      },
      {
        type: "p",
        p: "To add the last piece, a logout should be added:",
      },
      {
        type: "code",
        pre: `func Logout(w http.ResponseWriter, r *http.Request) {
  c, err := r.Cookie("session_token")
  // handle errors
  ...

  sessionToken := c.Value

  userSession, err := models.GetSession(sessionToken)
  // handle errors

  // Remove the user's session from the session db
  err = models.DeleteSession(userSession.UserId)
  // handle errors
  ...

  // We need to let the client know that the cookie has expired In the response,
  // we set the session token to an empty value and set its expiry as the current
  // time
  http.SetCookie(w, &http.Cookie{
    Name:    "session_token",
    Value:   "",
    Expires: time.Now(),
  })
  w.WriteHeader(http.StatusOK)
}`,
      },
      {
        type: "p",
        p: "All in all, I had such a great experience working on a big project using HTMX and Golang. I did have a hard time working with types but always was useful to take a look at the documentation, I guess that happened because my mindset was Typescript.",
      },
    ],
  },
  "golang-como-cambie-de-typescript": {
    title: "Golang, ¿cómo cambié de TypeScript? (spanish version of previous)",
    content: [
      {
        type: "blockquote",
        quote:
          "La manera de comenzar es dejar de hablar de ello y comenzar a hacerlo",
        author: "Walt Disney",
      },
      {
        type: "p",
        p: "Soy yo otra vez. He estado pensando en pasarme a otro idioma (uso TypeScript/JavaScript en mi día a día en el trabajo). Después de investigar un poco, quería empezar a usar Rust o Golang. Terminé usando Golang por su uso de tipos (igual que Rust, pero más fácil), su curva de aprendizaje rápida y sencilla, su demanda en el mercado y su gran comunidad. Probé algunos proyectos pequeños usando Rust, pero me llevó mucho tiempo debido a la complejidad. Después de ver algunos tutoriales de YouTube y un curso de Udemy, decidí aprender Golang en profundidad.",
      },
      {
        type: "p",
        p: "Me gustaría compartir cómo me fue la primera vez que creé una aplicación web con Golang. Después de comenzar a trabajar en back-end (si tienes curiosidad, mira mi publicación anterior), aprecié la belleza del lenguaje. Me encantó cómo funcionaban juntos Golang + HTMX (para ser honesto, me influyeron muchos videos que vi en YouTube). Me gustaría compartir algunos fragmentos de código con los que tuve que trabajar.",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://go.dev/doc/",
            text: "documentación",
          },
          {
            href: "http://www.blackbox.ai",
            text: "Blackbox",
          },
        ],
        p: "Al principio, hice un poco de trampa debido a los tutoriales que vi primero (así es como aprendo). El lenguaje tiene <-a-> bastante buena. Si estás pensando en comenzar con él, sería una buena idea echarles un vistazo. Bueno… puse mis manos a trabajar en pequeños proyectos para entender cosas fundamentales y durante el desarrollo me ayudó mucho a hacerle preguntas a una IA llamada <-a->.",
      },
      {
        type: "p",
        p: 'Para este proyecto, utilicé la versión 1.21.6 de Golang (en el momento en que escribí esto, se lanzó la versión 1.22.0). También utilicé "air", que es una herramienta para ver cambios en tiempo real y es muy útil para evitar reiniciar la app mientras desarrollamos.',
      },
      {
        type: "p",
        p: 'Configuré MySQL como base de datos. La versión que usé fue la 5.7.37 y creé dos tablas ("usuarios" y "sesiones"). Además, utilicé UUID como identificadores en lugar de números. Luego creé un "índice" de la tabla "sesiones" (el nombre de la tabla donde almaceno las sesiones creadas por los usuarios al iniciar sesión) para optimizar las operaciones de recuperación en el futuro (cuando tenga toneladas de filas).',
      },
      {
        type: "p",
        p: "Ahora estaba listo para empezar a escribir rutas",
      },
      {
        type: "code",
        pre: `import ( // La lógica de rutas vive en diferentes archivos.
	HomeRoutes "github.com/cjairm/…/home"
  UserRoutes "github.com/cjairm/…/user"
)

...

// La ruta /home será una ruta GET que enviará solicitudes cuando los usuarios inicien sesión o se registren.
mux.HandleFunc(“/home", Home.Index)
// La solicitud POST de /login manejará a los usuarios que quieran iniciar sesión. El usuario debe enviar un "correo electrónico" y una "contraseña" válidos para poder configurar una cookie.
mux.HandleFunc("/login", User.Login)

// Las solicitudes POST de /register manejarán a los usuarios que deseen crear un nuevo registro y deberán enviar el "correo electrónico" y la "contraseña" que desean usar.
mux.HandleFunc(“/register", User.Register)

// Ruta HTTP GET que utiliza un middleware que permite a nuestra aplicación confirmar si el usuario ya fue autenticado o no. A esta ruta solo pueden acceder usuarios autorizados.
mux.HandleFunc(“/dashboard", sessionMiddleware(http.HandlerFunc(User.Dashboard)).ServeHTTP)

// Elimina referencias de datos de autenticación (fila de la base de datos y cookie).
mux.HandleFunc("/logout", http.HandlerFunc(User.Logout).ServeHTTP)

// Utilizo el puerto :3000 por simplicidad. Es el puerto predeterminado de React, así que… ya saben… no pensar en ello.
log.Fatal(http.ListenAndServe(":3000", mux))
`,
      },
      {
        type: "p",
        p: "Si es la primera vez que trabajas con Golang y `net/http`, te estarás preguntando… ¿Dónde le decimos a la aplicación qué “verbos” usaremos? Si venimos de un mundo TypeScript/Node como yo... esperaríamos algo como:",
      },
      {
        type: "code",
        pre: `Ejemplo. Esto define una ruta para manejar solicitudes GET a /home
app.get('/home', (req, res) => {
  res.send('Bienvenido a tu panel de control!');
});`,
      },
      {
        type: "p",
        p: 'Aquí podemos ver el verbo GET se está usando. Bueno, "net/http" no funcionaba así. No estoy seguro de si es el mejor enfoque, pero tuve que hacer algo como:',
      },
      {
        type: "code",
        pre: `func Index {
  if r.Method != http.MethodGet {
    http.NotFound(w, r)
    return
  }
  ...
  // logic
}`,
      },
      {
        type: "p",
        archors: [
          {
            href: "https://gorilla.github.io/",
            text: "Gorilla",
          },
          {
            href: "https://gin-gonic.com/",
            text: "Gin",
          },
          {
            href: "https://gofiber.io/",
            text: "Fiber",
          },
        ],
        p: 'Llegados a este punto, otro pensamiento puede ser perfectamente válido. ¿Por qué no utilizar simplemente "<-a->", "<-a->", or "<-a->"? Bueno, el objetivo de este proyecto era comprender Golang desde sus cimientos. Y en el momento en que escribo esto, hay una versión (1.22.0) actualizada que nos permite hacer algo como:',
      },
      {
        type: "code",
        pre: `http.HandleFunc("GET /home", Home.Index)`,
      },
      {
        type: "p",
        p: "Es hora de empezar a usar algo nuevo para mí, HTMX. Estaba muy emocionado porque vi muchos beneficios de la tecnología, como que funciona incluso sin JavaScript activado en los navegadores (con algunas limitaciones, pero aún funciona) y hay que pensar menos en cómo agregar lógica además de la principal (dentro de Golang).",
      },
      {
        type: "code",
        pre: `{{block "register-form" .}}
  <form hx-post="/register" hx-trigger="submit" hx-swap="outerHTML" hx-target="this">
    <!-- .Validations contiene textos de error descriptivos si el valor enviado no es válido. -->

    <!-- .FormValues es un mapa que almacena los valores enviados. Si hay un error durante la validación, el formulario se vuelve a renderizar, incluyendo los valores en la entrada. -->

    <input type="email" class="{{if .Validations.Email}} is-invalid{{end}}" name="email" value="{{.FormValues.Email}}" />
    {{if .Validations.Email}}
      <div>{{.Validations.Email}}</div>
    {{end}}

    <input type="password" class="{{if .Validations.Password}} is-invalid{{end}}" name="password" value="{{.FormValues.Password}}" />
    {{if .Validations.Password}}
      <div>{{.Validations.Password}}</div>
    {{end}}

    <!-- .CreatedUser contiene el nombre del usuario si se creó correctamente. Lo usé para hacer la aplicación más dinámica y bonita. -->
    {{if .CreatedUser}}
      <div>Usuario {{.CreatedUser}} fue creado</div>
    {{end}}

    {{if .Validations}}
      <div>Verifique los campos antes de continuar, por favor</div>
    {{end}}

    <button type="submit">Save</button>
  </form>
{{end}}`,
      },
      {
        type: "p",
        archors: [
          {
            href: "https://htmx.org/docs/#ajax",
            text: "hx-post",
          },
          {
            href: "https://htmx.org/docs/#triggers",
            text: "hx-trigger",
          },
          {
            href: "https://htmx.org/docs/#swapping",
            text: "hx-swap",
          },
        ],
        p: 'El formulario anterior envía una solicitud. "<-a->" nos dice que estamos usando un verbo POST para el endpoint "/register". El evento ocurrirá solo si ocurre un evento "submit" y lo sabemos por "<-a->". "<-a->" nos ayuda a intercambiar elementos HTML específicos, que opté por reemplazar el <form> completo. Con cada respuesta exitosa (200), se produce el reemplazo. Si es diferente al código 200, necesitamos hacer un pequeño truco (en caso de que ocurra una validación -código 400-).',
      },
      {
        type: "code",
        pre: `// HACK. Ayudará para reemplazar el formulario con información si no se aprueba la validación.
document.body.addEventListener("htmx:beforeSwap", function (e) {
  if (e.detail.xhr.status === 400) {
    e.detail.shouldSwap = true;
  }
});`,
      },
      {
        type: "p",
        p: "La ruta debería verse como:",
      },
      {
        type: "code",
        pre: `func Register(w http.ResponseWriter, r *http.Request) {
  err := r.ParseForm()
  // manejar error
  userValues := &validations.User{
    Email:    r.FormValue("email"),
    Password: r.FormValue("password"),
  }
  validationErrors := validations.Register(userValues)
  if userErrors != nil {
    // pone código 400
    w.WriteHeader(http.StatusBadRequest)
    tmpl := template.Must(template.ParseFiles("web/views/register.html"))
    err = tmpl.ExecuteTemplate(w, "register-form", Page {
      Validations: validationErrors,
      FormValues:  *userValues,
    })
    // maneja error
    return
  }
  // lógica…
  tmpl := template.Must(template.ParseFiles("web/views/register.html"))
  err = tmpl.ExecuteTemplate(w, "register-form", Page{
    CreatedUser: “Name from db”,
  })
  // maneja error
}`,
      },
      {
        type: "p",
        archors: [
          {
            href: "https://pkg.go.dev/github.com/go-playground/validator/v10",
            text: "paquete que ayuda a validar campos",
          },
        ],
        p: "Para validar la información utilizamos un <-a->. Puedes echarle un vistazo y hacer tu exploración. Superfácil de usar.",
      },
      {
        type: "p",
        p: "Para crear el paso de inicio de sesión, debemos seguir pasos bastante similares a los que acabamos de hacer con pequeños ajustes.",
      },
      {
        type: "code",
        pre: `func Login(w http.ResponseWriter, r *http.Request) {
  ...
  // lógica
  ...
  creds := models.Credentials{
    Email:    r.FormValue("email"),
    Password: r.FormValue("password"),
  }

  targetUser, err := models.GetUserByEmail(creds.Email)
  ...
  // maneja error
  // Confirma que la contraseña es igual a la guardada en la base de datos. Sé que lo sabes, pero recuerda encriptarlos siempre. :)
  ...

  // Guardamos la sesión en la base de datos.
  createdSession, err := models.CreateSession(targetUser.Id)
  // Ponemos la cookie
  http.SetCookie(w, &http.Cookie{
    Name:    "session_token",
    Value:   createdSession.Token,
    Expires: createdSession.Expires,
  })

  // Si la solicitud tiene éxito, redirigimos al usuario a la página del panel
  w.Header().Add("HX-Redirect", "/dashboard")
  w.WriteHeader(http.StatusOK)
}
`,
      },
      {
        type: "p",
        p: "Cuando el usuario inicia sesión, debemos confirmar las credenciales leyendo los valores de las cookies almacenados.",
      },
      {
        type: "code",
        pre: `func sessionMiddleware(next http.Handler) http.Handler {
  // Necesitamos devolver una función porque esto es un "wrapper" y necesitamos devolver la estructura de función esperada.
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    // Podemos obtener el token de sesión de las cookies de la solicitud, que vienen con cada solicitud.
    c, err := r.Cookie("session_token")
    // maneja error

    sessionToken := c.Value

    // Luego obtenemos la sesión de la tabla sessions de la base de datos.
    userSession, err := models.GetSession(sessionToken)
    // maneja error

    // Si la sesión está presente pero ha caducado, podemos eliminarla y devolver un estado no autorizado.
    if userSession.IsExpired() {
      _ = models.DeleteSession(userSession.Token)
      w.WriteHeader(http.StatusUnauthorized)
      return
    }

    user, err := models.GetUser(userSession.Id)
    // maneja error

    // Eliminar intencionalmente la contraseña para no exponerla
    user.Password = ""

    // Configure la sesión en el contexto para tener acceso a ella sin tener que realizar solicitudes a la base de datos.
    ctx := context.WithValue(r.Context(), "userSession", user)

    // No olvides invocar el controlador con el contexto actualizado
    next.ServeHTTP(w, r.WithContext(ctx))
  })
}`,
      },
      {
        type: "p",
        p: "Para agregar la última pieza, se debe agregar un cierre de sesión:",
      },
      {
        type: "code",
        pre: `func Logout(w http.ResponseWriter, r *http.Request) {
c, err := r.Cookie("session_token")
  // maneja error

  sessionToken := c.Value
  userSession, err := models.GetSession(sessionToken)
  // maneja error

  // Eliminar la sesión del usuario de la base de datos.
  err = models.DeleteSession(userSession.UserId)
  // maneja error

  // Necesitamos informarle al cliente que la cookie ha caducado. En la respuesta, configuramos el token de sesión en un valor vacío y configuramos su caducidad como la hora actual.
  http.SetCookie(w, &http.Cookie{
    Name:    "session_token",
    Value:   "",
    Expires: time.Now(),
  })

  w.WriteHeader(http.StatusOK)
}`,
      },
      {
        type: "p",
        p: "Considerándolo todo, tuve una gran experiencia trabajando en un gran proyecto usando HTMX y Golang. Me costó mucho trabajar con tipos, pero siempre fue útil echar un vistazo a la documentación, supongo que eso sucedió porque mi forma de pensar era Typecript.",
      },
    ],
  },
  "how-did-i-configure-my-raspberry-pi": {
    title: "How did I configure my Raspberry pi?",
    content: [
      {
        type: "blockquote",
        quote:
          "If something is important enough, or you believe something is important enough, even if you are scared, you will keep going.",
        author: "Elon Musk",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://scratch.mit.edu/search/projects?q=python",
            text: "Scratch",
          },
        ],
        p: `Have you heard about the Raspberry Pi? I am pretty sure you have. In case you have not. It's a mini computer that was created to provide a tool for teaching computer science in schools. I remember it had "<-a->" installed by default. Raspberry Pi Foundation released the first model in 2012. Pretty quickly gained popularity and the board was used for different projects, like robotics stuff. I was more involved in that area at that time. Now, I am trying to go back to my roots 😀.`,
      },
      {
        type: "p",
        p: "I am a mechatronics engineer, and I am very passionate about hardware and robotics. I knew of the existence of this thing years ago while trying to do fun stuff during school. I did my baby steps, configuring servers to put up my first web page using PHP. Now, I’m coming back to see what can be done with this cheap and easy-to-use computer.",
      },
      {
        type: "p",
        p: "Why did I choose a Raspberry Pi instead of a microcontroller if I wanted to go back to my roots?. Well, there is no microcontroller can do what a Raspberry Pi can do, and the inverse is also true if you try to use the Raspberry Pi as an “advanced” microcontroller, so they are not interchangeable. They can complement each other, but they are different things.",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://www.raspberrypi.com/products/raspberry-pi-zero-w/",
            text: "Raspberry Pi Zero W",
          },
        ],
        p: `For example, the <-a-> (which is the one I will be using) has a 1 GHz single-core CPU that allows it to run various operating systems such as Linux, Android and Windows 10. It also has some GPIO pins ("Input and general purpose output") that allow us to do whatever we want with them. For IoT projects it makes it a little bit slower and unviable, since it takes up to 15 seconds to start + the excessive amount of power used due to its greater processing capabilities and extra components (compared to a microcontroller). Since it will be used as a server, we don't care about that for now.`,
      },
      {
        type: "img",
        src: "/images/3/1.png",
        alt: "needed things",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://www.raspberrypi.com/tutorials/",
            text: "their official page",
          },
          {
            href: "https://www.raspberrypi.com/software/",
            text: "Raspberry Pi Imager",
          },
        ],
        p: `I already have some projects in mind. This document is about how to configure the Raspberry Pi and not about future projects, so for now, I can say that I will use it as a bridge across IoT devices (as broker). If you are curious, you can always take a look at <-a-> and find some interesting projects. Well, a lot of blah blah blah... let's start downloading the <-a-> that will install our SD with the system operative that will be used by the Raspberry Pi computer.`,
      },
      {
        type: "img",
        src: "/images/3/2.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "I am using a Raspberry Pi Zero W, so that's what I am choosing in the Imager I just downloaded.",
      },
      {
        type: "img",
        src: "/images/3/3.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "img",
        src: "/images/3/4.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "As an operative system, I choose a light one because I won’t be accessing it using a monitor and all that stuff on my own. I want this Raspberry Pi to work as a server. It’s the reason I picked no desktop env.",
      },
      {
        type: "img",
        src: "/images/3/5.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "Then, when clicking next, we should edit the initial configuration. I added my local Wi-Fi configuration to make sure I could access it through my local router.",
      },
      {
        type: "img",
        src: "/images/3/6.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: 'Something super useful that is part of the new Imager (I did not have access to this feature when I was in college) is where we are able to set a "domain name" (pi.local). To give more context on why this is helpful… Most likely, your home network uses DHCP IP assignments, which means that each time a device leaves the network and returns, a new IP address is assigned to it. Even if you set a static IP for a frequently used device (e.g., you set your Raspberry Pi computer to always be assigned to number 192.168.1.99 - without being reassigned), you still have to remember that entirely unintuitive number in your memory. Further, if you ever need to change the number for any reason, you would have to remember a brand new one in its place.',
      },
      {
        type: "p",
        p: "In terms of services configuration, please do not forget to enable SSH (it happened to me the first time and I had to re-install the operating system). I’m setting up my personal public-key authentication to make sure I’m the only one who has access to the Raspberry Pi automatically without a password.",
      },
      {
        type: "img",
        src: "/images/3/7.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "It should be everything ready to install our image in the SD. After finishing, we need to test that the Raspberry Pi is up and running to start playing with it. Currently, I am using a Mac computer, so I was able to use the `ping` command (if you want to know more about it, do `man ping` to display documentation). Using `ping pi.local -i 1 -c 5` should tell us if the Raspberry Pi is responding to our requests, which means it is ready.",
      },
      {
        type: "img",
        src: "/images/3/8.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "If everything looks good, we can do:",
      },
      {
        type: "code",
        pre: "ssh cjairm@pi.local",
      },
      {
        type: "img",
        src: "/images/3/9.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "All in all, what started as (I want to imagine) a charitable project to bring computers to teach computer science became something wider. Now, it is part of geeks' (like me) lives that can be easily used and configured with minimal research.",
      },
    ],
  },
  "como-configure-mi-raspberry-pi": {
    title: "¿Cómo configuré mi Raspberry Pi? (spanish version of previous)",
    content: [
      {
        type: "blockquote",
        quote:
          "Si algo es lo suficientemente importante, o si crees que algo es lo suficientemente importante, incluso si tienes miedo, seguirás adelante",
        author: "Elon Musk",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://scratch.mit.edu/search/projects?q=python",
            text: "Scratch",
          },
        ],
        p: `¿Has escuchado hablar de la Raspberry Pi? Estoy bastante seguro de que si. En caso de que no lo hayas hecho, esta es una mini computadora que fue creada para proporcionar una herramienta para la enseñanza de informática en las escuelas. Recuerdo que tenía instalado "<-a->" por defecto. La Fundación Raspberry Pi lanzó el primer modelo en 2012. Rápidamente, ganó popularidad y la tarjeta se empezó a usar en diferentes proyectos, como robótica. Yo estaba más involucrado en esa área en ese momento. Ahora estoy intentando volver a mis raíces 😀.`,
      },
      {
        type: "p",
        p: "Soy ingeniero en mecatrónica y me apasiona mucho el hardware y la robótica. Sabía de la existencia de esto hace años mientras intentaba hacer cosas divertidas en la escuela. Di mis primeros pasos, configurando servidores para montar mi primera página web usando PHP. Ahora vuelvo para ver lo que es capaz de hacer esta “computadorsita”.",
      },
      {
        type: "p",
        p: '¿Por qué elegí una Raspberry Pi en lugar de un microcontrolador si quería volver a mis raíces? Bueno, no hay ningún microcontrolador que pueda hacer lo que puede hacer una Raspberry Pi, y lo contrario también si intentas usar la Raspberry Pi como un microcontrolador más "avanzado", por lo que no son intercambiables. Pueden complementarse, pero son cosas diferentes.',
      },
      {
        type: "p",
        archors: [
          {
            href: "https://www.raspberrypi.com/products/raspberry-pi-zero-w/",
            text: "Raspberry Pi Zero W",
          },
        ],
        p: `Por ejemplo, la <-a-> (que es la que usaré para este proyecto) tiene una CPU de un solo núcleo de 1 GHz que permite ejecutar varios sistemas operativos como Linux, Android y Windows 10. También tiene algunos pines GPIO ("Entrada y salida de uso general") que nos permiten hacer lo que queramos con ellos. Lo que para proyectos IoT la hace un poco más lenta e inviable, ya que tarda hasta 15 segundos en arrancar + la excesiva cantidad de corriente utilizada por sus mayores capacidades de procesamiento y componentes extras (comparándolo con un microcontrolador). Dado que será usada como un servidor, eso no nos importa por ahora.`,
      },
      {
        type: "img",
        src: "/images/3/1.png",
        alt: "needed things",
      },
      {
        type: "p",
        archors: [
          {
            href: "https://www.raspberrypi.com/tutorials/",
            text: "página oficial",
          },
          {
            href: "https://www.raspberrypi.com/software/",
            text: "Raspberry Pi Imager",
          },
        ],
        p: `Ya tengo algunos proyectos en mente, pero este documento trata sobre cómo configurar Raspberry Pi y no sobre proyectos futuros, por lo que, por ahora, puedo decir que lo usaré como puente entre dispositivos IoT (bróker). Si tienes curiosidad, puedes echar un vistazo a su <-a-> y encontrar algunos proyectos interesantes. Bueno, mucho bla, bla, bla y poca acción... Empecemos a descargar el <-a-> que instalará en nuestro SD con el sistema operativo que utilizará el ordenador Raspberry Pi.`,
      },
      {
        type: "img",
        src: "/images/3/2.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "Estoy usando una Raspberry Pi Zero W, así que eso es lo que elijo en el programa que acabo de descargar.",
      },
      {
        type: "img",
        src: "/images/3/3.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "img",
        src: "/images/3/4.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "Como sistema operativo, elegiré el ligero porque no accederé a él mediante un monitor y todo eso por mi cuenta. Quiero que esta Raspberry Pi funcione como servidor. Es la razón por la que no elegí ningún entorno de escritorio.",
      },
      {
        type: "img",
        src: "/images/3/5.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: 'Luego, al hacer clic en "next", debemos editar la configuración inicial. Agregué mi configuración de wifi local para asegurarme de poder acceder a ella a través de mi enrutador local.',
      },
      {
        type: "img",
        src: "/images/3/6.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: 'Algo súper útil que forma parte del nuevo Raspberry Pi Imager (no tenía acceso a esta función cuando estaba en la universidad) es donde podemos establecer un "nombre de dominio" (pi.local). Para dar más contexto del porqué, es una herramienta super útil... Lo más probable es que su red doméstica utilice asignaciones de IP DHCP, lo que significa que cada vez que un dispositivo sale de la red y regresa, se le asigna una nueva dirección IP. Incluso si configura una IP estática para cualquier dispositivo (por ejemplo, configura su computadora Raspberry Pi para que siempre esté asignada al número 192.168.1.99, sin ser reasignada), aún debe recordar ese número completamente poco intuitivo. Además, si alguna vez necesita cambiar el número por algún motivo, deberá recordar uno nuevo en su lugar.',
      },
      {
        type: "p",
        p: "En cuanto a la configuración de servicios, no olvides habilitar SSH (a mí me pasó la primera vez y tuve que reinstalar el sistema operativo). Estoy configurando mi public-key para poder ser autenticado. Además de que seré el único que tiene acceso a la Raspberry Pi automáticamente sin contraseña.",
      },
      {
        type: "img",
        src: "/images/3/7.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "Debería estar todo para instalar nuestra imagen a la tarjeta SD. Después de finalizar, debemos probar que la Raspberry Pi está en funcionamiento para comenzar a jugar con ella. Actualmente, estoy usando una computadora Mac, por lo que pude usar el comando `ping` (si quieres saber más al respecto, haz `man ping` para mostrar la documentación). El uso de `ping pi.local -i 1 -c 5` debería decirnos si Raspberry Pi está respondiendo a nuestras solicitudes, lo que significa que está listo.",
      },
      {
        type: "img",
        src: "/images/3/8.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "Deberíamos estar listos para poder ejecutar:",
      },
      {
        type: "code",
        pre: "ssh cjairm@pi.local",
      },
      {
        type: "img",
        src: "/images/3/9.png",
        alt: "Raspberry Pi Imager",
      },
      {
        type: "p",
        p: "En conclusión, lo que comenzó como (me imagino) un proyecto benéfico para llevar computadoras y enseñar informática se convirtió en algo más amplio. Ahora, es parte de la vida de geeks (como yo) y podemos usarla y configurarla fácilmente con mínima inversión de tiempo.",
      },
    ],
  },
};
