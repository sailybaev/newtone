export interface Branch {
  id: string;
  label: string;
  address: string;
  whatsapp: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const branches: Branch[] = [
  {
    id: "central",
    label: "На левом",
    address: "Улица Алихан Бокейхан, 18/1а",
    whatsapp: "+77785886779",
    coordinates: {
      lat: 51.1694,
      lng: 71.4491
    }
  },
  {
    id: "north",
    label: "На правом",
    address: "Улица Каныш Сатпаев, 16/3",
    whatsapp: "+77712222267",
    coordinates: {
      lat: 51.1694,
      lng: 71.4491
    }
  }
]; 