const FIRST_NAME = "Carlos";
const MIDDLE_NAME = "Jair";
const LAST_NAME = "Méndez";
const USING_JS_SINCE = 2014;
const USING_REDUX_SINCE = 2019;
const USING_GOLANG_SINCE = 2020;
const USING_UBUNTU_SINCE = 2014;
const WORK_EMAIL = "jair.mendez@lever.co";
const MAIN_EMAIL = "carlos@hadaelectronics.com";
const SECONDARY_EMAIL = "carlos@hadamenu.com";

const personal = {
  firstName: FIRST_NAME,
  middleName: MIDDLE_NAME,
  lastName: LAST_NAME,
  fullName: `${FIRST_NAME} ${LAST_NAME}`,
  currentLocation: "Chicago, IL",
  bachelors: "Mechatronics Engineering",
  masters: "Information and Communications Technology Engineering",
  emails: [MAIN_EMAIL, SECONDARY_EMAIL, WORK_EMAIL],
  phone: "+1 (224) XXX-XX66",
  background: {
    fullstack: [
      "An aspiring software engineer with knowledge in software engineering practices such as designing, coding, testing, maintaining, code reviews, code comments, etc. Strong ability to communicate with clients / partners and ability to express ideas clearly and concisely.",
      `I'm passionate about building great products that make people’s lives easier. I have been using <b>JavaScript</b> for ${
        new Date().getFullYear() - USING_JS_SINCE
      } years, <b>React</b> and <b>Redux</b> for ${
        new Date().getFullYear() - USING_REDUX_SINCE
      } years. My expertise comes from startups where I developed a lot of different programs.`,
      "I have the ability to learn quickly and adapt — I'm a person that only by watching the environment around me, I'm able to learn about it. For example, I learned to code new languages by myself by reading official documentation and watching videos.",
    ],
    backend: [
      `A ~${
        new Date().getFullYear() - USING_UBUNTU_SINCE
      } years <b>Linux</b> user with knowledge in <b>Ubuntu</b> and software engineering practices such as designing, coding, testing, maintaining, code reviews, code comments, etc. Strong ability to communicate with clients / partners and ability to express ideas clearly and concisely.`,
      `I'm passionate about building great products that make people’s lives easier. I have been using <b>Golang</b> for ${
        new Date().getFullYear() - USING_GOLANG_SINCE
      } years. My expertise comes from startups where I developed a lot of different programs for different purposes.`,
      "I have the ability to learn quickly and adapt — I'm a person that only by watching the environment around me, I'm able to learn about it. For example, I learned to code new languages by myself by reading official documentation and watching videos.",
    ],
  } as Record<string, string[]>,
  aboutMe: [
    "I'm a person with a lot of dreams. I learn on my own. I love to learn new things, and I'm always updated on my work field. I'm an entrepreneur, and I've created two companies where I'm helping other people, such as, developers and mexican women by giving them a platform where they can sell products.",
    "I speak two languages (English and Spanish). I'd love to learn more languages. I enjoy traveling. I love to eat every single regional food everywhere I go, and I smile to everyone.",
    "To those that told me because I'm Mexican I cannot shine, that the success was not available in my region (they may be partially right), well... I had the opportunity to be born in a land full of potholes, challenges and reasons to give up. A country that every day teaches us how to handle disappointment and frustration. A country that makes us live in a constant necessity to reinvent ourselves (not for pleasure but for survival).",
    "I'm eager to learn new things and do my best every day.",
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/cjairm/",
    github: "https://github.com/cjairm",
  },
};

