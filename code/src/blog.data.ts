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
    title: "Golang, ¿cómo cambié de TypeScript?",
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
};
