var completedForms = [];
var latrines = ['simple pit', 'indoor', 'open air'];
var waterConditions = ['non-treated', 'bottled', 'filtered', 'chlorinated', 'boiled'];
var virusInstances = ['Zika', 'Ebola', 'malaria', 'tuberculosis', 'HIV/AIDS', 'hepatitis'];
var streets = ['Ave La Paz', 'Blvd Morazan', 'Blvd Norte', 'Carretera Lepaterique', 'Calle La Alameda', 'Ave Balboa', 'Ave Espana'];
var cities = ['Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba', 'El Progreso', 'Choluteca', 'Comayagua', 'Puerto Cortes', 'La Lima', 'Danli', 'Siquatepeque', 'Catacamas', 'Juticalpa', 'Tocoa', 'Villanueva', 'Tela', 'Olanchito', 'Santa Rosa de Copan', 'San Lorenzo', 'Cofradia', 'El Paraiso', 'La Paz', 'Yoro', 'La Entrada', 'Potrerillos', 'Santa Barbara', 'Talanga', 'Nacaome', 'Santa Rita', 'Intibuca'];
var states = ['Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés', 'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá', 'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho', 'Santa Bárbara', 'Valle', 'Yoro'];
var lastNames = ['Garcia', 'Rodriguez', 'Martinez', 'Lopez', 'Gonzalez', 'Perez', 'Sanchez', 'Ramirez', 'Torres', 'Flores', 'Rivera', 'Gomez', 'Diaz', 'Morales', 'Cruz', 'Ortiz', 'Chavez', 'Rosario', 'Davila', 'Villegas', 'Huerta', 'Mata', 'Beltran', 'Barajas', 'Benitez', 'Esparza', 'Cordova', 'Murillo', 'Salgado', 'Rosas', 'Cuevas', 'Palacios', 'Guevara', 'Quintero', 'Lucero', 'Medrano', 'Bautista', 'Cortes', 'Magana', 'Trejo', 'Bernal', 'Nieves', 'Lugo', 'Villalobos', 'Enriquez', 'Estrada', 'Reyna', 'Saenz', 'Delarosa', 'Parra', 'Leal', 'Saldana', 'Galindo', 'Duarte', 'Cano', 'Nava', 'Sierra', 'Blanco', 'Becerra', 'Tovar', 'Vera', 'Zapata', 'Muniz', 'Cardona', 'Vigil', 'Baez', 'Peralta', 'Hinojosa', 'Renteria', 'Gallardo', 'Felix', 'Baca', 'Castellanos', 'Guillen', 'Cordero', 'Chacon', 'Valle', 'Coronado', 'Vela', 'Moran', 'Velasco', 'Madrigal', 'Carranza', 'Quiroz', 'Montano', 'Madrid', 'Romo', 'Serna', 'Ybarra', 'Caballero', 'Burgos', 'Ventura', 'Olvera', 'Varela', 'Leyva', 'Quezada', 'Benavides', 'Uribe', 'Pagan', 'Paredes', 'Salinas', 'Robles', 'Solis', 'Lara', 'Cervantes', 'Deleon', 'Ochoa', 'Miranda', 'Cardenas', 'Trujillo', 'Velasquez', 'Fuentes', 'Cabrera', 'Leon', 'Rivas', 'Montoya', 'Colon', 'Calderon', 'Serrano', 'Gallegos', 'Rosales', 'Castaneda', 'Villareal', 'Guerra', 'Trevino', 'Pacheco', 'Ibarra', 'Valencia', 'Macias', 'Camacho', 'Salas', 'Orozco', 'Zamora', 'Suarez', 'Franco', 'Barrera', 'Mercado', 'Santana', 'Valenzuela', 'Escobar', 'Melendez', 'Velez', 'Lozano', 'Mora', 'Zuniga', 'Cantu', 'Cisneros', 'Pineda'];
var aNames = ['Avalos', 'Aguilar', 'Alcantara', 'Alonso', 'Aragon', 'Aviles', 'Aguirre', 'Arias', 'Acevedo', 'Arroyo'];

