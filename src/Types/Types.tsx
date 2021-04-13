export type FormValuesType = {
  username: string;
  password: string;
};

type PhonesType = {
  createdAt: string;
  id: number;
  phone: string;
  type: string;
  updatedAt: string;
  user: number;
};

type UserType = {
  account: number;
  apiActivated: boolean;
  apiKey: string;
  apiUrl: null;
  avatar: string;
  bitrixId: string;
  calculatorVipEndDate: null;
  debtorVipEndDate: null;
  email: string;
  firstName: string;
  groups: Array<any>;
  housesCount: null;
  id: number;
  isActive: boolean;
  isNotify: boolean;
  isStaff: boolean;
  isSuperuser: boolean;
  isVerified: boolean;
  lastName: string;
  manager: null;
  parentId: null;
  patronymic: string;
  phones: Array<PhonesType>;
  settlementCenterVipEndDate: null;
  status: string;
  timezone: number;
  userManager: number;
  userPermissions: Array<any>;
  userToken: null;
  username: string;
};

type TokenType = {
  access: string;
  refresh: string;
};

type DataType = {
  expiresIn: string;
  token: TokenType;
  user: UserType;
};

export type ResponseDataType = {
  data: DataType;
  success: boolean;
};

type WorkersType = {
  avatar: string;
  companies: Array<number>;
  createdAt: string;
  email: string;
  firstName: string;
  id: number;
  inviteCode: null;
  lastName: string;
  patronymic: string;
  positions: Array<string>;
  roles: Array<string>;
  updatedAt: string;
  user: number;
};

export type CompaniesType = {
  bank: null;
  bankName: null;
  bik: null;
  bitrixId: string;
  checkingAccount: null;
  clarificationHouses: number;
  correspondenceAccount: null;
  createdAt: string;
  creator: number;
  director: string;
  email: string;
  housesCount: number;
  housesLoadStatus: string;
  housesWithManagementContract: null;
  id: number;
  inn: string;
  innScan: null;
  isDeletable: true;
  kpp: string;
  legalAddress: string;
  name: string;
  ogrn: string;
  ogrnScan: null;
  parent: number;
  phone: string;
  regulations: string;
  shortName: string;
  timezone: number;
  updatedAt: string;
  workers: WorkersType;
};

type CourtSiteType = {
  address: null;
  id: number;
  name: string;
};

export type HouseDataType = {
  address: string;
  buildYear: null;
  cadNum: null;
  city: string;
  commissioningYear: null;
  company: number;
  companyData: CompaniesType;
  courtSite: CourtSiteType;
  courtWorksCount: number;
  createdAt: string;
  creator: number;
  egrnSquare: number;
  fiasCode: string;
  floors: number;
  houseNum: string;
  id: number;
  inClarificationFrom: null;
  lastExtract: {};
  managementContract: null;
  managementContractFilesize: number;
  meta: null;
  parent: number;
  reestrFlatCount: number;
  square: number;
  status: null;
  street: string;
};

type LinksType = {
  currentPage: number;
  lastPage: number;
  nextPage: number;
  objectsCount: number;
  prevPage: number;
};

export type Housetype = {
  data: Array<HouseDataType>;
  links: LinksType;
};
