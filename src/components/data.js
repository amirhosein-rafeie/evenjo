import adele from "../assets/img/concert img/adele.png";
import arianagrande from "../assets/img/concert img/ariana grande.png";
import beyonce from "../assets/img/concert img/beyonce.png";
import bili from "../assets/img/concert img/bili.png";
import edsheeran from "../assets/img/concert img/edsheeran.png";
import elton from "../assets/img/concert img/elton.png";
import florence from "../assets/img/concert img/florence.png";
import halsey from "../assets/img/concert img/halsey.png";
import harrystyles from "../assets/img/concert img/harrystyles.png";
import jenniferlopez from "../assets/img/concert img/jenniferlopez.png";
import justinbieber from "../assets/img/concert img/justinbieber.png";
import lana from "../assets/img/concert img/lana.png";
import norah from "../assets/img/concert img/norah.png";
import olivia from "../assets/img/concert img/olivia.png";
import post from "../assets/img/concert img/post.png";
import shakira from "../assets/img/concert img/shakira.png";
import shakira2 from "../assets/img/concert img/shakira2.png";
import shawnmendes from "../assets/img/concert img/shawnmendes.png";
import taylorswift from "../assets/img/concert img/taylor swift.png";
import theweeknd from "../assets/img/concert img/theweeknd.png";

import ArcheryArnis from "../assets/img/sport img/ArcheryArnis.png";
import Baseball from "../assets/img/sport img/Baseball.png";
import Basketball from "../assets/img/sport img/Basketball.png";
import Boxing from "../assets/img/sport img/Boxing.png";
import ChelseaVsLiverpool from "../assets/img/sport img/Chelsea vs Liverpool .png";
import FigureSkating from "../assets/img/sport img/Figure skating.png";
import Floorball from "../assets/img/sport img/Floorball.png";
import Football from "../assets/img/sport img/Football.png";
import Kickboxing from "../assets/img/sport img/Kickboxing.png";
import MartialArts from "../assets/img/sport img/Martial arts.png";
import PowerliftingTotal from "../assets/img/sport img/Powerlifting Total.png";
import Racing from "../assets/img/sport img/Racing.png";
import SinclairCoefficient from "../assets/img/sport img/Sinclair Coefficient.png";
import Squatch from "../assets/img/sport img/Squatch.png";
import Surfing from "../assets/img/sport img/Surfing.png";
import TableTennis from "../assets/img/sport img/Table tennis.png";
import Taekwondo from "../assets/img/sport img/Taekwondo.png";
import Weightlifting from "../assets/img/sport img/Weightlifting.png";
import WrestlingSports from "../assets/img/sport img/Wrestling sports.png";
import Wrestling from "../assets/img/sport img/Wrestling.png";

const concerts = [
  {
    id: 1,
    artistName: "Adele",
    img: adele,
    date: "Apr 28, 2016",
    location: "Omsk",
    genre: "Pop",
    price: 778.35,
    timeToEnd: null,
  },
  {
    id: 2,
    artistName: "Ariana Grande",
    img: arianagrande,
    date: "Feb 29, 2012",
    location: "Mannheim",
    genre: "Pop",
    price: 782.01,
    timeToEnd: null,
  },
  {
    id: 3,
    artistName: "Ed Sheeran",
    img: edsheeran,
    date: "Mar 06, 2025",
    location: "Las Vegas",
    genre: "Pop",
    price: 450.51,
    timeToEnd: null,
  },
  {
    id: 4,
    artistName: "Taylor Swift",
    img: taylorswift,
    date: "Mar 08, 2025",
    location: "Volzhsky",
    genre: "Pop",
    price: 473.85,
    timeToEnd: "06:34:15",
  },
  {
    id: 5,
    artistName: "Shakira",
    img: shakira,
    date: "Aug 07, 2017",
    location: "Sterlitamak",
    genre: "Pop",
    price: 293.01,
    timeToEnd: "06:34:15",
  },
  {
    id: 6,
    artistName: "Jennifer Lopez",
    img: jenniferlopez,
    date: "Aug 24, 2013",
    location: "Naltchik",
    genre: "Pop",
    price: 739.65,
    timeToEnd: null,
  },
  {
    id: 7,
    artistName: "Shawn Mendes",
    img: shawnmendes,
    date: "Dec 02, 2025",
    location: "Morón",
    genre: "Pop",
    price: 475.22,
    timeToEnd: null,
  },
  {
    id: 8,
    artistName: "Justin Bieber",
    img: justinbieber,
    date: "Feb 11, 2014",
    location: "Ryazan",
    genre: "Pop",
    price: 601.13,
    timeToEnd: null,
  },
  {
    id: 9,
    artistName: "Beyoncé",
    img: beyonce,
    date: "Jun 15, 2024",
    location: "New York",
    genre: "R&B",
    price: 650.0,
    timeToEnd: null,
  },
  {
    id: 10,
    artistName: "Harry Styles",
    img: harrystyles,
    date: "Jul 20, 2024",
    location: "London",
    genre: "Pop",
    price: 520.0,
    timeToEnd: null,
  },
  {
    id: 11,
    artistName: "The Weeknd",
    img: theweeknd,
    date: "Sep 10, 2024",
    location: "Los Angeles",
    genre: "R&B",
    price: 580.0,
    timeToEnd: null,
  },
  {
    id: 12,
    artistName: "Olivia Rodrigo",
    img: olivia,
    date: "Oct 05, 2024",
    location: "Chicago",
    genre: "Pop",
    price: 450.0,
    timeToEnd: null,
  },
  {
    id: 13,
    artistName: "Billie Eilish",
    img: bili,
    date: "Nov 22, 2024",
    location: "Toronto",
    genre: "Alternative",
    price: 390.0,
    timeToEnd: null,
  },
  {
    id: 14,
    artistName: "Elton John",
    img: elton,
    date: "Jan 15, 2025",
    location: "Paris",
    genre: "Pop",
    price: 700.0,
    timeToEnd: null,
  },
  {
    id: 15,
    artistName: "Florence + The Machine",
    img: florence,
    date: "Feb 18, 2025",
    location: "Rome",
    genre: "Alternative",
    price: 420.0,
    timeToEnd: null,
  },
  {
    id: 16,
    artistName: "Halsey",
    img: halsey,
    date: "Mar 22, 2025",
    location: "Berlin",
    genre: "Alternative",
    price: 350.0,
    timeToEnd: null,
  },
  {
    id: 17,
    artistName: "Lana Del Rey",
    img: lana,
    date: "May 10, 2025",
    location: "Barcelona",
    genre: "Alternative",
    price: 460.0,
    timeToEnd: null,
  },
  {
    id: 18,
    artistName: "Norah Jones",
    img: norah,
    date: "Jun 03, 2025",
    location: "Vienna",
    genre: "R&B",
    price: 320.0,
    timeToEnd: null,
  },
  {
    id: 19,
    artistName: "Post Malone",
    img: post,
    date: "Jul 11, 2025",
    location: "Miami",
    genre: "Pop",
    price: 510.0,
    timeToEnd: null,
  },
  {
    id: 20,
    artistName: "Shakira (Special)",
    img: shakira2,
    date: "Aug 25, 2025",
    location: "Madrid",
    genre: "Pop",
    price: 490.0,
    timeToEnd: "03:12:45",
  },
];

