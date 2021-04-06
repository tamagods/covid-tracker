import axios from 'axios';

const httpClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

export interface CasesResponse {
  UpdateDate: string;
  Source: string;
  DevBy: string;
  SeverBy: string;
  Data: DataCasesResponse[];
}

export interface DataCasesResponse {
  ConfirmDate: string;
  No: string;
  Age: number;
  Gender: string;
  GenderEn: string;
  Nation: string;
  NationEn: string;
  Province: string;
  ProvinceId: number;
  District: string;
  ProvinceEn: string;
  Detail?: null;
  StatQuarantine: number;
}

export interface CaseSummaryResposne {
  UpdateDate: string;
  Source: string;
  DevBy: string;
  SeverBy: string;
  Province: Province;
  Nation: Nation;
  Gender: Gender;
}

export interface Province {
  'Samut Sakhon': number;
  Bangkok: number;
  Chonburi: number;
  'Samut Prakan': number;
  Rayong: number;
  Nonthaburi: number;
  Phuket: number;
  Chanthaburi: number;
  Songkhla: number;
  Yala: number;
  'Pathum Thani': number;
  'Nakhon Pathom': number;
  Pattani: number;
  Tak: number;
  'Ang Thong': number;
  'Chiang Rai': number;
  'Chiang Mai': number;
  Narathiwat: number;
  Chachoengsao: number;
  'Phra Nakhon Si Ayutthaya': number;
  Trat: number;
  Phetchaburi: number;
  Ratchaburi: number;
  'Surat Thani': number;
  'Nakhon Ratchasima': number;
  Krabi: number;
  Lopburi: number;
  'Samut Songkhram': number;
  Chumphon: number;
  Satun: number;
  'Prachuap Khiri Khan': number;
  'Ubon Ratchathani': number;
  Prachinburi: number;
  Saraburi: number;
  'Sing Buri': number;
  Unknown: number;
  'Nakhon Si Thammarat': number;
  Buriram: number;
  Phatthalung: number;
  Kanchanaburi: number;
  'Suphan Buri': number;
  Surin: number;
  'Sa Kaeo': number;
  'Nakhon Sawan': number;
  'Khon Kaen': number;
  Loei: number;
  'Udon Thani': number;
  Chaiyaphum: number;
  Phichit: number;
  Trang: number;
  Sisaket: number;
  Chainat: number;
  Phitsanulok: number;
  Lampang: number;
  Lamphun: number;
  Uttaradit: number;
  'Nong Khai': number;
  'Mae Hong Son': number;
  'Nakhon Nayok': number;
  Phetchabun: number;
  Mukdahan: number;
  Sukhothai: number;
  'Amnat Charoen': number;
  Phayao: number;
  'Roi Et': number;
  'Nong Bua Lamphu': number;
  Kalasin: number;
  'Maha Sarakham': number;
  'Kamphaeng Phet': number;
  'Nakhon Phanom': number;
  'Phang Nga': number;
  Yasothon: number;
  Phrae: number;
  Ranong: number;
  'Uthai Thani': number;
  Nan: number;
  'Sakon Nakhon': number;
}

export interface Nation {
  Thailand: number;
  Burmese: number;
  Unknown: number;
  Cambodia: number;
  India: number;
  UnitedStatesofAmerica: number;
  UnitedKingdom: number;
  Japan: number;
  France: number;
  China: number;
  Russia: number;
  Laos: number;
  Swiss: number;
  Germany: number;
  ต่างด้าว: number;
  Pakistan: number;
  Kuwait: number;
  Italy: number;
  Canada: number;
  Sweden: number;
  Netherlands: number;
  Vietnam: number;
  Philippines: number;
  Ethiopia: number;
  Bangladesh: number;
  Belgium: number;
  Brazil: number;
  'Korea,South': number;
  Sudan: number;
  Denmark: number;
  Indonesia: number;
  Australia: number;
  Singapore: number;
  Hungary: number;
  Malaysia: number;
  Egypt: number;
  Albania: number;
  Qatar: number;
  Spain: number;
  Kazakhstani: number;
  Iran: number;
  Taiwan: number;
  Israel: number;
  Finland: number;
  Uzbekistan: number;
  American: number;
  Serbia: number;
  Ukraine: number;
  Yemen: number;
  Mexico: number;
  Portugal: number;
  NewZealand: number;
  'India-Thailand': number;
  Palestine: number;
  Liberia: number;
  British: number;
  Mali: number;
  Tunisia: number;
}

export interface Gender {
  Female: number;
  Male: number;
  Unknown: number;
}

export interface CaseTodayResponse {
  Confirmed: number;
  Recovered: number;
  Hospitalized: number;
  Deaths: number;
  NewConfirmed: number;
  NewRecovered: number;
  NewHospitalized: number;
  NewDeaths: number;
  UpdateDate: string;
  Source: string;
  DevBy: string;
  SeverBy: string;
}

export interface TimelineResponse {
  UpdateDate: string;
  Source: string;
  DevBy: string;
  SeverBy: string;
  Data: DataTimelineResponse[];
}

export interface DataTimelineResponse {
  Date: string;
  NewConfirmed: number;
  NewRecovered: number;
  NewHospitalized: number;
  NewDeaths: number;
  Confirmed: number;
  Recovered: number;
  Hospitalized: number;
  Deaths: number;
}

export const apiService = {
  getCases: (): Promise<CasesResponse> => {
    return httpClient.get('api/open/cases').then((res) => res.data);
  },
  getCaseToday: (): Promise<CaseTodayResponse> => {
    return httpClient.get('api/open/today').then((res) => res.data);
  },
  getCaseSummary: (): Promise<CaseSummaryResposne> => {
    return httpClient.get('api/open/cases/sum').then((res) => res.data);
  },
  getTimeline: (): Promise<TimelineResponse> => {
    return httpClient.get('api/open/timeline').then((res) => res.data);
  },
};

export default apiService;
