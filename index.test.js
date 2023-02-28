const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
    // Create a new Band
    const band = await Band.create({
      name: 'Led Zeppelin',
      genre: 'Rock'
    });

    // Check if the Band was created successfully
    expect(band.id).toBeDefined();
    expect(band.name).toBe('Led Zeppelin');
    expect(band.genre).toBe('Rock');
  })

  test('can create a Musician', async () => {
    // Create a new Musician
    const musician = await Musician.create({
      name: 'Jimmy Page',
      instrument: 'Guitar'
    });

    // Check if the Musician was created successfully
    expect(musician.id).toBeDefined();
    expect(musician.name).toBe('Jimmy Page');
    expect(musician.instrument).toBe('Guitar');
  })
})