var randomCompletedFormGenerator = function() {
  //first seeding some separate 'a' names
  for (var a = 0; a < 10; a++) {
    var firstSampleForm = {
      type: "completedForm",
      title: "Family Health Information",
      description: "A form for recording basic family health information in rural areas.",
      formElements: [{
        type: 'lineText',
        label: 'Family Name',
        value: "Hermida",
        id: 1,
        required: false
      }, {
        type: 'number',
        label: 'Family Size',
        value: 5,
        id: 2,
        required: false
      }, {
        type: 'address',
        label: 'Address',
        value: {
          streetAddress: '34 Ave La Paz',
          streetAddress2: 'Apartment 7',
          city: 'San Pedro Sula',
          state: 'Cortes',
          country: 'Honduras'
        },
        id: 3,
        required: false
      }, {
        type: 'multipleChoice',
        label: 'Latrine Type',
        options: [{ value: "simple pit" }, { value: "indoor" }, { value: "open air" }],
        value: "simple pit",
        id: 4,
        required: false
      }, {
        type: 'checkbox',
        label: 'Drinking Water Conditions',
        options: [{ value: "non-treated" }, { value: "bottled" }, { value: "filtered" }, { value: "chlorinated" }, { value: "boiled" }],
        value: {},
        id: 5,
        required: false
      }, {
        type: 'checkbox',
        label: 'Observed Virus Instances',
        options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
        value: {},
        id: 6,
        required: false
      }]
    };
    firstSampleForm.formElements[0].value = aNames[a];
    firstSampleForm.formElements[1].value = Math.floor((Math.random() * 10) + 1);
    firstSampleForm.formElements[2].value.streetAddress = String((Math.floor(Math.random() * 100)) + 1) + " " + streets[Math.floor(Math.random() * streets.length)];
    firstSampleForm.formElements[2].value.streetAddress2 = "Apartment " + (Math.floor(Math.random() * 30) + 1);
    firstSampleForm.formElements[2].value.city = cities[Math.floor(Math.random() * cities.length)];
    firstSampleForm.formElements[2].value.state = states[Math.floor(Math.random() * states.length)];
    firstSampleForm.formElements[3].value = latrines[Math.floor(Math.random() * latrines.length)];
    var b = Math.floor(Math.random() * waterConditions.length);
    firstSampleForm.formElements[4].value[b] = waterConditions[b];
    var c = Math.floor(Math.random() * virusInstances.length);
    firstSampleForm.formElements[5].value[c] = virusInstances[c];
    completedForms.push(firstSampleForm);
  }
  //then seeding normal random data
  for (var i = 0; i < 120; i++) {
    var sampleForm = {
      type: "completedForm",
      title: "Family Health Information",
      description: "A form for recording basic family health information in rural areas.",
      formElements: [{
        type: 'lineText',
        label: 'Family Name',
        value: "Hermida",
        id: 1,
        required: false
      }, {
        type: 'number',
        label: 'Family Size',
        value: 5,
        id: 2,
        required: false
      }, {
        type: 'address',
        label: 'Address',
        value: {
          streetAddress: '34 Ave La Paz',
          streetAddress2: 'Apartment 7',
          city: 'San Pedro Sula',
          state: 'Cortes',
          country: 'Honduras'
        },
        id: 3,
        required: false
      }, {
        type: 'multipleChoice',
        label: 'Latrine Type',
        options: [{ value: "simple pit" }, { value: "indoor" }, { value: "open air" }],
        value: "simple pit",
        id: 4,
        required: false
      }, {
        type: 'checkbox',
        label: 'Drinking Water Conditions',
        options: [{ value: "non-treated" }, { value: "bottled" }, { value: "filtered" }, { value: "chlorinated" }, { value: "boiled" }],
        value: {},
        id: 5,
        required: false
      }, {
        type: 'checkbox',
        label: 'Observed Virus Instances',
        options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
        value: {},
        id: 6,
        required: false
      }]
    };
    sampleForm.formElements[0].value = lastNames[Math.floor(Math.random() * lastNames.length)];
    sampleForm.formElements[1].value = Math.floor((Math.random() * 10) + 1);
    sampleForm.formElements[2].value.streetAddress = String((Math.floor(Math.random() * 100)) + 1) + " " + streets[Math.floor(Math.random() * streets.length)];
    sampleForm.formElements[2].value.streetAddress2 = "Apartment " + (Math.floor(Math.random() * 30) + 1);
    sampleForm.formElements[2].value.city = cities[Math.floor(Math.random() * cities.length)];
    sampleForm.formElements[2].value.state = states[Math.floor(Math.random() * states.length)];
    sampleForm.formElements[3].value = latrines[Math.floor(Math.random() * latrines.length)];
    var x = Math.floor(Math.random() * waterConditions.length);
    sampleForm.formElements[4].value[x] = waterConditions[x];
    var y = Math.floor(Math.random() * virusInstances.length);
    sampleForm.formElements[5].value[y] = virusInstances[y];
    completedForms.push(sampleForm);
  }
  //seeding our zika virus outbreak data next to skew overall data
  for (var j = 0; j < 70; j++) {
    var otherSampleForm = {
      type: "completedForm",
      title: "Family Health Information",
      description: "A form for recording basic family health information in rural areas.",
      formElements: [{
        type: 'lineText',
        label: 'Family Name',
        value: "Hermida",
        id: 1,
        required: false
      }, {
        type: 'number',
        label: 'Family Size',
        value: 5,
        id: 2,
        required: false
      }, {
        type: 'address',
        label: 'Address',
        value: {
          streetAddress: '34 Ave La Paz',
          streetAddress2: 'Apartment 7',
          city: 'San Pedro Sula',
          state: 'Cortes',
          country: 'Honduras'
        },
        id: 3,
        required: false
      }, {
        type: 'multipleChoice',
        label: 'Latrine Type',
        options: [{ value: "simple pit" }, { value: "indoor" }, { value: "open air" }],
        value: "simple pit",
        id: 4,
        required: false
      }, {
        type: 'checkbox',
        label: 'Drinking Water Conditions',
        options: [{ value: "non-treated" }, { value: "bottled" }, { value: "filtered" }, { value: "chlorinated" }, { value: "boiled" }],
        value: {},
        id: 5,
        required: false
      }, {
        type: 'checkbox',
        label: 'Observed Virus Instances',
        options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
        value: {},
        id: 6,
        required: false
      }]
    };
    otherSampleForm.formElements[0].value = lastNames[Math.floor(Math.random() * lastNames.length)];
    otherSampleForm.formElements[1].value = Math.floor((Math.random() * 10) + 1);
    otherSampleForm.formElements[2].value.streetAddress = String(Math.floor(Math.random() * 100)) + " " + streets[Math.floor(Math.random() * streets.length)];
    otherSampleForm.formElements[2].value.streetAddress2 = "Apartment " + Math.floor(Math.random() * 30);
    otherSampleForm.formElements[2].value.city = cities[1];
    otherSampleForm.formElements[2].value.state = states[Math.floor(Math.random() * states.length)];
    otherSampleForm.formElements[3].value = latrines[2];
    var z = Math.floor(Math.random() * waterConditions.length);
    otherSampleForm.formElements[4].value[z] = waterConditions[z];
    otherSampleForm.formElements[5].value[0] = virusInstances[0];
    completedForms.push(otherSampleForm);
  }
};

