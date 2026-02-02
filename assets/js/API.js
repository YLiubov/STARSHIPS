const urls = {
"films": "https://swapi.info/api/films",
	"people": "https://swapi.info/api/people",
	"planets": "https://swapi.info/api/planets",
	"species": "https://swapi.info/api/species",
	"vehicles": "https://swapi.info/api/vehicles",
	"starships": "https://swapi.info/api/starships"
}







const filmImages = {
  "A New Hope": "hope.jpg",
  "The Empire Strikes Back": "empire.webp",
  "Return of the Jedi": "return of the jedi.jpeg",
  "Revenge of the Sith": "revenge.jpeg",
  "The Phantom Menace": "phantom.jpg",
  "Attack of the Clones": "clones.jpg"
};
const peopleImages = {
  "Luke Skywalker": "luke.jpg",
  "Darth Vader": "darth vader.jpg",
  "Leia Organa": "Leia organa.jpg",
  "Obi-Wan Kenobi": "obi wan.webp",
  "Owen Lars": "Owen.webp",
  "Beru Whitesun Lars": "Beru.webp",
  "R2-D2": "r2d2.jpeg",
  "C-3PO": "c-3po.jpeg",
  "Biggs Darklighter": "biggs.jpg",
  "R5-D4": "r5-d4.jpg"
};
const planetImages = {
  "Alderaan": "Alderaan.jpg",
  "Coruscant": "Coruscant.webp",
  "Dagobah": "Dagobah.jpg",
  "Hoth": "Hoth.jpg",
  "Yavin IV": "yavin.webp"
};
const speciesImages = {
  "Human": "Human_Mercenary.webp",
  "Rodian": "Rodian.jpg",
  "Trandoshan": "Trandoshan.webp",
  "Hutt": "Hutt.jpg",
  "Yoda's species": "Yoda.jpg"
};
const vehicleImages = {
  "AT-AT": "at at.jpeg",
  "Sand Crawler": "Sand Crawler.png",
  "Snowspeeder": "SNOW.jpg",
  "TIE Fighter": "TIE.webp"
};
const starshipImages = {
  "Death Star": "death star.jpeg",
  "Millennium Falcon": "mellenium.webp",
  "X-wing": "x wing.webp",
  
};

const getRoot = () => document.getElementById('root')


function keyValueRow(labelText, valueText) {
  const li = document.createElement('li')
  li.className = 'detail'

  const label = document.createElement('span')
  label.className = 'label'
  label.innerText = `${labelText}:`

  const value = document.createElement('span')
  value.className = 'value'
  value.innerText = valueText ?? '—'

  li.append(label, value)
  return li
}


/* =========================
   Films
========================= */

export const getFilms = () => {
  const ROOT = getRoot()

  fetch(urls.films)
    .then(response => response.json())
    .then(data => {
      const h1 = document.createElement('h1')
      h1.innerText = 'Films'

      const ulWrapper = document.createElement('ul')
      ulWrapper.className = 'films'

      for (const item of data) {
        const { title, episode_id, director, release_date } = item

        const liWrapper = document.createElement('li')
        liWrapper.className = 'film'

        const image = document.createElement('img')
        image.className = 'image'

        const fileName = filmImages?.[title] ?? 'placeholder.jpg'
        image.src = `./assets/images/${fileName}`
        image.alt = title

        const h2 = document.createElement('h2')
        h2.className = 'filmName'
        h2.innerText = title

        const ulInner = document.createElement('ul')
        ulInner.className = 'filmDetails'

        ulInner.append(
          keyValueRow('Episode', episode_id),
          keyValueRow('Instruktør', director),
          keyValueRow('udgivelsesdato', new Date(release_date).getFullYear())
        )

        liWrapper.append(image, h2, ulInner)
        ulWrapper.append(liWrapper)
      }

      ROOT.innerHTML = ''
      ROOT.append(h1, ulWrapper)
    })
    .catch(console.error)
}

/* =========================
   People
========================= */

export const getPeople = () => {
  const ROOT = getRoot()

  fetch(urls.people)
    .then(response => response.json())
    .then(data => {
      const h1 = document.createElement('h1')
      h1.innerText = 'People'

      const ulWrapper = document.createElement('ul')
      ulWrapper.className = 'people'

      for (const item of data.slice(0, 10)) {
        const { name, gender, films } = item

        const liWrapper = document.createElement('li')
        liWrapper.className = 'person'

        const image = document.createElement('img')
        image.className = 'image'

        const fileName = peopleImages?.[name] ?? 'placeholder.jpg'
        image.src = `./assets/people/${fileName}`
        image.alt = name

        const h2 = document.createElement('h2')
        h2.className = 'personName'
        h2.innerText = name

        const ulInner = document.createElement('ul')
        ulInner.className = 'details'

        const filmsText = Array.isArray(films) ? `${films.length} film` : (films ?? '—')

        ulInner.append(
          keyValueRow('Køn', gender),
          keyValueRow('Film som karakteren er med i', filmsText)
        )

        liWrapper.append(image, h2, ulInner)
        ulWrapper.append(liWrapper)
      }

      ROOT.innerHTML = ''
      ROOT.append(h1, ulWrapper)
    })
    .catch(console.error)
}

/* =========================
   Planets
========================= */

