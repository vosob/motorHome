import { createSelector } from '@reduxjs/toolkit';

export const selectCard = (state) => state.rent.all;

export const selectEquipment = (state) => state.rent.equipment;
export const selectLocation = (state) => state.rent.location;
export const selectVehicleType = (state) => state.rent.vehicleType;

export const selectUniqueLocations = createSelector([selectCard], (cars) => {
  const allLocations = cars.map((car) => car.location);

  return [...new Set(allLocations)];
});

export const selectLiked = (state) => state.rent.liked;

export const selectAllFilters = createSelector(
  [selectCard, selectEquipment, selectLocation, selectVehicleType],
  (cars, equipment, location, vehicleType) => {
    return cars.filter((car) => {
      return (
        (!location || car.location.includes(location)) &&
        (!equipment.AC || car.details.airConditioner > 0) &&
        (!equipment.Automatic || car.transmission === 'automatic') &&
        (!equipment.Kitchen || car.details.kitchen > 0) &&
        (!equipment.TV || car.details.TV > 0) &&
        (!equipment.ShowerWC ||
          car.details.bathroom > 0 ||
          car.details.shower > 0) &&
        (!vehicleType || car.form === vehicleType)
      );
    });
  }
);
