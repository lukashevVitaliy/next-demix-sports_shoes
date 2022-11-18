export interface IPeriodOfUse {
  id: string;
  period: string | undefined;
}
export interface IFrequencyOfUse {
  id: string;
  frequency: string | undefined;
}

export interface IModalProps {
  slug: string;
  name: string;
  active: boolean;
  onClose: () => void;
}

export interface ISubmitForm {
  aboutProduct: string | undefined;
  advantage: string | undefined;
  disadvantages: string | undefined;
  nameUser: string | undefined;
  userCity: string | undefined;
}
