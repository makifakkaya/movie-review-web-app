export interface Country {
  id: string;
  title: { [key: string]: string };
  isActive: boolean;
  createdDate: Date;
  updatedDate?: Date;
}

export interface CountrySaveModel {
  title: { [key: string]: string };
  isActive: boolean;
}

export interface CountryUpdateModel extends CountrySaveModel{
  id: string;
}