const experience = {
  currentPosition: "Software Engineer",
  introduction: [],
  current: {
    company: {
      name: "Employ (Lever)",
      address: "1125 Mission st, San Francisco, CA 94103",
    },
    position: {
      name: "Lead Software engineer",
      startedAt: 2021,
      endedAt: "Present",
    },
    location: {
      name: "Chicago, IL",
      type: "Remote",
    },
    workEmail: WORK_EMAIL,
    description: [
      "Wrote and configured integration tests of the “Bulk Imports” project that increased the confidence of developers while improving / maintaining the feature since it will catch bugs if they are introduced.",
      "Spec writer, project lead of 5 people, and individual contributor of “Remote work”, where conversations with Indeed and LinkedIn to make sure the new feature worked according to the documentation provided. Work very closely with the API team and PM because the new feature was exposed to paid and public APIs; and the XML feed, as well. Also, post-release meetings with LinkedIn happened. <b>Impacted ~250k daily applicants</b>",
      "Optimizations in the server response for the “jobs” internal page, reducing the size of the response by over 75% in huge accounts. This included removing duplicate information that the server was emitting and reconstructing references on the client (worked with framework team), loading the users asynchronously,  and only loading active postings on page load, instead of all postings. <b>Impacted +27k users</b>",
      "Spec writer, project lead managing a team of 4, and individual contributor of “Referrals”. The project impacted paid features only. Delivered on time. It handles automated actions over referred candidates and their profiles. Also, a lot of UI/UX improvements. <b>Impacted ~1.5M users</b>",
      "Upgraded Elasticsearch cluster 6.8. Investigations led to a move to OpenSearch 2.11. Recommend the new size of the cluster based on annual growth and current size/fatigue/usage. Monitors were configured to analyze the health of the new cluster. Led the reindex process and the release was done in batches. Restructured the entire (internal) repo where some deprecations and fully removed unused functions were accomplished. Conversions from callbacks to async patterns increased readability in the repo. On top of that, some integration tests were enabled for the service. To conclude those structure changes allow to upgrade versions much easier. <b>Impacted ~1.5M users, and cutting 35% of costs</b>",
      "Converted more than 100 coffeescript files into typescript resulting in a speed increase in developer productivity and a reduction in typing errors. <b>Impacted +40 developers and translated into a development speed increase since developers are more familiar with ts</b>",
      "<i>Technologies: Kafka, CI tools, Cypress, Typescript, Coffeescript, Elasticsearch, Opensearch, AWS, DerbyJS, ShareDB, MongoDB, Figma, Kibana, Opensearch Dashboards, Jira, Confluence.</i>",
    ],
  },
  other: [
    {
      company: {
        name: "Hada Menú",
      },
      position: {
        name: "Software Engineer and Cofounder",
        startedAt: 2019,
      },
      location: {
        name: "Mexico",
        type: "Remote",
      },
      description: [
        "API working that handles authentication actions.",
        "Traductions are handled in English and Spanish and automatically set depending on the configurations of the client.",
        "Carts are done by table that allows customers to order at the same time on different phones.",
        "Orders are displayed on the kitchen's screens as soon as the customer sends orders.",
        'Users can navigate on restaurants’ menus. <a href="https://hadamenu.com/k/19904033-de45-40a4-a782-72314d4c214d?table=1" target="_blank">Demo here</a>',
        "<i>Technologies: Typescript, React, Laravel, PHP, Shared hosting, Golang, Expo / React Native, Bash</i>",
      ],
    },
    {
      company: {
        name: "BeMusical",
        additionalInfo: "RevSteer, too",
      },
      position: {
        name: "Full-Stack Engineer and Team Lead (both projects)",
        startedAt: 2017,
        endedAt: 2020,
      },
      location: {
        name: "San Francisco",
        type: "Remote",
      },
      description: [
        "Developed API + Front End page with traffic of 1,600 users/month.",
        "Designed and built automated systems to manage our scalable infrastructure on AWS",
        "Developed the payments feature that allows musicians to request payouts manually on demand",
        "Users can navigate the musicians' page which shows off capabilities, timing, and work.",
        "Grew from 1 to 10 developers in a year and a half. Also, built 2 (revsteer and bemusical) websites with more than 5 main features in each one, and all code was supervised by me directly.",
        `<a href="https://docs.google.com/presentation/d/1frO9ymWlxyrndom5AsuRt-IzgPAxGKKpheNNdDGF3LU/edit?usp=sharing" target="_blank">BeMusical Work</a>`,
        `<a href="https://docs.google.com/presentation/d/1nttcysNaYhCNTjEojd19JNvJSZ70QoHBRp9ux_kEuzc/edit?usp=sharing" target="_blank">RevSteer Work</a>`,
        "<i>Technologies: Technologies: Django, PostgreSQL, Adobe XD, React, Redux, Bootstrap, AWS, Dedicated servers, Stripe API, Bash, Twilio</i>",
      ],
    },
    {
      company: {
        name: "Domovolcanico",
      },
      position: {
        name: "Jr. Full-Stack Engineer",
        startedAt: 2017,
        endedAt: 2017,
      },
      location: {
        name: "Puebla, Mexico",
        type: "Hybrid",
      },
      description: [
        "I set up and updated a testing server.",
        "I configured git in order to have repos and work collaboratively.",
        "Deploy the latest software development tools to aid development within the rest of the organization.",
        `
          We provided maintenance to around 15 websites using Laravel,
          Bootstrap, JQuery, with over 10,000 users/month.
          <a
            href="http://www.domovolcanico.com/pdf/portafolioDomovolcanico.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio link here
          </a>
        `,
        "<i>Technologies: AWS, Digital Ocean, MariaDB, Git, Laravel, Bootstrap, JQuery</i>",
      ],
    },
    {
      company: {
        name: "HadaElectronics.com",
      },
      position: {
        name: "Hardware Designer(Cofounder)",
        startedAt: 2016,
        endedAt: 2018,
      },
      location: {
        name: "Puebla, Mexico",
        type: "Hybrid",
      },
      description: [
        "Developed firmware for over 10 hardware projects in automation.",
        "Created a website that is currently under maintenance.",
        "Read +50 engineering books to create +10 online videos with didactic content for over 30k views, including topics: Basics electronics components, Digital electronics, and logic design.",
        "<i>Technologies: Arduino, PICs, FPGAs, Bluetooth, MQTT protocol, Golang, HTMX, Bash</i>",
      ],
    },
  ],
  school: [
    {
      degreeName:
        "Master's degree of Information Technology and Communications Engineering",
      schoolName: "Universidad Autónoma de Guadalajara. Guadalajara, Jalisco",
      startedAt: 2018,
      endedAt: 2019,
      description: [
        `
          IoT system for GPS tracking in real time. Link to my
          master's thesis(Spanish):
          <a
            href="https://drive.google.com/file/d/1GzFDHXi6O5YXam0atFlYf-rgQgTXk4yg/view"
            target="_blank"
            rel="noreferrer"
          >
            Real-time tracking system of public transport in
            Guadalajara city.
          </a>
          : Using: HTTP communication protocol, for testing ESP8266
          WiFi microchip, for production LoRa technology and ATmega328
          microchip, GPS, Node js (API REST), MongoDB, GMAPS API. Submitted for 2 events: XChallenge, and COECYTJAL (I won $20,000 USD in prizes from Guadalajara’s government)`,
      ],
    },
    {
      degreeName: "Bachelor of Mechatronics Engineer",
      schoolName: "Instituto Tecnológico Superior de Atlixco. Atlixco, Puebla",
      startedAt: 2009,
      endedAt: 2014,
      description: [
        `
          <a
            href="https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view"
            target="_blank"
            rel="noreferrer"
          >
            Bachelor thesis
          </a>
          — VHDL Using: FPGA Spartan 6 chip (Xilinx), ISE IDE
          (Xilinx), training board
          <a
            href="https://intesc.mx/"
            target="_blank"
            rel="noreferrer"
          >
            Shymbia
          </a>
          .
        `,
      ],
    },
  ],
};

