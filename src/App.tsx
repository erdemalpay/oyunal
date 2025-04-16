import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Product {
  _id: number;
  name: string;
  price: number;
  category: number;
  imageUrl: string;
  description: string;
}

// Static data
const productsData = [
  {
    _id: 270,
    priceHistory: [
      {
        price: '1950',
        date: '2024-10-28T12:30:23.104Z',
      },
      {
        price: '1950',
        date: '2024-11-01T08:10:44.752Z',
      },
      {
        price: '1950',
        date: '2024-11-01T08:39:29.442Z',
      },
      {
        price: '1950',
        date: '2024-11-11T08:03:25.304Z',
      },
      {
        price: '1950',
        date: '2024-12-19T09:01:56.943Z',
      },
      {
        price: '1950',
        date: '2024-12-23T06:46:00.502Z',
      },
      {
        price: '1950',
        date: '2025-02-03T12:24:14.902Z',
      },
      {
        price: '1950',
        date: '2025-03-21T09:34:36.322Z',
      },
      {
        price: '1950',
        date: '2025-04-03T14:01:53.029Z',
      },
    ],
    itemProduction: [
      {
        product: 'arnak',
        quantity: '1',
        isDecrementStock: true,
      },
    ],
    locations: [2, 1],
    price: 1950,
    category: 25,
    order: 277,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729233924/forgotton/arnak1.jpg.jpg',
    description: '',
    name: 'Arnak Harabeleri',
    onlinePrice: 2250,
    matchedProduct: 'arnak',
    productCategories: ['strateji_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    ikasId: '87874b8b-38cf-4db1-9fb5-61847c3d2ba6',
    shownInMenu: true,
  },
  {
    _id: 271,
    priceHistory: [
      {
        price: '1300',
        date: '2024-10-28T12:30:23.107Z',
      },
      {
        price: '1300',
        date: '2024-11-01T08:10:44.755Z',
      },
      {
        price: '1300',
        date: '2024-11-01T08:39:29.444Z',
      },
      {
        price: '1300',
        date: '2024-12-19T09:01:56.997Z',
      },
      {
        price: '1300',
        date: '2024-12-23T06:46:00.505Z',
      },
      {
        price: '1300',
        date: '2025-02-03T12:24:14.905Z',
      },
      {
        price: '1300',
        date: '2025-03-21T09:34:36.323Z',
      },
      {
        price: 1800,
        date: '2025-04-03T14:01:53.031Z',
      },
    ],
    itemProduction: [
      {
        product: 'carcassonneadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 1800,
    category: 25,
    order: 278,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729245738/forgotton/carcassone.png.webp',
    description: '',
    name: 'Carcassonne',
    onlinePrice: 0,
    matchedProduct: 'carcassonneadet',
    ikasId: 'e6f4a834-6051-44c5-abcc-014a4603581a',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 272,
    priceHistory: [
      {
        price: '2260',
        date: '2024-10-28T12:30:23.110Z',
      },
      {
        price: '2260',
        date: '2024-11-01T08:10:44.758Z',
      },
      {
        price: '2260',
        date: '2024-11-01T08:39:29.449Z',
      },
      {
        price: 2400,
        date: '2024-11-11T08:03:25.309Z',
      },
      {
        price: '2400',
        date: '2024-12-19T09:01:57.014Z',
      },
      {
        price: '2400',
        date: '2024-12-23T06:46:00.507Z',
      },
      {
        price: '2400',
        date: '2025-02-03T12:24:14.908Z',
      },
      {
        price: '2400',
        date: '2025-03-21T09:34:36.326Z',
      },
      {
        price: 3000,
        date: '2025-04-03T14:01:53.032Z',
      },
    ],
    itemProduction: [
      {
        product: 'catanadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 3000,
    category: 25,
    order: 279,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729245756/forgotton/catan.png.webp',
    description: '',
    name: 'Catan',
    onlinePrice: 0,
    matchedProduct: 'catanadet',
    ikasId: 'c379b18d-84ee-4b16-8340-112edf4f77ba',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 625,
    name: 'Hasarlı Catan',
    description: 'Ürün jelatinsizdir ve 2 köşesinde hasarı vardır.',
    order: 280,
    category: 25,
    price: 2400,
    onlinePrice: 0,
    ikasDiscountedPrice: 2040,
    shownInMenu: true,
    locations: [1, 2],
    productCategories: ['hasarli_oyunlar'],
    productImages: [
      'https://res.cloudinary.com/dvbg/image/upload/v1737528699/hasarlicatan2.jpg.jpg',
      'https://res.cloudinary.com/dvbg/image/upload/v1737528699/hasarlicatan3.jpg.jpg',
      'https://res.cloudinary.com/dvbg/image/upload/v1737528699/hasarlicatan4.jpg.jpg',
    ],
    matchedProduct: null,
    itemProduction: [],
    priceHistory: [
      {
        price: 2400,
        date: '2025-01-22T06:38:38.471Z',
      },
      {
        price: '2400',
        date: '2025-02-03T12:24:14.912Z',
      },
      {
        price: '2400',
        date: '2025-03-21T09:34:36.328Z',
      },
      {
        price: '2400',
        date: '2025-04-03T14:01:53.033Z',
      },
    ],
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1737528043/forgotton/hasarlicatan1.jpg.jpg',
    ikasId: '543e5d8c-415b-4e8d-add3-e1784cba9291',
  },
  {
    _id: 273,
    priceHistory: [
      {
        price: '750',
        date: '2024-08-20T06:48:19.051Z',
      },
      {
        price: '750',
        date: '2024-10-28T12:30:23.113Z',
      },
      {
        price: '750',
        date: '2024-11-01T08:10:44.761Z',
      },
      {
        price: '750',
        date: '2024-11-01T08:39:29.451Z',
      },
      {
        price: '750',
        date: '2024-11-11T08:03:25.310Z',
      },
      {
        price: '750',
        date: '2024-12-19T09:01:57.075Z',
      },
      {
        price: '750',
        date: '2024-12-23T06:46:00.509Z',
      },
      {
        price: '890',
        date: '2025-01-12T21:51:28.310Z',
      },
      {
        price: '890',
        date: '2025-02-03T12:24:14.915Z',
      },
      {
        price: '890',
        date: '2025-03-21T09:34:36.329Z',
      },
      {
        price: '890',
        date: '2025-04-03T14:01:53.035Z',
      },
    ],
    itemProduction: [],
    locations: [1, 2],
    price: 890,
    category: 25,
    order: 283,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729239988/forgotton/codenames1.jpg.jpg',
    description: '',
    name: 'Codenames',
    onlinePrice: 1100,
    matchedProduct: null,
    ikasId: 'c5f04107-8ed1-44f7-9f83-68ef2535fc52',
    productCategories: ['parti_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 274,
    priceHistory: [
      {
        price: '1250',
        date: '2024-10-28T12:30:23.116Z',
      },
      {
        price: '1250',
        date: '2024-11-01T08:10:44.765Z',
      },
      {
        price: '1250',
        date: '2024-11-01T08:39:29.453Z',
      },
      {
        price: '1250',
        date: '2024-11-11T08:03:25.312Z',
      },
      {
        price: '1250',
        date: '2024-12-19T09:01:57.096Z',
      },
      {
        price: '1250',
        date: '2024-12-23T06:46:00.512Z',
      },
      {
        price: '1250',
        date: '2025-02-03T12:24:14.919Z',
      },
      {
        price: '1250',
        date: '2025-03-21T09:34:36.331Z',
      },
      {
        price: '1250',
        date: '2025-04-03T14:01:53.036Z',
      },
    ],
    itemProduction: [
      {
        product: 'crewadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 1250,
    category: 25,
    order: 284,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729245781/forgotton/crew.png.webp',
    description: '',
    name: 'Crew',
    onlinePrice: 0,
    matchedProduct: 'crewadet',
    ikasId: 'efa545a9-a034-45c7-8e5e-9deabed51efe',
    productCategories: ['turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 275,
    priceHistory: [
      {
        price: '680',
        date: '2024-10-28T12:30:23.119Z',
      },
      {
        price: '680',
        date: '2024-11-01T08:10:44.767Z',
      },
      {
        price: '680',
        date: '2024-11-01T08:39:29.455Z',
      },
      {
        price: '680',
        date: '2024-11-11T08:03:25.315Z',
      },
      {
        price: '680',
        date: '2024-12-19T09:01:57.109Z',
      },
      {
        price: '680',
        date: '2024-12-23T06:46:00.514Z',
      },
      {
        price: '680',
        date: '2025-02-03T12:24:14.923Z',
      },
      {
        price: '680',
        date: '2025-03-21T09:34:36.342Z',
      },
      {
        price: 860,
        date: '2025-04-03T14:01:53.039Z',
      },
    ],
    itemProduction: [
      {
        product: 'ciziveradet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 860,
    category: 25,
    order: 285,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240000/forgotton/%C3%A7iziver1.jpg.jpg',
    description: '',
    name: 'Çiziver',
    onlinePrice: 0,
    matchedProduct: 'ciziveradet',
    ikasId: 'db3150bf-eddd-4d6d-a2c0-3e658aef3995',
    productCategories: ['parti_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 276,
    priceHistory: [
      {
        price: '1000',
        date: '2024-10-28T12:30:23.121Z',
      },
      {
        price: '1000',
        date: '2024-11-01T08:10:44.782Z',
      },
      {
        price: '1000',
        date: '2024-11-01T08:39:29.457Z',
      },
      {
        price: 1100,
        date: '2024-11-11T08:03:25.317Z',
      },
      {
        price: '1100',
        date: '2024-12-19T09:01:57.406Z',
      },
      {
        price: '1100',
        date: '2024-12-23T06:46:00.525Z',
      },
      {
        price: '1100',
        date: '2025-02-03T12:24:14.925Z',
      },
      {
        price: '1100',
        date: '2025-03-21T09:34:36.345Z',
      },
      {
        price: 1300,
        date: '2025-04-03T14:01:53.042Z',
      },
    ],
    itemProduction: [
      {
        product: 'harekatadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 1300,
    category: 25,
    order: 286,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240018/forgotton/harekat1.jpg.jpg',
    description: '',
    name: 'Harekat',
    onlinePrice: 0,
    matchedProduct: 'harekatadet',
    ikasId: '480f99ff-b42e-4b22-ae04-3553c07b3125',
    productCategories: [
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
      'iki_kisilik_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 277,
    priceHistory: [
      {
        price: '1750',
        date: '2024-10-28T12:30:23.124Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:10:44.784Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:39:29.459Z',
      },
      {
        price: '1750',
        date: '2024-11-11T08:03:25.319Z',
      },
      {
        price: '1750',
        date: '2024-12-19T09:01:57.491Z',
      },
      {
        price: '1750',
        date: '2024-12-23T06:46:00.527Z',
      },
      {
        price: '1750',
        date: '2025-02-03T12:24:14.929Z',
      },
      {
        price: '1750',
        date: '2025-03-21T09:34:36.347Z',
      },
      {
        price: '1750',
        date: '2025-04-03T14:01:53.048Z',
      },
      {
        price: '2000',
        date: '2025-04-14T06:04:39.463Z',
      },
    ],
    itemProduction: [
      {
        product: 'inkilapadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 2000,
    category: 25,
    order: 287,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729245806/forgotton/ink%C4%B1lap.png.webp',
    description: '',
    name: 'İnkilap',
    onlinePrice: 2200,
    matchedProduct: 'inkilapadet',
    ikasId: 'bd7dbdc1-02df-45f8-93a8-dcb63cca75f6',
    productCategories: ['strateji_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 612,
    name: 'Hasarlı İnkilap',
    description:
      'Ürünün hasarı, güneşten dolayı renginin solmuş olmasından kaynaklıdır.',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1737013941/forgotton/hasarl%C4%B1ink%C4%B1lap2.jpg.jpg',
    order: 287,
    category: 25,
    price: 1750,
    onlinePrice: 1950,
    shownInMenu: true,
    locations: [1, 2],
    productCategories: ['hasarli_oyunlar'],
    productImages: [
      'https://res.cloudinary.com/dvbg/image/upload/v1737013951/hasarl%C3%84%C2%B1ink%C3%84%C2%B1lap2.jpg.jpg',
    ],
    matchedProduct: 'hasarli_inkilap',
    itemProduction: [
      {
        product: 'hasarli_inkilap',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '1750',
        date: '2024-10-28T12:30:23.124Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:10:44.784Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:39:29.459Z',
      },
      {
        price: '1750',
        date: '2024-11-11T08:03:25.319Z',
      },
      {
        price: '1750',
        date: '2024-12-19T09:01:57.491Z',
      },
      {
        price: '1750',
        date: '2024-12-23T06:46:00.527Z',
      },
      {
        price: '1750',
        date: '2025-02-03T12:24:14.932Z',
      },
      {
        price: '1750',
        date: '2025-03-21T09:34:36.349Z',
      },
      {
        price: '1750',
        date: '2025-04-03T14:01:53.050Z',
      },
    ],
    ikasId: '16d2d103-27c7-4a46-8c11-8e2dca61d4a5',
    ikasDiscountedPrice: 1487.5,
  },
  {
    _id: 278,
    priceHistory: [
      {
        price: '220',
        date: '2024-10-28T12:30:23.127Z',
      },
      {
        price: '220',
        date: '2024-11-01T08:10:44.787Z',
      },
      {
        price: '220',
        date: '2024-11-01T08:39:29.460Z',
      },
      {
        price: '220',
        date: '2024-11-11T08:03:25.321Z',
      },
      {
        price: '220',
        date: '2024-12-19T09:01:57.479Z',
      },
      {
        price: '220',
        date: '2024-12-23T06:46:00.530Z',
      },
      {
        price: '220',
        date: '2025-02-03T12:24:14.947Z',
      },
      {
        price: '220',
        date: '2025-03-21T09:34:36.351Z',
      },
      {
        price: 360,
        date: '2025-04-03T14:01:53.051Z',
      },
    ],
    itemProduction: [
      {
        product: 'iotaadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 360,
    category: 25,
    order: 288,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240044/forgotton/iota1.jpg.jpg',
    description: '',
    name: 'IOTA',
    onlinePrice: 0,
    matchedProduct: 'iotaadet',
    ikasId: 'b014a568-9965-4874-9fa0-c556510fd74c',
    productCategories: ['kart_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 279,
    priceHistory: [
      {
        price: '240',
        date: '2024-10-28T12:30:23.128Z',
      },
      {
        price: '240',
        date: '2024-11-01T08:10:44.790Z',
      },
      {
        price: '240',
        date: '2024-11-01T08:39:29.462Z',
      },
      {
        price: 270,
        date: '2024-11-11T08:03:25.323Z',
      },
      {
        price: '270',
        date: '2024-12-19T09:01:57.492Z',
      },
      {
        price: '270',
        date: '2024-12-23T06:46:00.533Z',
      },
      {
        price: '270',
        date: '2025-02-03T12:24:14.952Z',
      },
      {
        price: '270',
        date: '2025-03-21T09:34:36.353Z',
      },
      {
        price: 350,
        date: '2025-04-03T14:01:53.057Z',
      },
    ],
    itemProduction: [
      {
        product: 'iz_pesinde_1adet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 350,
    category: 25,
    order: 289,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240069/forgotton/iz%20pe%C5%9Finde%201.jpg.jpg',
    description: '',
    name: 'İz Peşinde-1',
    onlinePrice: 0,
    matchedProduct: 'iz_pesinde_1adet',
    ikasId: '7e7b4987-bd22-439b-87b0-ee90dd1bc39a',
    productCategories: [
      'kart_oyunlari',
      'kooperatif_oyunlar',
      'senaryolu_legacy_oyunlar',
      'turkce_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 280,
    priceHistory: [
      {
        price: '240',
        date: '2024-10-28T12:30:23.131Z',
      },
      {
        price: '240',
        date: '2024-11-01T08:10:44.793Z',
      },
      {
        price: '240',
        date: '2024-11-01T08:39:29.464Z',
      },
      {
        price: 270,
        date: '2024-11-11T08:03:25.325Z',
      },
      {
        price: '270',
        date: '2024-12-19T09:01:57.494Z',
      },
      {
        price: '270',
        date: '2024-12-23T06:46:00.539Z',
      },
      {
        price: '270',
        date: '2025-02-03T12:24:15.282Z',
      },
      {
        price: '270',
        date: '2025-03-21T09:34:36.354Z',
      },
      {
        price: 350,
        date: '2025-04-03T14:01:53.064Z',
      },
    ],
    itemProduction: [
      {
        product: 'iz_pesinde_2adet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 350,
    category: 25,
    order: 290,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240079/forgotton/iz%20pe%C5%9Finde%202.jpg.jpg',
    description: '',
    name: 'İz Peşinde-2',
    onlinePrice: 0,
    matchedProduct: 'iz_pesinde_2adet',
    ikasId: '3428a478-8eaf-4f05-8bc1-1af371cfb25e',
    productCategories: [
      'kart_oyunlari',
      'kooperatif_oyunlar',
      'senaryolu_legacy_oyunlar',
      'turkce_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 281,
    priceHistory: [
      {
        price: '260',
        date: '2024-10-28T12:30:23.134Z',
      },
      {
        price: '260',
        date: '2024-11-01T08:10:44.796Z',
      },
      {
        price: '260',
        date: '2024-11-01T08:39:29.466Z',
      },
      {
        price: 290,
        date: '2024-11-11T08:03:25.328Z',
      },
      {
        price: '290',
        date: '2024-12-19T09:01:57.496Z',
      },
      {
        price: '290',
        date: '2024-12-23T06:46:00.545Z',
      },
      {
        price: '290',
        date: '2025-02-03T12:24:14.966Z',
      },
      {
        price: '290',
        date: '2025-03-21T09:34:36.356Z',
      },
      {
        price: 380,
        date: '2025-04-03T14:01:53.066Z',
      },
    ],
    itemProduction: [
      {
        product: 'iz_pesinde_3adet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 380,
    category: 25,
    order: 291,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240090/forgotton/iz%20pe%C5%9Finde%203.jpg.jpg',
    description: '',
    name: 'İz Peşinde-3',
    onlinePrice: 0,
    matchedProduct: 'iz_pesinde_3adet',
    ikasId: 'ea29f9b5-334a-48fc-bac1-501bab71f33f',
    productCategories: [
      'kart_oyunlari',
      'kooperatif_oyunlar',
      'senaryolu_legacy_oyunlar',
      'turkce_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 710,
    name: 'Hasarlı Kayıp Diyarlar',
    description: '',
    order: 292,
    category: 25,
    price: 870,
    onlinePrice: 0,
    ikasDiscountedPrice: 870,
    shownInMenu: true,
    locations: [1, 2],
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    matchedProduct: 'hasarli_kayip_diyarlar',
    itemProduction: [
      {
        product: 'hasarli_kayip_diyarlar',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: 870,
        date: '2025-02-27T06:46:34.674Z',
      },
      {
        price: '870',
        date: '2025-03-21T09:34:36.361Z',
      },
      {
        price: '870',
        date: '2025-04-03T14:01:53.067Z',
      },
    ],
    ikasId: '',
  },
  {
    _id: 282,
    priceHistory: [
      {
        price: '800',
        date: '2024-10-28T12:30:23.137Z',
      },
      {
        price: '800',
        date: '2024-11-01T08:10:44.799Z',
      },
      {
        price: '800',
        date: '2024-11-01T08:39:29.467Z',
      },
      {
        price: 870,
        date: '2024-11-11T08:03:25.332Z',
      },
      {
        price: '870',
        date: '2024-12-19T09:01:57.513Z',
      },
      {
        price: '870',
        date: '2024-12-23T06:46:00.553Z',
      },
      {
        price: '870',
        date: '2025-02-03T12:24:14.968Z',
      },
      {
        price: '870',
        date: '2025-03-21T09:34:36.359Z',
      },
      {
        price: 1000,
        date: '2025-04-03T14:01:53.069Z',
      },
    ],
    itemProduction: [
      {
        product: 'kayip_diyarlaradet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 1000,
    category: 25,
    order: 294,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729245826/forgotton/kay%C4%B1pdiyarlar.png.webp',
    description: '',
    name: 'Kayıp Diyarlar',
    onlinePrice: 0,
    matchedProduct: 'kayip_diyarlaradet',
    ikasId: '3440b5f3-97c9-4adc-beda-c74f7fabf754',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 283,
    priceHistory: [
      {
        price: '600',
        date: '2024-10-28T12:30:23.140Z',
      },
      {
        price: '600',
        date: '2024-11-01T08:10:44.803Z',
      },
      {
        price: '600',
        date: '2024-11-01T08:39:29.469Z',
      },
      {
        price: 800,
        date: '2024-11-11T08:03:25.341Z',
      },
      {
        price: '800',
        date: '2024-12-19T09:01:57.515Z',
      },
      {
        price: '800',
        date: '2024-12-23T06:46:00.556Z',
      },
      {
        price: '800',
        date: '2025-02-03T12:24:14.971Z',
      },
      {
        price: '800',
        date: '2025-03-21T09:34:36.363Z',
      },
      {
        price: 960,
        date: '2025-04-03T14:01:53.072Z',
      },
    ],
    itemProduction: [
      {
        product: 'kesifadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 960,
    category: 25,
    order: 295,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729245846/forgotton/ke%C5%9Fif.png.jpg',
    description: '',
    name: 'Keşif',
    onlinePrice: 0,
    matchedProduct: 'kesifadet',
    ikasId: 'c7aee824-2e18-4aa3-8a4e-8bc85c568f93',
    productCategories: [
      'kart_oyunlari',
      'kooperatif_oyunlar',
      'turkce_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 284,
    priceHistory: [
      {
        price: '600',
        date: '2024-10-28T12:30:23.142Z',
      },
      {
        price: '600',
        date: '2024-11-01T08:10:44.806Z',
      },
      {
        price: '600',
        date: '2024-11-01T08:39:29.471Z',
      },
      {
        price: 650,
        date: '2024-11-11T08:03:25.343Z',
      },
      {
        price: '650',
        date: '2024-12-19T09:01:57.529Z',
      },
      {
        price: '650',
        date: '2024-12-23T06:46:00.565Z',
      },
      {
        price: '650',
        date: '2025-02-03T12:24:14.974Z',
      },
      {
        price: '650',
        date: '2025-03-21T09:34:36.365Z',
      },
      {
        price: 800,
        date: '2025-04-03T14:01:53.074Z',
      },
    ],
    itemProduction: [
      {
        product: 'kuzey_kasifleriadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 800,
    category: 25,
    order: 296,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240117/forgotton/kuzey%20ka%C5%9Fifleri%201.jpg.jpg',
    description: '',
    name: 'Kuzey Kaşifleri',
    onlinePrice: 0,
    matchedProduct: 'kuzey_kasifleriadet',
    ikasId: '98e378f0-6c7c-4a5c-8eaa-021d9bd6af33',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 285,
    priceHistory: [
      {
        price: '650',
        date: '2024-10-28T12:30:23.144Z',
      },
      {
        price: '650',
        date: '2024-11-01T08:10:44.811Z',
      },
      {
        price: '650',
        date: '2024-11-01T08:39:29.472Z',
      },
      {
        price: 690,
        date: '2024-11-11T08:03:25.348Z',
      },
      {
        price: '690',
        date: '2024-12-19T09:01:57.533Z',
      },
      {
        price: '690',
        date: '2024-12-23T06:46:00.568Z',
      },
      {
        price: '690',
        date: '2025-02-03T12:24:14.980Z',
      },
      {
        price: '690',
        date: '2025-03-21T09:34:36.367Z',
      },
      {
        price: 900,
        date: '2025-04-03T14:01:53.075Z',
      },
    ],
    itemProduction: [
      {
        product: 'lanetli_adaadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 900,
    category: 25,
    order: 297,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240128/forgotton/lanetli%20ada%201.jpg.jpg',
    description: '',
    name: 'Lanetli Ada',
    onlinePrice: 0,
    matchedProduct: 'lanetli_adaadet',
    ikasId: 'b926f9e6-8f10-498d-afa4-33b2f28ebcab',
    productCategories: [
      'kooperatif_oyunlar',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 286,
    priceHistory: [
      {
        price: '690',
        date: '2024-10-28T12:30:23.147Z',
      },
      {
        price: '690',
        date: '2024-11-01T08:10:44.814Z',
      },
      {
        price: '690',
        date: '2024-11-01T08:39:29.474Z',
      },
      {
        price: '690',
        date: '2024-11-11T08:03:25.350Z',
      },
      {
        price: '690',
        date: '2024-12-19T09:01:57.554Z',
      },
      {
        price: '690',
        date: '2024-12-23T06:46:00.572Z',
      },
      {
        price: '690',
        date: '2025-02-03T12:24:14.983Z',
      },
      {
        price: '690',
        date: '2025-03-21T09:34:36.368Z',
      },
      {
        price: '690',
        date: '2025-04-03T14:01:53.076Z',
      },
    ],
    itemProduction: [
      {
        product: 'makaraadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 690,
    category: 25,
    order: 298,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240145/forgotton/en%20uygun%20boyutlar.jpg.jpg',
    description: '',
    name: 'Makara',
    onlinePrice: 590,
    matchedProduct: 'makaraadet',
    ikasId: '6a339756-8b04-4aee-a252-309024f81bc1',
    productCategories: ['parti_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 287,
    priceHistory: [
      {
        price: '200',
        date: '2024-10-28T12:30:23.149Z',
      },
      {
        price: '200',
        date: '2024-11-01T08:10:44.817Z',
      },
      {
        price: '200',
        date: '2024-11-01T08:39:29.476Z',
      },
      {
        price: 230,
        date: '2024-11-11T08:03:25.351Z',
      },
      {
        price: '230',
        date: '2024-12-19T09:01:57.558Z',
      },
      {
        price: '230',
        date: '2024-12-23T06:46:00.576Z',
      },
      {
        price: '230',
        date: '2025-02-03T12:24:14.988Z',
      },
      {
        price: '230',
        date: '2025-03-21T09:34:36.370Z',
      },
      {
        price: 300,
        date: '2025-04-03T14:01:53.078Z',
      },
    ],
    itemProduction: [
      {
        product: 'mayfoldadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 300,
    category: 25,
    order: 299,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240228/forgotton/manyfold%201.jpg.jpg',
    description: '',
    name: 'Manyfold',
    onlinePrice: 0,
    matchedProduct: 'mayfoldadet',
    ikasId: '41eb9845-646a-4209-afdc-d1e52e6986c2',
    productCategories: [
      'kooperatif_oyunlar',
      'senaryolu_legacy_oyunlar',
      'turkce_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 288,
    priceHistory: [
      {
        price: '2400',
        date: '2024-10-28T12:30:23.151Z',
      },
      {
        price: '2400',
        date: '2024-11-01T08:10:44.819Z',
      },
      {
        price: '2400',
        date: '2024-11-01T08:39:29.477Z',
      },
      {
        price: 2700,
        date: '2024-11-11T08:03:25.353Z',
      },
      {
        price: '2700',
        date: '2024-12-19T09:01:57.562Z',
      },
      {
        price: '2700',
        date: '2024-12-23T06:46:00.579Z',
      },
      {
        price: '2700',
        date: '2025-02-03T12:24:14.992Z',
      },
      {
        price: '2700',
        date: '2025-03-21T09:34:36.371Z',
      },
      {
        price: 3000,
        date: '2025-04-03T14:01:53.080Z',
      },
    ],
    itemProduction: [
      {
        product: 'marvel_championsadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 3000,
    category: 25,
    order: 300,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729246885/forgotton/marvelshampions.png.webp',
    description: '',
    name: 'Marvel Champions',
    onlinePrice: 0,
    matchedProduct: 'marvel_championsadet',
    ikasId: '43ee45fa-3da6-4269-8ba0-6df2230ec249',
    productCategories: ['strateji_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 289,
    priceHistory: [
      {
        price: '560',
        date: '2024-10-28T12:30:23.153Z',
      },
      {
        price: '560',
        date: '2024-11-01T08:10:44.824Z',
      },
      {
        price: '560',
        date: '2024-11-01T08:39:29.479Z',
      },
      {
        price: 580,
        date: '2024-11-11T08:03:25.355Z',
      },
      {
        price: '580',
        date: '2024-12-19T09:01:57.581Z',
      },
      {
        price: '580',
        date: '2024-12-23T06:46:00.581Z',
      },
      {
        price: '580',
        date: '2025-02-03T12:24:14.995Z',
      },
      {
        price: '580',
        date: '2025-03-21T09:34:36.373Z',
      },
      {
        price: 730,
        date: '2025-04-03T14:01:53.081Z',
      },
    ],
    itemProduction: [
      {
        product: 'munchkinadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 730,
    category: 25,
    order: 301,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729246910/forgotton/munchkin.png.webp',
    description: '',
    name: 'Munchkin',
    onlinePrice: 0,
    matchedProduct: 'munchkinadet',
    ikasId: '6b7c438e-1b84-44f1-b50e-4f785644f7b2',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 290,
    priceHistory: [
      {
        price: '560',
        date: '2024-10-28T12:30:23.155Z',
      },
      {
        price: '560',
        date: '2024-11-01T08:10:44.828Z',
      },
      {
        price: '560',
        date: '2024-11-01T08:39:29.481Z',
      },
      {
        price: 580,
        date: '2024-11-11T08:03:25.357Z',
      },
      {
        price: '580',
        date: '2024-12-19T09:01:57.588Z',
      },
      {
        price: '580',
        date: '2024-12-23T06:46:00.584Z',
      },
      {
        price: '580',
        date: '2025-02-03T12:24:15.006Z',
      },
      {
        price: '580',
        date: '2025-03-21T09:34:36.375Z',
      },
      {
        price: 780,
        date: '2025-04-03T14:01:53.082Z',
      },
    ],
    itemProduction: [
      {
        product: 'munchkin__zombiesadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 780,
    category: 25,
    order: 302,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240249/forgotton/zombies%201.jpg.jpg',
    description: '',
    name: 'Munchkin: Zombies',
    onlinePrice: 0,
    matchedProduct: 'munchkin__zombiesadet',
    ikasId: 'd7acdd4a-dfae-46b1-b26f-711dac3c1fa4',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 291,
    priceHistory: [
      {
        price: '750',
        date: '2024-10-28T12:30:23.157Z',
      },
      {
        price: '750',
        date: '2024-11-01T08:10:44.830Z',
      },
      {
        price: '750',
        date: '2024-11-01T08:39:29.483Z',
      },
      {
        price: '750',
        date: '2024-11-11T08:03:25.359Z',
      },
      {
        price: '750',
        date: '2024-12-19T09:01:57.634Z',
      },
      {
        price: '750',
        date: '2024-12-23T06:46:00.586Z',
      },
      {
        price: '750',
        date: '2025-02-03T12:24:15.009Z',
      },
      {
        price: '750',
        date: '2025-03-21T09:34:36.376Z',
      },
      {
        price: '750',
        date: '2025-04-03T14:01:53.084Z',
      },
    ],
    itemProduction: [
      {
        product: 'noiradet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 750,
    category: 25,
    order: 303,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729246964/forgotton/noir.png.webp',
    description: '',
    name: 'Noir',
    onlinePrice: 0,
    matchedProduct: 'noiradet',
    ikasId: '',
    productCategories: [],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 292,
    priceHistory: [
      {
        price: '2160',
        date: '2024-10-28T12:30:23.159Z',
      },
      {
        price: '2160',
        date: '2024-11-01T08:10:44.832Z',
      },
      {
        price: '2160',
        date: '2024-11-01T08:39:29.485Z',
      },
      {
        price: 2200,
        date: '2024-11-11T08:03:25.361Z',
      },
      {
        price: '2200',
        date: '2024-12-19T09:01:57.646Z',
      },
      {
        price: '2200',
        date: '2024-12-23T06:46:00.588Z',
      },
      {
        price: '2200',
        date: '2025-02-03T12:24:15.012Z',
      },
      {
        price: '2200',
        date: '2025-03-21T09:34:36.378Z',
      },
      {
        price: 2800,
        date: '2025-04-03T14:01:53.085Z',
      },
    ],
    itemProduction: [
      {
        product: 'pandemicadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 2800,
    category: 25,
    order: 305,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729246998/forgotton/pandemic.png.webp',
    description: '',
    name: 'Pandemic',
    onlinePrice: 0,
    matchedProduct: 'pandemicadet',
    ikasId: '041fcc61-b1d2-463b-8f75-2ff4b067d556',
    productCategories: [
      'kooperatif_oyunlar',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 293,
    priceHistory: [
      {
        price: '480',
        date: '2024-10-28T12:30:23.162Z',
      },
      {
        price: '480',
        date: '2024-11-01T08:10:44.835Z',
      },
      {
        price: '480',
        date: '2024-11-01T08:39:29.486Z',
      },
      {
        price: 530,
        date: '2024-11-11T08:03:25.363Z',
      },
      {
        price: '530',
        date: '2024-12-19T09:01:57.653Z',
      },
      {
        price: '530',
        date: '2024-12-23T06:46:00.591Z',
      },
      {
        price: '530',
        date: '2025-02-03T12:24:15.015Z',
      },
      {
        price: '530',
        date: '2025-03-21T09:34:36.381Z',
      },
    ],
    itemProduction: [
      {
        product: 'patikaadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 530,
    category: 25,
    order: 306,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240267/forgotton/Patika%201.jpg.jpg',
    description: '',
    name: 'Patika',
    onlinePrice: 0,
    matchedProduct: 'patikaadet',
    ikasId: '235d470c-653f-4d32-a0e1-71cde3892323',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 294,
    priceHistory: [
      {
        price: '780',
        date: '2024-10-28T12:30:23.165Z',
      },
      {
        price: '780',
        date: '2024-11-01T08:10:44.837Z',
      },
      {
        price: '780',
        date: '2024-11-01T08:39:29.489Z',
      },
      {
        price: '780',
        date: '2024-11-11T08:03:25.364Z',
      },
      {
        price: '780',
        date: '2024-12-19T09:01:57.710Z',
      },
      {
        price: '780',
        date: '2024-12-23T06:46:00.594Z',
      },
      {
        price: '780',
        date: '2025-02-03T12:24:15.019Z',
      },
      {
        price: '780',
        date: '2025-03-21T09:34:36.383Z',
      },
      {
        price: 950,
        date: '2025-04-03T14:01:53.089Z',
      },
    ],
    itemProduction: [
      {
        product: 'sinnersadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 950,
    category: 25,
    order: 307,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240278/forgotton/Sinners%201.jpg.jpg',
    description: '',
    name: 'Sinners',
    onlinePrice: 0,
    matchedProduct: 'sinnersadet',
    ikasId: '',
    productCategories: ['turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 295,
    priceHistory: [
      {
        price: '660',
        date: '2024-10-28T12:30:23.168Z',
      },
      {
        price: '660',
        date: '2024-11-01T08:10:44.840Z',
      },
      {
        price: '660',
        date: '2024-11-01T08:39:29.491Z',
      },
      {
        price: 720,
        date: '2024-11-11T08:03:25.366Z',
      },
      {
        price: '720',
        date: '2024-12-19T09:01:57.719Z',
      },
      {
        price: '720',
        date: '2024-12-23T06:46:00.596Z',
      },
      {
        price: '720',
        date: '2025-02-03T12:24:15.022Z',
      },
      {
        price: '720',
        date: '2025-03-21T09:34:36.386Z',
      },
      {
        price: 830,
        date: '2025-04-03T14:01:53.090Z',
      },
    ],
    itemProduction: [
      {
        product: 'smash_upadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 830,
    category: 25,
    order: 308,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247020/forgotton/smashup.png.webp',
    description: '',
    name: 'Smash Up',
    onlinePrice: 0,
    matchedProduct: 'smash_upadet',
    ikasId: 'be10851d-e648-400e-bcce-498eb1c3bb3c',
    productCategories: [
      'kart_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 296,
    priceHistory: [
      {
        price: '1000',
        date: '2024-10-28T12:30:23.171Z',
      },
      {
        price: '1000',
        date: '2024-11-01T08:10:44.842Z',
      },
      {
        price: '1000',
        date: '2024-11-01T08:39:29.493Z',
      },
      {
        price: 1060,
        date: '2024-11-11T08:03:25.368Z',
      },
      {
        price: '1060',
        date: '2024-12-19T09:01:57.760Z',
      },
      {
        price: '1060',
        date: '2024-12-23T06:46:00.599Z',
      },
      {
        price: '1060',
        date: '2025-02-03T12:24:15.025Z',
      },
      {
        price: '1060',
        date: '2025-03-21T09:34:36.388Z',
      },
      {
        price: 1400,
        date: '2025-04-03T14:01:53.091Z',
      },
    ],
    itemProduction: [
      {
        product: 'sub_terraadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 1400,
    category: 25,
    order: 309,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247042/forgotton/subterra.png.webp',
    description: '',
    name: 'Subterra',
    onlinePrice: 0,
    matchedProduct: 'sub_terraadet',
    ikasId: 'cdb8647f-bc8a-4073-b3bc-6e52eeb26853',
    productCategories: ['kooperatif_oyunlar', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 297,
    priceHistory: [
      {
        price: '530',
        date: '2024-10-28T12:30:23.173Z',
      },
      {
        price: '530',
        date: '2024-11-01T08:10:44.845Z',
      },
      {
        price: '530',
        date: '2024-11-01T08:39:29.495Z',
      },
      {
        price: 560,
        date: '2024-11-11T08:03:25.369Z',
      },
      {
        price: '560',
        date: '2024-12-19T09:01:57.768Z',
      },
      {
        price: '560',
        date: '2024-12-23T06:46:00.601Z',
      },
      {
        price: '560',
        date: '2025-02-03T12:24:15.029Z',
      },
      {
        price: '560',
        date: '2025-03-21T09:34:36.389Z',
      },
      {
        price: 700,
        date: '2025-04-03T14:01:53.092Z',
      },
    ],
    itemProduction: [
      {
        product: 'sushi_goadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 700,
    category: 25,
    order: 310,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247105/forgotton/sushigo.png.webp',
    description: '',
    name: 'Sushi Go',
    onlinePrice: 0,
    matchedProduct: 'sushi_goadet',
    ikasId: 'ea482b92-d069-4bd4-aa5f-17be1dc06c1d',
    productCategories: [
      'kart_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 298,
    priceHistory: [
      {
        price: '2520',
        date: '2024-10-28T12:30:23.176Z',
      },
      {
        price: '2520',
        date: '2024-11-01T08:10:44.848Z',
      },
      {
        price: '2520',
        date: '2024-11-01T08:39:29.497Z',
      },
      {
        price: 2600,
        date: '2024-11-11T08:03:25.372Z',
      },
      {
        price: '2600',
        date: '2024-12-19T09:01:57.773Z',
      },
      {
        price: '2600',
        date: '2024-12-23T06:46:00.603Z',
      },
      {
        price: '2600',
        date: '2025-02-03T12:24:15.032Z',
      },
      {
        price: '2600',
        date: '2025-03-21T09:34:36.391Z',
      },
      {
        price: 3300,
        date: '2025-04-03T14:01:53.093Z',
      },
    ],
    itemProduction: [
      {
        product: 'terraforming_marsadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 3300,
    category: 25,
    order: 311,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247127/forgotton/mars.png.webp',
    description: '',
    name: 'Terraforming Mars',
    onlinePrice: 0,
    matchedProduct: 'terraforming_marsadet',
    ikasId: 'dcb66ca2-5a26-47c4-8dd8-bba4bb5a7df8',
    productCategories: ['strateji_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 299,
    priceHistory: [
      {
        price: '2520',
        date: '2024-10-28T12:30:23.178Z',
      },
      {
        price: '2520',
        date: '2024-11-01T08:10:44.850Z',
      },
      {
        price: '2520',
        date: '2024-11-01T08:39:29.499Z',
      },
      {
        price: 2750,
        date: '2024-11-11T08:03:25.374Z',
      },
      {
        price: '2750',
        date: '2024-12-19T09:01:57.786Z',
      },
      {
        price: '2750',
        date: '2024-12-23T06:46:00.605Z',
      },
      {
        price: '2750',
        date: '2025-02-03T12:24:15.036Z',
      },
      {
        price: '2750',
        date: '2025-03-21T09:34:36.392Z',
      },
      {
        price: 3200,
        date: '2025-04-03T14:01:53.094Z',
      },
    ],
    itemProduction: [
      {
        product: 'ticket_to_ride_europeadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 3200,
    category: 25,
    order: 312,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247182/forgotton/tickettorideeurope.png.webp',
    description: '',
    name: 'Ticket to Ride: Europe',
    onlinePrice: 0,
    matchedProduct: 'ticket_to_ride_europeadet',
    ikasId: '603e9067-6c03-48d1-9a6f-1e6df638726c',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 300,
    priceHistory: [
      {
        price: '350',
        date: '2024-10-28T12:30:23.182Z',
      },
      {
        price: '350',
        date: '2024-11-01T08:10:44.853Z',
      },
      {
        price: '350',
        date: '2024-11-01T08:39:29.500Z',
      },
      {
        price: 390,
        date: '2024-11-11T08:03:25.376Z',
      },
      {
        price: '390',
        date: '2024-12-19T09:01:57.806Z',
      },
      {
        price: '390',
        date: '2024-12-23T06:46:00.607Z',
      },
      {
        price: '390',
        date: '2025-02-03T12:24:15.039Z',
      },
      {
        price: '390',
        date: '2025-03-21T09:34:36.394Z',
      },
      {
        price: 590,
        date: '2025-04-03T14:01:53.096Z',
      },
    ],
    itemProduction: [
      {
        product: 'uykucu_kraliceleradet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 590,
    category: 25,
    order: 313,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240413/forgotton/uykucu%20krali%C3%A7eler%201.jpg.jpg',
    description: '',
    name: 'Uykucu Kraliçeler',
    onlinePrice: 0,
    matchedProduct: 'uykucu_kraliceleradet',
    ikasId: '1fb822fc-213a-4ffe-aea6-9aa34e2a8d87',
    productCategories: [
      'kart_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 301,
    priceHistory: [
      {
        price: '1750',
        date: '2024-10-28T12:30:23.185Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:10:44.855Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:39:29.502Z',
      },
      {
        price: '1750',
        date: '2024-11-11T08:03:25.377Z',
      },
      {
        price: '1750',
        date: '2024-12-19T09:01:57.816Z',
      },
      {
        price: '1750',
        date: '2024-12-23T06:46:00.609Z',
      },
      {
        price: '1750',
        date: '2025-02-03T12:24:15.041Z',
      },
      {
        price: '1750',
        date: '2025-03-21T09:34:36.396Z',
      },
      {
        price: '1750',
        date: '2025-04-03T14:01:53.438Z',
      },
    ],
    itemProduction: [
      {
        product: 'viticulture',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 1750,
    category: 25,
    order: 314,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240426/forgotton/viti1.jpg.jpg',
    description: '',
    name: 'Viticulture Essential Editions',
    onlinePrice: 2000,
    matchedProduct: 'viticulture',
    ikasId: 'ffa5612e-20b6-4b18-b1c5-cb878acc71fe',
    productCategories: ['strateji_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 618,
    name: 'Hasarlı Viticulture Essential Editions',
    description:
      'Ürünün hasarı, güneşten dolayı renginin solmuş olmasından kaynaklıdır.',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1737014141/forgotton/hasarl%C4%B1viti2.jpg.jpg',
    order: 314,
    category: 25,
    price: 1750,
    onlinePrice: 2000,
    shownInMenu: true,
    locations: [1, 2],
    productCategories: ['hasarli_oyunlar'],
    productImages: [
      'https://res.cloudinary.com/dvbg/image/upload/v1737014152/hasarl%C3%84%C2%B1viti1.jpg.jpg',
    ],
    matchedProduct: 'hasarli_viticulture_essential_editions',
    itemProduction: [
      {
        product: 'hasarli_viticulture_essential_editions',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '1750',
        date: '2024-10-28T12:30:23.185Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:10:44.855Z',
      },
      {
        price: '1750',
        date: '2024-11-01T08:39:29.502Z',
      },
      {
        price: '1750',
        date: '2024-11-11T08:03:25.377Z',
      },
      {
        price: '1750',
        date: '2024-12-19T09:01:57.816Z',
      },
      {
        price: '1750',
        date: '2024-12-23T06:46:00.609Z',
      },
      {
        price: '1750',
        date: '2025-02-03T12:24:15.044Z',
      },
      {
        price: '1750',
        date: '2025-03-21T09:34:36.399Z',
      },
      {
        price: '1750',
        date: '2025-04-03T14:01:53.104Z',
      },
    ],
    ikasId: 'ef83aa55-efb8-4fab-ae18-7f35033efd72',
    ikasDiscountedPrice: 1487.5,
  },
  {
    _id: 302,
    priceHistory: [
      {
        price: '3100',
        date: '2024-10-28T12:30:23.188Z',
      },
      {
        price: '3100',
        date: '2024-11-01T08:10:44.858Z',
      },
      {
        price: '3100',
        date: '2024-11-01T08:39:29.509Z',
      },
      {
        price: 3500,
        date: '2024-11-11T08:03:25.380Z',
      },
      {
        price: '3500',
        date: '2024-12-19T09:01:57.828Z',
      },
      {
        price: '3500',
        date: '2024-12-23T06:46:00.612Z',
      },
      {
        price: '3500',
        date: '2025-02-03T12:24:15.051Z',
      },
      {
        price: '3500',
        date: '2025-03-21T09:34:36.400Z',
      },
      {
        price: 4000,
        date: '2025-04-03T14:01:53.105Z',
      },
    ],
    itemProduction: [
      {
        product: 'wyrmspanadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 4000,
    category: 25,
    order: 315,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247205/forgotton/wyrmspan.png.webp',
    description: '',
    name: 'Wyrmspan',
    onlinePrice: 0,
    matchedProduct: 'wyrmspanadet',
    ikasId: 'c0c08583-6dd5-4ea5-9a3d-0d9510e8158b',
    productCategories: ['strateji_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 357,
    name: 'İhtilal',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240447/forgotton/ihtilal1.jpg.jpg',
    order: 355,
    category: 25,
    price: 1500,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'ihtilaladet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '1500',
        date: '2024-09-03T05:37:16.096Z',
      },
      {
        price: '1500',
        date: '2024-10-28T12:30:23.191Z',
      },
      {
        price: '1500',
        date: '2024-11-01T08:10:44.860Z',
      },
      {
        price: '1500',
        date: '2024-11-01T08:39:29.512Z',
      },
      {
        price: '1500',
        date: '2024-11-11T08:03:25.382Z',
      },
      {
        price: '1500',
        date: '2024-12-19T09:01:57.487Z',
      },
      {
        price: '1500',
        date: '2024-12-23T06:46:00.614Z',
      },
      {
        price: '1500',
        date: '2025-02-03T12:24:15.054Z',
      },
      {
        price: '1500',
        date: '2025-03-21T09:34:36.402Z',
      },
      {
        price: '1500',
        date: '2025-04-03T14:01:53.106Z',
      },
    ],
    onlinePrice: 1700,
    matchedProduct: 'ihtilaladet',
    ikasId: 'b0f7d552-2ba7-48f1-b0d6-8732a46e0334',
    productCategories: ['turkce_oyunlar', 'iki_kisilik_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 391,
    name: 'Direniş',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240458/forgotton/direni%C5%9F1.jpg.jpg',
    order: 389,
    category: 25,
    price: 640,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'direnisadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '480',
        date: '2024-10-28T12:30:23.194Z',
      },
      {
        price: '480',
        date: '2024-11-01T08:10:44.863Z',
      },
      {
        price: '480',
        date: '2024-11-01T08:39:29.514Z',
      },
      {
        price: 530,
        date: '2024-11-11T08:03:25.384Z',
      },
      {
        price: '530',
        date: '2024-12-19T09:01:57.228Z',
      },
      {
        price: '530',
        date: '2024-12-23T06:46:00.615Z',
      },
      {
        price: '530',
        date: '2025-02-03T12:24:15.059Z',
      },
      {
        price: '530',
        date: '2025-03-21T09:34:36.404Z',
      },
      {
        price: 640,
        date: '2025-04-03T14:01:53.107Z',
      },
    ],
    onlinePrice: 0,
    matchedProduct: 'direnisadet',
    ikasId: 'f179a4c7-f056-42e5-b3f3-630aaa480932',
    productCategories: ['parti_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 392,
    name: 'Suç Günlükleri',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240467/forgotton/su%C3%A7%201.jpg.jpg',
    order: 390,
    category: 25,
    price: 1400,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'suc_gunlukleriadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '1100',
        date: '2024-10-28T12:30:23.197Z',
      },
      {
        price: '1100',
        date: '2024-11-01T08:10:44.865Z',
      },
      {
        price: '1100',
        date: '2024-11-01T08:39:29.517Z',
      },
      {
        price: 1200,
        date: '2024-11-11T08:03:25.385Z',
      },
      {
        price: '1200',
        date: '2024-12-19T09:01:57.761Z',
      },
      {
        price: '1200',
        date: '2024-12-23T06:46:00.618Z',
      },
      {
        price: '1200',
        date: '2025-02-03T12:24:15.064Z',
      },
      {
        price: '1200',
        date: '2025-03-21T09:34:36.406Z',
      },
      {
        price: 1400,
        date: '2025-04-03T14:01:53.108Z',
      },
    ],
    onlinePrice: 0,
    matchedProduct: 'suc_gunlukleriadet',
    ikasId: '5eca2e1d-0071-40a3-92a1-6e9b7893bc99',
    productCategories: ['kooperatif_oyunlar', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 399,
    name: 'Truva',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247229/forgotton/truva.png.webp',
    order: 397,
    category: 25,
    price: 640,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'truvaadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '450',
        date: '2024-10-28T12:30:23.201Z',
      },
      {
        price: '450',
        date: '2024-11-01T08:10:44.876Z',
      },
      {
        price: '450',
        date: '2024-11-01T08:39:29.520Z',
      },
      {
        price: 500,
        date: '2024-11-11T08:03:25.387Z',
      },
      {
        price: '500',
        date: '2024-12-19T09:01:57.797Z',
      },
      {
        price: '500',
        date: '2024-12-23T06:46:00.620Z',
      },
      {
        price: '500',
        date: '2025-02-03T12:24:15.066Z',
      },
      {
        price: '500',
        date: '2025-03-21T09:34:36.408Z',
      },
      {
        price: 640,
        date: '2025-04-03T14:01:53.109Z',
      },
    ],
    onlinePrice: 0,
    matchedProduct: 'truvaadet',
    ikasId: '449f72c4-e400-43cc-82bf-ab52aaa8bb47',
    productCategories: [
      'kart_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
      'iki_kisilik_oyunlar',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 409,
    name: 'Terraforming Mars Ek Paketi',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247409/forgotton/ba%C5%9Flang%C4%B1%C3%A7.png.webp',
    order: 407,
    category: 25,
    price: 950,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'terraforming_mars__baslangic_paketiadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '850',
        date: '2024-10-28T12:30:23.204Z',
      },
      {
        price: '850',
        date: '2024-11-01T08:10:44.880Z',
      },
      {
        price: '850',
        date: '2024-11-01T08:39:29.522Z',
      },
      {
        price: 900,
        date: '2024-11-11T08:03:25.396Z',
      },
      {
        price: '900',
        date: '2024-12-19T09:01:57.774Z',
      },
      {
        price: '900',
        date: '2024-12-23T06:46:00.622Z',
      },
      {
        price: '900',
        date: '2025-02-03T12:24:15.068Z',
      },
      {
        price: '900',
        date: '2025-03-21T09:34:36.410Z',
      },
      {
        price: 950,
        date: '2025-04-03T14:01:53.111Z',
      },
    ],
    onlinePrice: 0,
    matchedProduct: 'terraforming_mars__baslangic_paketiadet',
    ikasId: 'd98914cb-9178-4c55-8192-c383cc46225f',
    productCategories: ['ek_paketler', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 410,
    name: 'Entrika',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247440/forgotton/entrika.png.webp',
    order: 408,
    category: 25,
    price: 500,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'entrika_plusadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '370',
        date: '2024-10-28T12:30:23.207Z',
      },
      {
        price: '370',
        date: '2024-11-01T08:10:44.883Z',
      },
      {
        price: '370',
        date: '2024-11-01T08:39:29.524Z',
      },
      {
        price: 400,
        date: '2024-11-11T08:03:25.399Z',
      },
      {
        price: '400',
        date: '2024-12-19T09:01:57.302Z',
      },
      {
        price: '400',
        date: '2024-12-23T06:46:00.624Z',
      },
      {
        price: '400',
        date: '2025-02-03T12:24:15.070Z',
      },
      {
        price: '400',
        date: '2025-03-21T09:34:36.416Z',
      },
      {
        price: 500,
        date: '2025-04-03T14:01:53.112Z',
      },
    ],
    onlinePrice: 0,
    matchedProduct: 'entrika_plusadet',
    ikasId: 'e12f2318-b6ca-4540-ac85-e8e392bb264f',
    productCategories: [
      'parti_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 411,
    name: 'Cascadia',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247459/forgotton/cascadia.png.jpg',
    order: 409,
    category: 25,
    price: 1750,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'cascadiaadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '1300',
        date: '2024-10-28T12:30:23.210Z',
      },
      {
        price: '1300',
        date: '2024-11-01T08:10:44.887Z',
      },
      {
        price: '1300',
        date: '2024-11-01T08:39:29.526Z',
      },
      {
        price: 1370,
        date: '2024-11-11T08:03:25.401Z',
      },
      {
        price: '1370',
        date: '2024-12-19T09:01:57.004Z',
      },
      {
        price: '1370',
        date: '2024-12-23T06:46:00.626Z',
      },
      {
        price: '1370',
        date: '2025-02-03T12:24:15.073Z',
      },
      {
        price: '1370',
        date: '2025-03-21T09:34:36.418Z',
      },
      {
        price: 1750,
        date: '2025-04-03T14:01:53.114Z',
      },
    ],
    onlinePrice: 0,
    matchedProduct: 'cascadiaadet',
    ikasId: '50e43b83-e197-4011-b554-49b323325666',
    productCategories: [
      'strateji_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 412,
    name: 'Epik Büyü Savaşlar 1',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247480/forgotton/epikb%C3%BCy%C3%BC1.png.webp',
    order: 410,
    category: 25,
    price: 1050,
    onlinePrice: 830,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'epik_buyu_savaslari_1adet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '790',
        date: '2024-10-28T12:30:23.213Z',
      },
      {
        price: '790',
        date: '2024-11-01T08:10:44.891Z',
      },
      {
        price: '790',
        date: '2024-11-01T08:39:29.528Z',
      },
      {
        price: 830,
        date: '2024-11-11T08:03:25.403Z',
      },
      {
        price: '830',
        date: '2024-12-19T09:01:57.304Z',
      },
      {
        price: '830',
        date: '2024-12-23T06:46:00.628Z',
      },
      {
        price: '830',
        date: '2025-02-03T12:24:15.086Z',
      },
      {
        price: '830',
        date: '2025-03-21T09:34:36.420Z',
      },
      {
        price: 1050,
        date: '2025-04-03T14:01:53.115Z',
      },
    ],
    matchedProduct: 'epik_buyu_savaslari_1adet',
    ikasId: 'f8bf4daf-6c76-4224-818e-3fe9c62dcf64',
    productCategories: [
      'parti_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 416,
    name: 'İhtilal + İnkilap Bundle',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240737/forgotton/ihtilalinkilap.jpg.jpg',
    order: 414,
    category: 25,
    price: 2500,
    onlinePrice: 2750,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'ihtilaladet',
        quantity: '1',
        isDecrementStock: true,
      },
      {
        product: 'inkilapadet',
        quantity: '1',
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '2500',
        date: '2024-10-28T12:30:23.216Z',
      },
      {
        price: '2500',
        date: '2024-11-01T08:10:44.893Z',
      },
      {
        price: '2500',
        date: '2024-11-01T08:39:29.531Z',
      },
      {
        price: '2500',
        date: '2024-11-11T08:03:25.405Z',
      },
      {
        price: '2500',
        date: '2024-12-19T09:01:57.489Z',
      },
      {
        price: '2500',
        date: '2024-12-23T06:46:00.631Z',
      },
      {
        price: '2500',
        date: '2025-02-03T12:24:15.089Z',
      },
      {
        price: '2500',
        date: '2025-03-21T09:34:36.421Z',
      },
      {
        price: '2500',
        date: '2025-04-03T14:01:53.116Z',
      },
    ],
    ikasId: '6e26c171-69b8-4684-bbdd-718f4850a14a',
    productCategories: ['turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 417,
    name: 'Munchkin - Deli Balta',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1734082938/forgotton/delibalta.png.webp',
    order: 417,
    category: 25,
    price: 630,
    onlinePrice: 0,
    locations: [2, 1],
    itemProduction: [
      {
        product: 'munchkin_2_deli_baltaadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '420',
        date: '2024-10-28T12:30:23.219Z',
      },
      {
        price: '420',
        date: '2024-11-01T08:10:44.896Z',
      },
      {
        price: '420',
        date: '2024-11-01T08:39:29.533Z',
      },
      {
        price: '420',
        date: '2024-11-11T08:03:25.407Z',
      },
      {
        price: '490',
        date: '2024-12-06T12:32:34.500Z',
      },
      {
        price: '490',
        date: '2024-12-19T09:01:57.582Z',
      },
      {
        price: '490',
        date: '2024-12-23T06:46:00.632Z',
      },
      {
        price: '490',
        date: '2025-02-03T12:24:15.093Z',
      },
      {
        price: '490',
        date: '2025-03-21T09:34:36.931Z',
      },
      {
        price: 630,
        date: '2025-04-03T14:01:53.117Z',
      },
    ],
    matchedProduct: 'munchkin_2_deli_baltaadet',
    ikasId: 'a4bd299b-e4c6-4daf-bf4e-50aa8a54f07c',
    productCategories: ['ek_paketler', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 451,
    name: 'Gulyabani Plus',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729247515/forgotton/gulyabani.png.webp',
    order: 459,
    category: 25,
    price: 420,
    onlinePrice: 320,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'gulyabaniadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '320',
        date: '2024-10-28T12:30:23.221Z',
      },
      {
        price: '320',
        date: '2024-11-01T08:10:44.898Z',
      },
      {
        price: '320',
        date: '2024-11-01T08:39:29.535Z',
      },
      {
        price: '320',
        date: '2024-12-19T09:01:57.401Z',
      },
      {
        price: '320',
        date: '2024-12-23T06:46:00.634Z',
      },
      {
        price: '320',
        date: '2025-02-03T12:24:15.096Z',
      },
      {
        price: '320',
        date: '2025-03-21T09:34:36.425Z',
      },
      {
        price: 420,
        date: '2025-04-03T14:01:53.119Z',
      },
    ],
    matchedProduct: 'gulyabaniadet',
    ikasId: 'a47afa64-0c6f-4eae-be97-31bbddab964e',
    productCategories: ['parti_oyunlari', 'turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 452,
    name: 'Bang',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240761/forgotton/bang1.jpg.jpg',
    order: 460,
    category: 25,
    price: 950,
    onlinePrice: 720,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'bangadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '550',
        date: '2024-10-28T12:30:23.224Z',
      },
      {
        price: '550',
        date: '2024-11-01T08:10:44.901Z',
      },
      {
        price: '550',
        date: '2024-11-01T08:39:29.537Z',
      },
      {
        price: 720,
        date: '2024-11-11T08:03:25.410Z',
      },
      {
        price: '720',
        date: '2024-12-19T09:01:56.962Z',
      },
      {
        price: '720',
        date: '2024-12-23T06:46:00.636Z',
      },
      {
        price: '720',
        date: '2025-02-03T12:24:15.100Z',
      },
      {
        price: '720',
        date: '2025-03-21T09:34:36.428Z',
      },
      {
        price: 950,
        date: '2025-04-03T14:01:53.120Z',
      },
    ],
    matchedProduct: 'bangadet',
    ikasId: '6fb9a0d9-e2d3-4703-a4e1-0aab117a39a5',
    productCategories: [
      'parti_oyunlari',
      'turkce_oyunlar',
      'yeni_baslayanlar_icin',
    ],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 483,
    name: 'Ejder Avcıları',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240770/forgotton/ejderavc%C4%B1lar%C4%B11.jpg.jpg',
    order: 487,
    category: 25,
    price: 850,
    onlinePrice: 600,
    locations: [1, 2],
    itemProduction: [
      {
        product: 'ejder_avcilariadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '600',
        date: '2024-10-28T12:30:23.226Z',
      },
      {
        price: '600',
        date: '2024-11-01T08:10:44.903Z',
      },
      {
        price: '600',
        date: '2024-11-01T08:39:29.539Z',
      },
      {
        price: 660,
        date: '2024-11-11T08:03:25.412Z',
      },
      {
        price: '660',
        date: '2024-12-19T09:01:57.284Z',
      },
      {
        price: '660',
        date: '2024-12-23T06:46:00.637Z',
      },
      {
        price: '660',
        date: '2025-02-03T12:24:15.105Z',
      },
      {
        price: '660',
        date: '2025-03-21T09:34:36.430Z',
      },
      {
        price: 850,
        date: '2025-04-03T14:01:53.121Z',
      },
    ],
    matchedProduct: 'ejder_avcilariadet',
    ikasId: '9dcf8371-bbf9-480b-a331-0d95ebf07acd',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 540,
    name: 'Munchkin 3 - Günah Keçisi',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1734083541/forgotton/munchking%C3%BCnahke%C3%A7isi1.png.webp',
    order: 543,
    category: 25,
    price: 630,
    onlinePrice: 0,
    locations: [1, 2],
    matchedProduct: 'munchkin_3__gunah_kecisi',
    itemProduction: [
      {
        product: 'munchkin_3__gunah_kecisi',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '490',
        date: '2024-12-19T09:01:57.583Z',
      },
      {
        price: '490',
        date: '2024-12-23T06:46:00.639Z',
      },
      {
        price: '490',
        date: '2025-02-03T12:24:15.114Z',
      },
      {
        price: '490',
        date: '2025-03-21T09:34:36.432Z',
      },
      {
        price: 630,
        date: '2025-04-03T14:01:53.122Z',
      },
    ],
    ikasId: '9854dfd4-1864-4fa9-af57-88f4bd636c52',
    productCategories: ['ek_paketler'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 541,
    name: 'Munchkin Cthulhu',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1734084141/forgotton/munchkincthulhu1.png.webp',
    order: 544,
    category: 25,
    price: 780,
    onlinePrice: 0,
    locations: [1, 2],
    matchedProduct: 'munchkin_cthulhuadet',
    itemProduction: [
      {
        product: 'munchkin_cthulhuadet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '600',
        date: '2024-12-19T09:01:57.586Z',
      },
      {
        price: '600',
        date: '2024-12-23T06:46:00.641Z',
      },
      {
        price: '600',
        date: '2025-02-03T12:24:15.116Z',
      },
      {
        price: '600',
        date: '2025-03-21T09:34:36.434Z',
      },
      {
        price: 780,
        date: '2025-04-03T14:01:53.126Z',
      },
    ],
    ikasId: '769d948e-b891-4687-a489-cf31cd18853d',
    productCategories: ['turkce_oyunlar', 'yeni_baslayanlar_icin'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 542,
    name: 'Machi Koro',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1734083425/forgotton/machikoro1.png.webp',
    order: 545,
    category: 25,
    price: 970,
    onlinePrice: 0,
    locations: [1, 2],
    matchedProduct: 'machi_koro',
    itemProduction: [
      {
        product: 'machi_koro',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '740',
        date: '2024-12-19T09:01:57.553Z',
      },
      {
        price: '740',
        date: '2024-12-23T06:46:00.643Z',
      },
      {
        price: '740',
        date: '2025-02-03T12:24:15.120Z',
      },
      {
        price: '740',
        date: '2025-03-21T09:34:36.437Z',
      },
      {
        price: 970,
        date: '2025-04-03T14:01:53.128Z',
      },
    ],
    ikasId: '7a64deee-2552-4f15-92b6-16294b825f6e',
    productCategories: ['turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 543,
    name: 'Cascadia Doğa Harikaları',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1734084217/forgotton/cascadiado%C4%9Faharikalar%C4%B11%20%282%29.png.webp',
    order: 546,
    category: 25,
    price: 1750,
    onlinePrice: 0,
    locations: [1, 2],
    matchedProduct: 'cascadia_doga_harikalari',
    itemProduction: [
      {
        product: 'cascadia_doga_harikalari',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '1370',
        date: '2024-12-19T09:01:57.011Z',
      },
      {
        price: '1370',
        date: '2024-12-23T06:46:00.648Z',
      },
      {
        price: '1370',
        date: '2025-02-03T12:24:15.123Z',
      },
      {
        price: '1370',
        date: '2025-03-21T09:34:36.439Z',
      },
      {
        price: 1750,
        date: '2025-04-03T14:01:53.129Z',
      },
    ],
    ikasId: '14cb40a5-3f85-4a01-a9a7-bdc7c21e6238',
    productCategories: ['ek_paketler'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 548,
    name: 'Destek Köstek',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1734084076/forgotton/destekkostek.png.webp',
    order: 551,
    category: 25,
    price: 750,
    onlinePrice: 0,
    locations: [1, 2],
    matchedProduct: 'destek_kostek',
    itemProduction: [
      {
        product: 'destek_kostek',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '640',
        date: '2024-12-19T09:01:57.189Z',
      },
      {
        price: '640',
        date: '2024-12-23T06:46:00.659Z',
      },
      {
        price: '640',
        date: '2025-02-03T12:24:15.126Z',
      },
      {
        price: '640',
        date: '2025-03-21T09:34:36.442Z',
      },
      {
        price: 750,
        date: '2025-04-03T14:01:53.130Z',
      },
    ],
    ikasId: '9b53f3f5-76cc-41f8-9dc8-49339fd681d3',
    productCategories: ['turkce_oyunlar'],
    productImages: [],
    shownInMenu: true,
  },
  {
    _id: 627,
    name: 'Iye',
    description:
      '    Sadece iki kişi, tam bir strateji şöleni!\n\nİye dünyası, Türk mitolojisinin büyülü iyeleriyle dolu bir yer. Bu eşsiz oyunda, Kam unvanı için yarışan iki çıraktan birisiniz. Rakibinizle birlikte boyun iyelerini dengeyle yönetmeye ve Kam davulunu kullanarak en güçlü iyelerin desteğini kazanmaya çalışıyorsunuz.\n\nİye’de döngüler boyunca rakibinizi hamle yapamayacak duruma getirmeli ya da en yüksek puana ulaşmalısınız. Oyuna başlarken Kam davulunuz, iyelerin büyüleyici gücünü açığa çıkarabileceğiniz bir haritanın merkezinde yer alır. İyelerin sayısını ve yerleşimlerini dikkatlice gözlemleyerek rakibinizi geride bırakacak hamleleri planlamalısınız.',
    imageUrl:
      'https://res.cloudinary.com/dvbg/image/upload/v1737536707/oyunlar/iye1.jpg.webp',
    order: 620,
    category: 25,
    price: 900,
    shownInMenu: true,
    locations: [1, 2],
    productCategories: ['turkce_oyunlar'],
    productImages: [
      'https://res.cloudinary.com/dvbg/image/upload/v1737537839/iye6.jpg.webp',
      'https://res.cloudinary.com/dvbg/image/upload/v1737537839/iye5.jpg.webp',
      'https://res.cloudinary.com/dvbg/image/upload/v1737537839/iye4.jpg.webp',
      'https://res.cloudinary.com/dvbg/image/upload/v1737537839/iye3.jpg.webp',
      'https://res.cloudinary.com/dvbg/image/upload/v1737537839/iye2.jpg.webp',
    ],
    itemProduction: [
      {
        product: 'iye',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '800',
        date: '2025-02-03T12:24:15.129Z',
      },
      {
        price: '800',
        date: '2025-03-21T09:34:36.444Z',
      },
      {
        price: 900,
        date: '2025-04-03T14:01:53.131Z',
      },
    ],
    matchedProduct: 'iye',
    onlinePrice: 800,
    ikasId: 'e0522366-892e-4612-80fd-0b45f00dc5ad',
  },
  {
    _id: 712,
    name: 'Star Realms',
    description: '',
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1741777981/forgotton/star.jpg.webp',
    order: 690,
    category: 25,
    price: 900,
    onlinePrice: 750,
    ikasDiscountedPrice: null,
    shownInMenu: true,
    locations: [1, 2],
    productCategories: [],
    productImages: [],
    matchedProduct: 'star_realms',
    itemProduction: [
      {
        product: 'star_realms',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    priceHistory: [
      {
        price: '750',
        date: '2025-03-21T09:34:36.445Z',
      },
      {
        price: 900,
        date: '2025-04-03T14:01:53.132Z',
      },
    ],
    ikasId: 'cd9b985a-610b-4fef-9c75-cb3c0098857e',
  },
  {
    _id: 196,
    priceHistory: [
      {
        price: '1950',
        date: '2024-08-30T20:09:31.785Z',
      },
      {
        price: '2100',
        date: '2024-09-12T12:13:25.244Z',
      },
      {
        price: '2100',
        date: '2024-10-28T12:30:23.228Z',
      },
      {
        price: '2100',
        date: '2024-11-01T08:10:44.906Z',
      },
      {
        price: '2100',
        date: '2024-11-01T08:39:29.548Z',
      },
      {
        price: '2100',
        date: '2024-11-11T08:03:25.414Z',
      },
      {
        price: '2100',
        date: '2024-12-19T09:01:56.917Z',
      },
      {
        price: '2100',
        date: '2024-12-23T06:46:00.661Z',
      },
      {
        price: '2100',
        date: '2025-02-03T12:24:15.132Z',
      },
      {
        price: '2100',
        date: '2025-03-21T09:34:36.448Z',
      },
      {
        price: '2100',
        date: '2025-04-03T14:01:53.133Z',
      },
    ],
    itemProduction: [
      {
        product: '7_wonders_dueladet',
        quantity: 1,
        isDecrementStock: true,
      },
    ],
    locations: [1, 2],
    price: 2100,
    category: 26,
    order: 190,
    imageUrl:
      'http://res.cloudinary.com/dvbg/image/upload/v1729240885/forgotton/7wondersduel1.png.jpg',
    description: '',
    name: '7 Wonders Duel',
    onlinePrice: 2500,
    matchedProduct: '7_wonders_dueladet',
    productImages: [],
    ikasId: '6a1f1982-91fa-4ffb-bb6d-48e8266cca13',
    productCategories: [
      'yeni_baslayanlar_icin',
      'iki_kisilik_oyunlar',
      'ingilizce_oyunlar',
    ],
    shownInMenu: true,
  },
] as Product[];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products for categories 25 and 26, then by search term
  const filteredProducts = productsData
    .filter((product) => [25, 26].includes(product.category))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-blue-600">
                  {product.price.toFixed(2)} TL
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-600 mt-8">Ürün bulunamadı.</div>
        )}
      </div>
    </div>
  );
}

export default App;