randomCompletedFormGenerator();

var formTemplates = [{
  type: "formTemplate",
  title: "Family Health Information",
  description: "A form for recording basic family health information in rural areas.",
  formElements: [{
    type: 'lineText',
    label: 'Family Name',
    id: 1,
    required: false
  }, {
    type: 'number',
    label: 'Family Size',
    id: 2,
    required: false
  }, {
    type: 'address',
    label: 'Address',
    id: 3,
    required: false
  }, {
    type: 'multipleChoice',
    label: 'Latrine Type',
    options: [{ value: "simple pit" }, { value: "indoor" }, { value: "open air" }],
    id: 4,
    required: false
  }, {
    type: 'checkbox',
    label: 'Drinking Water Conditions',
    options: [{ value: "non-treated" }, { value: "bottled" }, { value: "filtered" }, { value: "chlorinated" }, { value: "boiled" }],
    id: 5,
    required: false
  }, {
    type: 'checkbox',
    label: 'Observed Virus Instances',
    options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
    id: 6,
    required: false
  }]
}, {
  type: "formTemplate",
  title: "Village Health Information",
  description: "A form for recording basic community health information in rural areas.",
  formElements: [{
    type: 'lineText',
    label: 'Community Name',
    id: 1,
    required: false
  }, {
    type: 'number',
    label: 'Community Size',
    id: 2,
    required: false
  }, {
    type: 'multipleChoice',
    label: 'Water Treatment System',
    options: [{ value: "no water treatment system" }, { value: "partial purification system" }, { value: "full purification system" }],
    id: 3,
    required: false
  }, {
    type: 'checkbox',
    label: 'Sewage System',
    options: [{ value: "no sewage system" }, { value: "on-site sewage systems" }, { value: "wastewater disposal system" }],
    id: 4,
    required: false
  }, {
    type: 'checkbox',
    label: 'Observed Virus Instances',
    options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
    id: 5,
    required: false
  }]
}];

var cradle = require('cradle');
// var dbName = "https://rekad.cloudant.com/thekraken-test";

var connection = new(cradle.Connection)("http://rekad.cloudant.com", 5984);
var db = connection.database("thekraken-test");

db.save(formTemplates, function(err, res) {
  if (err) console.log('Error while seeding database', err);
  else console.log('Seeding of form templates successful', res);
  completedForms.forEach(function(form) {
    form.formTemplateId = res[0].id;
  });

  db.save(completedForms, function(err, res) {
    if (err) console.log('Error while seeding database', err);
    else console.log('Seeding of completed forms successful', res);
  });
});