const portfolio = [
  {
    title: "@cjairm’s website",
    description: [
      'Designed and developed by me. You can reuse the template that can be downloaded from <a class="is-link is-inverted" href="https://github.com/cjairm/cjairm.github.io/tree/master/code" target="_blank">here</a>',
      "<i>Technologies: React and Typescript</i>",
    ],
  },
  {
    title: "Golang + HTMX",
    size: "is-5",
    description: [
      "Using different approaches for fun to create multipurpose programs, such as, user authentication, web sockets, session and cookie manage; and todo app.",
      "<i>Technologies: Golang (Gin, Gorilla, Fiber, Native library), HTMX</i>",
    ],
  },
  {
    title: "New grep",
    description: [
      "Command that searches for words in files within a folder",
      '<a class="is-link is-inverted" href="https://github.com/cjairm/cgrep" target="_blank">Usage</a>',
      "<i>Technologies: Golang</i>",
    ],
  },
  {
    title: "Expo / React Native / Native Android",
    size: "is-full",
    description: [
      'Created a pokemon app for fun. You can find code <a class="is-link is-inverted" href="https://github.com/cjairm/Pokedex-ReactNative" target="_blank">here</a>',
      'Created apps for Hada Menu (restaurants & customers). Code lives in a private channel. <a class="is-link is-inverted" href="https://docs.google.com/presentation/d/1lHxqJpty9kPD50pw1rRD33a-SAxM2k6-UIHHslrUhBI/edit?usp=sharing" target="_blank">More details</a>',
      'Created a GPS tracker + built the hardware. An example <a class="is-link is-inverted" href="https://docs.google.com/presentation/d/1UA3PMfzophC1ULhoQTpZkL2c3kaGRchicPZojMuVpZY/edit?usp=sharing" target="_blank">here</a>',
      "<i>Technologies: Laravel, Expo / React Native, Android Studio</i>",
    ],
  },
  {
    title: "FPGA",
    size: "is-6",
    description: [
      'Gave support to the community that starts with FPGA programming with basic knowledge. You can find more info about the project <a class="is-link is-inverted" href="https://drive.google.com/file/d/1J6Lt8POaS26J_GRc2AlSdFf57-HILpG_/view" target="_blank">here</a>.',
      "<i>Technologies: FPGA, VHDL, Hardware</i>",
    ],
  },
  {
    title: "Laravel CLI",
    size: "is-6",
    description: [
      "Command that sets up a new Laravel template using Docker",
      '<a class="is-link is-inverted" href="https://github.com/cjairm/laravel-cli" target="_blank">Usage</a>',
      "<i>Technologies: Golang</i>",
    ],
  },
];

const backendSkills = [
  {
    "PHP (Laravel)": 60,
    "Bootstrap / Material UI / Bulma": 50,
    docker: 35,
    go: 60,
  },
  {
    Redis: 45,
    Django: 45,
    "C/C++": 35,
    rust: 15,
  },
  {
    "DerbyJS / ShareDB": 55,
    "Relational Data Bases": 45,
    "Non-Relational Data Bases": 45,
    "React / React Native / Redux": 65,
  },
  {
    wasm: 15,
    typescript: 75,
  },
];

const fullstackSkills = [
  {
    "PHP (Laravel)": 50,
    "Bootstrap / Material UI / Bulma": 80,
    docker: 20,
    go: 50,
  },
  {
    Redis: 45,
    Django: 35,
    "C/C++": 35,
    rust: 10,
  },
  {
    "DerbyJS / ShareDB": 55,
    "Relational Data Bases": 45,
    "Non-Relational Data Bases": 45,
    "React / React Native / Redux": 80,
  },
  {
    wasm: 25,
    typescript: 75,
  },
];

const blog = {
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
};

const appData = {
  personal,
  experience,
  portfolio,
  fullstackSkills,
  backendSkills,
  blog,
};

export default appData;
