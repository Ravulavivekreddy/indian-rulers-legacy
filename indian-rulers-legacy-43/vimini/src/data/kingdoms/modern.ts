import { Kingdom } from '../types';

import tipuSultanImg from '../../assets/Tipu Sultan.jpg';
import hyderAliImg from '../../assets/Hyder Ali.jpg';
import sikhEmpireImg from '../../assets/Sikh Empire.jpg';
import maharajaRanjitSinghImg from '../../assets/Maharaja Ranjit Singh.jpg';
import kharakSinghImg from '../../assets/Kharak Singh.jpg';
import nauNihalSinghImg from '../../assets/Nau Nihal Singh.jpg';
import sherSinghImg from '../../assets/Sher Singh.jpg';
import duleepSinghImg from '../../assets/Duleep Singh.jpg';

export const modernKingdoms: Kingdom[] = [
  {
    id: "mysore",
    name: "Kingdom of Mysore",
    dynasty: "Hyder Ali",
    startYear: 1761,
    endYear: 1799,
    period: "Modern",
    capital: "Mysore",
    rulers: [
      { name: "Hyder Ali", reignStart: 1761, reignEnd: 1782, notable: "Military innovator, rocket warfare", image: hyderAliImg },
      { name: "Tipu Sultan", reignStart: 1782, reignEnd: 1799, notable: "Tiger of Mysore, fought British", image: tipuSultanImg }
    ],
    territory: { lat: 12.3, lng: 76.6, x: 270, y: 660 },
    color: "heritage-bronze",
    importance: "medium",
    stateColor: "#8B4513",
    architecturalMarvels: [
      {
        name: "Mysore Palace",
        image: "",
        description: "A historical palace and royal residence in Mysore, Karnataka."
      },
      {
        name: "Chamundi Hill Temple",
        image: "",
        description: "A famous Hindu temple located on Chamundi Hill in Mysore."
      }
    ]
  },
  {
    id: "sikh",
    name: "Sikh Empire",
    dynasty: "Sikh",
    startYear: 1799,
    endYear: 1849,
    period: "Modern",
    capital: "Lahore",
    image: sikhEmpireImg,
    rulers: [
      { name: "Maharaja Ranjit Singh", reignStart: 1799, reignEnd: 1839, notable: "Lion of Punjab, unified Sikh territories", image: maharajaRanjitSinghImg },
      { name: "Kharak Singh", reignStart: 1839, reignEnd: 1840, notable: "Eldest son of Ranjit Singh", image: kharakSinghImg },
      { name: "Nau Nihal Singh", reignStart: 1840, reignEnd: 1840, notable: "Died in accident", image: nauNihalSinghImg },
      { name: "Sher Singh", reignStart: 1841, reignEnd: 1843, notable: "Second son of Ranjit Singh", image: sherSinghImg },
      { name: "Duleep Singh", reignStart: 1843, reignEnd: 1849, notable: "Last Sikh emperor, child ruler", image: duleepSinghImg }
     ],
    territory: { lat: 31.6, lng: 74.9, x: 240, y: 280 },
    color: "heritage-bronze",
    importance: "major",
    stateColor: "#4169E1",
    architecturalMarvels: [
      {
        name: "Golden Temple",
        image: "",
        description: "The holiest Gurdwara of Sikhism located in Amritsar, Punjab."
      },
      {
        name: "Anandpur Sahib",
        image: "",
        description: "A historic city and important Sikh pilgrimage site in Punjab."
      }
    ]
  }
];