export const getPlanets = () => {
  const ROOT = getRoot()

  fetch(urls.planets)
    .then(response => response.json())
    .then(data => {
      const h1 = document.createElement('h1')
      h1.innerText = 'Planets'

      const ulWrapper = document.createElement('ul')
      ulWrapper.className = 'planets'

      for (const item of data.slice(0, 10)) {
        const { name, climate, terrain } = item

        const liWrapper = document.createElement('li')
        liWrapper.className = 'planet'

        const image = document.createElement('img')
        image.className = 'image'

        const fileName = planetImages?.[name] ?? 'placeholder.jpg'
        image.src = `./assets/people/${fileName}`
        image.alt = name

        const h2 = document.createElement('h2')
        h2.className = 'planetName'
        h2.innerText = name

        const ulInner = document.createElement('ul')
        ulInner.className = 'planetDetails'

        ulInner.append(
          keyValueRow('klima', climate),
          keyValueRow('Terræn', terrain)
        )

        liWrapper.append(image, h2, ulInner)
        ulWrapper.append(liWrapper)
      }

      ROOT.innerHTML = ''
      ROOT.append(h1, ulWrapper)
    })
    .catch(console.error)
}

/* =========================
   Species
========================= */

export const getSpecies = () => {
  const ROOT = getRoot()

  fetch(urls.species)
    .then(response => response.json())
    .then(data => {
      const h1 = document.createElement('h1')
      h1.innerText = 'Species'

      const ulWrapper = document.createElement('ul')
      ulWrapper.className = 'species'

      for (const item of data.slice(0, 10)) {
        const { name, classification, designation, skin_colors, hair_colors } = item

        const liWrapper = document.createElement('li')
        liWrapper.className = 'speciesItem'

        const image = document.createElement('img')
        image.className = 'image'

        const fileName = speciesImages?.[name] ?? 'placeholder.jpg'
        image.src = `./assets/Species/${fileName}`
        image.alt = name

        const h2 = document.createElement('h2')
        h2.className = 'speciesName'
        h2.innerText = name

        const ulInner = document.createElement('ul')
        ulInner.className = 'speciesDetails'

        ulInner.append(
          keyValueRow('Klassifikation', classification),
          keyValueRow('Designation', designation),
          keyValueRow('Hudfarve:', skin_colors),
          keyValueRow('Hårfarve:', hair_colors)
        )

        liWrapper.append(image, h2, ulInner)
        ulWrapper.append(liWrapper)
      }

      ROOT.innerHTML = ''
      ROOT.append(h1, ulWrapper)
    })
    .catch(console.error)
}

/* =========================
   Vehicles (reference intact)
========================= */

export const getVehicles = () => {
  const ROOT = getRoot()

  fetch(urls.vehicles)
    .then(response => response.json())
    .then(data => {
      const h1 = document.createElement('h1')
      h1.innerText = 'Vehicles'

      const ulWrapper = document.createElement('ul')
      ulWrapper.className = 'vehicles'

      for (const item of data) {
        const { name, model, manufacturer, vehicle_class, crew, cargo_capacity, films } = item

        const liWrapper = document.createElement('li')
        liWrapper.className = 'vehicle'

        const image = document.createElement('img')
        image.className = 'image'

        const fileName = vehicleImages?.[name] ?? 'placeholder.jpg'
        image.src = `./assets/Vehicles/${fileName}`
        image.alt = name

        const h2 = document.createElement('h2')
        h2.className = 'vehicleName'
        h2.innerText = name

        const ulInner = document.createElement('ul')
        ulInner.className = 'vehicleDetails'

        const filmsText = Array.isArray(films) ? `${films.length} film` : (films ?? '—')

        ulInner.append(
          keyValueRow('Model', model),
          keyValueRow('Producent', manufacturer),
          keyValueRow('Fartøjsklasse', vehicle_class),
          keyValueRow('Antal besætning', crew),
          keyValueRow('Kapacitet', cargo_capacity),
          keyValueRow('Film', filmsText)
        )

        liWrapper.append(image, h2, ulInner)
        ulWrapper.append(liWrapper)
      }

      ROOT.innerHTML = ''
      ROOT.append(h1, ulWrapper)
    })
    .catch(console.error)
}

/* =========================
   Starships
========================= */

export const getStarships = () => {
  const ROOT = getRoot()

  fetch(urls.starships)
    .then(response => response.json())
    .then(data => {
      const h1 = document.createElement('h1')
      h1.innerText = 'Starships'

      const ulWrapper = document.createElement('ul')
      ulWrapper.className = 'starships'

      for (const item of data) {
        const { name, model, manufacturer, crew } = item

        const liWrapper = document.createElement('li')
        liWrapper.className = 'starship'

        const image = document.createElement('img')
        image.className = 'image'

        const fileName = starshipImages?.[name] ?? 'placeholder.jpg'
        image.src = `./assets/starships/${fileName}`
        image.alt = name

        const h2 = document.createElement('h2')
        h2.className = 'starshipName'
        h2.innerText = name

        const ulInner = document.createElement('ul')
        ulInner.className = 'starshipDetails'

        ulInner.append(
          keyValueRow('Model', model),
          keyValueRow('Producent:', manufacturer),
          keyValueRow('Antal besætning:', crew)
        )

        liWrapper.append(image, h2, ulInner)
        ulWrapper.append(liWrapper)
      }

      ROOT.innerHTML = ''
      ROOT.append(h1, ulWrapper)
    })
    .catch(console.error)
}