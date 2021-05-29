import { icons, images } from "../constants";

export const categoryData = [
  {
    id: 1,
    name: "Nasi",
    icon: icons.rice_bowl,
  },
  {
    id: 2,
    name: "Mie",
    icon: icons.noodle,
  },
  {
    id: 3,
    name: "Ayam",
    icon: icons.chicken,
  },
  {
    id: 4,
    name: "Sate",
    icon: icons.satay,
  },
  {
    id: 5,
    name: "Angkringan",
    icon: icons.angkringan,
  },
  {
    id: 6,
    name: "Dessert",
    icon: icons.salad,
  },

  {
    id: 7,
    name: "Drinks",
    icon: icons.drink,
  },
];

export const restaurantData = [
  {
    id: 1,
    name: "Nasi Goreng",
    rating: 4.8,
    categories: [1],
    priceRating: 10000,
    photo: images.nasi_goreng_1,
    duration: "5 menit",
    menu: [
      {
        menuId: 1,
        name: "Nasi Goreng Biasa",
        photo: images.nasi_goreng_1,
        description: "Nasi Goreng Biasa Dengan Bumbu Khas",
        price: 10000,
      },
      {
        menuId: 2,
        name: "Nasi Goreng Bakso",
        photo: images.nasi_goreng_3,
        description: "Nasi Goreng bakso dengan topping bakso",

        price: 12000,
      },
      {
        menuId: 3,
        name: "Nasi Goreng Special",
        photo: images.nasi_goreng_2,
        description: "Nasi Goreng Special dengan topping complite",
        price: 15000,
      },
    ],
  },
  {
    id: 2,
    name: "Ayam Bakar",
    rating: 4,
    categories: [3, 4],
    priceRating: 12000,
    photo: images.ayam_bakar_1,
    duration: "5 menit",

    menu: [
      {
        menuId: 4,
        name: "Ayam Bakar Paha",
        photo: images.ayam_bakar_1,
        description: "DiBakar dengan Bumbu Khas, Pesan Sekarang",
        price: 12000,
      },
      {
        menuId: 5,
        name: "Ayam Bakar Sayap",
        photo: images.ayam_bakar_2,
        description: "Dibakar dengan Bumbu Khas dan Ayam Terpilih",
        price: 14000,
      },
      {
        menuId: 6,
        name: "Ayam Bakar Komplit",
        photo: images.ayam_bakar_3,
        description: "Ayam Bakar dengan Bumbu Kompit, 1 Ayam Utuh",
        price: 50000,
      },
    ],
  },
  {
    id: 3,
    name: "Sate",
    rating: 8.8,
    categories: [3, 4],
    priceRating: 25000,
    photo: images.sate_1,
    duration: "7 menit",

    menu: [
      {
        menuId: 8,
        name: "Sate Ayam",
        photo: images.sate_1,
        description: "Dengan Bumbu Kacang Khas",
        price: 25000,
      },
      {
        menuId: 9,
        name: "Sate Kambing",
        photo: images.sate_2,
        description: "Dengan Bumbu Khas dan Daging Terpilih",
        price: 65000,
      },
    ],
  },
  {
    id: 4,
    name: "Mie",
    rating: 5.3,
    categories: [2],
    priceRating: 5000,
    photo: images.mie_goreng_1,
    duration: "4 menit",

    menu: [
      {
        menuId: 10,
        name: "Mie Goreng Biasa",
        photo: images.mie_goreng_1,
        description: "Dibuat dengan Bumbu Khas",
        price: 5000,
      },
      {
        menuId: 11,
        name: "Mie aceh",
        photo: images.mie_aceh,
        description: "Dibuat dengan Bumbu Khas Aceh",
        price: 12000,
      },
    ],
  },
  {
    id: 5,
    name: "Gorengan",
    rating: 4.8,
    categories: [5],
    priceRating: 500,
    photo: images.gorengan,
    duration: "1 menit",

    menu: [
      {
        menuId: 12,
        name: "Gorengan",
        photo: images.gorengan,
        description: "Gorengan Enak Dan Murah",
        price: 500,
      },
      {
        menuId: 13,
        name: "Sate Telur Puyuh",
        photo: images.sate_telur_puyuh,
        description: "Sate Telur Puyuh dengan Bumbu Khas",
        price: 3000,
      },
      {
        menuId: 14,
        name: "Pepes Ayam",
        photo: images.pepes_ayam,
        description: "Pepes Ayam Dengan Bumbu Tradisonal",
        price: 7000,
      },
      {
        menuId: 15,
        name: "Bakwan",
        photo: images.bakwan,
        description: "Bakwan Sayur Enak Dan Sehat",
        price: 500,
      },
    ],
  },
  {
    id: 6,
    name: "Salad Buah",
    rating: 4.9,
    categories: [6, 7],
    priceRating: 10000,
    photo: images.salad,
    duration: "5 menit",
    menu: [
      {
        menuId: 16,
        name: "Salad Buah",
        photo: images.salad,
        description: "Salad Buah Segar Enak dan Sehat",
        price: 10000,
      },
      {
        menuId: 17,
        name: "Es Campur",
        photo: images.es_campur,
        description: "Enak Dan Segar",
        price: 10000,
      },
      {
        menuId: 18,
        name: "Pudding Cake",
        photo: images.pudding,
        description: "Pudding Cake Segar",
        price: 20000,
      },
    ],
  },
];
