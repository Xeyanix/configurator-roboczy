const CPUs = [
  {
    id: "702246",
    name: "Intel Pentium G7400",
    price: 419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_4_14_54_34_915_00.jpg",
    link: "https://www.x-kom.pl/p/702246-procesor-intel-pentium-intel-pentium-g7400.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1179896",
    name: "Intel Core i9-14900K",
    price: 1999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_12_8_43_7_810_00.jpg",
    link: "https://www.x-kom.pl/p/1179896-procesor-intel-core-i9-intel-core-i9-14900k.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1079412",
    name: "AMD Ryzen 3 4300G",
    price: 349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_4_12_45_38_587_00.jpg",
    link: "https://www.x-kom.pl/p/1079412-procesor-amd-ryzen-3-amd-ryzen-3-4300g.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1224423",
    name: "Intel Core i9-14900KS",
    price: 2999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/3/pr_2024_3_8_13_32_5_522_00.jpg",
    link: "https://www.x-kom.pl/p/1224423-procesor-intel-core-i9-intel-core-i9-14900ks.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1297773",
    name: "AMD Ryzen 5 5600T",
    price: 479,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_26_12_42_31_538_00.jpg",
    link: "https://www.x-kom.pl/p/1297773-procesor-amd-ryzen-5-amd-ryzen-5-5600t.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1117003",
    name: "AMD Ryzen 9 7950X3D",
    price: 3499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_14_19_6_20_00.jpg",
    link: "https://www.x-kom.pl/p/1117003-procesor-amd-ryzen-9-amd-ryzen-9-7950x3d.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1313065",
    name: "AMD Ryzen 5 7600X3D",
    price: 1499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/1/pr_2025_1_30_13_14_40_981_00.jpg",
    link: "https://www.x-kom.pl/p/1313065-procesor-amd-ryzen-5-amd-ryzen-5-7600x3d.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1283123",
    name: "AMD Ryzen 5 3500",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_21_9_19_44_807_00.png",
    link: "https://www.x-kom.pl/p/1283123-procesor-amd-ryzen-5-amd-ryzen-5-3500.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1208043",
    name: "Intel Core i9-14900",
    price: 2599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_9_22_10_844_00.jpg",
    link: "https://www.x-kom.pl/p/1208043-procesor-intel-core-i9-intel-core-i9-14900.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1101210",
    name: "Intel Core i9-13900",
    price: 2999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_8_54_36_70_01.jpg",
    link: "https://www.x-kom.pl/p/1101210-procesor-intel-core-i9-intel-core-i9-13900.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1101209",
    name: "Intel Core i9-13900F",
    price: 2399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_8_41_51_985_01.jpg",
    link: "https://www.x-kom.pl/p/1101209-procesor-intel-core-i9-intel-core-i9-13900f.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "721316",
    name: "AMD Ryzen 3 1200 OEM",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_12_13_58_30_852_01.jpg",
    link: "https://www.x-kom.pl/p/721316-procesor-amd-ryzen-3-amd-ryzen-3-1200-oem.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "702249",
    name: "Intel Celeron G6900",
    price: 319,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_4_15_2_45_943_00.jpg",
    link: "https://www.x-kom.pl/p/702249-procesor-intel-celeron-intel-celeron-g6900.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "702219",
    name: "Intel Core i9-12900",
    price: 1829,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_23_9_45_10_282_00.jpg",
    link: "https://www.x-kom.pl/p/702219-procesor-intel-core-i9-intel-core-i9-12900.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "577820",
    name: "Intel Pentium Gold G6400",
    price: 309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/7/pr_2020_7_13_18_59_28_986_00.jpg",
    link: "https://www.x-kom.pl/p/577820-procesor-intel-pentium-intel-pentium-gold-g6400.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1200"
    }
  },
  {
    id: "564434",
    name: "Intel Core i9-10900F",
    price: 1799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2020/5/pr_2020_5_6_14_51_49_409_00.jpg",
    link: "https://www.x-kom.pl/p/564434-procesor-intel-core-i9-intel-core-i9-10900f.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1200"
    }
  },
  {
    id: "533442",
    name: "Intel Core i9-10920X",
    price: 3999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/12/pr_2018_12_18_13_57_48_108_00.jpg",
    link: "https://www.x-kom.pl/p/533442-procesor-intel-core-i9-intel-core-i9-10920x.html",
    type: "Procesor",
    specs: {
      socket: "LGA 2066"
    }
  },
  {
    id: "564461",
    name: "Intel Core i5-10600",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2020/5/pr_2020_5_6_15_43_2_54_00.jpg",
    link: "https://www.x-kom.pl/p/564461-procesory-intel-core-i5-intel-core-i5-10600.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1200"
    }
  },
  {
    id: "539162",
    name: "Intel Core i9-10900X",
    price: 3499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/12/pr_2018_12_18_13_50_31_406_00.jpg",
    link: "https://www.x-kom.pl/p/539162-procesor-intel-core-i9-intel-core-i9-10900x.html",
    type: "Procesor",
    specs: {
      socket: "LGA 2066"
    }
  },
  {
    id: "528315",
    name: "AMD Ryzen Threadripper 3970X",
    price: 9899,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2019/11/pr_2019_11_26_12_1_8_544_00.jpg",
    link: "https://www.x-kom.pl/p/528315-procesor-amd-threadripper-amd-ryzen-threadripper-3970x.html",
    type: "Procesor",
    specs: {
      socket: "sTRX4"
    }
  },
  {
    id: "1075053",
    name: "Intel Core i5-13600K",
    price: 1249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/9/pr_2022_9_27_12_10_57_851_00.jpg",
    link: "https://www.x-kom.pl/p/1075053-procesory-intel-core-i5-intel-core-i5-13600k.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1117009",
    name: "AMD Ryzen 9 7900X3D",
    price: 2999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_14_19_6_20_00.jpg",
    link: "https://www.x-kom.pl/p/1117009-procesor-amd-ryzen-9-amd-ryzen-9-7900x3d.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1075057",
    name: "Intel Core i5-13600KF",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/9/pr_2022_9_27_12_11_20_160_02.jpg",
    link: "https://www.x-kom.pl/p/1075057-procesory-intel-core-i5-intel-core-i5-13600kf.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "638664",
    name: "Intel Core i3-10105F",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/3/pr_2021_3_15_14_49_52_428_00.jpg",
    link: "https://www.x-kom.pl/p/638664-procesor-intel-core-i3-intel-core-i3-10105f.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1200"
    }
  },
  {
    id: "702230",
    name: "Intel Core i5-12600",
    price: 1369,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/12/pr_2021_12_23_9_30_34_58_00.jpg",
    link: "https://www.x-kom.pl/p/702230-procesory-intel-core-i5-intel-core-i5-12600.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "724253",
    name: "Intel Core i9-12900KS",
    price: 2499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/3/pr_2022_3_28_11_51_57_833_00.jpg",
    link: "https://www.x-kom.pl/p/724253-procesor-intel-core-i9-intel-core-i9-12900ks.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "626733",
    name: "Intel Core i5-11600",
    price: 1249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/3/pr_2021_3_15_9_54_57_565_00.jpg",
    link: "https://www.x-kom.pl/p/626733-procesory-intel-core-i5-intel-core-i5-11600.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1200"
    }
  },
  {
    id: "745026",
    name: "AMD Ryzen 5 4600G",
    price: 469,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/4/pr_2022_4_4_12_7_15_889_00.jpg",
    link: "https://www.x-kom.pl/p/745026-procesor-amd-ryzen-5-amd-ryzen-5-4600g.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1292320",
    name: "AMD Ryzen 7 9800X3D",
    price: 2349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_6_11_37_33_651_00.jpg",
    link: "https://www.x-kom.pl/p/1292320-procesor-amd-ryzen-7-amd-ryzen-7-9800x3d.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "735703",
    name: "AMD Ryzen 5 5600",
    price: 455,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_4_13_1_27_284_00.jpg",
    link: "https://www.x-kom.pl/p/735703-procesor-amd-ryzen-5-amd-ryzen-5-5600.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1117011",
    name: "AMD Ryzen 7 7800X3D",
    price: 1729,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_28_10_12_13_142_00.jpg",
    link: "https://www.x-kom.pl/p/1117011-procesor-amd-ryzen-7-amd-ryzen-7-7800x3d.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1208062",
    name: "Intel Core i5-14400F",
    price: 559,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_10_17_14_409_00.jpg",
    link: "https://www.x-kom.pl/p/1208062-procesory-intel-core-i5-intel-core-i5-14400f.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "597430",
    name: "AMD Ryzen 7 5800X",
    price: 619,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/10/pr_2020_10_9_13_47_7_306_00.jpg",
    link: "https://www.x-kom.pl/p/597430-procesor-amd-ryzen-7-amd-ryzen-7-5800x.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1072725",
    name: "AMD Ryzen 5 7600X",
    price: 829,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_25_12_49_50_693_03.jpg",
    link: "https://www.x-kom.pl/p/1072725-procesor-amd-ryzen-5-amd-ryzen-5-7600x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "597427",
    name: "AMD Ryzen 5 5600X",
    price: 539,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/10/pr_2020_10_9_12_59_29_839_00.jpg",
    link: "https://www.x-kom.pl/p/597427-procesor-amd-ryzen-5-amd-ryzen-5-5600x.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1105320",
    name: "AMD Ryzen 5 7600",
    price: 749,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_10_11_49_33_369_00.jpg",
    link: "https://www.x-kom.pl/p/1105320-procesor-amd-ryzen-5-amd-ryzen-5-7600.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1213371",
    name: "AMD Ryzen 7 5700X3D",
    price: 1019,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_29_10_22_9_459_00.jpg",
    link: "https://www.x-kom.pl/p/1213371-procesor-amd-ryzen-7-amd-ryzen-7-5700x3d.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1072717",
    name: "AMD Ryzen 7 7700X",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_25_12_59_59_528_00.jpg",
    link: "https://www.x-kom.pl/p/1072717-procesor-amd-ryzen-7-amd-ryzen-7-7700x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "702238",
    name: "Intel Core i5-12400F",
    price: 469,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_23_9_31_19_942_00.jpg",
    link: "https://www.x-kom.pl/p/702238-procesory-intel-core-i5-intel-core-i5-12400f.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "735718",
    name: "AMD Ryzen 7 5700X",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_15_16_29_20_759_00.jpg",
    link: "https://www.x-kom.pl/p/735718-procesor-amd-ryzen-7-amd-ryzen-7-5700x.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1265320",
    name: "AMD Ryzen 5 3600",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/7/pr_2019_7_19_9_27_42_99_00.jpg",
    link: "https://www.x-kom.pl/p/1265320-procesor-amd-ryzen-5-amd-ryzen-5-3600.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1105319",
    name: "AMD Ryzen 7 7700",
    price: 1149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_10_13_37_28_110_00.jpg",
    link: "https://www.x-kom.pl/p/1105319-procesor-amd-ryzen-7-amd-ryzen-7-7700.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1268715",
    name: "AMD Ryzen 7 9700X",
    price: 1399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_30_8_37_28_94_00.jpg",
    link: "https://www.x-kom.pl/p/1268715-procesor-amd-ryzen-7-amd-ryzen-7-9700x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1072706",
    name: "AMD Ryzen 9 7900X",
    price: 1499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_25_12_54_39_334_03.jpg",
    link: "https://www.x-kom.pl/p/1072706-procesor-amd-ryzen-9-amd-ryzen-9-7900x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1179923",
    name: "Intel Core i5-14600K",
    price: 949,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_12_9_30_38_189_00.jpg",
    link: "https://www.x-kom.pl/p/1179923-procesory-intel-core-i5-intel-core-i5-14600k.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "597434",
    name: "AMD Ryzen 9 5950X",
    price: 1069,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/10/pr_2020_10_9_14_6_57_190_00.jpg",
    link: "https://www.x-kom.pl/p/597434-procesor-amd-ryzen-9-amd-ryzen-9-5950x.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1179926",
    name: "Intel Core i5-14600KF",
    price: 879,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_12_9_16_21_154_00.jpg",
    link: "https://www.x-kom.pl/p/1179926-procesory-intel-core-i5-intel-core-i5-14600kf.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1268727",
    name: "AMD Ryzen 5 9600X",
    price: 909,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_30_9_19_45_642_00.jpg",
    link: "https://www.x-kom.pl/p/1268727-procesor-amd-ryzen-5-amd-ryzen-5-9600x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1179922",
    name: "Intel Core i7-14700KF",
    price: 1399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_12_9_51_59_784_00.jpg",
    link: "https://www.x-kom.pl/p/1179922-procesor-intel-core-i7-intel-core-i7-14700kf.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "689598",
    name: "Intel Core i5-12600K",
    price: 799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_26_7_31_43_884_00.jpg",
    link: "https://www.x-kom.pl/p/689598-procesory-intel-core-i5-intel-core-i5-12600k.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1281233",
    name: "Intel Core Ultra 7 265K",
    price: 1349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_17_9_26_35_930_00.jpg",
    link: "https://www.x-kom.pl/p/1281233-procesor-intel-core-ultra-7-intel-core-ultra-7-265k.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "1281232",
    name: "Intel Core Ultra 9 285K",
    price: 2479,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_17_9_47_6_190_00.jpg",
    link: "https://www.x-kom.pl/p/1281232-procesor-intel-core-ultra-9-intel-core-ultra-9-285k.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "689638",
    name: "Intel Core i5‑12600KF",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_26_7_44_49_855_00.jpg",
    link: "https://www.x-kom.pl/p/689638-procesory-intel-core-i5-intel-core-i5-12600kf.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1268707",
    name: "AMD Ryzen 9 9950X",
    price: 2399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_30_9_3_39_291_00.jpg",
    link: "https://www.x-kom.pl/p/1268707-procesor-amd-ryzen-9-amd-ryzen-9-9950x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1310611",
    name: "AMD Ryzen 3 5300G",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/1/pr_2025_1_17_10_4_30_675_00.jpg",
    link: "https://www.x-kom.pl/p/1310611-procesor-amd-ryzen-3-amd-ryzen-3-5300g.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1268710",
    name: "AMD Ryzen 9 9900X",
    price: 1799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_30_9_12_34_733_00.jpg",
    link: "https://www.x-kom.pl/p/1268710-procesor-amd-ryzen-9-amd-ryzen-9-9900x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1208058",
    name: "Intel Core i5‑14400",
    price: 719,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_10_1_32_424_00.jpg",
    link: "https://www.x-kom.pl/p/1208058-procesory-intel-core-i5-intel-core-i5-14400.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1700"
    }
  },
  {
    id: "1105317",
    name: "AMD Ryzen 9 7900",
    price: 1449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_10_12_0_48_797_00.jpg",
    link: "https://www.x-kom.pl/p/1105317-procesor-amd-ryzen-9-amd-ryzen-9-7900.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "735696",
    name: "AMD Ryzen 5 5500",
    price: 289,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_4_13_9_46_828_00.jpg",
    link: "https://www.x-kom.pl/p/735696-procesor-amd-ryzen-5-amd-ryzen-5-5500.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1309671",
    name: "Intel Core Ultra 5 225F",
    price: 1049,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/1/pr_2025_1_13_8_47_13_650_00.jpg",
    link: "https://www.x-kom.pl/p/1309671-procesor-intel-core-ultra-5-intel-core-ultra-5-225f.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "1214172",
    name: "AMD Ryzen 5 8500G",
    price: 629,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_29_9_3_22_528_00.jpg",
    link: "https://www.x-kom.pl/p/1214172-procesor-amd-ryzen-5-amd-ryzen-5-8500g.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },
  {
    id: "1309670",
    name: "Intel Core Ultra 5 225",
    price: 1099,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/1/pr_2025_1_13_8_33_4_14_00.jpg",
    link: "https://www.x-kom.pl/p/1309670-procesor-intel-core-ultra-5-intel-core-ultra-5-225.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "1297774",
    name: "AMD Ryzen 5 5600XT",
    price: 539,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_26_12_42_31_538_00.jpg",
    link: "https://www.x-kom.pl/p/1297774-procesor-amd-ryzen-5-amd-ryzen-5-5600xt.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1268731",
    name: "AMD Ryzen 7 5800XT",
    price: 769,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_30_8_49_3_275_00.jpg",
    link: "https://www.x-kom.pl/p/1268731-procesor-amd-ryzen-7-amd-ryzen-7-5800xt.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1281234",
    name: "Intel Core Ultra 7 265KF",
    price: 1279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_17_9_27_7_373_00.jpg",
    link: "https://www.x-kom.pl/p/1281234-procesor-intel-core-ultra-7-intel-core-ultra-7-265kf.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "1309668",
    name: "Intel Core Ultra 5 235",
    price: 1179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/1/pr_2025_1_13_8_50_50_669_00.jpg",
    link: "https://www.x-kom.pl/p/1309668-procesor-intel-core-ultra-5-intel-core-ultra-5-235.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "1309650",
    name: "Intel Core Ultra 9 285",
    price: 2599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/1/pr_2025_1_13_8_45_46_743_00.jpg",
    link: "https://www.x-kom.pl/p/1309650-procesor-intel-core-ultra-9-intel-core-ultra-9-285.html",
    type: "Procesor",
    specs: {
      socket: "LGA 1851"
    }
  },
  {
    id: "597431",
    name: "AMD Ryzen 9 5900X",
    price: 1079,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/10/pr_2020_10_9_13_56_59_540_00.jpg",
    link: "https://www.x-kom.pl/p/597431-procesor-amd-ryzen-9-amd-ryzen-9-5900x.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1268713",
    name: "AMD Ryzen 9 5900XT",
    price: 1279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_30_9_26_50_598_00.jpg",
    link: "https://www.x-kom.pl/p/1268713-procesor-amd-ryzen-9-amd-ryzen-9-5900xt.html",
    type: "Procesor",
    specs: {
      socket: "AM4"
    }
  },
  {
    id: "1207918",
    name: "Intel Core i9‑14900F",
    price: 2499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_9_10_18_168_00.jpg",
    link: "https://www.x-kom.pl/p/1207918-procesor-intel-core-i9-intel-core-i9-14900f.html",
    type: "Procesor",
    specs: {
      socket: "LGA1700"
    }
  },
  {
    id: "1213365",
    name: "AMD Ryzen 5 8600G",
    price: 749,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_29_9_21_46_803_00.jpg",
    link: "https://www.x-kom.pl/p/1213365-procesor-amd-ryzen-5-amd-ryzen-5-8600g.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },

  {
    id: "1179921",
    name: "Intel Core i7‑14700K",
    price: 1499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/10/pr_2023_10_12_9_41_30_179_00.jpg",
    link: "https://www.x-kom.pl/p/1179921-procesor-intel-core-i7-intel-core-i7-14700k.html",
    type: "Procesor",
    specs: {
      socket: "LGA1700"
    }
  },

  {
    id: "1072683",
    name: "AMD Ryzen 9 7950X",
    price: 2199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/1/pr_2023_1_25_12_54_39_334_03.jpg",
    link: "https://www.x-kom.pl/p/1072683-procesor-amd-ryzen-9-amd-ryzen-9-7950x.html",
    type: "Procesor",
    specs: {
      socket: "AM5"
    }
  },



  {
    id: "1072683",
    name: "AMD Ryzen 9 7950X",
    price: 2199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/1/pr_2023_1_25_12_54_39_334_03.jpg",
    link: "https://www.x-kom.pl/p/1072683-procesor-amd-ryzen-9-amd-ryzen-9-7950x.html",
    type: "Procesor",
    specs: { socket: "AM5" }
  },
  {
    id: "702235",
    name: "Intel Core i5-12400",
    price: 639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/12/pr_2021_12_23_9_30_34_58_00.jpg",
    link: "https://www.x-kom.pl/p/702235-procesory-intel-core-i5-intel-core-i5-12400.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1214222",
    name: "AMD Ryzen 7 8700G",
    price: 1099,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_29_10_2_36_732_00.jpg",
    link: "https://www.x-kom.pl/p/1214222-procesor-amd-ryzen-7-amd-ryzen-7-8700g.html",
    type: "Procesor",
    specs: { socket: "AM5" }
  },
  {
    id: "1208077",
    name: "Intel Core i3-14100",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_5_8_42_11_723_00.jpg",
    link: "https://www.x-kom.pl/p/1208077-procesor-intel-core-i3-intel-core-i3-14100.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "665219",
    name: "AMD Ryzen 5 5600G",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/8/pr_2021_8_4_15_3_7_394_00.jpg",
    link: "https://www.x-kom.pl/p/665219-procesor-amd-ryzen-5-amd-ryzen-5-5600g.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1213372",
    name: "AMD Ryzen 7 5700",
    price: 469,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_29_9_50_59_686_00.jpg",
    link: "https://www.x-kom.pl/p/1213372-procesor-amd-ryzen-7-amd-ryzen-7-5700.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "689603",
    name: "Intel Core i7-12700K",
    price: 1079,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/10/pr_2021_10_26_7_35_16_132_00.jpg",
    link: "https://www.x-kom.pl/p/689603-procesor-intel-core-i7-intel-core-i7-12700k.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "689604",
    name: "Intel Core i7-12700KF",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/10/pr_2021_10_26_7_40_0_88_00.jpg",
    link: "https://www.x-kom.pl/p/689604-procesor-intel-core-i7-intel-core-i7-12700kf.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1321668",
    name: "AMD Ryzen 9 9900X3D",
    price: 2689,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_10_15_16_50_148_00.jpg",
    link: "https://www.x-kom.pl/p/1321668-procesor-amd-ryzen-9-amd-ryzen-9-9900x3d.html",
    type: "Procesor",
    specs: { socket: "AM5" }
  },
  {
    id: "1247479",
    name: "AMD Ryzen 5 8400F",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/7/pr_2024_7_24_11_14_35_523_00.jpg",
    link: "https://www.x-kom.pl/p/1247479-procesor-amd-ryzen-5-amd-ryzen-5-8400f.html",
    type: "Procesor",
    specs: { socket: "AM5" }
  },
  {
    id: "702233",
    name: "Intel Core i5-12500",
    price: 819,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/12/pr_2021_12_23_9_30_34_58_00.jpg",
    link: "https://www.x-kom.pl/p/702233-procesory-intel-core-i5-intel-core-i5-12500.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1321669",
    name: "AMD Ryzen 9 9950X3D",
    price: 3499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_10_15_18_29_851_00.jpg",
    link: "https://www.x-kom.pl/p/1321669-procesor-amd-ryzen-9-amd-ryzen-9-9950x3d.html",
    type: "Procesor",
    specs: { socket: "AM5" }
  },
  {
    id: "689633",
    name: "Intel Core i9-12900KF",
    price: 1329,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/10/pr_2021_10_26_7_26_53_242_00.jpg",
    link: "https://www.x-kom.pl/p/689633-procesor-intel-core-i9-intel-core-i9-12900kf.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1101200",
    name: "Intel Core i5-13500",
    price: 1099,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/1/pr_2023_1_2_8_18_54_246_02.jpg",
    link: "https://www.x-kom.pl/p/1101200-procesory-intel-core-i5-intel-core-i5-13500.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "689606",
    name: "Intel Core i9-12900K",
    price: 1419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_26_7_49_18_782_00.jpg",
    link: "https://www.x-kom.pl/p/689606-procesor-intel-core-i9-intel-core-i9-12900k.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "702244",
    name: "Intel Core i3-12100F",
    price: 329,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_23_9_29_13_571_00.jpg",
    link: "https://www.x-kom.pl/p/702244-procesor-intel-core-i3-intel-core-i3-12100f.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1214215",
    name: "AMD Ryzen 5 5500GT",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_29_9_34_34_606_00.jpg",
    link: "https://www.x-kom.pl/p/1214215-procesor-amd-ryzen-5-amd-ryzen-5-5500gt.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1073570",
    name: "Intel Core i7-13700K",
    price: 1799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_27_11_58_46_663_00.jpg",
    link: "https://www.x-kom.pl/p/1073570-procesor-intel-core-i7-intel-core-i7-13700k.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1208052",
    name: "Intel Core i5-14500",
    price: 1059,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_8_22_33_718_00.jpg",
    link: "https://www.x-kom.pl/p/1208052-procesory-intel-core-i5-intel-core-i5-14500.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1208079",
    name: "Intel Core i3-14100F",
    price: 349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_9_44_34_283_00.jpg",
    link: "https://www.x-kom.pl/p/1208079-procesor-intel-core-i3-intel-core-i3-14100f.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1101195",
    name: "Intel Core i5-13400F",
    price: 569,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_8_1_22_776_02.jpg",
    link: "https://www.x-kom.pl/p/1101195-procesory-intel-core-i5-intel-core-i5-13400f.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "564465",
    name: "Intel Core i5-10400F",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/5/pr_2020_5_6_15_54_11_386_00.jpg",
    link: "https://www.x-kom.pl/p/564465-procesory-intel-core-i5-intel-core-i5-10400f.html",
    type: "Procesor",
    specs: { socket: "LGA1200" }
  },
  {
    id: "702225",
    name: "Intel Core i7-12700",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_23_9_40_42_356_00.jpg",
    link: "https://www.x-kom.pl/p/702225-procesor-intel-core-i7-intel-core-i7-12700.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1214207",
    name: "AMD Ryzen 5 5600GT",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_29_10_34_16_852_00.jpg",
    link: "https://www.x-kom.pl/p/1214207-procesor-amd-ryzen-5-amd-ryzen-5-5600gt.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "702241",
    name: "Intel Core i3-12100",
    price: 489,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_23_9_28_17_439_00.jpg",
    link: "https://www.x-kom.pl/p/702241-procesor-intel-core-i3-intel-core-i3-12100.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "665238",
    name: "AMD Ryzen 7 5700G",
    price: 619,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/8/pr_2021_8_4_13_57_4_57_00.jpg",
    link: "https://www.x-kom.pl/p/665238-procesor-amd-ryzen-7-amd-ryzen-7-5700g.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "564466",
    name: "Intel Core i5-10400",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/5/pr_2020_5_6_15_52_43_481_00.jpg",
    link: "https://www.x-kom.pl/p/564466-procesory-intel-core-i5-intel-core-i5-10400.html",
    type: "Procesor",
    specs: { socket: "LGA1200" }
  },
  {
    id: "735702",
    name: "AMD Ryzen 5 4500",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_4_12_7_15_889_00.jpg",
    link: "https://www.x-kom.pl/p/735702-procesor-amd-ryzen-5-amd-ryzen-5-4500.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1208049",
    name: "Intel Core i7-14700F",
    price: 1299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_10_32_34_168_00.jpg",
    link: "https://www.x-kom.pl/p/1208049-procesor-intel-core-i7-intel-core-i7-14700f.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1101198",
    name: "Intel Core i5-13400",
    price: 669,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_8_18_54_246_02.jpg",
    link: "https://www.x-kom.pl/p/1101198-procesory-intel-core-i5-intel-core-i5-13400.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1101205",
    name: "Intel Core i7-13700F",
    price: 1299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_9_15_18_935_00.jpg",
    link: "https://www.x-kom.pl/p/1101205-procesor-intel-core-i7-intel-core-i7-13700f.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "560813",
    name: "AMD Ryzen 3 3100",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/4/pr_2020_4_21_7_31_0_317_00.jpg",
    link: "https://www.x-kom.pl/p/560813-procesor-amd-ryzen-3-amd-ryzen-3-3100.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1208047",
    name: "Intel Core i7-14700",
    price: 1399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_5_10_38_57_224_00.jpg",
    link: "https://www.x-kom.pl/p/1208047-procesor-intel-core-i7-intel-core-i7-14700.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1101208",
    name: "Intel Core i7-13700",
    price: 1399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_8_45_49_660_00.jpg",
    link: "https://www.x-kom.pl/p/1101208-procesor-intel-core-i7-intel-core-i7-13700.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "500096",
    name: "AMD Ryzen 5 3400G",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/7/pr_2019_7_19_9_59_52_625_00.jpg",
    link: "https://www.x-kom.pl/p/500096-procesor-amd-ryzen-5-amd-ryzen-5-3400g.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1101181",
    name: "Intel Core i3-13100",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_9_0_26_52_02.jpg",
    link: "https://www.x-kom.pl/p/1101181-procesor-intel-core-i3-intel-core-i3-13100.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "500085",
    name: "AMD Ryzen 5 3600",
    price: 279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/7/pr_2019_7_19_9_27_42_99_00.jpg",
    link: "https://www.x-kom.pl/p/500085-procesor-amd-ryzen-5-amd-ryzen-5-3600.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1100878",
    name: "Intel Core i3-13100F",
    price: 349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_2_9_7_5_298_02.jpg",
    link: "https://www.x-kom.pl/p/1100878-procesor-intel-core-i3-intel-core-i3-13100f.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "1281236",
    name: "Intel Core Ultra 5 245KF",
    price: 1249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_17_9_34_6_665_00.jpg",
    link: "https://www.x-kom.pl/p/1281236-procesor-intel-core-ultra-5-intel-core-ultra-5-245kf.html",
    type: "Procesor",
    specs: { socket: "LGA1851" }
  },
  {
    id: "1281235",
    name: "Intel Core Ultra 5 245K",
    price: 1349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_17_9_34_6_665_00.jpg",
    link: "https://www.x-kom.pl/p/1281235-procesor-intel-core-ultra-5-intel-core-ultra-5-245k.html",
    type: "Procesor",
    specs: { socket: "LGA1851" }
  },
  {
    id: "1247565",
    name: "AMD Ryzen 7 8700F",
    price: 1049,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_24_11_18_34_934_03.jpg",
    link: "https://www.x-kom.pl/p/1247565-procesor-amd-ryzen-7-amd-ryzen-7-8700f.html",
    type: "Procesor",
    specs: { socket: "AM5" }
  },
  {
    id: "500097",
    name: "AMD Ryzen 3 3200G",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/7/pr_2019_7_19_10_21_7_743_00.jpg",
    link: "https://www.x-kom.pl/p/500097-procesor-amd-ryzen-3-amd-ryzen-3-3200g.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },
  {
    id: "1179909",
    name: "Intel Core i9-14900KF",
    price: 1799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_12_9_1_5_805_00.jpg",
    link: "https://www.x-kom.pl/p/1179909-procesor-intel-core-i9-intel-core-i9-14900kf.html",
    type: "Procesor",
    specs: { socket: "LGA1700" }
  },
  {
    id: "735711",
    name: "AMD Ryzen 3 4100",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_4_12_45_38_587_00.jpg",
    link: "https://www.x-kom.pl/p/735711-procesor-amd-ryzen-3-amd-ryzen-3-4100.html",
    type: "Procesor",
    specs: { socket: "AM4" }
  },

];

module.exports = CPUs;
