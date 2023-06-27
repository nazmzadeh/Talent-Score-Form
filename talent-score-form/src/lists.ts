import { ISelectItem } from "./interfaces/MainInterfaces";

export const optionsYes: ISelectItem[] = [
    { value: 'Təhsil alıram', label: 'Təhsil alıram' },
    { value: 'Çalışıram', label: 'Çalışıram' },
    { value: 'İşsiz', label: 'İşsiz' },
    { value: 'Təhsil alıram və çalışıram', label: 'Təhsil alıram və çalışıram' },
  ];
  
export const optionsNo: ISelectItem[] = [
    { value: 'Təhsil alıram', label: 'Təhsil alıram' },
    { value: 'Təhsil almıram', label: 'Təhsil almıram' },
  ];
  export const education: ISelectItem[] = [
    { value: 'Orta təhsil', label: 'Orta təhsil' },
    { value: 'Peşə təhsili', label: 'Peşə təhsili' },
    { value: 'Bakalavr', label: 'Bakalavr' },
    { value: 'Magistratura', label: 'Magistratura' },
    { value: 'PhD', label: 'PhD' },
  ];
  export const level = [
    { value: 'Əlaçı', label: 'Əlaçı' },
    { value: 'Zərbəçi', label: 'Zərbəçi' },
    { value: 'Heç biri', label: 'Heç biri' },
  ];
  export const subject = [
    { value: 'Riyaziyyat', label: 'Riyaziyyat' },
    { value: 'Fizika', label: 'Fizika' },
    { value: 'Kimya', label: 'Kimya' },
    { value: 'Informatika', label: 'Informatika' },
    { value: 'Biologiya', label: 'Biologiya' },
    { value: 'Coğrafiya', label: 'Coğrafiya' },
    { value: 'Tarix', label: 'Tarix' },
    { value: 'Azərbaycan dili və ədəbiyyat', label: 'Azərbaycan dili və ədəbiyyat' },
  ]
  export const levelofWinner = [
    { value: 'Rayon', label: 'Rayon' },
    { value: 'Region', label: 'Region' },
    { value: 'Respublika', label: 'Respublika' },
    { value: 'Dünya', label: 'Dünya' },
  ]
  export const place = [
    { value: '1-ci yer (Qızıl medal)', label: '1-ci yer (Qızıl medal)' },
    { value: '2-ci yer (Gümüş medal)', label: '2-ci yer (Gümüş medal)' },
    { value: '3-cü yer (Bürünc medal)', label: '3-cü yer (Bürünc medal)' },
    { value: '4-cü yer', label: '4-cü yer' },
  ]
  