import { filterData, computeStats, sortData } from '../src/dataFunctions.js';
import {data as testData} from './data.js';
//import { fakeData } from './dataFunctions.spec.js';
//llamar uno con pet, petSize y gender

describe.only("filterData", () => {
  it("should filter pets by type and return the quantity of cats", () => {
    const totalCats = filterData(testData, "Pet", "Cat");
    expect(totalCats.length).toBe(12); // ¿Cuántos gatos tenemos?
  });

  it("should filter pets by type and return the quantity of dogs", () => {
    const totalDogs = filterData(testData, "Pet", "Dog");
    expect(totalDogs.length).toBe(12); // ¿Cuántos perros tenemos?
  });

  it("should filter pets by gender and return the quantity of males", () => {
    const totalMales = filterData(testData, "Gender", "Male");
    expect(totalMales.length).toBe(12); // ¿Cuántos machos tenemos?
  });

  it("should filter pets by gender and return the quantity of females", () => {
    const totalFemales = filterData(testData, "Gender", "Female");
    expect(totalFemales.length).toBe(12); // ¿Cuántas hembras tenemos?
  });

  it("should filter pets by size and return the quantity of small pets", () => {
    const totalSmallPets = filterData(testData, "Pet size", "Small");
    expect(totalSmallPets.length).toBe(12); // ¿Cuántos pequeños tenemos?
  });

  it("should filter pets by size and return the quantity of big pets", () => {
    const totalBigPets = filterData(testData, "Pet size", "Big");
    expect(totalBigPets.length).toBe(12); // ¿Cuántos grandes tenemos?
  });
});


describe("computeStats", () => {
  it("should compute the correct statistics for the dataset", () => {
    const stats = computeStats(testData);
    expect(stats.petCatAvg).toBe('50.00'); // Porcentaje de gatos
    expect(stats.petDogAvg).toBe('50.00'); // Porcentaje de perros
    expect(stats.genderMaleAvg).toBe('45.83'); // Porcentaje de machos
    expect(stats.genderFemaleAvg).toBe('54.17'); // Porcentaje de hembras
  });
});



//hacer un test sobre sort.data