const sports = [
  {
    id: 1,
    sportName: "Archery Arnis",
    img: ArcheryArnis,
    date: "10 May",
    location: "Manila",
    price: "$40",
    timeToEnd: "6 days left",
  },
  {
    id: 2,
    sportName: "Baseball",
    img: Baseball,
    date: "12 June",
    location: "Tokyo",
    price: "$50",
    timeToEnd: "4 days left",
  },
  {
    id: 3,
    sportName: "Basketball",
    img: Basketball,
    date: "15 June",
    location: "Los Angeles",
    price: "$70",
    timeToEnd: "3 days left",
  },
  {
    id: 4,
    sportName: "Boxing",
    img: Boxing,
    date: "20 June",
    location: "Las Vegas",
    price: "$120",
    timeToEnd: "5 days left",
  },
  {
    id: 5,
    sportName: "Chelsea vs Liverpool",
    img: ChelseaVsLiverpool,
    date: "25 June",
    location: "London",
    price: "$90",
    timeToEnd: "2 days left",
  },
  {
    id: 6,
    sportName: "Figure Skating",
    img: FigureSkating,
    date: "30 June",
    location: "Moscow",
    price: "$60",
    timeToEnd: "10 days left",
  },
  {
    id: 7,
    sportName: "Floorball",
    img: Floorball,
    date: "5 July",
    location: "Stockholm",
    price: "$40",
    timeToEnd: "1 week left",
  },
  {
    id: 8,
    sportName: "Football",
    img: Football,
    date: "10 July",
    location: "Madrid",
    price: "$80",
    timeToEnd: "8 days left",
  },
  {
    id: 9,
    sportName: "Kickboxing",
    img: Kickboxing,
    date: "12 July",
    location: "Bangkok",
    price: "$100",
    timeToEnd: "6 days left",
  },
  {
    id: 10,
    sportName: "Martial Arts",
    img: MartialArts,
    date: "15 July",
    location: "Seoul",
    price: "$90",
    timeToEnd: "7 days left",
  },
  {
    id: 11,
    sportName: "Powerlifting Total",
    img: PowerliftingTotal,
    date: "18 July",
    location: "Berlin",
    price: "$80",
    timeToEnd: "9 days left",
  },
  {
    id: 12,
    sportName: "Racing",
    img: Racing,
    date: "20 July",
    location: "Monaco",
    price: "$150",
    timeToEnd: "3 days left",
  },
  {
    id: 13,
    sportName: "Sinclair Coefficient",
    img: SinclairCoefficient,
    date: "25 July",
    location: "Toronto",
    price: "$70",
    timeToEnd: "12 days left",
  },
  {
    id: 14,
    sportName: "Squatch",
    img: Squatch,
    date: "28 July",
    location: "New York",
    price: "$60",
    timeToEnd: "11 days left",
  },
  {
    id: 15,
    sportName: "Surfing",
    img: Surfing,
    date: "1 August",
    location: "Sydney",
    price: "$100",
    timeToEnd: "2 weeks left",
  },
  {
    id: 16,
    sportName: "Table Tennis",
    img: TableTennis,
    date: "3 August",
    location: "Beijing",
    price: "$50",
    timeToEnd: "5 days left",
  },
  {
    id: 17,
    sportName: "Taekwondo",
    img: Taekwondo,
    date: "7 August",
    location: "Seoul",
    price: "$70",
    timeToEnd: "6 days left",
  },
  {
    id: 18,
    sportName: "Weightlifting",
    img: Weightlifting,
    date: "10 August",
    location: "Cairo",
    price: "$85",
    timeToEnd: "4 days left",
  },
  {
    id: 19,
    sportName: "Wrestling Sports",
    img: WrestlingSports,
    date: "12 August",
    location: "Istanbul",
    price: "$95",
    timeToEnd: "3 days left",
  },
  {
    id: 20,
    sportName: "Wrestling",
    img: Wrestling,
    date: "15 August",
    location: "Tehran",
    price: "$80",
    timeToEnd: "10 days left",
  },
];

export { concerts, sports };
export default concerts;
