export interface EquipmentModelInterface{
  brand?: string;
  id?: string;
  manufactureDate?: string;
  model?: string;
  weight?: string;
}

export class EquipmentModel implements EquipmentModelInterface{

  brand: string | undefined = undefined;
  id: string | undefined = undefined;
  manufactureDate: string | undefined = undefined;
  model: string | undefined = undefined;
  weight: string | undefined = undefined;

  constructor(data?: EquipmentModelInterface) {
    // if(data?.id) {
      this.brand = data?.brand;
      this.id = data?.id;
      this.manufactureDate = data?.manufactureDate;
      this.model = data?.model;
      this.weight = data?.weight;
    // }
  }
}
