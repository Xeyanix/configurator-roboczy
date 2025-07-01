const RAMs = [
  {
    id: "1182223",
    name: "GOODRAM 32GB (2x16GB) 6000MHz CL30 IRDM BLACK V SILVER",
    price: 430,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_22_8_53_46_748_00.jpg",
    link: "https://www.x-kom.pl/p/1182223-pamiec-ram-ddr5-goodram-32gb-2x16gb-6000mhz-cl30-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "667289",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL16 Beast Black",
    price: 285,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667289-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "647620",
    name: "GOODRAM 32GB (2x16GB) 3600MHz CL18 IRDM PRO Deep Black",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_27_12_55_1_344_02.jpg",
    link: "https://www.x-kom.pl/p/647620-pamiec-ram-ddr4-goodram-32gb-2x16gb-3600mhz-cl18-irdm-pro-deep-black.html",
    type: "RAM"
  },
  {
    id: "1184835",
    name: "Lexar 32GB (2x16GB) 6000MHz CL30 Ares RGB",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/8/pr_2023_8_3_13_7_52_603_00.jpg",
    link: "https://www.x-kom.pl/p/1184835-pamiec-ram-ddr5-lexar-32gb-2x16gb-6000mhz-cl30-ares-rgb.html",
    type: "RAM"
  },
  {
    id: "667295",
    name: "Kingston FURY 16GB (2x8GB) 3200MHz CL16 Beast Black",
    price: 157,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667295-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "1233440",
    name: "Kingston FURY 32GB (2x16GB) 6000MHz CL30 Beast Black XMP",
    price: 467,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233440-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6000mhz-cl30-beast-black-xmp.html",
    type: "RAM"
  },
  {
    id: "266765",
    name: "G.SKILL 32GB (2x16GB) 3200MHz CL16 Ripjaws V Black",
    price: 255,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_18_33_145.jpg",
    link: "https://www.x-kom.pl/p/266765-pamiec-ram-ddr4-gskill-32gb-2x16gb-3200mhz-cl16-ripjaws-v-black.html",
    type: "RAM"
  },
  {
    id: "497386",
    name: "Patriot 32GB (2x16GB) 3200MHz CL16 Viper Steel",
    price: 245,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_17_828_00.jpg",
    link: "https://www.x-kom.pl/p/497386-pamiec-ram-ddr4-patriot-32gb-2x16gb-3200mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "668669",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL20 Impact",
    price: 265,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_14_14_28_2_217_01.jpg",
    link: "https://www.x-kom.pl/p/668669-pamiec-ram-sodimm-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl20-impact.html",
    type: "RAM"
  },
  {
    id: "539243",
    name: "G.SKILL 16GB (2x8GB) 3200MHz CL16 Aegis",
    price: 129,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/1/pr_2020_1_16_15_27_23_437_02.jpg",
    link: "https://www.x-kom.pl/p/539243-pamiec-ram-ddr4-gskill-16gb-2x8gb-3200mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "1239934",
    name: "Kingston FURY 64GB (2x32GB) 6000MT/s CL30 Beast Black XMP RGB",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/9/pr_2024_9_9_14_30_1_890_00.jpg",
    link: "https://www.x-kom.pl/p/1239934-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000mt-s-cl30-beast-black-xmp-rgb.html",
    type: "RAM"
  },
  {
    id: "1258925",
    name: "Patriot 32GB (2x16GB) 6000MT/s CL30 Venom",
    price: 419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1258925-pamiec-ram-ddr5-patriot-32gb-2x16gb-6000mt-s-cl30-venom.html",
    type: "RAM"
  },
  {
    id: "1193783",
    name: "Kingston FURY 32GB (2x16GB) 3600MHz CL16 Renegade Black",
    price: 309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/11/pr_2023_11_7_13_37_4_859_00.jpg",
    link: "https://www.x-kom.pl/p/1193783-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl16-renegade-black.html",
    type: "RAM"
  },
  {
    id: "581120",
    name: "GOODRAM 16GB (1x16GB) 3200MHz CL22",
    price: 127,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2020/7/pr_2020_7_22_12_41_0_922_00.jpg",
    link: "https://www.x-kom.pl/p/581120-pamiec-ram-sodimm-ddr4-goodram-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1182224",
    name: "GOODRAM 64GB (2x32GB) 6000MHz CL30 IRDM BLACK V SILVER",
    price: 909,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_22_8_53_46_748_00.jpg",
    link: "https://www.x-kom.pl/p/1182224-pamiec-ram-ddr5-goodram-64gb-2x32gb-6000mhz-cl30-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "1182225",
    name: "GOODRAM 32GB (2x16GB) 6400MHz CL32 IRDM BLACK V SILVER",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/9/pr_2023_9_22_9_24_53_830_00.jpg",
    link: "https://www.x-kom.pl/p/1182225-pamiec-ram-ddr5-goodram-32gb-2x16gb-6400mhz-cl32-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "1214415",
    name: "Lexar 32GB (2x16GB) 3600MHz CL18 Thor",
    price: 259,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_22_14_43_27_53_00.jpg",
    link: "https://www.x-kom.pl/p/1214415-pamiec-ram-ddr4-lexar-32gb-2x16gb-3600mhz-cl18-thor.html",
    type: "RAM"
  },
  {
    id: "1318532",
    name: "Crucial 96GB (2x48GB) 5600 CL46 do notebooka",
    price: 849,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/2/pr_2025_2_21_12_4_41_967_00.jpg",
    link: "https://www.x-kom.pl/p/1318532-pamiec-ram-sodimm-ddr5-crucial-96gb-2x48gb-5600-cl46-do-notebooka.html",
    type: "RAM"
  },
  {
    id: "1318476",
    name: "Crucial 16GB (1x16GB) 6400 CL38 Pro OC White",
    price: 259,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/2/pr_2025_2_21_12_33_11_659_00.jpg",
    link: "https://www.x-kom.pl/p/1318476-pamiec-ram-ddr5-crucial-16gb-1x16gb-6400-cl38-pro-oc-white.html",
    type: "RAM"
  },
  {
    id: "1318474",
    name: "Crucial 32GB (2x16GB) 6400 CL38 Pro oC White",
    price: 615,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/2/pr_2025_2_21_12_29_45_704_00.jpg",
    link: "https://www.x-kom.pl/p/1318474-pamiec-ram-ddr5-crucial-32gb-2x16gb-6400-cl38-pro-oc-white.html",
    type: "RAM"
  },
  {
    id: "1318471",
    name: "Crucial 16GB (1x16GB) 6400 CL38 PRO OC",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/2/pr_2025_2_21_12_35_23_379_00.jpg",
    link: "https://www.x-kom.pl/p/1318471-pamiec-ram-ddr5-crucial-16gb-1x16gb-6400-cl38-pro-oc.html",
    type: "RAM"
  },
  {
    id: "667525",
    name: "Kingston FURY 32GB (2x16GB) 3600MHz CL18 Beast Black",
    price: 369,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667525-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl18-beast-black.html",
    type: "RAM"
  },
  {
    id: "1258924",
    name: "Patriot 64GB (2x32GB) 6000MT/s CL30 Venom",
    price: 809,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1258924-pamiec-ram-ddr5-patriot-64gb-2x32gb-6000mt-s-cl30-venom.html",
    type: "RAM"
  },
  {
    id: "1239947",
    name: "Kingston FURY 32GB (2x16GB) 6000MT/s CL30 Beast Black EXPO",
    price: 475,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1239947-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6000mt-s-cl30-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "647614",
    name: "GOODRAM 16GB (2x8GB) 3600MHz CL18 IRDM PRO Deep Black",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/4/pr_2021_4_27_12_53_46_809_00.jpg",
    link: "https://www.x-kom.pl/p/647614-pamiec-ram-ddr4-goodram-16gb-2x8gb-3600mhz-cl18-irdm-pro-deep-black.html",
    type: "RAM"
  },
  {
    id: "1310774",
    name: "Lexar 32GB(2x16GB) 6000 CL28 Ares RGB Black",
    price: 609,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_13_8_28_23_360_00.jpg",
    link: "https://www.x-kom.pl/p/1310774-pamiec-ram-ddr5-lexar-32gb2x16gb-6000-cl28-ares-rgb-black.html",
    type: "RAM"
  },
  {
    id: "1072100",
    name: "Kingston FURY 32GB (2x16GB) 5600MHz CL36 Beast RGB EXPO AMD",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/9/pr_2022_9_13_13_22_33_742_00.jpg",
    link: "https://www.x-kom.pl/p/1072100-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5600mhz-cl36-beast-rgb-expo-amd.html",
    type: "RAM"
  },
  {
    id: "410049",
    name: "GOODRAM 8GB (1x8GB) 2400MHz CL17",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/2/pr_2018_2_19_15_25_13_45_00.jpg",
    link: "https://www.x-kom.pl/p/410049-pamiec-ram-sodimm-ddr4-goodram-8gb-1x8gb-2400mhz-cl17.html",
    type: "RAM"
  },
  {
    id: "667516",
    name: "Kingston FURY 16GB (2x8GB) 3600MHz CL17 Beast Black",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667516-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3600mhz-cl17-beast-black.html",
    type: "RAM"
  },
  {
    id: "1116184",
    name: "Kingston FURY 32GB (2x16GB) 5600MHz CL40 Impact",
    price: 363,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/4/pr_2022_4_5_13_29_52_199_00.jpg",
    link: "https://www.x-kom.pl/p/1116184-pamiec-ram-sodimm-ddr5-kingston-fury-32gb-2x16gb-5600mhz-cl40-impact.html",
    type: "RAM"
  },
  {
    id: "1221977",
    name: "ADATA 32GB (2x16GB) 6000MHz CL30 Lancer Blade",
    price: 415,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_15_10_51_46_113_00.jpg",
    link: "https://www.x-kom.pl/p/1221977-pamiec-ram-ddr5-adata-32gb-2x16gb-6000mhz-cl30-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "1264627",
    name: "Crucial 32GB (1x32GB) 5600 MHz CL46",
    price: 339,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_4_7_43_33_800_00.jpg",
    link: "https://www.x-kom.pl/p/1264627-pamiec-ram-sodimm-ddr5-crucial-32gb-1x32gb-5600-mhz-cl46.html",
    type: "RAM"
  },
  {
    id: "410051",
    name: "GOODRAM 16GB (1x16GB) 2400MHz CL17",
    price: 119,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/2/pr_2018_2_19_15_25_13_45_00.jpg",
    link: "https://www.x-kom.pl/p/410051-pamiec-ram-sodimm-ddr4-goodram-16gb-1x16gb-2400mhz-cl17.html",
    type: "RAM"
  },
  {
    id: "667492",
    name: "Kingston FURY 64GB (2x32GB) 3200MHz CL16 Beast Black",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667492-pamiec-ram-ddr4-kingston-fury-64gb-2x32gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "1233442",
    name: "Kingston FURY 64GB (2x32GB) 6000MHz CL30 Beast White EXPO",
    price: 939,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_56_30_447_00.jpg",
    link: "https://www.x-kom.pl/p/1233442-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000mhz-cl30-beast-white-expo.html",
    type: "RAM"
  },
  {
    id: "1075042",
    name: "Lexar 32GB (2x16GB) 3200MHz CL16 Thor",
    price: 259,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/7/pr_2022_7_26_8_53_33_828_00.jpg",
    link: "https://www.x-kom.pl/p/1075042-pamiec-ram-ddr4-lexar-32gb-2x16gb-3200mhz-cl16-thor.html",
    type: "RAM"
  },
  {
    id: "649156",
    name: "GOODRAM 16GB (2x8GB) 3200MHz CL16 IRDM X Black",
    price: 145,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/5/pr_2021_5_5_12_22_53_313_00.jpg",
    link: "https://www.x-kom.pl/p/649156-pamiec-ram-ddr4-goodram-16gb-2x8gb-3200mhz-cl16-irdm-x-black.html",
    type: "RAM"
  },
  {
    id: "668682",
    name: "Kingston FURY 32GB (1x32GB) 3200MHz CL20 Impact",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_14_14_25_3_432_01.jpg",
    link: "https://www.x-kom.pl/p/668682-pamiec-ram-sodimm-ddr4-kingston-fury-32gb-1x32gb-3200mhz-cl20-impact.html",
    type: "RAM"
  },
  {
    id: "1317980",
    name: "G.SKILL 32GB (2x16GB) 6400 CL30 Trident Z5 RGB",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_22_12_48_36_907_00.jpg",
    link: "https://www.x-kom.pl/p/1317980-pamiec-ram-ddr5-gskill-32gb-2x16gb-6400-cl30-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "1139149",
    name: "Patriot 32GB (2x16GB) 6000MHz CL36 VIPER VENOM",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1139149-pamiec-ram-ddr5-patriot-32gb-2x16gb-6000mhz-cl36-viper-venom.html",
    type: "RAM"
  },
  {
    id: "266771",
    name: "G.SKILL 16GB (2x8GB) 3200MHz CL16 Ripjaws V Black",
    price: 145,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/266771-pamiec-ram-ddr4-gskill-16gb-2x8gb-3200mhz-cl16-ripjaws-v-black.html",
    type: "RAM"
  },
  {
    id: "594404",
    name: "Crucial 32GB (1x32GB) 3200MHz",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/7/pr_2023_7_12_8_14_37_370_00.jpg",
    link: "https://www.x-kom.pl/p/594404-pamiec-ram-sodimm-ddr4-crucial-32gb-1x32gb-3200mhz.html",
    type: "RAM"
  },
  {
    id: "1296280",
    name: "Kingston FURY 24GB 8400MT/s CL40 CUDIMM Renegade Silver RGB XMP",
    price: 639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_25_14_43_43_454_00.jpg",
    link: "https://www.x-kom.pl/p/1296280-pamiec-ram-ddr5-kingston-fury-24gb-8400mt-s-cl40-cudimm-renegade-silver-rgb-xmp.html",
    type: "RAM"
  },
  {
    id: "576882",
    name: "GOODRAM 16GB (1x16GB) 2666MHz CL19",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/7/pr_2020_7_7_13_48_16_575_00.jpg",
    link: "https://www.x-kom.pl/p/576882-pamiec-ram-sodimm-ddr4-goodram-16gb-1x16gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "1291613",
    name: "G.SKILL 48GB (2x24GB) 8000MHz CL40 Trident Z5 RGB XMP",
    price: 1389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_27_14_14_45_235_01.jpg",
    link: "https://www.x-kom.pl/p/1291613-pamiec-ram-ddr5-gskill-48gb-2x24gb-8000mhz-cl40-trident-z5-rgb-xmp.html",
    type: "RAM"
  },
  {
    id: "1182226",
    name: "GOODRAM 64GB (2x32GB) 6400MHz CL32 IRDM BLACK V SILVER",
    price: 909,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_22_9_29_58_934_00.jpg",
    link: "https://www.x-kom.pl/p/1182226-pamiec-ram-ddr5-goodram-64gb-2x32gb-6400mhz-cl32-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "1154772",
    name: "Crucial 16GB (1x16GB) 5600MHz CL46",
    price: 179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/6/pr_2023_6_28_11_1_39_89_00.jpg",
    link: "https://www.x-kom.pl/p/1154772-pamiec-ram-sodimm-ddr5-crucial-16gb-1x16gb-5600mhz-cl46.html",
    type: "RAM"
  },
  {
    id: "1206272",
    name: "Kingston FURY 16GB (2x8GB) 3600MHz CL16 Renegade Black",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_7_13_37_4_859_00.jpg",
    link: "https://www.x-kom.pl/p/1206272-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3600mhz-cl16-renegade-black.html",
    type: "RAM"
  },
  {
    id: "1289350",
    name: "Corsair 32GB (2x16GB) 6400 CL32 Intel XMP Vengeance",
    price: 569,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1289350-pamiec-ram-ddr5-corsair-32gb-2x16gb-6400-cl32-intel-xmp-vengeance.html",
    type: "RAM"
  },
  {
    id: "668644",
    name: "Kingston FURY 16GB (2x8GB) 3200MHz CL20 Impact",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_14_14_28_2_217_01.jpg",
    link: "https://www.x-kom.pl/p/668644-pamiec-ram-sodimm-ddr4-kingston-fury-16gb-2x8gb-3200mhz-cl20-impact.html",
    type: "RAM"
  },
  {
    id: "1116185",
    name: "Kingston FURY 64GB (2x32GB) 5600MHz CL40 Impact",
    price: 689,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_29_52_199_00.jpg",
    link: "https://www.x-kom.pl/p/1116185-pamiec-ram-sodimm-ddr5-kingston-fury-64gb-2x32gb-5600mhz-cl40-impact.html",
    type: "RAM"
  },
  {
    id: "1276253",
    name: "ADATA 32GB (2x16GB) 6000MHz CL30 Lancer Blade",
    price: 459,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/8/pr_2024_8_26_10_33_35_159_00.jpg",
    link: "https://www.x-kom.pl/p/1276253-pamiec-ram-ddr5-adata-32gb-2x16gb-6000mhz-cl30-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "594248",
    name: "Crucial 16GB (1x16GB) 3200MHz CL22",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_17_15_31_25_231_00.jpg",
    link: "https://www.x-kom.pl/p/594248-pamiec-ram-sodimm-ddr4-crucial-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "623351",
    name: "Patriot 8GB (1x8GB) 2133MHz Signature",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_28_12_17_14_417_00.jpg",
    link: "https://www.x-kom.pl/p/623351-pamiec-ram-sodimm-ddr4-patriot-8gb-1x8gb-2133mhz-signature.html",
    type: "RAM"
  },
  {
    id: "427809",
    name: "G.SKILL 32GB (2x16GB) 3000MHz CL16 Aegis",
    price: 225,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_30_15_211.jpg",
    link: "https://www.x-kom.pl/p/427809-pamiec-ram-ddr4-gskill-32gb-2x16gb-3000mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "1145161",
    name: "Crucial 64GB (2x32GB) 3200MHz CL22 Pro",
    price: 579,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/5/pr_2023_5_19_9_42_28_963_02.jpg",
    link: "https://www.x-kom.pl/p/1145161-pamiec-ram-ddr4-crucial-64gb-2x32gb-3200mhz-cl22-pro.html",
    type: "RAM"
  },
  {
    id: "1155535",
    name: "Corsair 16GB (2x8GB) 3600MHz CL16 Vengeance",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/6/pr_2023_6_22_14_8_49_903_00.jpg",
    link: "https://www.x-kom.pl/p/1155535-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl16-vengeance.html",
    type: "RAM"
  },
  {
    id: "1239917",
    name: "Crucial 16GB (1x16GB) 5600MHz CL46",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/7/pr_2024_7_26_12_55_4_949_00.jpg",
    link: "https://www.x-kom.pl/p/1239917-pamiec-ram-ddr5-crucial-16gb-1x16gb-5600mhz-cl46.html",
    type: "RAM"
  },
  {
    id: "1263464",
    name: "Kingston FURY 48GB (2x24GB) 8000MT/s CL36 Renegade RGB LE XMP",
    price: 1189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/6/pr_2024_6_25_11_20_59_263_00.jpg",
    link: "https://www.x-kom.pl/p/1263464-pamiec-ram-ddr5-kingston-fury-48gb-2x24gb-8000mt-s-cl36-renegade-rgb-le-xmp.html",
    type: "RAM"
  },
  {
    id: "1294395",
    name: "Lexar 32GB (2x16GB) 6000 CL38 THOR",
    price: 409,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_12_9_39_35_305_00.jpg",
    link: "https://www.x-kom.pl/p/1294395-pamiec-ram-ddr5-lexar-32gb-2x16gb-6000-cl38-thor.html",
    type: "RAM"
  },
  {
    id: "1116197",
    name: "Kingston FURY 16GB (2x8GB) 6000MHz CL36 Beast Black EXPO",
    price: 259,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1116197-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-6000mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "1249000",
    name: "Lexar 32GB (2x16GB) 6000MHz CL32 Ares Gaming",
    price: 409,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/5/pr_2024_5_27_14_32_11_955_00.jpg",
    link: "https://www.x-kom.pl/p/1249000-pamiec-ram-ddr5-lexar-32gb-2x16gb-6000mhz-cl32-ares-gaming.html",
    type: "RAM"
  },
  {
    id: "576881",
    name: "GOODRAM 8GB (1x8GB) 2666MHz CL19",
    price: 73,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/7/pr_2020_7_7_13_48_16_575_00.jpg",
    link: "https://www.x-kom.pl/p/576881-pamiec-ram-sodimm-ddr4-goodram-8gb-1x8gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "610823",
    name: "GOODRAM 16GB (1x16GB) 2666MHz CL19",
    price: 111,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/12/pr_2020_12_1_12_41_11_339_00.jpg",
    link: "https://www.x-kom.pl/p/610823-pamiec-ram-ddr4-goodram-16gb-1x16gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "1239933",
    name: "Kingston FURY 32GB (2x16GB) 6000MT/s CL30 Beast RGB",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_7_8_22_40_625_00.jpg",
    link: "https://www.x-kom.pl/p/1239933-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6000mt-s-cl30-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1074870",
    name: "Kingston 16GB (1x16GB) 3200MHz CL22",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_23_15_7_55_930_00.jpg",
    link: "https://www.x-kom.pl/p/1074870-pamiec-ram-sodimm-ddr4-kingston-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1214473",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL30 Trident Z5 AMD EXPO",
    price: 569,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_22_11_45_13_452_00.jpg",
    link: "https://www.x-kom.pl/p/1214473-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl30-trident-z5-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1072072",
    name: "Kingston FURY 32GB (2x16GB) 5600MHz CL36 Beast Black EXPO AMD",
    price: 389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_19_33_333_00.jpg",
    link: "https://www.x-kom.pl/p/1072072-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5600mhz-cl36-beast-black-expo-amd.html",
    type: "RAM"
  },
  {
    id: "1197145",
    name: "Kingston 16GB (1x16GB) 5600MHz CL46",
    price: 242.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_6_12_20_14_17_00.jpg",
    link: "https://www.x-kom.pl/p/1197145-pamiec-ram-sodimm-ddr5-kingston-16gb-1x16gb-5600mhz-cl46.html",
    type: "RAM"
  },
  {
    id: "1214471",
    name: "G.SKILL 32GB (2x16GB) 6400MHz CL32 Trident Z5",
    price: 515,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_22_13_4_17_992_00.jpg",
    link: "https://www.x-kom.pl/p/1214471-pamiec-ram-ddr5-gskill-32gb-2x16gb-6400mhz-cl32-trident-z5.html",
    type: "RAM"
  },
  {
    id: "667484",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL16 Beast Black",
    price: 277,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667484-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "1218523",
    name: "Patriot 32GB (2x16GB) 6600MHz 34 Viper Elite 5 TUF RGB",
    price: 549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_1_11_17_48_182_00.jpg",
    link: "https://www.x-kom.pl/p/1218523-pamiec-ram-ddr5-patriot-32gb-2x16gb-6600mhz-34-viper-elite-5-tuf-rgb.html",
    type: "RAM"
  },
  {
    id: "1235065",
    name: "ADATA 32GB (2x16GB) 6400MHz CL32 XPG Lancer Blade",
    price: 447,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/4/pr_2024_4_2_12_34_58_976_01.jpg",
    link: "https://www.x-kom.pl/p/1235065-pamiec-ram-ddr5-adata-32gb-2x16gb-6400mhz-cl32-xpg-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "1259045",
    name: "Corsair 64GB (2x32GB) 6000MT/s CL30 Vengeance RGB Intel XMP",
    price: 1059,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1259045-pamiec-ram-ddr5-corsair-64gb-2x32gb-6000mt-s-cl30-vengeance-rgb-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1233445",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Beast White XMP",
    price: 439,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_56_30_447_00.jpg",
    link: "https://www.x-kom.pl/p/1233445-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-beast-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1259760",
    name: "Crucial 32GB (2x16GB) 6000MHz CL36 Pro Overclocking White",
    price: 539,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/6/pr_2024_6_13_8_38_53_57_00.jpg",
    link: "https://www.x-kom.pl/p/1259760-pamiec-ram-ddr5-crucial-32gb-2x16gb-6000mhz-cl36-pro-overclocking-white.html",
    type: "RAM"
  },
  {
    id: "1189839",
    name: "Synology 8GB DDR4 ECC DIMM",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/11/pr_2023_11_10_6_55_44_818_00.jpg",
    link: "https://www.x-kom.pl/p/1189839-pamiec-ram-ddr4-synology-8gb-ddr4-ecc-dimm.html",
    type: "RAM"
  },
  {
    id: "1190582",
    name: "GOODRAM 16GB (1x16GB) 3600MHz CL18 IRDM PRO",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/10/pr_2023_10_26_7_33_50_419_00.jpg",
    link: "https://www.x-kom.pl/p/1190582-pamiec-ram-ddr4-goodram-16gb-1x16gb-3600mhz-cl18-irdm-pro.html",
    type: "RAM"
  },
  {
    id: "1198346",
    name: "Lexar 16GB (1x16GB) 5600MHz CL46",
    price: 175,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/11/pr_2023_11_21_13_54_8_167_00.jpg",
    link: "https://www.x-kom.pl/p/1198346-pamiec-ram-sodimm-ddr5-lexar-16gb-1x16gb-5600mhz-cl46.html",
    type: "RAM"
  },
  {
    id: "590697",
    name: "Kingston 8GB (1x8GB) 3200MHz CL22",
    price: 85,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2020/9/pr_2020_9_21_13_58_2_383_00.jpg",
    link: "https://www.x-kom.pl/p/590697-pamiec-ram-sodimm-ddr4-kingston-8gb-1x8gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1115177",
    name: "Silicon Power 16GB (1x16GB) 3200MHz CL22",
    price: 119,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_6_14_22_12_353_00.jpg",
    link: "https://www.x-kom.pl/p/1115177-pamiec-ram-sodimm-ddr4-silicon-power-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "691330",
    name: "Kingston 32GB (1x32GB) 3200MHz CL22",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/10/pr_2021_10_21_13_22_55_374_01.jpg",
    link: "https://www.x-kom.pl/p/691330-pamiec-ram-sodimm-ddr4-kingston-32gb-1x32gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1116011",
    name: "Kingston FURY 16GB (2x8GB) 5600MHz CL36 Beast Black EXPO",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1116011-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-5600mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "1203837",
    name: "Kingston FURY 16GB (2x8GB) 3200MHz CL16 Renegade RGB",
    price: 257.5,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/12/pr_2023_12_6_12_32_10_881_01.jpg",
    link: "https://www.x-kom.pl/p/1203837-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3200mhz-cl16-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "1138975",
    name: "Kingston FURY 32GB (2x16GB) 5200MHz CL40 Beast White XMP",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/4/pr_2023_4_18_15_24_5_321_00.jpg",
    link: "https://www.x-kom.pl/p/1138975-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5200mhz-cl40-beast-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1218527",
    name: "Patriot 32GB (2x16GB) 6000MHz CL36 Viper Elite 5 TUF RGB",
    price: 569,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_1_11_17_48_182_00.jpg",
    link: "https://www.x-kom.pl/p/1218527-pamiec-ram-ddr5-patriot-32gb-2x16gb-6000mhz-cl36-viper-elite-5-tuf-rgb.html",
    type: "RAM"
  },
  {
    id: "460846",
    name: "Patriot 8GB (1x8GB) 2666MHz CL19 Signature",
    price: 59,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/11/pr_2018_11_8_9_12_53_706_00.jpg",
    link: "https://www.x-kom.pl/p/460846-pamiec-ram-ddr4-patriot-8gb-1x8gb-2666mhz-cl19-signature.html",
    type: "RAM"
  },
  {
    id: "1233441",
    name: "Kingston FURY 64GB (2x32GB) 6000MHz CL30 Beast Black XMP",
    price: 909,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233441-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000mhz-cl30-beast-black-xmp.html",
    type: "RAM"
  },
  {
    id: "736603",
    name: "Crucial 32GB (1x32GB) 4800MHz CL40",
    price: 369,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/3/pr_2022_3_28_15_46_58_619_00.jpg",
    link: "https://www.x-kom.pl/p/736603-pamiec-ram-sodimm-ddr5-crucial-32gb-1x32gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "1154768",
    name: "GOODRAM 16GB (1x16GB) 5600MHz CL46",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/6/pr_2023_6_28_11_20_5_576_00.jpg",
    link: "https://www.x-kom.pl/p/1154768-pamiec-ram-sodimm-ddr5-goodram-16gb-1x16gb-5600mhz-cl46.html",
    type: "RAM"
  },
  {
    id: "420913",
    name: "GOODRAM 8GB (1x8GB) 1600MHz CL11",
    price: 59,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_8_35_50_169_01.jpg",
    link: "https://www.x-kom.pl/p/420913-pamiec-ram-sodimm-ddr3-goodram-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "1144945",
    name: "PNY 8GB (1x8GB) 1600MHz CL11",
    price: 49,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/5/pr_2023_5_16_11_36_22_560_01.jpg",
    link: "https://www.x-kom.pl/p/1144945-pamiec-ram-ddr3-pny-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "622684",
    name: "Patriot 8GB (1x8GB) 3200MHz CL22 Signature",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_28_12_17_14_417_00.jpg",
    link: "https://www.x-kom.pl/p/622684-pamiec-ram-sodimm-ddr4-patriot-8gb-1x8gb-3200mhz-cl22-signature.html",
    type: "RAM"
  },
  {
    id: "1115994",
    name: "Kingston FURY 16GB (2x8GB) 5200MHz CL36 Beast Black EXPO",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1115994-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-5200mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "693987",
    name: "Patriot 8GB (1x8GB) 1600MHz CL11 Ultrabook",
    price: 73.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_13_13_22_28_410_01.jpg",
    link: "https://www.x-kom.pl/p/693987-pamiec-ram-sodimm-ddr3-patriot-8gb-1x8gb-1600mhz-cl11-ultrabook.html",
    type: "RAM"
  },
  {
    id: "581118",
    name: "GOODRAM 8GB (1x8GB) 3200MHz CL22",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/7/pr_2020_7_22_12_41_0_922_00.jpg",
    link: "https://www.x-kom.pl/p/581118-pamiec-ram-sodimm-ddr4-goodram-8gb-1x8gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1233438",
    name: "Kingston FURY 16GB (2x8GB) 6000Mhz CL30 Beast Black XMP",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233438-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-6000mhz-cl30-beast-black-xmp.html",
    type: "RAM"
  },
  {
    id: "1136141",
    name: "Apacer 16GB (2x8GB) 3200MHz ZADAK TWIST",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/6/pr_2023_6_23_13_55_30_724_00.jpg",
    link: "https://www.x-kom.pl/p/1136141-pamiec-ram-ddr4-apacer-16gb-2x8gb-3200mhz-zadak-twist.html",
    type: "RAM"
  },
  {
    id: "628017",
    name: "GOODRAM 16GB (1x16GB) 2666MHz CL19",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/2/pr_2021_2_4_15_13_16_91_00.jpg",
    link: "https://www.x-kom.pl/p/628017-pamiec-ram-ddr4-goodram-16gb-1x16gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "340079",
    name: "G.SKILL 16GB (2x8GB) 3000MHz CL16 Aegis",
    price: 125,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_30_15_211.jpg",
    link: "https://www.x-kom.pl/p/340079-pamiec-ram-ddr4-gskill-16gb-2x8gb-3000mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "1154636",
    name: "Kingston FURY 128GB (4x32GB) 5600MHz CL40 Beast",
    price: 1459,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/6/pr_2023_6_26_13_57_1_913_00.jpg",
    link: "https://www.x-kom.pl/p/1154636-pamiec-ram-ddr5-kingston-fury-128gb-4x32gb-5600mhz-cl40-beast.html",
    type: "RAM"
  },
  {
    id: "1105878",
    name: "Patriot 16GB (2x8GB) 3600MHz CL18 Viper 4",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_13_11_20_54_936_00.jpg",
    link: "https://www.x-kom.pl/p/1105878-pamiec-ram-ddr4-patriot-16gb-2x8gb-3600mhz-cl18-viper-4.html",
    type: "RAM"
  },
  {
    id: "116492",
    name: "Patriot 16GB (2x8GB) 1600MHz CL9 Viper 3",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,pr_2015_6_9_12_28_37_477.jpg",
    link: "https://www.x-kom.pl/p/116492-pamiec-ram-ddr3-patriot-16gb-2x8gb-1600mhz-cl9-viper-3.html",
    type: "RAM"
  },
  {
    id: "612980",
    name: "Crucial 8GB (1x8GB) 3200MHz",
    price: 65,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/12/pr_2020_12_11_14_34_16_258_00.jpg",
    link: "https://www.x-kom.pl/p/612980-pamiec-ram-ddr4-crucial-8gb-1x8gb-3200mhz.html",
    type: "RAM"
  },
  {
    id: "686678",
    name: "Dell Memory Upgrade 8GB 1Rx16 DDR4 UDIMM 3200MHz",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_3_9_31_28_899_00.jpg",
    link: "https://www.x-kom.pl/p/686678-pamiec-ram-ddr4-dell-memory-upgrade-8gb-1rx16-ddr4-udimm-3200mhz.html",
    type: "RAM"
  },
  {
    id: "686339",
    name: "Corsair 16GB(2x8GB) 3600MHz CL18 Dominator Platinum Wh RGB",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_5_14_35_5_951_01.jpg",
    link: "https://www.x-kom.pl/p/686339-pamiec-ram-ddr4-corsair-16gb2x8gb-3600mhz-cl18-dominator-platinum-wh-rgb.html",
    type: "RAM"
  },
  {
    id: "1092044",
    name: "Dell Memory Upgrade ‑ 16GB ‑ 1Rx8 DDR4 UDIMM 3200MHz ECC",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/11/pr_2022_11_25_10_44_6_862_00.jpg",
    link: "https://www.x-kom.pl/p/1092044-pamiec-ram-serwerowa-dell-memory-upgrade-16gb-1rx8-ddr4-udimm-3200mhz-ecc.html",
    type: "RAM"
  },
  {
    id: "747572",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance RGB RS",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_12_14_48_4_763_03.jpg",
    link: "https://www.x-kom.pl/p/747572-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-rgb-rs.html",
    type: "RAM"
  },
  {
    id: "693980",
    name: "Patriot 32GB (1x32GB) 3200MHz CL22 Signature",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_26_11_41_44_222_02.jpg",
    link: "https://www.x-kom.pl/p/693980-pamiec-ram-sodimm-ddr4-patriot-32gb-1x32gb-3200mhz-cl22-signature.html",
    type: "RAM"
  },
  {
    id: "367685",
    name: "Patriot 8GB (1x8GB) 1600MHz CL11 Signature",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_13_13_22_28_410_01.jpg",
    link: "https://www.x-kom.pl/p/367685-pamiec-ram-sodimm-ddr3-patriot-8gb-1x8gb-1600mhz-cl11-signature.html",
    type: "RAM"
  },
  {
    id: "704566",
    name: "Patriot 8GB (1x8GB) 4800MHz CL40 Signature",
    price: 125,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/12/pr_2021_12_9_12_58_43_47_01.jpg",
    link: "https://www.x-kom.pl/p/704566-pamiec-ram-ddr5-patriot-8gb-1x8gb-4800mhz-cl40-signature.html",
    type: "RAM"
  },
  {
    id: "590707",
    name: "Kingston 16GB (1x16GB) 3200MHz CL22",
    price: 156,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_21_13_58_2_383_00.jpg",
    link: "https://www.x-kom.pl/p/590707-pamiec-ram-sodimm-ddr4-kingston-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "669746",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL18 TridentZ RGB",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_22_14_0_57_518_01.jpg",
    link: "https://www.x-kom.pl/p/669746-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl18-tridentz-rgb.html",
    type: "RAM"
  },
  {
    id: "698065",
    name: "PNY 16GB (1x16GB) 3200MHz CL22",
    price: 129,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_31_13_40_29_474_01.jpg",
    link: "https://www.x-kom.pl/p/698065-pamiec-ram-sodimm-ddr4-pny-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1311217",
    name: "G.SKILL 32GB (2x16GB) 6000 CL36 Trident Neo AMD RGB",
    price: 469,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_22_12_48_36_907_00.jpg",
    link: "https://www.x-kom.pl/p/1311217-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000-cl36-trident-neo-amd-rgb.html",
    type: "RAM"
  },
  {
    id: "1221978",
    name: "ADATA 32GB (2x16GB) 6000MHz CL30 Lancer Blade RGB",
    price: 479,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_15_10_14_30_304_02.jpg",
    link: "https://www.x-kom.pl/p/1221978-pamiec-ram-ddr5-adata-32gb-2x16gb-6000mhz-cl30-lancer-blade-rgb.html",
    type: "RAM"
  },
  {
    id: "717170",
    name: "GOODRAM 32GB (2x16GB) 3200MHz CL16 IRDM",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_22_13_20_43_256_00.jpg",
    link: "https://www.x-kom.pl/p/717170-pamiec-ram-ddr4-goodram-32gb-2x16gb-3200mhz-cl16-irdm.html",
    type: "RAM"
  },
  {
    id: "1239949",
    name: "Kingston FURY 32GB (2x16GB) 6800MT/s CL34 Beast White EXPO",
    price: 609,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_56_30_447_00.jpg",
    link: "https://www.x-kom.pl/p/1239949-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6800mt-s-cl34-beast-white-expo.html",
    type: "RAM"
  },
  {
    id: "1222052",
    name: "Lexar 32GB (2x16GB) 3600MHz CL18 Ares Gaming RGB",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_14_12_44_21_956_00.jpg",
    link: "https://www.x-kom.pl/p/1222052-pamiec-ram-ddr4-lexar-32gb-2x16gb-3600mhz-cl18-ares-gaming-rgb.html",
    type: "RAM"
  },
  {
    id: "1294396",
    name: "Lexar 16GB (2x8GB) 6000 CL38 THOR",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_12_9_39_35_305_00.jpg",
    link: "https://www.x-kom.pl/p/1294396-pamiec-ram-ddr5-lexar-16gb-2x8gb-6000-cl38-thor.html",
    type: "RAM"
  },
  {
    id: "668686",
    name: "Kingston FURY 64GB (2x32GB) 3200MHz CL20 Impact",
    price: 519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_14_14_28_2_217_01.jpg",
    link: "https://www.x-kom.pl/p/668686-pamiec-ram-sodimm-ddr4-kingston-fury-64gb-2x32gb-3200mhz-cl20-impact.html",
    type: "RAM"
  },
  {
    id: "1116186",
    name: "Kingston FURY 32GB (1x32GB) 6000MHz CL36 Beast Black EXPO",
    price: 435,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_8_23_316_00.jpg",
    link: "https://www.x-kom.pl/p/1116186-pamiec-ram-ddr5-kingston-fury-32gb-1x32gb-6000mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "742760",
    name: "GOODRAM 16GB (1x16GB) 3200MHz CL16 IRDM X Black",
    price: 129,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/12/pr_2017_12_5_13_28_55_940_00.jpg",
    link: "https://www.x-kom.pl/p/742760-pamiec-ram-ddr4-goodram-16gb-1x16gb-3200mhz-cl16-irdm-x-black.html",
    type: "RAM"
  },
  {
    id: "328428",
    name: "Kingston Pamięć dedykowana 4GB (1x4GB) 1600MHz CL11",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_20_9_12_28_246.jpg",
    link: "https://www.x-kom.pl/p/328428-pamiec-ram-sodimm-ddr3-kingston-pamiec-dedykowana-4gb-1x4gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "175752",
    name: "Kingston 4GB (1x4GB) 1600MHz CL11",
    price: 131.25,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_12_10_54_732.jpg",
    link: "https://www.x-kom.pl/p/175752-pamiec-ram-ddr3-kingston-4gb-1x4gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "122580",
    name: "Kingston 8GB (1x8GB) 1600MHz CL11",
    price: 129,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_11_53_1_610.jpg",
    link: "https://www.x-kom.pl/p/122580-pamiec-ram-ddr3-kingston-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "697282",
    name: "Lexar 16GB (1x16GB) 3200MHz CL22",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_5_16_15_8_488_00.jpg",
    link: "https://www.x-kom.pl/p/697282-pamiec-ram-sodimm-ddr4-lexar-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "459388",
    name: "Patriot 16GB (1x16GB) 2666MHz CL19 Signature",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/10/pr_2018_10_29_12_5_18_277_00.jpg",
    link: "https://www.x-kom.pl/p/459388-pamiec-ram-ddr4-patriot-16gb-1x16gb-2666mhz-cl19-signature.html",
    type: "RAM"
  },
  {
    id: "608029",
    name: "Dell Memory Upgrade ‑ 32GB ‑ 2Rx8 DDR4 RDIMM 3200MHz",
    price: 1256,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/11/pr_2020_11_24_11_36_19_223_00.jpg",
    link: "https://www.x-kom.pl/p/608029-pamiec-ram-serwerowa-dell-memory-upgrade-32gb-2rx8-ddr4-rdimm-3200mhz.html",
    type: "RAM"
  },
  {
    id: "104642",
    name: "Patriot 16GB (2x8GB) 1866MHz CL10 ViperX 3RD",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_13_43_55_536.jpg",
    link: "https://www.x-kom.pl/p/104642-pamiec-ram-ddr3-patriot-16gb-2x8gb-1866mhz-cl10-viperx-3rd.html",
    type: "RAM"
  },
  {
    id: "667529",
    name: "Kingston FURY 64GB (2x32GB) 3600MHz CL18 Beast Black",
    price: 549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_16_12_451_02.jpg",
    link: "https://www.x-kom.pl/p/667529-pamiec-ram-ddr4-kingston-fury-64gb-2x32gb-3600mhz-cl18-beast-black.html",
    type: "RAM"
  },
  {
    id: "215650",
    name: "G.SKILL 16GB (2x8GB) 2400MHz CL11 RipjawsX",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/6/pr_2020_6_22_12_3_27_898_00.jpg",
    link: "https://www.x-kom.pl/p/215650-pamiec-ram-ddr3-gskill-16gb-2x8gb-2400mhz-cl11-ripjawsx.html",
    type: "RAM"
  },
  {
    id: "1116169",
    name: "Kingston FURY 64GB (2x32GB) 5600MHz CL36 Beast Black EXPO",
    price: 719,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1116169-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5600mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "1167796",
    name: "Corsair 32GB (2x16GB) 6000MHz CL30 Vengeance RGB AMD EXPO",
    price: 579,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/10/pr_2022_10_12_12_12_6_78_02.jpg",
    link: "https://www.x-kom.pl/p/1167796-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl30-vengeance-rgb-amd-expo.html",
    type: "RAM"
  },
  {
    id: "667287",
    name: "Kingston FURY 16GB (1x16GB) 3200MHz CL16 Beast Black",
    price: 144,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667287-pamiec-ram-ddr4-kingston-fury-16gb-1x16gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "579420",
    name: "G.SKILL 32GB (2x16GB) 3600MHz CL16 Ripjaws V",
    price: 339,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/579420-pamiec-ram-ddr4-gskill-32gb-2x16gb-3600mhz-cl16-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "1233446",
    name: "Kingston FURY 32GB (2x16GB) 6800MHz CL34 Beast Black XMP",
    price: 639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233446-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6800mhz-cl34-beast-black-xmp.html",
    type: "RAM"
  },
  {
    id: "440683",
    name: "G.SKILL 32GB (2x16GB) 3200MHz CL16 Trident Z RGB",
    price: 298,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_25_9_10_11_472.jpg",
    link: "https://www.x-kom.pl/p/440683-pamiec-ram-ddr4-gskill-32gb-2x16gb-3200mhz-cl16-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "1203679",
    name: "G.SKILL 32GB (2x16GB) 6400MHz CL32 Trident Z5 RGB",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_22_11_12_38_634_00.jpg",
    link: "https://www.x-kom.pl/p/1203679-pamiec-ram-ddr5-gskill-32gb-2x16gb-6400mhz-cl32-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "1330385",
    name: "Kingston FURY 64GB (2x32GB) 6000 CL30 Beast RGB White EXPO",
    price: 1019,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/4/pr_2023_4_18_14_48_58_943_00.jpg",
    link: "https://www.x-kom.pl/p/1330385-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000-cl30-beast-rgb-white-expo.html",
    type: "RAM"
  },
  {
    id: "1144946",
    name: "PNY 8GB (1x8GB) 1600MHz CL11",
    price: 49,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/5/pr_2023_5_16_11_49_57_775_00.jpg",
    link: "https://www.x-kom.pl/p/1144946-pamiec-ram-sodimm-ddr3-pny-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "1214413",
    name: "Lexar 16GB(2x8GB) 3600MHz CL18 Thor",
    price: 179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_22_14_43_42_22_00.jpg",
    link: "https://www.x-kom.pl/p/1214413-pamiec-ram-ddr4-lexar-16gb2x8gb-3600mhz-cl18-thor.html",
    type: "RAM"
  },
  {
    id: "1115991",
    name: "Kingston FURY 16GB (2x8GB) 5200MHz CL36 Beast RGB EXPO",
    price: 275,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_7_8_22_40_625_00.jpg",
    link: "https://www.x-kom.pl/p/1115991-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-5200mhz-cl36-beast-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "1262071",
    name: "Lexar 16GB (1x16GB) 3200MHz CL22",
    price: 125,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/6/pr_2024_6_25_10_52_11_372_00.jpg",
    link: "https://www.x-kom.pl/p/1262071-pamiec-ram-ddr4-lexar-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1239978",
    name: "Crucial 32GB (2x16GB) 6000MHz CL36 Pro Overclocking",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/4/pr_2024_4_25_13_42_30_327_00.jpg",
    link: "https://www.x-kom.pl/p/1239978-pamiec-ram-ddr5-crucial-32gb-2x16gb-6000mhz-cl36-pro-overclocking.html",
    type: "RAM"
  },
  {
    id: "1233443",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Beast Black XMP",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233443-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-beast-black-xmp.html",
    type: "RAM"
  },
  {
    id: "668638",
    name: "Kingston FURY 8GB (1x8GB) 3200MHz CL20 Impact",
    price: 89,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/7/pr_2021_7_14_14_25_3_432_01.jpg",
    link: "https://www.x-kom.pl/p/668638-pamiec-ram-sodimm-ddr4-kingston-fury-8gb-1x8gb-3200mhz-cl20-impact.html",
    type: "RAM"
  },
  {
    id: "1116008",
    name: "Kingston FURY 64GB (2x32GB) 5600MHz CL36 Beast RGB EXPO",
    price: 709,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/9/pr_2022_9_13_13_22_33_742_00.jpg",
    link: "https://www.x-kom.pl/p/1116008-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5600mhz-cl36-beast-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "667489",
    name: "Kingston FURY 32GB (1x32GB) 3200MHz CL16 Beast Black",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667489-pamiec-ram-ddr4-kingston-fury-32gb-1x32gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "1072069",
    name: "Kingston FURY 16GB (1x16GB) 5600MHz CL36 Beast Black EXPO AMD",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_8_23_316_00.jpg",
    link: "https://www.x-kom.pl/p/1072069-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-5600mhz-cl36-beast-black-expo-amd.html",
    type: "RAM"
  },
  {
    id: "1187782",
    name: "Lexar 32GB (2x16GB) 6400MHz CL32 Ares Gaming White RGB",
    price: 559,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_13_8_59_3_968_00.jpg",
    link: "https://www.x-kom.pl/p/1187782-pamiec-ram-ddr5-lexar-32gb-2x16gb-6400mhz-cl32-ares-gaming-white-rgb.html",
    type: "RAM"
  },
  {
    id: "1259650",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL30 Flare X5 AMD EXPO",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_21_10_35_50_118_00.jpg",
    link: "https://www.x-kom.pl/p/1259650-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl30-flare-x5-amd-expo.html",
    type: "RAM"
  },
  {
    id: "645404",
    name: "Patriot 8GB (1x8GB) 2400MHz CL17 Signature",
    price: 72,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_13_15_21_55_486_01.jpg",
    link: "https://www.x-kom.pl/p/645404-pamiec-ram-sodimm-ddr4-patriot-8gb-1x8gb-2400mhz-cl17-signature.html",
    type: "RAM"
  },
  {
    id: "1116006",
    name: "Kingston FURY 16GB (2x8GB) 5600MHz CL36 Beast RGB EXPO",
    price: 382,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_22_33_742_00.jpg",
    link: "https://www.x-kom.pl/p/1116006-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-5600mhz-cl36-beast-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "737419",
    name: "Kingston FURY 32GB (2x16GB) 4800MHz CL38 Impact",
    price: 439,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_29_52_199_00.jpg",
    link: "https://www.x-kom.pl/p/737419-pamiec-ram-sodimm-ddr5-kingston-fury-32gb-2x16gb-4800mhz-cl38-impact.html",
    type: "RAM"
  },
  {
    id: "1233444",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Beast Black EXPO",
    price: 549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233444-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "1233448",
    name: "Kingston FURY 32GB (2x16GB) 6800MHz CL34 Beast Black EXPO",
    price: 639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1233448-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6800mhz-cl34-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "1115998",
    name: "Kingston FURY 32GB (1x32GB) 5600MHz CL36 Beast Black EXPO",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_8_23_316_00.jpg",
    link: "https://www.x-kom.pl/p/1115998-pamiec-ram-ddr5-kingston-fury-32gb-1x32gb-5600mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "667087",
    name: "Kingston FURY 8GB (1x8GB) 3200MHz CL16 Beast Black",
    price: 92,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667087-pamiec-ram-ddr4-kingston-fury-8gb-1x8gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "641106",
    name: "Patriot 16GB (1x16GB) 2666MHz CL19 Signature Premium",
    price: 125,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/2/pr_2021_2_2_14_18_21_584_00.jpg",
    link: "https://www.x-kom.pl/p/641106-pamiec-ram-ddr4-patriot-16gb-1x16gb-2666mhz-cl19-signature-premium.html",
    type: "RAM"
  },
  {
    id: "1116172",
    name: "Kingston FURY 32GB (1x32GB) 5600MHz CL40 Impact",
    price: 419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_24_55_678_00.jpg",
    link: "https://www.x-kom.pl/p/1116172-pamiec-ram-sodimm-ddr5-kingston-fury-32gb-1x32gb-5600mhz-cl40-impact.html",
    type: "RAM"
  },
  {
    id: "116491",
    name: "Patriot 16GB (2x8GB) 1600MHz CL10 Viper 3",
    price: 189.36,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_13_43_55_536.jpg",
    link: "https://www.x-kom.pl/p/116491-pamiec-ram-ddr3-patriot-16gb-2x8gb-1600mhz-cl10-viper-3.html",
    type: "RAM"
  },
  {
    id: "1207600",
    name: "Lexar 32GB (2x16GB) 6800MHz Ares Gaming RGB",
    price: 615,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/8/pr_2023_8_3_13_7_52_603_00.jpg",
    link: "https://www.x-kom.pl/p/1207600-pamiec-ram-ddr5-lexar-32gb-2x16gb-6800mhz-ares-gaming-rgb.html",
    type: "RAM"
  },
  {
    id: "591878",
    name: "Patriot 16GB (2x8GB) 3600MHz CL18 Viper Steel",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_17_828_00.jpg",
    link: "https://www.x-kom.pl/p/591878-pamiec-ram-ddr4-patriot-16gb-2x8gb-3600mhz-cl18-viper-steel.html",
    type: "RAM"
  },
  {
    id: "1085665",
    name: "Patriot 32GB (2x16GB) 3600MHz CL18 Viper Steel",
    price: 259,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_17_828_00.jpg",
    link: "https://www.x-kom.pl/p/1085665-pamiec-ram-ddr4-patriot-32gb-2x16gb-3600mhz-cl18-viper-steel.html",
    type: "RAM"
  },
  {
    id: "1116171",
    name: "Kingston FURY 16GB (1x16GB) 5600MHz CL40 Impact",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_24_55_678_00.jpg",
    link: "https://www.x-kom.pl/p/1116171-pamiec-ram-sodimm-ddr5-kingston-fury-16gb-1x16gb-5600mhz-cl40-impact.html",
    type: "RAM"
  },
  {
    id: "1143729",
    name: "Lexar 32GB (2x16GB) 3600Mhz CL18 Thor White",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/5/pr_2023_5_29_12_59_8_573_00.jpg",
    link: "https://www.x-kom.pl/p/1143729-pamiec-ram-ddr4-lexar-32gb-2x16gb-3600mhz-cl18-thor-white.html",
    type: "RAM"
  },
  {
    id: "1221979",
    name: "ADATA 32GB (2x16GB) 6400MHz CL32 Lancer Blade RGB",
    price: 539,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/2/pr_2024_2_21_13_31_36_681_00.jpg",
    link: "https://www.x-kom.pl/p/1221979-pamiec-ram-ddr5-adata-32gb-2x16gb-6400mhz-cl32-lancer-blade-rgb.html",
    type: "RAM"
  },
  {
    id: "1259041",
    name: "Corsair 32GB (2x16GB) 6000 CL36 Vengeance RGB AMD EXPO",
    price: 489,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/10/pr_2022_10_12_12_12_6_78_02.jpg",
    link: "https://www.x-kom.pl/p/1259041-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000-cl36-vengeance-rgb-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1116193",
    name: "Kingston FURY 64GB (2x32GB) 6000MHz CL36 Beast RGB EXPO",
    price: 919,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/5/pr_2022_5_23_9_20_42_827_01.jpg",
    link: "https://www.x-kom.pl/p/1116193-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000mhz-cl36-beast-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "1115993",
    name: "Kingston FURY 64GB (2x32GB) 5200MHz CL36 Beast RGB EXPO",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_7_8_22_40_625_00.jpg",
    link: "https://www.x-kom.pl/p/1115993-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5200mhz-cl36-beast-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "632669",
    name: "GOODRAM 16GB (1x16GB) 3200MHz CL16 IRDM X Black",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/12/pr_2017_12_5_13_28_55_940_00.jpg",
    link: "https://www.x-kom.pl/p/632669-pamiec-ram-ddr4-goodram-16gb-1x16gb-3200mhz-cl16-irdm-x-black.html",
    type: "RAM"
  },
  {
    id: "1296056",
    name: "ADATA 32GB (2x16) 6000 CL30 Lancer Blade White RGB",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/11/pr_2024_11_22_11_46_12_673_00.jpg",
    link: "https://www.x-kom.pl/p/1296056-pamiec-ram-ddr5-adata-32gb-2x16-6000-cl30-lancer-blade-white-rgb.html",
    type: "RAM"
  },
  {
    id: "420909",
    name: "GOODRAM 8GB (1x8GB) 1600MHz CL11",
    price: 75,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/4/pr_2018_4_3_8_35_50_169_01.jpg",
    link: "https://www.x-kom.pl/p/420909-pamiec-ram-sodimm-ddr3-goodram-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "244482",
    name: "Patriot 8GB (1x8GB) 1600MHz CL11 Signature",
    price: 64.36,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_24_13_40_11_364.jpg",
    link: "https://www.x-kom.pl/p/244482-pamiec-ram-ddr3-patriot-8gb-1x8gb-1600mhz-cl11-signature.html",
    type: "RAM"
  },
  {
    id: "1214408",
    name: "ADATA 32GB(2x16GB) 6400MHz CL32 Lancer Blade RGB",
    price: 539,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_22_10_58_31_32_00.jpg",
    link: "https://www.x-kom.pl/p/1214408-pamiec-ram-ddr5-adata-32gb2x16gb-6400mhz-cl32-lancer-blade-rgb.html",
    type: "RAM"
  },
  {
    id: "1175360",
    name: "G.SKILL 32GB (2x16GB) 4000MHz CL18 Ripjaws V",
    price: 369,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_25_8_23_31_969.jpg",
    link: "https://www.x-kom.pl/p/1175360-pamiec-ram-ddr4-gskill-32gb-2x16gb-4000mhz-cl18-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "1239937",
    name: "Kingston FURY 64GB (2x32GB) 6000MT/s CL30 Beast Black RGB",
    price: 919,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/9/pr_2024_9_9_14_30_1_890_00.jpg",
    link: "https://www.x-kom.pl/p/1239937-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000mt-s-cl30-beast-black-rgb.html",
    type: "RAM"
  },
  {
    id: "667291",
    name: "Kingston FURY 16GB (1x16GB) 3200MHz CL16 Beast Black",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667291-pamiec-ram-ddr4-kingston-fury-16gb-1x16gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "1115997",
    name: "Kingston FURY 64GB (2x32GB) 5200MHz CL36 Beast Black EXPO",
    price: 709,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1115997-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5200mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "1116198",
    name: "Kingston FURY 64GB (2x32GB) 6000MHz CL36 Beast Black EXPO",
    price: 899,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_15_13_18_988_00.jpg",
    link: "https://www.x-kom.pl/p/1116198-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "719667",
    name: "G.SKILL 32GB (2x16GB) 5600MHz CL36 Trident Z5 RGB",
    price: 459,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_2_12_14_36_90_02.jpg",
    link: "https://www.x-kom.pl/p/719667-pamiec-ram-ddr5-gskill-32gb-2x16gb-5600mhz-cl36-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "1239936",
    name: "Kingston FURY 32GB (2x16GB) 6000MT/s CL30 Beast Black RGB",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/9/pr_2024_9_9_14_30_1_890_00.jpg",
    link: "https://www.x-kom.pl/p/1239936-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6000mt-s-cl30-beast-black-rgb.html",
    type: "RAM"
  },
  {
    id: "1115984",
    name: "Kingston FURY 32GB (1x32GB) 5200MHz CL36 Beast Black EXPO",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_8_23_316_00.jpg",
    link: "https://www.x-kom.pl/p/1115984-pamiec-ram-ddr5-kingston-fury-32gb-1x32gb-5200mhz-cl36-beast-black-expo.html",
    type: "RAM"
  },
  {
    id: "656654",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance LPX",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_20_19_508.jpg",
    link: "https://www.x-kom.pl/p/656654-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-lpx.html",
    type: "RAM"
  },
  {
    id: "420908",
    name: "GOODRAM 8GB (1x8GB) 1333MHz CL9",
    price: 70,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_8_35_50_169_01.jpg",
    link: "https://www.x-kom.pl/p/420908-pamiec-ram-sodimm-ddr3-goodram-8gb-1x8gb-1333mhz-cl9.html",
    type: "RAM"
  },
  {
    id: "645405",
    name: "Patriot 16GB (1x16GB) 3200MHz CL22 Signature",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_13_15_28_46_495_01.jpg",
    link: "https://www.x-kom.pl/p/645405-pamiec-ram-sodimm-ddr4-patriot-16gb-1x16gb-3200mhz-cl22-signature.html",
    type: "RAM"
  },
  {
    id: "1182228",
    name: "GOODRAM 64GB (2x32GB) 6800MHz CL34 IRDM BLACK V SILVER",
    price: 1108,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_21_14_10_4_212_00.jpg",
    link: "https://www.x-kom.pl/p/1182228-pamiec-ram-ddr5-goodram-64gb-2x32gb-6800mhz-cl34-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "1241380",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL16 Beast RGB",
    price: 355,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_1_12_20_35_660_00.jpg",
    link: "https://www.x-kom.pl/p/1241380-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl16-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "656646",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Vengeance PRO RGB",
    price: 339,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_24_18_16_10_97_06.jpg",
    link: "https://www.x-kom.pl/p/656646-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-vengeance-pro-rgb.html",
    type: "RAM"
  },
  {
    id: "436664",
    name: "GOODRAM 8GB (1x8GB) 2400MHz CL17",
    price: 65,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/4/pr_2020_4_27_14_22_33_907_00.jpg",
    link: "https://www.x-kom.pl/p/436664-pamiec-ram-ddr4-goodram-8gb-1x8gb-2400mhz-cl17.html",
    type: "RAM"
  },
  {
    id: "1063542",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Renegade Silver",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/8/pr_2022_8_11_11_23_15_994_00.jpg",
    link: "https://www.x-kom.pl/p/1063542-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-renegade-silver.html",
    type: "RAM"
  },
  {
    id: "1203216",
    name: "Kingston FURY 32GB (2x16GB) 3600MHz CL16 Renegade RGB",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_5_15_41_15_304_00.jpg",
    link: "https://www.x-kom.pl/p/1203216-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl16-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "1326580",
    name: "ADATA 64GB (2x32) 5600 CL46 Lancer Blade White",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/3/pr_2025_3_28_9_44_58_431_00.jpg",
    link: "https://www.x-kom.pl/p/1326580-pamiec-ram-ddr5-adata-64gb-2x32-5600-cl46-lancer-blade-white.html",
    type: "RAM"
  },
  {
    id: "420813",
    name: "Corsair 16GB 2133MHz CL15 1.2V",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_15_7_40_350_01.jpg",
    link: "https://www.x-kom.pl/p/420813-pamiec-ram-sodimm-ddr4-corsair-16gb-2133mhz-cl15-12v.html",
    type: "RAM"
  },
  {
    id: "1214498",
    name: "G.SKILL 32GB (2x16GB) 6000Mhz CL32 Trident Neo AMD RGB",
    price: 525,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_22_12_27_54_211_00.jpg",
    link: "https://www.x-kom.pl/p/1214498-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl32-trident-neo-amd-rgb.html",
    type: "RAM"
  },
  {
    id: "1116790",
    name: "Corsair 64GB (2x32GB) 6400MHz CL32 Vengeance",
    price: 1099,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/1/pr_2022_1_4_8_18_54_958_00.jpg",
    link: "https://www.x-kom.pl/p/1116790-pamiec-ram-ddr5-corsair-64gb-2x32gb-6400mhz-cl32-vengeance.html",
    type: "RAM"
  },
  {
    id: "516830",
    name: "G.SKILL 32GB (2x16GB) 3600MHz CL16 TridentZ RGB Neo",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2019/9/pr_2019_9_19_11_11_26_260_02.jpg",
    link: "https://www.x-kom.pl/p/516830-pamiec-ram-ddr4-gskill-32gb-2x16gb-3600mhz-cl16-tridentz-rgb-neo.html",
    type: "RAM"
  },
  {
    id: "680140",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Vengeance LPX Black",
    price: 279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_21_9_2_18_513.jpg",
    link: "https://www.x-kom.pl/p/680140-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "711729",
    name: "Lexar 8GB (1x8GB) 3200MHz CL22",
    price: 68.25,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/1/pr_2022_1_5_16_15_8_488_00.jpg",
    link: "https://www.x-kom.pl/p/711729-pamiec-ram-sodimm-ddr4-lexar-8gb-1x8gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1043028",
    name: "Kingston FURY 32GB (2x16GB) 5600MHz CL40 Beast RGB",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/5/pr_2022_5_23_9_20_42_827_01.jpg",
    link: "https://www.x-kom.pl/p/1043028-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5600mhz-cl40-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "716588",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL36 Trident Z5 RGB",
    price: 439,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/1/pr_2022_1_26_14_24_13_965_01.jpg",
    link: "https://www.x-kom.pl/p/716588-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl36-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "667523",
    name: "Kingston FURY 16GB (1x16GB) 3600MHz CL18 Beast Black",
    price: 159.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667523-pamiec-ram-ddr4-kingston-fury-16gb-1x16gb-3600mhz-cl18-beast-black.html",
    type: "RAM"
  },
  {
    id: "624127",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance RGB PRO SL W",
    price: 343,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/1/pr_2021_1_21_10_23_18_110_00.jpg",
    link: "https://www.x-kom.pl/p/624127-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-rgb-pro-sl-w.html",
    type: "RAM"
  },
  {
    id: "645228",
    name: "Patriot 16GB (1x16GB) 2666MHz CL19 Signature",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/4/pr_2021_4_13_15_46_21_177_01.jpg",
    link: "https://www.x-kom.pl/p/645228-pamiec-ram-sodimm-ddr4-patriot-16gb-1x16gb-2666mhz-cl19-signature.html",
    type: "RAM"
  },
  {
    id: "655049",
    name: "G.SKILL 32GB (2x16GB) 3600MHz CL18 RipjawsV",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_25_8_23_31_969.jpg",
    link: "https://www.x-kom.pl/p/655049-pamiec-ram-ddr4-gskill-32gb-2x16gb-3600mhz-cl18-ripjawsv.html",
    type: "RAM"
  },
  {
    id: "1230768",
    name: "ADATA 64GB (2x32GB) 6000MHz CL30 XPG Lancer Blade",
    price: 1018,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/3/pr_2024_3_15_11_53_44_128_00.jpg",
    link: "https://www.x-kom.pl/p/1230768-pamiec-ram-ddr5-adata-64gb-2x32gb-6000mhz-cl30-xpg-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "716590",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL36 Trident Z5 RGB",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/1/pr_2022_1_26_14_17_53_198_01.jpg",
    link: "https://www.x-kom.pl/p/716590-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl36-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "1143726",
    name: "Lexar 16GB (2x8GB) 3600Mhz CL18 Thor White",
    price: 161.98,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/5/pr_2023_5_11_14_52_12_62_07.jpg",
    link: "https://www.x-kom.pl/p/1143726-pamiec-ram-ddr4-lexar-16gb-2x8gb-3600mhz-cl18-thor-white.html",
    type: "RAM"
  },
  {
    id: "737412",
    name: "Kingston FURY 16GB (1x16GB) 4800MHz CL38 Impact",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/4/pr_2022_4_5_13_24_55_678_00.jpg",
    link: "https://www.x-kom.pl/p/737412-pamiec-ram-sodimm-ddr5-kingston-fury-16gb-1x16gb-4800mhz-cl38-impact.html",
    type: "RAM"
  },
  {
    id: "738874",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance RGB PRO",
    price: 359,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_3_10_510_00.jpg",
    link: "https://www.x-kom.pl/p/738874-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "689314",
    name: "GOODRAM 16GB (1x16GB) 3200MHz CL22",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_14_10_52_30_344_00.jpg",
    link: "https://www.x-kom.pl/p/689314-pamiec-ram-sodimm-ddr4-goodram-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "667495",
    name: "Kingston FURY 128GB (4x32GB) 3200MHz CL16 Beast Black",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_35_58_101_02.jpg",
    link: "https://www.x-kom.pl/p/667495-pamiec-ram-ddr4-kingston-fury-128gb-4x32gb-3200mhz-cl16-beast-black.html",
    type: "RAM"
  },
  {
    id: "667531",
    name: "Kingston FURY 128GB (4x32GB) 3600MHz CL18 Beast Black",
    price: 1519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_35_58_101_02.jpg",
    link: "https://www.x-kom.pl/p/667531-pamiec-ram-ddr4-kingston-fury-128gb-4x32gb-3600mhz-cl18-beast-black.html",
    type: "RAM"
  },
  {
    id: "716586",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL40 Trident Z5 RGB",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_27_14_14_45_235_01.jpg",
    link: "https://www.x-kom.pl/p/716586-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl40-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "420802",
    name: "Corsair 16GB (2x8GB) 2400MHz CL16 Vengeance",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_14_42_42_707_03.jpg",
    link: "https://www.x-kom.pl/p/420802-pamiec-ram-sodimm-ddr4-corsair-16gb-2x8gb-2400mhz-cl16-vengeance.html",
    type: "RAM"
  },
  {
    id: "667528",
    name: "Kingston FURY 32GB (1x32GB) 3600MHz CL18 Beast Black",
    price: 289,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667528-pamiec-ram-ddr4-kingston-fury-32gb-1x32gb-3600mhz-cl18-beast-black.html",
    type: "RAM"
  },
  {
    id: "1235043",
    name: "ADATA 64GB (2x32GB) 6000MHz CL30 XPG Lancer Blade",
    price: 1029,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/4/pr_2024_4_2_12_28_44_194_01.jpg",
    link: "https://www.x-kom.pl/p/1235043-pamiec-ram-ddr5-adata-64gb-2x32gb-6000mhz-cl30-xpg-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "1182227",
    name: "GOODRAM 32GB (2x16GB) 6800MHz CL34 IRDM BLACK V SILVER",
    price: 614,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_21_14_10_4_212_00.jpg",
    link: "https://www.x-kom.pl/p/1182227-pamiec-ram-ddr5-goodram-32gb-2x16gb-6800mhz-cl34-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "601993",
    name: "Corsair 16GB (2x8GB) 3600MHz CL18 Vengeance",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_16_53_701.jpg",
    link: "https://www.x-kom.pl/p/601993-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl18-vengeance.html",
    type: "RAM"
  },
  {
    id: "737421",
    name: "Kingston FURY 32GB (1x32GB) 4800MHz CL38 Impact",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_24_11_766_00.jpg",
    link: "https://www.x-kom.pl/p/737421-pamiec-ram-sodimm-ddr5-kingston-fury-32gb-1x32gb-4800mhz-cl38-impact.html",
    type: "RAM"
  },
  {
    id: "420906",
    name: "GOODRAM 4GB (1x4GB) 1600MHz CL11",
    price: 49,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_8_35_50_169_01.jpg",
    link: "https://www.x-kom.pl/p/420906-pamiec-ram-sodimm-ddr3-goodram-4gb-1x4gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "1207957",
    name: "Corsair 32GB (2x16GB) 6000MHz CL36 Vengeance RGB Intel",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1207957-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl36-vengeance-rgb-intel.html",
    type: "RAM"
  },
  {
    id: "1165538",
    name: "Lexar 32GB (2x16GB) 6400MHz CL32 Ares Gaming RGB",
    price: 568,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/8/pr_2023_8_3_13_7_52_603_00.jpg",
    link: "https://www.x-kom.pl/p/1165538-pamiec-ram-ddr5-lexar-32gb-2x16gb-6400mhz-cl32-ares-gaming-rgb.html",
    type: "RAM"
  },
  {
    id: "624294",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Vengeance RGB PRO SL Wh",
    price: 319,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_10_55_25_296_00.jpg",
    link: "https://www.x-kom.pl/p/624294-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-vengeance-rgb-pro-sl-wh.html",
    type: "RAM"
  },
  {
    id: "586462",
    name: "G.SKILL 16GB (1x16GB) 3200MHz CL16 Aegis",
    price: 129,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_27_34_631.jpg",
    link: "https://www.x-kom.pl/p/586462-pamiec-ram-ddr4-gskill-16gb-1x16gb-3200mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "1210754",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL16 Renegade Black",
    price: 315.2,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_7_13_37_4_859_00.jpg",
    link: "https://www.x-kom.pl/p/1210754-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl16-renegade-black.html",
    type: "RAM"
  },
  {
    id: "608264",
    name: "Corsair 16GB (2x8GB) 3600MHz CL18 Vengeance",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_16_53_701.jpg",
    link: "https://www.x-kom.pl/p/608264-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl18-vengeance.html",
    type: "RAM"
  },
  {
    id: "1326579",
    name: "ADATA 64GB (2x32) 5600 CL46 Lancer Blade",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_15_10_51_46_113_00.jpg",
    link: "https://www.x-kom.pl/p/1326579-pamiec-ram-ddr5-adata-64gb-2x32-5600-cl46-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "737410",
    name: "Kingston FURY 16GB (2x8GB) 4800MHz CL38 Impact",
    price: 759,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_30_21_69_00.jpg",
    link: "https://www.x-kom.pl/p/737410-pamiec-ram-sodimm-ddr5-kingston-fury-16gb-2x8gb-4800mhz-cl38-impact.html",
    type: "RAM"
  },
  {
    id: "1191445",
    name: "Corsair 32GB (2x16GB) 6400MHz CL32 Dominator Titanium White RGB",
    price: 619,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_30_16_14_19_564_00.jpg",
    link: "https://www.x-kom.pl/p/1191445-pamiec-ram-ddr5-corsair-32gb-2x16gb-6400mhz-cl32-dominator-titanium-white-rgb.html",
    type: "RAM"
  },
  {
    id: "589542",
    name: "G.SKILL 16GB (2x8GB) 4000MHz CL18 RipjawsV",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_23_31_969.jpg",
    link: "https://www.x-kom.pl/p/589542-pamiec-ram-ddr4-gskill-16gb-2x8gb-4000mhz-cl18-ripjawsv.html",
    type: "RAM"
  },
  {
    id: "1067764",
    name: "Kingston FURY 32GB (1x32GB) 5600MHz CL40 Beast Black",
    price: 359,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_29_8_50_46_107_02.jpg",
    link: "https://www.x-kom.pl/p/1067764-pamiec-ram-ddr5-kingston-fury-32gb-1x32gb-5600mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "1200792",
    name: "Lexar 32GB (2x16GB) 7200MHz CL34 ARES RGB Gaming",
    price: 629,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_29_13_59_58_596_00.jpg",
    link: "https://www.x-kom.pl/p/1200792-pamiec-ram-ddr5-lexar-32gb-2x16gb-7200mhz-cl34-ares-rgb-gaming.html",
    type: "RAM"
  },
  {
    id: "1043027",
    name: "Kingston FURY 16GB (1x16GB) 5600MHz CL40 Beast RGB",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_23_9_34_37_607_00.jpg",
    link: "https://www.x-kom.pl/p/1043027-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-5600mhz-cl40-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1102376",
    name: "Corsair 32GB (2x16GB) 7200MHz CL34 Vengeance RGB",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1102376-pamiec-ram-ddr5-corsair-32gb-2x16gb-7200mhz-cl34-vengeance-rgb.html",
    type: "RAM"
  },
  {
    id: "629387",
    name: "Patriot 8GB (1x8GB) 2666MHz CL19 Signature Premium",
    price: 59,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/2/pr_2021_2_2_14_18_21_584_00.jpg",
    link: "https://www.x-kom.pl/p/629387-pamiec-ram-ddr4-patriot-8gb-1x8gb-2666mhz-cl19-signature-premium.html",
    type: "RAM"
  },
  {
    id: "1073766",
    name: "Kingston FURY 64GB (2x32GB) 5600MHz CL40 Beast Black",
    price: 725,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_29_8_56_21_646_02.jpg",
    link: "https://www.x-kom.pl/p/1073766-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5600mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "612483",
    name: "G.SKILL 16GB (2x8GB) 3200MHz CL16 Trident Z RGB",
    price: 215,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_9_10_11_472.jpg",
    link: "https://www.x-kom.pl/p/612483-pamiec-ram-ddr4-gskill-16gb-2x8gb-3200mhz-cl16-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "545500",
    name: "Patriot 16GB (2x8GB) 3200MHz CL16 Viper Steel",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_17_828_00.jpg",
    link: "https://www.x-kom.pl/p/545500-pamiec-ram-ddr4-patriot-16gb-2x8gb-3200mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "1187757",
    name: "Crucial 96GB (2x48GB) 5600MHz CL46 Pro",
    price: 1309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_13_8_49_30_782_00.jpg",
    link: "https://www.x-kom.pl/p/1187757-pamiec-ram-ddr5-crucial-96gb-2x48gb-5600mhz-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "420780",
    name: "Corsair 8GB (1x8GB) 2400MHz CL16 Vengeance",
    price: 102.25,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_14_49_31_188_00.jpg",
    link: "https://www.x-kom.pl/p/420780-pamiec-ram-sodimm-ddr4-corsair-8gb-1x8gb-2400mhz-cl16-vengeance.html",
    type: "RAM"
  },
  {
    id: "1187761",
    name: "Crucial 24GB (1x24GB) 5600MHz CL46 Pro",
    price: 388,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_13_8_49_16_647_00.jpg",
    link: "https://www.x-kom.pl/p/1187761-pamiec-ram-ddr5-crucial-24gb-1x24gb-5600mhz-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "713187",
    name: "Kingston FURY 32GB (2x16GB) 5600MHz CL40 Beast Black",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_29_8_56_21_646_02.jpg",
    link: "https://www.x-kom.pl/p/713187-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5600mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "624126",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance RGB PRO SL",
    price: 349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_22_11_29_3_386_01.jpg",
    link: "https://www.x-kom.pl/p/624126-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "1054029",
    name: "Kingston FURY 16GB (2x8GB) 5200MHz CL40 Beast Black",
    price: 288,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/7/pr_2022_7_5_9_53_43_843_03.jpg",
    link: "https://www.x-kom.pl/p/1054029-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-5200mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "1138985",
    name: "Kingston FURY 64GB (2x32GB) 5600MHz CL36 Beast White RGB EXPO",
    price: 799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_48_58_943_00.jpg",
    link: "https://www.x-kom.pl/p/1138985-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5600mhz-cl36-beast-white-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "631024",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL18 Ripjaws V",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/631024-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl18-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "738872",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance LPX",
    price: 289,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_10_38_560_00.jpg",
    link: "https://www.x-kom.pl/p/738872-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-lpx.html",
    type: "RAM"
  },
  {
    id: "1145159",
    name: "Crucial 32GB (2x16GB) 5600Mhz CL46 Pro",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/5/pr_2023_5_19_9_47_36_856_02.jpg",
    link: "https://www.x-kom.pl/p/1145159-pamiec-ram-ddr5-crucial-32gb-2x16gb-5600mhz-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "701437",
    name: "G.SKILL 64GB (2x32GB) 4000MHz CL18 Trident Z RGB",
    price: 769,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_30_8_50_59_592_00.jpg",
    link: "https://www.x-kom.pl/p/701437-pamiec-ram-ddr4-gskill-64gb-2x32gb-4000mhz-cl18-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "689627",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL16 Trident Z RGB",
    price: 248,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_43_21_376.jpg",
    link: "https://www.x-kom.pl/p/689627-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl16-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "440686",
    name: "G.SKILL 16GB (2x8GB) 3200MHz CL16 Trident Z RGB",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_9_10_11_472.jpg",
    link: "https://www.x-kom.pl/p/440686-pamiec-ram-ddr4-gskill-16gb-2x8gb-3200mhz-cl16-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "624120",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance RGB PRO SL",
    price: 339,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_9_59_47_690_00.jpg",
    link: "https://www.x-kom.pl/p/624120-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "1202213",
    name: "Kingston FURY 96GB (2x48GB) 6000MHz CL32 Renegade RGB",
    price: 1519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/8/pr_2022_8_11_11_26_41_540_01.jpg",
    link: "https://www.x-kom.pl/p/1202213-pamiec-ram-ddr5-kingston-fury-96gb-2x48gb-6000mhz-cl32-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "1196236",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL32 Flare X5 AMD EXPO",
    price: 459,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/11/pr_2023_11_21_10_35_50_118_00.jpg",
    link: "https://www.x-kom.pl/p/1196236-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl32-flare-x5-amd-expo.html",
    type: "RAM"
  },
  {
    id: "658860",
    name: "ADATA 16GB (2x8GB) 3200MHz CL16 XPG Gammix D10",
    price: 179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/7/pr_2018_7_25_12_50_25_494_03.jpg",
    link: "https://www.x-kom.pl/p/658860-pamiec-ram-ddr4-adata-16gb-2x8gb-3200mhz-cl16-xpg-gammix-d10.html",
    type: "RAM"
  },
  {
    id: "258004",
    name: "Corsair 16GB (2x8GB) 3000MHz CL15 Vengeance LPX Black",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_21_9_18_57_406.jpg",
    link: "https://www.x-kom.pl/p/258004-pamiec-ram-ddr4-corsair-16gb-2x8gb-3000mhz-cl15-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "590698",
    name: "Kingston 8GB (1x8GB) 3200MHz CL22",
    price: 99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2020/9/pr_2020_9_21_13_58_2_383_00.jpg",
    link: "https://www.x-kom.pl/p/590698-pamiec-ram-sodimm-ddr4-kingston-8gb-1x8gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1326581",
    name: "ADATA 64GB (2x32) 6000 CL30 Lancer Blade RGB",
    price: 1049,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_28_9_56_49_679_00.jpg",
    link: "https://www.x-kom.pl/p/1326581-pamiec-ram-ddr5-adata-64gb-2x32-6000-cl30-lancer-blade-rgb.html",
    type: "RAM"
  },
  {
    id: "647611",
    name: "GOODRAM 16GB (1x16GB) 3600MHz CL18 IRDM PRO Deep Black",
    price: 135,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/4/pr_2021_4_27_12_27_23_240_02.jpg",
    link: "https://www.x-kom.pl/p/647611-pamiec-ram-ddr4-goodram-16gb-1x16gb-3600mhz-cl18-irdm-pro-deep-black.html",
    type: "RAM"
  },
  {
    id: "446954",
    name: "Corsair 16GB (2x8GB) 3000MHz CL16 Vengeance LPX Black",
    price: 161.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_21_9_18_57_406.jpg",
    link: "https://www.x-kom.pl/p/446954-pamiec-ram-ddr4-corsair-16gb-2x8gb-3000mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "1167797",
    name: "Corsair 32GB (2x16GB) 6400MHz CL32 Vengeance RGB",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1167797-pamiec-ram-ddr5-corsair-32gb-2x16gb-6400mhz-cl32-vengeance-rgb.html",
    type: "RAM"
  },
  {
    id: "593702",
    name: "G.SKILL 32GB (2x16GB) 3200MHz CL16 Trident Z RGB",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_9_10_11_472.jpg",
    link: "https://www.x-kom.pl/p/593702-pamiec-ram-ddr4-gskill-32gb-2x16gb-3200mhz-cl16-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "1139146",
    name: "Patriot 32GB (2x16GB) 6400MHz CL32 VIPER VENOM",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/6/pr_2023_6_22_14_20_39_480_00.jpg",
    link: "https://www.x-kom.pl/p/1139146-pamiec-ram-ddr5-patriot-32gb-2x16gb-6400mhz-cl32-viper-venom.html",
    type: "RAM"
  },
  {
    id: "458797",
    name: "Corsair 16GB (1x16GB) 3000MHz CL16 Vengeance LPX Black",
    price: 148.83,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_21_12_47_2_64.jpg",
    link: "https://www.x-kom.pl/p/458797-pamiec-ram-ddr4-corsair-16gb-1x16gb-3000mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "456405",
    name: "Corsair 8GB (1x8GB) 3000MHz CL16 Vengeance LPX Black",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/10/pr_2018_10_19_13_34_3_269_01.jpg",
    link: "https://www.x-kom.pl/p/456405-pamiec-ram-ddr4-corsair-8gb-1x8gb-3000mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "586662",
    name: "G.SKILL 64GB (2x32GB) 3600MHz CL18 Ripjaws V",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/586662-pamiec-ram-ddr4-gskill-64gb-2x32gb-3600mhz-cl18-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "1309679",
    name: "ADATA 32GB (2x16GB) 3600 MHz CL18 Spectrix D35G RGB",
    price: 339,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/1/pr_2025_1_10_13_31_39_76_00.jpg",
    link: "https://www.x-kom.pl/p/1309679-pamiec-ram-ddr4-adata-32gb-2x16gb-3600-mhz-cl18-spectrix-d35g-rgb.html",
    type: "RAM"
  },
  {
    id: "445920",
    name: "Corsair 32GB (2x16GB) 3000MHz CL16 Vengeance LPX Black",
    price: 289,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/4/pr_2022_4_12_13_58_30_459_00.jpg",
    link: "https://www.x-kom.pl/p/445920-pamiec-ram-ddr4-corsair-32gb-2x16gb-3000mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "631027",
    name: "G.SKILL 64GB (2x32GB) 3200MHz CL16 Ripjaws V",
    price: 679,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/631027-pamiec-ram-ddr4-gskill-64gb-2x32gb-3200mhz-cl16-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "257991",
    name: "Corsair 8GB (1x8GB) 2666MHz CL16 Vengeance LPX Black",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_12_47_2_64.jpg",
    link: "https://www.x-kom.pl/p/257991-pamiec-ram-ddr4-corsair-8gb-1x8gb-2666mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "294536",
    name: "Corsair 16GB (2x8GB) 2400MHz CL16 Vengeance LPX Black",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_2_18_513.jpg",
    link: "https://www.x-kom.pl/p/294536-pamiec-ram-ddr4-corsair-16gb-2x8gb-2400mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "258000",
    name: "Corsair 16GB (2x8GB) 2400MHz CL14 Vengeance LPX Black",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,pr_2015_9_7_14_26_19_882.jpg",
    link: "https://www.x-kom.pl/p/258000-pamiec-ram-ddr4-corsair-16gb-2x8gb-2400mhz-cl14-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "258010",
    name: "Corsair 32GB (2x16GB) 2666MHz CL16 Vengeance LPX Black",
    price: 279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_10_56_17_541.jpg",
    link: "https://www.x-kom.pl/p/258010-pamiec-ram-ddr4-corsair-32gb-2x16gb-2666mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "258005",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance LPX Black",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_20_19_508.jpg",
    link: "https://www.x-kom.pl/p/258005-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "624128",
    name: "Corsair 16GB (2x8GB) 3600MHz CL18 Vengeance RGB PRO SL",
    price: 228,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_9_59_47_690_00.jpg",
    link: "https://www.x-kom.pl/p/624128-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl18-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "599549",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL16 Ripjaws V",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/599549-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl16-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "1067773",
    name: "Kingston FURY 64GB (2x32GB) 5200MHz CL40 Beast Black",
    price: 669,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_29_8_56_21_646_02.jpg",
    link: "https://www.x-kom.pl/p/1067773-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5200mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "419244",
    name: "GOODRAM 8GB (1x8GB) 2666MHz CL19",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/9/pr_2024_9_2_15_36_42_829_00.jpg",
    link: "https://www.x-kom.pl/p/419244-pamiec-ram-ddr4-goodram-8gb-1x8gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "738877",
    name: "Corsair 32GB (2x16GB) 3600MHz CL18 Vengeance RGB PRO",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_5_13_3_10_510_00.jpg",
    link: "https://www.x-kom.pl/p/738877-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl18-vengeance-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "360150",
    name: "G.SKILL 8GB (1x8GB) 3000MHz CL16 Aegis",
    price: 375.83,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_27_34_631.jpg",
    link: "https://www.x-kom.pl/p/360150-pamiec-ram-ddr4-gskill-8gb-1x8gb-3000mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "1145160",
    name: "Crucial 32GB (2x16GB) 3200MHz CL22 Pro",
    price: 317,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/5/pr_2023_5_19_9_42_28_963_02.jpg",
    link: "https://www.x-kom.pl/p/1145160-pamiec-ram-ddr4-crucial-32gb-2x16gb-3200mhz-cl22-pro.html",
    type: "RAM"
  },
  {
    id: "693353",
    name: "Kingston FURY 16GB (1x16GB) 5200MHz CL40 Beast Black",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_29_8_47_48_807_02.jpg",
    link: "https://www.x-kom.pl/p/693353-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-5200mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "647736",
    name: "Patriot 64GB (2x32GB) 3200MHz CL16 Viper Steel",
    price: 519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_27_14_15_38_231_03.jpg",
    link: "https://www.x-kom.pl/p/647736-pamiec-ram-ddr4-patriot-64gb-2x32gb-3200mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "1163352",
    name: "Patriot 64GB (2x32GB) 6400MHz CL32 Viper VENOM",
    price: 879,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/7/pr_2023_7_24_17_2_27_302_01.jpg",
    link: "https://www.x-kom.pl/p/1163352-pamiec-ram-ddr5-patriot-64gb-2x32gb-6400mhz-cl32-viper-venom.html",
    type: "RAM"
  },
  {
    id: "509442",
    name: "Corsair 16GB(2x8GB) 3600MHz CL18 Vengeance RGB Pro",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_24_18_16_10_97_06.jpg",
    link: "https://www.x-kom.pl/p/509442-pamiec-ram-ddr4-corsair-16gb2x8gb-3600mhz-cl18-vengeance-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "1259047",
    name: "Corsair 64GB (2x32GB) 6000 CL30 AMD EXPO",
    price: 1080,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1259047-pamiec-ram-ddr5-corsair-64gb-2x32gb-6000-cl30-amd-expo.html",
    type: "RAM"
  },
  {
    id: "176084",
    name: "GOODRAM 8GB (1x8GB) 1333MHz CL9",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_9_2_13_235.jpg",
    link: "https://www.x-kom.pl/p/176084-pamiec-ram-ddr3-goodram-8gb-1x8gb-1333mhz-cl9.html",
    type: "RAM"
  },
  {
    id: "516829",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL16 TridentZ RGB Neo",
    price: 264,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/9/pr_2019_9_19_11_11_26_260_02.jpg",
    link: "https://www.x-kom.pl/p/516829-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl16-tridentz-rgb-neo.html",
    type: "RAM"
  },
  {
    id: "550955",
    name: "G.SKILL 64GB (2x32GB) 3200MHz CL16 TridentZ RGB Neo",
    price: 659,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/9/pr_2019_9_19_11_11_26_260_02.jpg",
    link: "https://www.x-kom.pl/p/550955-pamiec-ram-ddr4-gskill-64gb-2x32gb-3200mhz-cl16-tridentz-rgb-neo.html",
    type: "RAM"
  },
  {
    id: "692711",
    name: "GOODRAM 16GB (1x16GB) 2666Mhz CL19 dedykowana Lenovo",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_3_12_33_15_834_01.jpg",
    link: "https://www.x-kom.pl/p/692711-pamiec-ram-ddr4-goodram-16gb-1x16gb-2666mhz-cl19-dedykowana-lenovo.html",
    type: "RAM"
  },
  {
    id: "428339",
    name: "G.SKILL 16GB (1x16GB) 3000MHz CL16 Aegis",
    price: 120,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_27_34_631.jpg",
    link: "https://www.x-kom.pl/p/428339-pamiec-ram-ddr4-gskill-16gb-1x16gb-3000mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "441852",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance RGB Pro",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_24_18_16_10_97_06.jpg",
    link: "https://www.x-kom.pl/p/441852-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "1063543",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Renegade RGB",
    price: 719,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/8/pr_2022_8_11_11_26_41_540_01.jpg",
    link: "https://www.x-kom.pl/p/1063543-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "1131297",
    name: "Patriot 32GB (2x16GB) 7000MHz CL32 VIPER VENOM",
    price: 479,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1131297-pamiec-ram-ddr5-patriot-32gb-2x16gb-7000mhz-cl32-viper-venom.html",
    type: "RAM"
  },
  {
    id: "335078",
    name: "Corsair 16GB (1x16GB) 2133MHz CL15 ValueSelect",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_8_38_54_932.jpg",
    link: "https://www.x-kom.pl/p/335078-pamiec-ram-ddr4-corsair-16gb-1x16gb-2133mhz-cl15-valueselect.html",
    type: "RAM"
  },
  {
    id: "1054403",
    name: "Patriot 32GB (2x16GB) 3600MHz CL18 Viper Steel RGB",
    price: 309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_20_16_38_39_951_00.jpg",
    link: "https://www.x-kom.pl/p/1054403-pamiec-ram-ddr4-patriot-32gb-2x16gb-3600mhz-cl18-viper-steel-rgb.html",
    type: "RAM"
  },
  {
    id: "1189898",
    name: "Corsair 32GB (2x16GB) 6000MHz CL36 Vengeance",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1189898-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl36-vengeance.html",
    type: "RAM"
  },
  {
    id: "475620",
    name: "Patriot 8GB (1x8GB) 3000MHz CL16 Viper Steel",
    price: 85,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_6_779_00.jpg",
    link: "https://www.x-kom.pl/p/475620-pamiec-ram-ddr4-patriot-8gb-1x8gb-3000mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "550214",
    name: "Patriot 8GB (1x8GB) 3200MHz CL16 Viper Steel",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_6_779_00.jpg",
    link: "https://www.x-kom.pl/p/550214-pamiec-ram-ddr4-patriot-8gb-1x8gb-3200mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "545494",
    name: "Patriot 16GB (1x16GB) 3200MHz CL16 Viper Steel",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_6_779_00.jpg",
    link: "https://www.x-kom.pl/p/545494-pamiec-ram-ddr4-patriot-16gb-1x16gb-3200mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "745579",
    name: "Patriot 32GB (2x16GB) 6200MHz CL40 Viper Venom RGB",
    price: 583,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_12_49_47_383_01.jpg",
    link: "https://www.x-kom.pl/p/745579-pamiec-ram-ddr5-patriot-32gb-2x16gb-6200mhz-cl40-viper-venom-rgb.html",
    type: "RAM"
  },
  {
    id: "176066",
    name: "GOODRAM 8GB (1x8GB) 1600MHz CL11",
    price: 59,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_7_17_31_27_117_00.jpg",
    link: "https://www.x-kom.pl/p/176066-pamiec-ram-ddr3-goodram-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "647659",
    name: "Patriot 64GB (2x32GB) 3600MHz CL18 Viper Steel",
    price: 609,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_27_14_7_44_679_03.jpg",
    link: "https://www.x-kom.pl/p/647659-pamiec-ram-ddr4-patriot-64gb-2x32gb-3600mhz-cl18-viper-steel.html",
    type: "RAM"
  },
  {
    id: "543857",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL18 TridentZ RGB",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/2/pr_2020_2_10_9_31_49_834_01.jpg",
    link: "https://www.x-kom.pl/p/543857-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl18-tridentz-rgb.html",
    type: "RAM"
  },
  {
    id: "1063539",
    name: "Kingston FURY 16GB (1x16GB) 6400MHz CL32 Renegade RGB",
    price: 372,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/8/pr_2022_8_11_9_4_6_10_01.jpg",
    link: "https://www.x-kom.pl/p/1063539-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-6400mhz-cl32-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "81524",
    name: "Kingston 4GB (1x4GB) 1600MHz CL11 DDR3L",
    price: 95,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_20_8_15_33_279.jpg",
    link: "https://www.x-kom.pl/p/81524-pamiec-ram-sodimm-ddr3-kingston-4gb-1x4gb-1600mhz-cl11-ddr3l.html",
    type: "RAM"
  },
  {
    id: "482929",
    name: "Patriot 16GB (2x8GB) 3600MHz CL17 Viper Steel",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_17_828_00.jpg",
    link: "https://www.x-kom.pl/p/482929-pamiec-ram-ddr4-patriot-16gb-2x8gb-3600mhz-cl17-viper-steel.html",
    type: "RAM"
  },
  {
    id: "81525",
    name: "Kingston 8GB (1x8GB) 1600MHz CL11 DDR3L",
    price: 177.16,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_20_8_44_29_31.jpg",
    link: "https://www.x-kom.pl/p/81525-pamiec-ram-sodimm-ddr3-kingston-8gb-1x8gb-1600mhz-cl11-ddr3l.html",
    type: "RAM"
  },
  {
    id: "701224",
    name: "G.SKILL 16GB (2x8GB) 2666MHz CL19 Aegis",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_29_11_37_26_244_02.jpg",
    link: "https://www.x-kom.pl/p/701224-pamiec-ram-ddr4-gskill-16gb-2x8gb-2666mhz-cl19-aegis.html",
    type: "RAM"
  },
  {
    id: "1054408",
    name: "Patriot 16GB (2x8GB) 3200MHz CL16 Viper Steel RGB",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_20_16_38_39_951_00.jpg",
    link: "https://www.x-kom.pl/p/1054408-pamiec-ram-ddr4-patriot-16gb-2x8gb-3200mhz-cl16-viper-steel-rgb.html",
    type: "RAM"
  },
  {
    id: "388629",
    name: "GOODRAM 4GB (1x4GB) 1600MHz CL11",
    price: 50.36,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/10/pr_2017_10_23_8_26_8_486_00.jpg",
    link: "https://www.x-kom.pl/p/388629-pamiec-ram-ddr3-goodram-4gb-1x4gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "211310",
    name: "GOODRAM 4GB (1x4GB) 1333MHz CL9",
    price: 41.5,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_16_11_21_32_533_00.jpg",
    link: "https://www.x-kom.pl/p/211310-pamiec-ram-ddr3-goodram-4gb-1x4gb-1333mhz-cl9.html",
    type: "RAM"
  },
  {
    id: "612981",
    name: "Crucial 16GB (1x16GB) 3200MHz",
    price: 119,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/12/pr_2020_12_11_14_34_16_258_00.jpg",
    link: "https://www.x-kom.pl/p/612981-pamiec-ram-ddr4-crucial-16gb-1x16gb-3200mhz.html",
    type: "RAM"
  },
  {
    id: "692878",
    name: "Patriot 16GB (1x16GB) 3200MHz CL22 Signature",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_26_11_41_44_222_02.jpg",
    link: "https://www.x-kom.pl/p/692878-pamiec-ram-sodimm-ddr4-patriot-16gb-1x16gb-3200mhz-cl22-signature.html",
    type: "RAM"
  },
  {
    id: "590699",
    name: "Kingston 16GB (1x16GB) 3200MHz CL22",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_21_13_58_2_383_00.jpg",
    link: "https://www.x-kom.pl/p/590699-pamiec-ram-sodimm-ddr4-kingston-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "544077",
    name: "G.SKILL 32GB (2x16GB) 3200MHz CL16 FlareX AMD",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_9_0_26_844.jpg",
    link: "https://www.x-kom.pl/p/544077-pamiec-ram-ddr4-gskill-32gb-2x16gb-3200mhz-cl16-flarex-amd.html",
    type: "RAM"
  },
  {
    id: "1182434",
    name: "Corsair 32GB (2x16GB) 5600MHz CL40 VENGEANCE",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1182434-pamiec-ram-ddr5-corsair-32gb-2x16gb-5600mhz-cl40-vengeance.html",
    type: "RAM"
  },
  {
    id: "736602",
    name: "Crucial 16GB (1x16GB) 4800MHz CL40",
    price: 168,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/3/pr_2022_3_28_15_46_58_619_00.jpg",
    link: "https://www.x-kom.pl/p/736602-pamiec-ram-sodimm-ddr5-crucial-16gb-1x16gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "539275",
    name: "G.SKILL 32GB (2x16GB) 3200MHz CL16 Aegis",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/1/pr_2020_1_16_15_27_23_437_02.jpg",
    link: "https://www.x-kom.pl/p/539275-pamiec-ram-ddr4-gskill-32gb-2x16gb-3200mhz-cl16-aegis.html",
    type: "RAM"
  },
  {
    id: "1194706",
    name: "Patriot 32GB (2x16GB) 5600MHz CL36 Viper Venom",
    price: 389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_9_11_7_1_505_00.jpg",
    link: "https://www.x-kom.pl/p/1194706-pamiec-ram-ddr5-patriot-32gb-2x16gb-5600mhz-cl36-viper-venom.html",
    type: "RAM"
  },
  {
    id: "1131294",
    name: "Patriot 32GB (2x16GB) 7200MHz CL34 VIPER VENOM",
    price: 598,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1131294-pamiec-ram-ddr5-patriot-32gb-2x16gb-7200mhz-cl34-viper-venom.html",
    type: "RAM"
  },
  {
    id: "1131293",
    name: "Patriot 32GB (2x16GB) 7400MHz CL36 VIPER VENOM",
    price: 549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1131293-pamiec-ram-ddr5-patriot-32gb-2x16gb-7400mhz-cl36-viper-venom.html",
    type: "RAM"
  },
  {
    id: "1258923",
    name: "Patriot 32GB(2x16GB) 6000MT/s CL30 Venom RGB",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_12_49_47_383_01.jpg",
    link: "https://www.x-kom.pl/p/1258923-pamiec-ram-ddr5-patriot-32gb2x16gb-6000mt-s-cl30-venom-rgb.html",
    type: "RAM"
  },
  {
    id: "745577",
    name: "Patriot 32GB (2x16GB) 6200MHz CL40 Viper Venom",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/745577-pamiec-ram-ddr5-patriot-32gb-2x16gb-6200mhz-cl40-viper-venom.html",
    type: "RAM"
  },
  {
    id: "616303",
    name: "GOODRAM 16GB (1x16GB) 3200MHz CL22",
    price: 59,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/12/pr_2020_12_1_12_41_11_339_00.jpg",
    link: "https://www.x-kom.pl/p/616303-pamiec-ram-ddr4-goodram-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1278258",
    name: "Corsair 96GB (2x48GB) 6000 CL30 Vengeance Intel XMP",
    price: 1609,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1278258-pamiec-ram-ddr5-corsair-96gb-2x48gb-6000-cl30-vengeance-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "440961",
    name: "Corsair 16GB (2x8GB) 3000MHz CL15 Vengeance RGB PRO",
    price: 244.83,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_24_18_16_10_97_06.jpg",
    link: "https://www.x-kom.pl/p/440961-pamiec-ram-ddr4-corsair-16gb-2x8gb-3000mhz-cl15-vengeance-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "1115212",
    name: "Silicon Power 16GB (1x16GB) 3200MHz CL16 XPOWER Zenith RGB",
    price: 168.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_14_45_40_756_01.jpg",
    link: "https://www.x-kom.pl/p/1115212-pamiec-ram-ddr4-silicon-power-16gb-1x16gb-3200mhz-cl16-xpower-zenith-rgb.html",
    type: "RAM"
  },
  {
    id: "1138971",
    name: "Kingston FURY 64GB (2x32GB) 5200MHz CL40 Beast White RGB XMP",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_48_58_943_00.jpg",
    link: "https://www.x-kom.pl/p/1138971-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5200mhz-cl40-beast-white-rgb-xmp.html",
    type: "RAM"
  },
  {
    id: "415597",
    name: "Patriot 8GB (1x8GB) 2400MHz CL17 Signature",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/11/pr_2018_11_13_11_0_11_815_00.jpg",
    link: "https://www.x-kom.pl/p/415597-pamiec-ram-ddr4-patriot-8gb-1x8gb-2400mhz-cl17-signature.html",
    type: "RAM"
  },
  {
    id: "1128388",
    name: "GOODRAM 16GB (1x16GB) 4800MHz CL40",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_20_8_39_23_512_01.jpg",
    link: "https://www.x-kom.pl/p/1128388-pamiec-ram-sodimm-ddr5-goodram-16gb-1x16gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "532587",
    name: "Team Group 16GB (2x8GB) 3200MHz CL16 T‑Force VulcanZ RED",
    price: 119,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/12/pr_2019_12_9_17_50_6_964_01.jpg",
    link: "https://www.x-kom.pl/p/532587-pamiec-ram-ddr4-team-group-16gb-2x8gb-3200mhz-cl16-t-force-vulcanz-red.html",
    type: "RAM"
  },
  {
    id: "420902",
    name: "GOODRAM 4GB (1x4GB) 1600MHz CL11",
    price: 49,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_8_35_50_169_01.jpg",
    link: "https://www.x-kom.pl/p/420902-pamiec-ram-sodimm-ddr3-goodram-4gb-1x4gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "1216992",
    name: "GOODRAM 32GB (2x16GB) 6000MHz CL30 IRDM RGB",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_24_12_40_18_487_00.jpg",
    link: "https://www.x-kom.pl/p/1216992-pamiec-ram-ddr5-goodram-32gb-2x16gb-6000mhz-cl30-irdm-rgb.html",
    type: "RAM"
  },
  {
    id: "1080085",
    name: "Corsair 32GB (2x16GB) 5200MHz CL40 Vengeance AMD EXPO",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/10/pr_2022_10_12_6_59_34_681_00.jpg",
    link: "https://www.x-kom.pl/p/1080085-pamiec-ram-ddr5-corsair-32gb-2x16gb-5200mhz-cl40-vengeance-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1216997",
    name: "GOODRAM 32GB (2x16GB) 6400MHz CL32 IRDM RGB",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_24_12_40_18_487_00.jpg",
    link: "https://www.x-kom.pl/p/1216997-pamiec-ram-ddr5-goodram-32gb-2x16gb-6400mhz-cl32-irdm-rgb.html",
    type: "RAM"
  },
  {
    id: "1230770",
    name: "ADATA 64GB (2x32GB) 6400MHz CL32 XPG Lancer RGB",
    price: 1039,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_8_13_33_29_101_03.jpg",
    link: "https://www.x-kom.pl/p/1230770-pamiec-ram-ddr5-adata-64gb-2x32gb-6400mhz-cl32-xpg-lancer-rgb.html",
    type: "RAM"
  },
  {
    id: "1194579",
    name: "Corsair 32GB (2x16GB) 3200MHz CL22 Vengeance",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_21_10_48_56_531_00.jpg",
    link: "https://www.x-kom.pl/p/1194579-pamiec-ram-sodimm-ddr4-corsair-32gb-2x16gb-3200mhz-cl22-vengeance.html",
    type: "RAM"
  },
  {
    id: "707660",
    name: "Corsair 32GB (2x16GB) 5600Mhz CL36 Dominator Platinum RGB",
    price: 1799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_26_14_43_6_300_02.jpg",
    link: "https://www.x-kom.pl/p/707660-pamiec-ram-ddr5-corsair-32gb-2x16gb-5600mhz-cl36-dominator-platinum-rgb.html",
    type: "RAM"
  },
  {
    id: "1326573",
    name: "ADATA 32GB (2x16) 3200 CL16 Gammix D35",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/3/pr_2025_3_28_9_38_37_193_00.jpg",
    link: "https://www.x-kom.pl/p/1326573-pamiec-ram-ddr4-adata-32gb-2x16-3200-cl16-gammix-d35.html",
    type: "RAM"
  },
  {
    id: "1326574",
    name: "ADATA 32GB (2x16) 3600 CL18 Spectrix RGB White",
    price: 335,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/5/pr_2025_5_14_12_41_59_431_04.jpg",
    link: "https://www.x-kom.pl/p/1326574-pamiec-ram-ddr4-adata-32gb-2x16-3600-cl18-spectrix-rgb-white.html",
    type: "RAM"
  },
  {
    id: "1318505",
    name: "Crucial 48GB (2x24GB) 5600 CL46 do notebooka",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_4_41_967_00.jpg",
    link: "https://www.x-kom.pl/p/1318505-pamiec-ram-sodimm-ddr5-crucial-48gb-2x24gb-5600-cl46-do-notebooka.html",
    type: "RAM"
  },
  {
    id: "1318181",
    name: "GOODRAM 32GB (2x16GB) 5600 CL36 IRDM",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_22_9_24_53_830_00.jpg",
    link: "https://www.x-kom.pl/p/1318181-pamiec-ram-ddr5-goodram-32gb-2x16gb-5600-cl36-irdm.html",
    type: "RAM"
  },
  {
    id: "1203680",
    name: "Corsair 32GB (2x16GB) 3600MHz CL16 Vengeance RGB RT",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_22_8_50_33_793_00.jpg",
    link: "https://www.x-kom.pl/p/1203680-pamiec-ram-ddr4-corsair-32gb-2x16gb-3600mhz-cl16-vengeance-rgb-rt.html",
    type: "RAM"
  },
  {
    id: "1272066",
    name: "HP 8GB DIMM DDR4 3733MHz",
    price: 299,
    image: "https://assets.x-kom.pl/public/xkom/8f1cf5db92839e83.svg",
    link: "https://www.x-kom.pl/p/1272066-pamiec-ram-sodimm-ddr4-hp-8gb-dimm-ddr4-3733mhz.html",
    type: "RAM"
  },
  {
    id: "1307598",
    name: "Dell Memory Upgrade 32GB 2Rx8 DDR5 UDIMM 5600 MT/s ECC",
    price: 1499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/12/pr_2024_12_30_8_25_17_821_00.jpg",
    link: "https://www.x-kom.pl/p/1307598-pamiec-ram-serwerowa-dell-memory-upgrade-32gb-2rx8-ddr5-udimm-5600-mt-s-ecc.html",
    type: "RAM"
  },
  {
    id: "1307595",
    name: "Dell Memory Upgrade 16GB 1Rx8 DDR5 UDIMM 5600 MT/s ECC",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/12/pr_2024_12_30_8_25_17_821_00.jpg",
    link: "https://www.x-kom.pl/p/1307595-pamiec-ram-serwerowa-dell-memory-upgrade-16gb-1rx8-ddr5-udimm-5600-mt-s-ecc.html",
    type: "RAM"
  },
  {
    id: "1296286",
    name: "Kingston FURY 48GB (2x24GB) CL40 CUDIMM Renegade White RGB XMP",
    price: 1239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_25_14_50_2_924_00.jpg",
    link: "https://www.x-kom.pl/p/1296286-pamiec-ram-ddr5-kingston-fury-48gb-2x24gb-cl40-cudimm-renegade-white-rgb-xmp.html",
    type: "RAM"
  },
  {
    id: "1296285",
    name: "Kingston FURY 48GB (2x24GB) CL40 CUDIMM Renegade White XMP",
    price: 1489,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_25_15_1_27_300_00.jpg",
    link: "https://www.x-kom.pl/p/1296285-pamiec-ram-ddr5-kingston-fury-48gb-2x24gb-cl40-cudimm-renegade-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1296283",
    name: "Kingston FURY 48GB (2x24GB) CL40 CUDIMM Renegade Silver XMP",
    price: 1639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_25_14_56_42_112_00.jpg",
    link: "https://www.x-kom.pl/p/1296283-pamiec-ram-ddr5-kingston-fury-48gb-2x24gb-cl40-cudimm-renegade-silver-xmp.html",
    type: "RAM"
  },
  {
    id: "1296282",
    name: "Kingston FURY 24GB 8400MT/s CL40 CUDIMM Renegade White RGB XMP",
    price: 619,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_25_14_52_33_164_00.jpg",
    link: "https://www.x-kom.pl/p/1296282-pamiec-ram-ddr5-kingston-fury-24gb-8400mt-s-cl40-cudimm-renegade-white-rgb-xmp.html",
    type: "RAM"
  },
  {
    id: "1292593",
    name: "Crucial 32GB (2x16GB) 6400 CL38 Pro OC",
    price: 589,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/11/pr_2024_11_15_15_59_20_200_00.jpg",
    link: "https://www.x-kom.pl/p/1292593-pamiec-ram-ddr5-crucial-32gb-2x16gb-6400-cl38-pro-oc.html",
    type: "RAM"
  },
  {
    id: "1288880",
    name: "Dell Memory Upgrade 32GB 2RX8 DDR5 UDIMM 4800MHz ECC",
    price: 1549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_24_8_24_12_200_00.jpg",
    link: "https://www.x-kom.pl/p/1288880-pamiec-ram-serwerowa-dell-memory-upgrade-32gb-2rx8-ddr5-udimm-4800mhz-ecc.html",
    type: "RAM"
  },
  {
    id: "1278274",
    name: "Corsair 32GB (2x16GB) 6400 CL32 Vengeance",
    price: 419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_7_10_52_510_01.jpg",
    link: "https://www.x-kom.pl/p/1278274-pamiec-ram-ddr5-corsair-32gb-2x16gb-6400-cl32-vengeance.html",
    type: "RAM"
  },
  {
    id: "1282612",
    name: "Dell Memory Upgrade 16GB 1RX8 DDR5 UDIMM 4800MHz ECC",
    price: 799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/10/pr_2024_10_24_8_24_12_200_00.jpg",
    link: "https://www.x-kom.pl/p/1282612-pamiec-ram-serwerowa-dell-memory-upgrade-16gb-1rx8-ddr5-udimm-4800mhz-ecc.html",
    type: "RAM"
  },
  {
    id: "1261224",
    name: "Dell Memory Upgrade ‑ 32GB ‑ 2RX8 DDR4 RDIMM 3200MHz",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/11/pr_2020_11_24_11_36_19_223_00.jpg",
    link: "https://www.x-kom.pl/p/1261224-pamiec-ram-serwerowa-dell-memory-upgrade-32gb-2rx8-ddr4-rdimm-3200mhz.html",
    type: "RAM"
  },
  {
    id: "1189841",
    name: "Synology 16GB DDR4 ECC DIMM",
    price: 1759,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_10_6_55_44_818_00.jpg",
    link: "https://www.x-kom.pl/p/1189841-pamiec-ram-ddr4-synology-16gb-ddr4-ecc-dimm.html",
    type: "RAM"
  },
  {
    id: "1115183",
    name: "Silicon Power 32GB (1x32GB) 3200MHz CL22",
    price: 279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_14_17_41_726_00.jpg",
    link: "https://www.x-kom.pl/p/1115183-pamiec-ram-sodimm-ddr4-silicon-power-32gb-1x32gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1228539",
    name: "Patriot 32GB (2x16GB) 8200MHz CL38 Viper XTREME 5",
    price: 639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/3/pr_2024_3_6_11_43_46_586_03.jpg",
    link: "https://www.x-kom.pl/p/1228539-pamiec-ram-ddr5-patriot-32gb-2x16gb-8200mhz-cl38-viper-xtreme-5.html",
    type: "RAM"
  },
  {
    id: "1090850",
    name: "Synology 8GB DDR4 ECC",
    price: 829,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/3/pr_2025_3_7_8_32_0_586_00.jpg",
    link: "https://www.x-kom.pl/p/1090850-pamiec-ram-sodimm-sdram-synology-8gb-ddr4-ecc.html",
    type: "RAM"
  },
  {
    id: "1115175",
    name: "Silicon Power 8GB (1x8GB) 3200MHz CL22",
    price: 76.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_14_23_9_359_00.jpg",
    link: "https://www.x-kom.pl/p/1115175-pamiec-ram-sodimm-ddr4-silicon-power-8gb-1x8gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1115185",
    name: "Silicon Power 8GB (1x8GB) 2666MHz CL19",
    price: 69.25,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_14_23_22_374_00.jpg",
    link: "https://www.x-kom.pl/p/1115185-pamiec-ram-sodimm-ddr4-silicon-power-8gb-1x8gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "1138120",
    name: "G.SKILL 32GB (2x16GB) 3600MHz CL18 Trident Z RGB",
    price: 462,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_23_14_56_45_481_00.jpg",
    link: "https://www.x-kom.pl/p/1138120-pamiec-ram-ddr4-gskill-32gb-2x16gb-3600mhz-cl18-trident-z-rgb.html",
    type: "RAM"
  },
  {
    id: "1170259",
    name: "Dell Memory Upgrade ‑ 16GB ‑ 1RX8 DDR5 UDIMM 4800MHz",
    price: 849,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_3_9_31_28_899_00.jpg",
    link: "https://www.x-kom.pl/p/1170259-pamiec-ram-ddr5-dell-memory-upgrade-16gb-1rx8-ddr5-udimm-4800mhz.html",
    type: "RAM"
  },
  {
    id: "1136143",
    name: "Apacer 8GB (1x8GB) 3200MHz CL16 ZADAK TWIST",
    price: 111,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_11_15_10_50_174_03.jpg",
    link: "https://www.x-kom.pl/p/1136143-pamiec-ram-ddr4-apacer-8gb-1x8gb-3200mhz-cl16-zadak-twist.html",
    type: "RAM"
  },
  {
    id: "1187759",
    name: "Crucial 48GB (2x24GB) 6000MHz CL48 Pro",
    price: 739,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/5/pr_2023_5_19_9_47_36_856_02.jpg",
    link: "https://www.x-kom.pl/p/1187759-pamiec-ram-ddr5-crucial-48gb-2x24gb-6000mhz-cl48-pro.html",
    type: "RAM"
  },
  {
    id: "1163326",
    name: "Patriot 32GB (2x16GB) 7600MHz CL36 Viper RGB XTREME 5",
    price: 659,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/7/pr_2023_7_24_16_41_3_25_02.jpg",
    link: "https://www.x-kom.pl/p/1163326-pamiec-ram-ddr5-patriot-32gb-2x16gb-7600mhz-cl36-viper-rgb-xtreme-5.html",
    type: "RAM"
  },
  {
    id: "1163325",
    name: "Patriot 32GB (2x16GB) 7800MHz CL40 Viper RGB XTREME 5",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/7/pr_2023_7_24_16_41_3_25_02.jpg",
    link: "https://www.x-kom.pl/p/1163325-pamiec-ram-ddr5-patriot-32gb-2x16gb-7800mhz-cl40-viper-rgb-xtreme-5.html",
    type: "RAM"
  },
  {
    id: "1116357",
    name: "Dell Memory Upgrade ‑ 32GB ‑ 2RX8 DDR4 UDIMM 3200MHz ECC",
    price: 1799,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_10_14_25_43_73_00.jpg",
    link: "https://www.x-kom.pl/p/1116357-pamiec-ram-serwerowa-dell-memory-upgrade-32gb-2rx8-ddr4-udimm-3200mhz-ecc.html",
    type: "RAM"
  },
  {
    id: "1050491",
    name: "Synology 4GB 2666MHz DDR4",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/6/pr_2022_6_29_11_6_30_115_00.jpg",
    link: "https://www.x-kom.pl/p/1050491-pamiec-ram-sodimm-ddr4-synology-4gb-2666mhz-ddr4.html",
    type: "RAM"
  },
  {
    id: "1067541",
    name: "Corsair 16GB (2x8GB) 3600MHz CL18 Vengeance RGB RS",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_12_14_48_4_763_03.jpg",
    link: "https://www.x-kom.pl/p/1067541-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl18-vengeance-rgb-rs.html",
    type: "RAM"
  },
  {
    id: "1078427",
    name: "Dell MEMORY RAM Upgrade ‑ 32GB ‑ 2RX8 DDR5 SODIMM 4800MHz",
    price: 1499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_5_13_41_38_950_00.jpg",
    link: "https://www.x-kom.pl/p/1078427-pamiec-ram-sodimm-ddr5-dell-memory-ram-upgrade-32gb-2rx8-ddr5-sodimm-4800mhz.html",
    type: "RAM"
  },
  {
    id: "1099554",
    name: "Dell Memory Upgrade ‑ 32GB ‑ 2Rx4 DDR4 RDIMM 3200MHz",
    price: 1499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/11/pr_2020_11_24_11_36_19_223_00.jpg",
    link: "https://www.x-kom.pl/p/1099554-pamiec-ram-serwerowa-dell-memory-upgrade-32gb-2rx4-ddr4-rdimm-3200mhz.html",
    type: "RAM"
  },
  {
    id: "1099158",
    name: "Dell Memory Upgrade ‑ 16GB ‑ 2Rx8 DDR4 RDIMM 3200MHz",
    price: 696.41,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/12/pr_2022_12_9_13_30_17_487_00.jpg",
    link: "https://www.x-kom.pl/p/1099158-pamiec-ram-serwerowa-dell-memory-upgrade-16gb-2rx8-ddr4-rdimm-3200mhz.html",
    type: "RAM"
  },
  {
    id: "1077281",
    name: "HPE 32GB 2Rx4 PC4‑2933Y‑R Smart Kit",
    price: 809,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/9/pr_2022_9_29_8_10_26_986_00.jpg",
    link: "https://www.x-kom.pl/p/1077281-pamiec-ram-serwerowa-hpe-32gb-2rx4-pc4-2933y-r-smart-kit.html",
    type: "RAM"
  },
  {
    id: "1083679",
    name: "Dell MEMORY RAM Upgrade ‑ 16GB ‑ 1RX8 DDR5 SODIMM 4800MHz",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/1/pr_2023_1_5_13_41_38_950_00.jpg",
    link: "https://www.x-kom.pl/p/1083679-pamiec-ram-sodimm-ddr5-dell-memory-ram-upgrade-16gb-1rx8-ddr5-sodimm-4800mhz.html",
    type: "RAM"
  },
  {
    id: "1079764",
    name: "HP 16GB (1x16GB) 4800MHz",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/10/pr_2022_10_11_7_22_33_204_02.jpg",
    link: "https://www.x-kom.pl/p/1079764-pamiec-ram-sodimm-ddr5-hp-16gb-1x16gb-4800mhz.html",
    type: "RAM"
  },
  {
    id: "1079763",
    name: "HP 8GB (1x8GB) 4800MHz",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/10/pr_2022_10_11_7_46_49_95_02.jpg",
    link: "https://www.x-kom.pl/p/1079763-pamiec-ram-sodimm-ddr5-hp-8gb-1x8gb-4800mhz.html",
    type: "RAM"
  },
  {
    id: "1335161",
    name: "GOODRAM 16GB (1x16GB) 3600 CL18 Beast RGB",
    price: 199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/11/pr_2023_11_10_13_37_12_261_00.jpg",
    link: "https://www.x-kom.pl/p/1335161-pamiec-ram-ddr4-goodram-16gb-1x16gb-3600-cl18-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1332330",
    name: "Lexar 48GB (2x24GB) 7600 CL38 Ares RGB",
    price: 909,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_13_8_28_23_360_00.jpg",
    link: "https://www.x-kom.pl/p/1332330-pamiec-ram-ddr5-lexar-48gb-2x24gb-7600-cl38-ares-rgb.html",
    type: "RAM"
  },
  {
    id: "1332329",
    name: "Lexar 32GB (2x16GB) 7600 CL36 Ares RGB",
    price: 809,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_13_8_28_23_360_00.jpg",
    link: "https://www.x-kom.pl/p/1332329-pamiec-ram-ddr5-lexar-32gb-2x16gb-7600-cl36-ares-rgb.html",
    type: "RAM"
  },
  {
    id: "1330383",
    name: "Kingston FURY 64GB (2x32GB) 6000 CL30 Beast RGB White XMP",
    price: 1019,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/4/pr_2023_4_18_14_48_58_943_00.jpg",
    link: "https://www.x-kom.pl/p/1330383-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-6000-cl30-beast-rgb-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1327253",
    name: "Crucial 64GB (2x32GB) 5600 CL46 Pro",
    price: 899,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/10/pr_2023_10_13_8_49_30_782_00.jpg",
    link: "https://www.x-kom.pl/p/1327253-pamiec-ram-ddr5-crucial-64gb-2x32gb-5600-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "1326582",
    name: "ADATA 64GB (2x32) 6400 CL32 Lancer",
    price: 1089,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_28_9_26_59_153_00.jpg",
    link: "https://www.x-kom.pl/p/1326582-pamiec-ram-ddr5-adata-64gb-2x32-6400-cl32-lancer.html",
    type: "RAM"
  },
  {
    id: "1326572",
    name: "ADATA 16GB (2x8) 3600 CL18 Spectrix D35G RGB",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/1/pr_2025_1_10_13_31_39_76_00.jpg",
    link: "https://www.x-kom.pl/p/1326572-pamiec-ram-ddr5-adata-16gb-2x8-3600-cl18-spectrix-d35g-rgb.html",
    type: "RAM"
  },
  {
    id: "1326571",
    name: "ADATA 16GB (2x8) 3200 CL16 Gamix D35",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_28_9_38_37_193_00.jpg",
    link: "https://www.x-kom.pl/p/1326571-pamiec-ram-ddr4-adata-16gb-2x8-3200-cl16-gamix-d35.html",
    type: "RAM"
  },
  {
    id: "1323964",
    name: "PNY 32GB (2x16GB) 6400 CL36 Gaming EPIC‑X RGB",
    price: 549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_17_15_55_7_860_00.jpg",
    link: "https://www.x-kom.pl/p/1323964-pamiec-ram-ddr5-pny-32gb-2x16gb-6400-cl36-gaming-epic-x-rgb.html",
    type: "RAM"
  },
  {
    id: "1116004",
    name: "Kingston FURY 32GB (1x32GB) 5600MHz CL36 Beast RGB EXPO",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/9/pr_2022_9_13_13_15_14_109_00.jpg",
    link: "https://www.x-kom.pl/p/1116004-pamiec-ram-ddr5-kingston-fury-32gb-1x32gb-5600mhz-cl36-beast-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "1087593",
    name: "Synology 4GB DDR4 ECC",
    price: 399,
    image: "https://assets.x-kom.pl/public/xkom/8f1cf5db92839e83.svg",
    link: "https://www.x-kom.pl/p/1087593-pamiec-ram-sodimm-ddr4-synology-4gb-ddr4-ecc.html",
    type: "RAM"
  },
  {
    id: "1080579",
    name: "Synology 8GB 2666MHz DDR4",
    price: 899,
    image: "https://assets.x-kom.pl/public/xkom/8f1cf5db92839e83.svg",
    link: "https://www.x-kom.pl/p/1080579-pamiec-ram-synology-8gb-2666mhz-ddr4.html",
    type: "RAM"
  },
  {
    id: "215645",
    name: "G.SKILL 16384MB 1600MHz RipjawsX CL9 (2x8192)",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,pr_2015_7_10_9_22_13_268.jpg",
    link: "https://www.x-kom.pl/p/215645-pamiec-ram-ddr3-gskill-16384mb-1600mhz-ripjawsx-cl9-2x8192.html",
    type: "RAM"
  },
  {
    id: "81971",
    name: "Patriot 8192MB 1333MHz Signature Line CL9",
    price: 64.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,pr_2015_6_9_12_12_11_315.jpg",
    link: "https://www.x-kom.pl/p/81971-pamiec-ram-ddr3-patriot-8192mb-1333mhz-signature-line-cl9.html",
    type: "RAM"
  },
  {
    id: "1291803",
    name: "Kingston FURY 32GB (2x16GB) 6000 CL36 FURY Beast White",
    price: 519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_56_30_447_00.jpg",
    link: "https://www.x-kom.pl/p/1291803-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6000-cl36-fury-beast-white.html",
    type: "RAM"
  },
  {
    id: "1182221",
    name: "GOODRAM 32GB (2x16GB) 5600MHz CL30 IRDM BLACK V SILVER",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/9/pr_2023_9_22_8_53_46_748_00.jpg",
    link: "https://www.x-kom.pl/p/1182221-pamiec-ram-ddr5-goodram-32gb-2x16gb-5600mhz-cl30-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "723298",
    name: "ADATA 32GB (2x16GB) 3200MHz Gammix D10",
    price: 240.83,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_25_12_50_25_494_03.jpg",
    link: "https://www.x-kom.pl/p/723298-pamiec-ram-ddr4-adata-32gb-2x16gb-3200mhz-gammix-d10.html",
    type: "RAM"
  },
  {
    id: "1259042",
    name: "Corsair 32GB (2x16GB) 6000MT/s CL30 Vengeance RGB Intel XMP",
    price: 589,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1259042-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mt-s-cl30-vengeance-rgb-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1241128",
    name: "Corsair 32GB (2x16GB) 6000MHz CL38 Vengeance RGB Intel XMP",
    price: 489,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1241128-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl38-vengeance-rgb-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1207939",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Vengeance LPX White",
    price: 309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_22_9_13_26_606_00.jpg",
    link: "https://www.x-kom.pl/p/1207939-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-vengeance-lpx-white.html",
    type: "RAM"
  },
  {
    id: "1207935",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance LPX White",
    price: 212,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_22_9_13_26_606_00.jpg",
    link: "https://www.x-kom.pl/p/1207935-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-lpx-white.html",
    type: "RAM"
  },
  {
    id: "1221924",
    name: "Patriot 32GB (2x16GB) 7000MHz CL38 Viper Elite 5 RGB White",
    price: 469,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_14_15_41_53_543_00.jpg",
    link: "https://www.x-kom.pl/p/1221924-pamiec-ram-ddr5-patriot-32gb-2x16gb-7000mhz-cl38-viper-elite-5-rgb-white.html",
    type: "RAM"
  },
  {
    id: "1221922",
    name: "Patriot 32GB (2x16GB) 6200MHz CL42 Viper Elite 5 RGB White",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_14_15_41_53_543_00.jpg",
    link: "https://www.x-kom.pl/p/1221922-pamiec-ram-ddr5-patriot-32gb-2x16gb-6200mhz-cl42-viper-elite-5-rgb-white.html",
    type: "RAM"
  },
  {
    id: "1139045",
    name: "Kingston FURY 32GB (2x16GB) 6800MHz CL36 Renegade RGB White XMP",
    price: 821,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/3/pr_2024_3_4_8_47_10_729_00.jpg",
    link: "https://www.x-kom.pl/p/1139045-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6800mhz-cl36-renegade-rgb-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1214502",
    name: "G.SKILL 64GB (2x32GB) 6000MHz Cl30 Trident Neo AMD RGB",
    price: 1099,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/1/pr_2024_1_22_12_48_36_907_00.jpg",
    link: "https://www.x-kom.pl/p/1214502-pamiec-ram-ddr5-gskill-64gb-2x32gb-6000mhz-cl30-trident-neo-amd-rgb.html",
    type: "RAM"
  },
  {
    id: "1218529",
    name: "Patriot 48GB (2x24GB) 6000MHz CL36 Viper Elite 5 TUF RGB",
    price: 739,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_1_11_17_48_182_00.jpg",
    link: "https://www.x-kom.pl/p/1218529-pamiec-ram-ddr5-patriot-48gb-2x24gb-6000mhz-cl36-viper-elite-5-tuf-rgb.html",
    type: "RAM"
  },
  {
    id: "1218525",
    name: "Patriot 48GB (2x24GB) 6600MHz 34 Viper Elite 5 TUF RGB",
    price: 469,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_1_11_17_48_182_00.jpg",
    link: "https://www.x-kom.pl/p/1218525-pamiec-ram-ddr5-patriot-48gb-2x24gb-6600mhz-34-viper-elite-5-tuf-rgb.html",
    type: "RAM"
  },
  {
    id: "1207961",
    name: "Corsair 32GB (2x16GB) 6000MHz CL36 Vengeance RGB Intel White",
    price: 519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_22_9_26_39_719_00.jpg",
    link: "https://www.x-kom.pl/p/1207961-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl36-vengeance-rgb-intel-white.html",
    type: "RAM"
  },
  {
    id: "1115197",
    name: "Silicon Power 16GB (2x8GB) 3200MHz CL16 XPOWER Turbine",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_14_34_44_340_01.jpg",
    link: "https://www.x-kom.pl/p/1115197-pamiec-ram-ddr4-silicon-power-16gb-2x8gb-3200mhz-cl16-xpower-turbine.html",
    type: "RAM"
  },
  {
    id: "642339",
    name: "ADATA 16GB (1x16GB) 3200MHz CL22",
    price: 111,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_12_8_55_56_144_00.jpg",
    link: "https://www.x-kom.pl/p/642339-pamiec-ram-sodimm-ddr4-adata-16gb-1x16gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1139050",
    name: "Kingston FURY 32GB (2x16GB) 7200MHz CL38 Renegade RGB White XMP",
    price: 1059,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_16_15_49_5_18_00.jpg",
    link: "https://www.x-kom.pl/p/1139050-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-7200mhz-cl38-renegade-rgb-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1139041",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Renegade White XMP",
    price: 709,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_16_15_36_8_969_00.jpg",
    link: "https://www.x-kom.pl/p/1139041-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-renegade-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1139039",
    name: "Kingston FURY 32GB (2x16GB) 6400MHz CL32 Renegade RGB White XMP",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_16_15_49_5_18_00.jpg",
    link: "https://www.x-kom.pl/p/1139039-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mhz-cl32-renegade-rgb-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1139046",
    name: "Kingston FURY 32GB (2x16GB) 6800Mhz CL36 Renegade White XMP",
    price: 899,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/8/pr_2023_8_25_8_43_52_72_00.jpg",
    link: "https://www.x-kom.pl/p/1139046-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6800mhz-cl36-renegade-white-xmp.html",
    type: "RAM"
  },
  {
    id: "1154770",
    name: "Crucial 32GB (1x32GB) 5200MHz CL42",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/6/pr_2023_6_28_11_1_39_89_00.jpg",
    link: "https://www.x-kom.pl/p/1154770-pamiec-ram-sodimm-ddr5-crucial-32gb-1x32gb-5200mhz-cl42.html",
    type: "RAM"
  },
  {
    id: "693354",
    name: "Kingston FURY 32GB (2x16GB) 5200MHz CL40 Beast Black",
    price: 389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/10/pr_2021_10_29_8_56_21_646_02.jpg",
    link: "https://www.x-kom.pl/p/693354-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5200mhz-cl40-beast-black.html",
    type: "RAM"
  },
  {
    id: "1138976",
    name: "Kingston FURY 64GB (2x32GB) 5200MHz CL40 Beast White XMP",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_15_24_5_321_00.jpg",
    link: "https://www.x-kom.pl/p/1138976-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5200mhz-cl40-beast-white-xmp.html",
    type: "RAM"
  },
  {
    id: "719676",
    name: "G.SKILL 32GB (2x16GB) 5600MHz CL36 Ripjaws S5",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_2_12_42_41_686_00.jpg",
    link: "https://www.x-kom.pl/p/719676-pamiec-ram-ddr5-gskill-32gb-2x16gb-5600mhz-cl36-ripjaws-s5.html",
    type: "RAM"
  },
  {
    id: "1080063",
    name: "Corsair 64GB (2x32GB) 5600MHz CL40 Dominator Platinum RGB AMD EXPO",
    price: 1009,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/10/pr_2022_10_12_7_8_20_121_01.jpg",
    link: "https://www.x-kom.pl/p/1080063-pamiec-ram-ddr5-corsair-64gb-2x32gb-5600mhz-cl40-dominator-platinum-rgb-amd-expo.html",
    type: "RAM"
  },
  {
    id: "719679",
    name: "G.SKILL 32GB (2x16GB) 5200MHz CL36 Ripjaws S5",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_2_12_42_41_686_00.jpg",
    link: "https://www.x-kom.pl/p/719679-pamiec-ram-ddr5-gskill-32gb-2x16gb-5200mhz-cl36-ripjaws-s5.html",
    type: "RAM"
  },
  {
    id: "628137",
    name: "Crucial 8GB (1x8GB) 2666MHz",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/2/pr_2021_2_16_16_4_54_98_00.jpg",
    link: "https://www.x-kom.pl/p/628137-pamiec-ram-ddr4-crucial-8gb-1x8gb-2666mhz.html",
    type: "RAM"
  },
  {
    id: "658441",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Vengeance PRO TUF G RGB",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/6/pr_2021_6_9_14_54_39_658_01.jpg",
    link: "https://www.x-kom.pl/p/658441-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-vengeance-pro-tuf-g-rgb.html",
    type: "RAM"
  },
  {
    id: "654474",
    name: "PNY 16GB (2x8GB) 3600MHz CL18 XLR8 Gaming RGB",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_12_10_16_42_293_02.jpg",
    link: "https://www.x-kom.pl/p/654474-pamiec-ram-ddr4-pny-16gb-2x8gb-3600mhz-cl18-xlr8-gaming-rgb.html",
    type: "RAM"
  },
  {
    id: "723020",
    name: "Crucial 64GB (2x32GB) 4800MHz CL40",
    price: 2099,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_14_14_13_39_820_00.jpg",
    link: "https://www.x-kom.pl/p/723020-pamiec-ram-ddr5-crucial-64gb-2x32gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "706576",
    name: "Corsair 32GB (2x16GB) 4800MHz CL40 Vengeance",
    price: 419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_21_9_15_33_826_00.jpg",
    link: "https://www.x-kom.pl/p/706576-pamiec-ram-ddr5-corsair-32gb-2x16gb-4800mhz-cl40-vengeance.html",
    type: "RAM"
  },
  {
    id: "1061955",
    name: "ADATA 32GB (2x16GB) 3600MHz CL18 Gammix D10",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_25_12_50_25_494_03.jpg",
    link: "https://www.x-kom.pl/p/1061955-pamiec-ram-ddr4-adata-32gb-2x16gb-3600mhz-cl18-gammix-d10.html",
    type: "RAM"
  },
  {
    id: "434972",
    name: "Kingston 4GB (1x4GB) 2666MHz CL19",
    price: 99.43,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_20_11_45_18_841.jpg",
    link: "https://www.x-kom.pl/p/434972-pamiec-ram-sodimm-ddr4-kingston-4gb-1x4gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "420797",
    name: "Corsair 16GB (2x8GB) 1600MHz CL11 Mac Memory",
    price: 349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_15_38_47_953_01.jpg",
    link: "https://www.x-kom.pl/p/420797-pamiec-ram-sodimm-ddr3-corsair-16gb-2x8gb-1600mhz-cl11-mac-memory.html",
    type: "RAM"
  },
  {
    id: "284750",
    name: "Kingston 4GB (1x4GB) 1600MHz CL11",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,pr_2016_1_26_14_25_50_120.jpg",
    link: "https://www.x-kom.pl/p/284750-pamiec-ram-sodimm-ddr3-kingston-4gb-1x4gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "259983",
    name: "G.SKILL 8GB (2x4GB) 2666MHz CL15 RipjawsV CL15 Red",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_3_40_493.jpg",
    link: "https://www.x-kom.pl/p/259983-pamiec-ram-ddr4-gskill-8gb-2x4gb-2666mhz-cl15-ripjawsv-cl15-red.html",
    type: "RAM"
  },
  {
    id: "613313",
    name: "GOODRAM 8GB (1x8GB) 3600MHz CL17 IRDM PRO White",
    price: 94.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/12/pr_2020_12_10_12_15_3_854_00.jpg",
    link: "https://www.x-kom.pl/p/613313-pamiec-ram-ddr4-goodram-8gb-1x8gb-3600mhz-cl17-irdm-pro-white.html",
    type: "RAM"
  },
  {
    id: "1138986",
    name: "Kingston FURY 32GB (2x16GB) 5600MHz CL36 Beast White EXPO",
    price: 369,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_56_30_447_00.jpg",
    link: "https://www.x-kom.pl/p/1138986-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5600mhz-cl36-beast-white-expo.html",
    type: "RAM"
  },
  {
    id: "1138987",
    name: "Kingston FURY 64GB (2x32GB) 5600MHz CL36 Beast White EXPO",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_56_30_447_00.jpg",
    link: "https://www.x-kom.pl/p/1138987-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5600mhz-cl36-beast-white-expo.html",
    type: "RAM"
  },
  {
    id: "1201301",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL16 Beast RGB",
    price: 349,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_1_12_20_35_660_00.jpg",
    link: "https://www.x-kom.pl/p/1201301-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl16-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1072094",
    name: "Kingston FURY 16GB (1x16GB) 5600MHz CL36 Beast RGB EXPO AMD",
    price: 326,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_13_13_15_14_109_00.jpg",
    link: "https://www.x-kom.pl/p/1072094-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-5600mhz-cl36-beast-rgb-expo-amd.html",
    type: "RAM"
  },
  {
    id: "420766",
    name: "Corsair 8GB (1x8GB) 2133MHz CL15",
    price: 91.25,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/4/pr_2018_4_3_15_7_40_350_01.jpg",
    link: "https://www.x-kom.pl/p/420766-pamiec-ram-sodimm-ddr4-corsair-8gb-1x8gb-2133mhz-cl15.html",
    type: "RAM"
  },
  {
    id: "1188483",
    name: "Kingston FURY 32GB (2x16GB) 7200MHz CL38 Renegade Silver",
    price: 1009,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/5/pr_2024_5_10_15_9_1_637_00.jpg",
    link: "https://www.x-kom.pl/p/1188483-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-7200mhz-cl38-renegade-silver.html",
    type: "RAM"
  },
  {
    id: "104364",
    name: "Patriot 8GB (2x4GB) 1600MHz CL9 Viper 3",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,pr_2015_6_9_10_37_28_173.jpg",
    link: "https://www.x-kom.pl/p/104364-pamiec-ram-ddr3-patriot-8gb-2x4gb-1600mhz-cl9-viper-3.html",
    type: "RAM"
  },
  {
    id: "1326578",
    name: "ADATA 32GB (2x16) 6000 CL48 Lancer Blade White",
    price: 389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_28_9_44_58_431_00.jpg",
    link: "https://www.x-kom.pl/p/1326578-pamiec-ram-ddr5-adata-32gb-2x16-6000-cl48-lancer-blade-white.html",
    type: "RAM"
  },
  {
    id: "1326576",
    name: "ADATA 32GB (2x16) 5600 CL46 Lancer Blade White",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_28_9_44_58_431_00.jpg",
    link: "https://www.x-kom.pl/p/1326576-pamiec-ram-ddr5-adata-32gb-2x16-5600-cl46-lancer-blade-white.html",
    type: "RAM"
  },
  {
    id: "1063538",
    name: "Kingston FURY 16GB (1x16GB) 6400MHz CL32 Renegade Silver",
    price: 309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/8/pr_2022_8_11_11_37_11_206_00.jpg",
    link: "https://www.x-kom.pl/p/1063538-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-6400mhz-cl32-renegade-silver.html",
    type: "RAM"
  },
  {
    id: "1043023",
    name: "Kingston FURY 32GB (2x16GB) 5200MHz CL40 Beast RGB",
    price: 459,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/5/pr_2022_5_23_9_20_42_827_01.jpg",
    link: "https://www.x-kom.pl/p/1043023-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5200mhz-cl40-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1182222",
    name: "GOODRAM 64GB (2x32GB) 5600MHz CL30 IRDM BLACK V SILVER",
    price: 879,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/9/pr_2023_9_22_8_53_46_748_00.jpg",
    link: "https://www.x-kom.pl/p/1182222-pamiec-ram-ddr5-goodram-64gb-2x32gb-5600mhz-cl30-irdm-black-v-silver.html",
    type: "RAM"
  },
  {
    id: "589539",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance White RGB Pro",
    price: 229.52,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/7/pr_2018_7_24_18_30_44_991_01.jpg",
    link: "https://www.x-kom.pl/p/589539-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-white-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "1228732",
    name: "Kingston FURY 16GB (2x8GB) 3600MHz CL17 Beast RGB",
    price: 239,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/11/pr_2023_11_10_13_37_12_261_00.jpg",
    link: "https://www.x-kom.pl/p/1228732-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3600mhz-cl17-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "668757",
    name: "Kingston FURY 4GB (1x4GB) 1600MHz CL9 Impact",
    price: 205,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/7/pr_2021_7_16_8_14_48_836_00.jpg",
    link: "https://www.x-kom.pl/p/668757-pamiec-ram-sodimm-ddr3-kingston-fury-4gb-1x4gb-1600mhz-cl9-impact.html",
    type: "RAM"
  },
  {
    id: "507742",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance LPX Black",
    price: 179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,pr_2015_9_7_14_26_19_882.jpg",
    link: "https://www.x-kom.pl/p/507742-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "368086",
    name: "G.SKILL 16GB (2x8GB) 3200MHz CL14 Flare X Black Ryzen",
    price: 413,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2017/7/pr_2017_7_25_8_58_45_425.jpg",
    link: "https://www.x-kom.pl/p/368086-pamiec-ram-ddr4-gskill-16gb-2x8gb-3200mhz-cl14-flare-x-black-ryzen.html",
    type: "RAM"
  },
  {
    id: "719669",
    name: "G.SKILL 32GB (2x16GB) 5200MHz CL36 Trident Z5 RGB",
    price: 619,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/2/pr_2022_2_2_12_37_28_128_00.jpg",
    link: "https://www.x-kom.pl/p/719669-pamiec-ram-ddr5-gskill-32gb-2x16gb-5200mhz-cl36-trident-z5-rgb.html",
    type: "RAM"
  },
  {
    id: "1239935",
    name: "Kingston FURY 16GB (2x8GB) 6000MT/s CL30 Beast Black RGB",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/9/pr_2024_9_9_14_30_1_890_00.jpg",
    link: "https://www.x-kom.pl/p/1239935-pamiec-ram-ddr5-kingston-fury-16gb-2x8gb-6000mt-s-cl30-beast-black-rgb.html",
    type: "RAM"
  },
  {
    id: "1102377",
    name: "Corsair 64GB (2x32GB) 6000MHz CL40 Vengeance RGB AMD Expo",
    price: 1207,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1102377-pamiec-ram-ddr5-corsair-64gb-2x32gb-6000mhz-cl40-vengeance-rgb-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1042896",
    name: "Kingston FURY 16GB (1x16GB) 5200MHz CL40 Beast RGB",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_23_9_34_37_607_00.jpg",
    link: "https://www.x-kom.pl/p/1042896-pamiec-ram-ddr5-kingston-fury-16gb-1x16gb-5200mhz-cl40-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1220333",
    name: "Kingston FURY 64GB (2x32GB) 3600MHz CL18 Beast RGB",
    price: 629,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_9_14_28_8_356_02.jpg",
    link: "https://www.x-kom.pl/p/1220333-pamiec-ram-ddr4-kingston-fury-64gb-2x32gb-3600mhz-cl18-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1080075",
    name: "Corsair 64GB (2x32GB) 5200MHz CL40 Vengeance RGB AMD EXPO",
    price: 819,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/10/pr_2022_10_12_12_14_47_363_02.jpg",
    link: "https://www.x-kom.pl/p/1080075-pamiec-ram-ddr5-corsair-64gb-2x32gb-5200mhz-cl40-vengeance-rgb-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1080072",
    name: "Corsair 32GB (2x16GB) 5600MHz CL36 Vengeance RGB AMD EXPO",
    price: 559,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/10/pr_2022_10_12_12_12_6_78_02.jpg",
    link: "https://www.x-kom.pl/p/1080072-pamiec-ram-ddr5-corsair-32gb-2x16gb-5600mhz-cl36-vengeance-rgb-amd-expo.html",
    type: "RAM"
  },
  {
    id: "420817",
    name: "Corsair 16GB (1x16GB) 2400MHz CL16 Vengeance",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_14_49_31_188_00.jpg",
    link: "https://www.x-kom.pl/p/420817-pamiec-ram-sodimm-ddr4-corsair-16gb-1x16gb-2400mhz-cl16-vengeance.html",
    type: "RAM"
  },
  {
    id: "667526",
    name: "Kingston FURY 64GB (4x16GB) 3600MHz CL18 Beast Black",
    price: 669,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_35_58_101_02.jpg",
    link: "https://www.x-kom.pl/p/667526-pamiec-ram-ddr4-kingston-fury-64gb-4x16gb-3600mhz-cl18-beast-black.html",
    type: "RAM"
  },
  {
    id: "667100",
    name: "Kingston FURY 16GB (1x16GB) 3000MHz CL15 Beast Black",
    price: 359,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_7_14_9_37_715_02.jpg",
    link: "https://www.x-kom.pl/p/667100-pamiec-ram-ddr4-kingston-fury-16gb-1x16gb-3000mhz-cl15-beast-black.html",
    type: "RAM"
  },
  {
    id: "1326577",
    name: "ADATA 32GB (2x16) 6000 CL48 Lancer Blade",
    price: 389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_15_10_51_46_113_00.jpg",
    link: "https://www.x-kom.pl/p/1326577-pamiec-ram-ddr5-adata-32gb-2x16-6000-cl48-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "1326575",
    name: "ADATA 32GB (2x16) 5600 CL46 Lancer Blade",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/2/pr_2024_2_15_10_51_46_113_00.jpg",
    link: "https://www.x-kom.pl/p/1326575-pamiec-ram-ddr5-adata-32gb-2x16-5600-cl46-lancer-blade.html",
    type: "RAM"
  },
  {
    id: "1207941",
    name: "Corsair 64GB (2x32GB) 3600MHz CL18 Vengeance LPX",
    price: 589,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_12_14_31_54_607_00.jpg",
    link: "https://www.x-kom.pl/p/1207941-pamiec-ram-ddr4-corsair-64gb-2x32gb-3600mhz-cl18-vengeance-lpx.html",
    type: "RAM"
  },
  {
    id: "680138",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance LPX Black",
    price: 169,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_2_18_513.jpg",
    link: "https://www.x-kom.pl/p/680138-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "1278275",
    name: "Corsair 32GB (2x16GB) 6400 CL32 Vengeance RGB",
    price: 659,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/10/pr_2022_10_12_12_12_6_78_02.jpg",
    link: "https://www.x-kom.pl/p/1278275-pamiec-ram-ddr5-corsair-32gb-2x16gb-6400-cl32-vengeance-rgb.html",
    type: "RAM"
  },
  {
    id: "1241381",
    name: "Kingston FURY 32GB (2x16GB) 3600MHz CL18 Beast RGB",
    price: 389,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_1_12_20_35_660_00.jpg",
    link: "https://www.x-kom.pl/p/1241381-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl18-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "420819",
    name: "Corsair 16GB (2x8GB) 2666MHz CL18 Vengeance",
    price: 179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_3_14_42_42_707_03.jpg",
    link: "https://www.x-kom.pl/p/420819-pamiec-ram-sodimm-ddr4-corsair-16gb-2x8gb-2666mhz-cl18-vengeance.html",
    type: "RAM"
  },
  {
    id: "1232601",
    name: "Kingston FURY 16GB (2x8GB) 3200MHz CL16 Beast RGB",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_1_12_20_35_660_00.jpg",
    link: "https://www.x-kom.pl/p/1232601-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3200mhz-cl16-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1215706",
    name: "Kingston FURY 8GB (1x8GB) 3200MHz CL16 Beast RGB",
    price: 99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_10_13_37_12_261_00.jpg",
    link: "https://www.x-kom.pl/p/1215706-pamiec-ram-ddr4-kingston-fury-8gb-1x8gb-3200mhz-cl16-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "738879",
    name: "Corsair 64GB (2x32GB) 3200MHz CL16 Vengeance LPX",
    price: 518,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_12_14_31_54_607_00.jpg",
    link: "https://www.x-kom.pl/p/738879-pamiec-ram-ddr4-corsair-64gb-2x32gb-3200mhz-cl16-vengeance-lpx.html",
    type: "RAM"
  },
  {
    id: "624277",
    name: "Corsair 16GB (2x8GB) 3600MHz CL18 Vengeance RGB PRO SL Wh",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_10_47_38_612_00.jpg",
    link: "https://www.x-kom.pl/p/624277-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl18-vengeance-rgb-pro-sl-wh.html",
    type: "RAM"
  },
  {
    id: "1191825",
    name: "Kingston FURY 32GB (1x32GB) 3200MHz CL16 Beast RGB",
    price: 279,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_10_13_37_12_261_00.jpg",
    link: "https://www.x-kom.pl/p/1191825-pamiec-ram-ddr4-kingston-fury-32gb-1x32gb-3200mhz-cl16-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1203215",
    name: "Kingston FURY 64GB (2x32GB) 3200MHz CL16 Beast RGB",
    price: 649,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/12/pr_2023_12_1_12_20_35_660_00.jpg",
    link: "https://www.x-kom.pl/p/1203215-pamiec-ram-ddr4-kingston-fury-64gb-2x32gb-3200mhz-cl16-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1187756",
    name: "Crucial 48GB (2x24GB) 5600MHz CL46 Pro",
    price: 689,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_13_8_49_30_782_00.jpg",
    link: "https://www.x-kom.pl/p/1187756-pamiec-ram-ddr5-crucial-48gb-2x24gb-5600mhz-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "667839",
    name: "Kingston FURY 128GB (4x32GB) 3600MHz CL18 Beast RGB",
    price: 1009,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_9_14_32_57_14_02.jpg",
    link: "https://www.x-kom.pl/p/667839-pamiec-ram-ddr4-kingston-fury-128gb-4x32gb-3600mhz-cl18-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "395483",
    name: "GOODRAM 16GB (2x8GB) 2666MHz CL16 IRDM X Black",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/12/pr_2017_12_5_13_42_2_554_00.jpg",
    link: "https://www.x-kom.pl/p/395483-pamiec-ram-ddr4-goodram-16gb-2x8gb-2666mhz-cl16-irdm-x-black.html",
    type: "RAM"
  },
  {
    id: "1196239",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL36 Flare X5 AMD EXPO",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/11/pr_2023_11_21_10_35_50_118_00.jpg",
    link: "https://www.x-kom.pl/p/1196239-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl36-flare-x5-amd-expo.html",
    type: "RAM"
  },
  {
    id: "395490",
    name: "GOODRAM 8GB (1x8GB) 2666MHz CL16 IRDM X Black",
    price: 90.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/12/pr_2017_12_5_13_46_33_44_00.jpg",
    link: "https://www.x-kom.pl/p/395490-pamiec-ram-ddr4-goodram-8gb-1x8gb-2666mhz-cl16-irdm-x-black.html",
    type: "RAM"
  },
  {
    id: "488247",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Dominator Platinum RGB",
    price: 439,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/3/pr_2019_3_26_9_30_7_525_02.jpg",
    link: "https://www.x-kom.pl/p/488247-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-dominator-platinum-rgb.html",
    type: "RAM"
  },
  {
    id: "647609",
    name: "GOODRAM 8GB (1x8GB) 3600MHz CL18 IRDM PRO Deep Black",
    price: 87.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_27_12_22_23_55_02.jpg",
    link: "https://www.x-kom.pl/p/647609-pamiec-ram-ddr4-goodram-8gb-1x8gb-3600mhz-cl18-irdm-pro-deep-black.html",
    type: "RAM"
  },
  {
    id: "668253",
    name: "Kingston FURY 16GB (2x8GB) 4000MHz CL19 Renegade Black",
    price: 689,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_12_12_39_4_156_02.jpg",
    link: "https://www.x-kom.pl/p/668253-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-4000mhz-cl19-renegade-black.html",
    type: "RAM"
  },
  {
    id: "624303",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance RGB PRO SL Wh",
    price: 219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_11_0_54_679_00.jpg",
    link: "https://www.x-kom.pl/p/624303-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-rgb-pro-sl-wh.html",
    type: "RAM"
  },
  {
    id: "1138960",
    name: "Kingston FURY 64GB (2x32GB) 5200MHz CL36 Beast White RGB EXPO",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_48_58_943_00.jpg",
    link: "https://www.x-kom.pl/p/1138960-pamiec-ram-ddr5-kingston-fury-64gb-2x32gb-5200mhz-cl36-beast-white-rgb-expo.html",
    type: "RAM"
  },
  {
    id: "624125",
    name: "Corsair 32GB (2x16GB) 3200MHz CL16 Vengeance RGB PRO SL",
    price: 325,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_9_59_47_690_00.jpg",
    link: "https://www.x-kom.pl/p/624125-pamiec-ram-ddr4-corsair-32gb-2x16gb-3200mhz-cl16-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "420891",
    name: "GOODRAM 4GB (1x4GB) 1333MHz CL9 SR",
    price: 59,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_8_16_34_36_468_02.jpg",
    link: "https://www.x-kom.pl/p/420891-pamiec-ram-sodimm-ddr3-goodram-4gb-1x4gb-1333mhz-cl9-sr.html",
    type: "RAM"
  },
  {
    id: "667830",
    name: "Kingston FURY 32GB (2x16GB) 3600MHz CL18 Beast RGB",
    price: 419,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_9_14_28_8_356_02.jpg",
    link: "https://www.x-kom.pl/p/667830-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl18-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "624298",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance RGB PRO SL",
    price: 237.83,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_10_58_15_63_00.jpg",
    link: "https://www.x-kom.pl/p/624298-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "258002",
    name: "Corsair 16GB (2x8GB) 2666MHz CL16 Vengeance LPX Black",
    price: 179,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_9_16_53_701.jpg",
    link: "https://www.x-kom.pl/p/258002-pamiec-ram-ddr4-corsair-16gb-2x8gb-2666mhz-cl16-vengeance-lpx-black.html",
    type: "RAM"
  },
  {
    id: "624123",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance RGB PRO SL",
    price: 225,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_9_59_47_690_00.jpg",
    link: "https://www.x-kom.pl/p/624123-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "624122",
    name: "Corsair 16GB (2x8GB) 3600MHz CL18 Vengeance RGB PRO SL",
    price: 289,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_21_10_3_56_43_00.jpg",
    link: "https://www.x-kom.pl/p/624122-pamiec-ram-ddr4-corsair-16gb-2x8gb-3600mhz-cl18-vengeance-rgb-pro-sl.html",
    type: "RAM"
  },
  {
    id: "590123",
    name: "G.SKILL 16GB (2x8GB) 3600MHz CL16 Ripjaws V",
    price: 403,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_25_8_19_38_351.jpg",
    link: "https://www.x-kom.pl/p/590123-pamiec-ram-ddr4-gskill-16gb-2x8gb-3600mhz-cl16-ripjaws-v.html",
    type: "RAM"
  },
  {
    id: "1102379",
    name: "Corsair 32GB (2x16GB) 7000 MHz CL34 Vengeance RGB",
    price: 709,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1102379-pamiec-ram-ddr5-corsair-32gb-2x16gb-7000-mhz-cl34-vengeance-rgb.html",
    type: "RAM"
  },
  {
    id: "563481",
    name: "PNY 32GB (2x16GB) 3200MHz CL16 XLR8 Gaming",
    price: 633,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/3/pr_2020_3_13_14_59_28_798_01.jpg",
    link: "https://www.x-kom.pl/p/563481-pamiec-ram-ddr4-pny-32gb-2x16gb-3200mhz-cl16-xlr8-gaming.html",
    type: "RAM"
  },
  {
    id: "1139128",
    name: "Patriot 32GB (2x16GB) 6400MHz CL32 VIPER VENOM RGB",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_17_14_29_17_82_00.jpg",
    link: "https://www.x-kom.pl/p/1139128-pamiec-ram-ddr5-patriot-32gb-2x16gb-6400mhz-cl32-viper-venom-rgb.html",
    type: "RAM"
  },
  {
    id: "327764",
    name: "Corsair 8GB (1x8GB) 2133MHz CL15 ValueSelect",
    price: 92.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_21_12_40_2_621.jpg",
    link: "https://www.x-kom.pl/p/327764-pamiec-ram-ddr4-corsair-8gb-1x8gb-2133mhz-cl15-valueselect.html",
    type: "RAM"
  },
  {
    id: "361607",
    name: "GOODRAM 8GB (1x8GB) 2400MHz CL15 IRIDIUM Black",
    price: 79,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_13_52_43_235.jpg",
    link: "https://www.x-kom.pl/p/361607-pamiec-ram-ddr4-goodram-8gb-1x8gb-2400mhz-cl15-iridium-black.html",
    type: "RAM"
  },
  {
    id: "1139129",
    name: "Patriot 32GB (2x16GB) 6000MHz CL36 VIPER VENOM RGB",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_17_14_29_17_82_00.jpg",
    link: "https://www.x-kom.pl/p/1139129-pamiec-ram-ddr5-patriot-32gb-2x16gb-6000mhz-cl36-viper-venom-rgb.html",
    type: "RAM"
  },
  {
    id: "645403",
    name: "Patriot 4GB (1x4GB) 2400MHz CL17 Signature",
    price: 42.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_13_14_54_22_835_01.jpg",
    link: "https://www.x-kom.pl/p/645403-pamiec-ram-sodimm-ddr4-patriot-4gb-1x4gb-2400mhz-cl17-signature.html",
    type: "RAM"
  },
  {
    id: "692707",
    name: "GOODRAM 8GB (1x8GB) 2666Mhz CL19 dedykowana Lenovo",
    price: 172,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/11/pr_2021_11_3_12_4_3_72_01.jpg",
    link: "https://www.x-kom.pl/p/692707-pamiec-ram-ddr4-goodram-8gb-1x8gb-2666mhz-cl19-dedykowana-lenovo.html",
    type: "RAM"
  },
  {
    id: "1188485",
    name: "Kingston FURY 32GB (2x16GB) 6800MHz CL36 Renegade RGB",
    price: 959,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_17_7_26_36_774_00.jpg",
    link: "https://www.x-kom.pl/p/1188485-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6800mhz-cl36-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "1188484",
    name: "Kingston FURY 32GB (2x16GB) 7200MHz CL38 Renegade RGB",
    price: 1059,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_17_7_26_36_774_00.jpg",
    link: "https://www.x-kom.pl/p/1188484-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-7200mhz-cl38-renegade-rgb.html",
    type: "RAM"
  },
  {
    id: "442724",
    name: "Corsair 16GB (2x8GB) 2666MHz CL16 Vengeance RGB PRO",
    price: 289,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/7/pr_2018_7_24_18_16_10_97_06.jpg",
    link: "https://www.x-kom.pl/p/442724-pamiec-ram-ddr4-corsair-16gb-2x8gb-2666mhz-cl16-vengeance-rgb-pro.html",
    type: "RAM"
  },
  {
    id: "543139",
    name: "Patriot 16GB (1x16GB) 3000MHz CL16 Viper Steel",
    price: 175,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2019/2/pr_2019_2_1_13_8_6_779_00.jpg",
    link: "https://www.x-kom.pl/p/543139-pamiec-ram-ddr4-patriot-16gb-1x16gb-3000mhz-cl16-viper-steel.html",
    type: "RAM"
  },
  {
    id: "1054404",
    name: "Patriot 32GB (2x16GB) 3200MHz CL16 Viper Steel RGB",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_20_16_38_39_951_00.jpg",
    link: "https://www.x-kom.pl/p/1054404-pamiec-ram-ddr4-patriot-32gb-2x16gb-3200mhz-cl16-viper-steel-rgb.html",
    type: "RAM"
  },
  {
    id: "395835",
    name: "GOODRAM 4GB (1x4GB) 2400MHz CL17",
    price: 69,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_6_9_45_24_986_01.jpg",
    link: "https://www.x-kom.pl/p/395835-pamiec-ram-ddr4-goodram-4gb-1x4gb-2400mhz-cl17.html",
    type: "RAM"
  },
  {
    id: "647648",
    name: "Patriot 64GB (2x32GB) 3200MHz CL18 Viper Steel RGB",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/4/pr_2021_4_27_13_55_23_61_04.jpg",
    link: "https://www.x-kom.pl/p/647648-pamiec-ram-ddr4-patriot-64gb-2x32gb-3200mhz-cl18-viper-steel-rgb.html",
    type: "RAM"
  },
  {
    id: "621626",
    name: "Patriot 16GB (2x8GB) 3600MHz CL20 Viper Steel RGB",
    price: 309,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/1/pr_2021_1_20_16_46_44_952_00.jpg",
    link: "https://www.x-kom.pl/p/621626-pamiec-ram-ddr4-patriot-16gb-2x8gb-3600mhz-cl20-viper-steel-rgb.html",
    type: "RAM"
  },
  {
    id: "1139138",
    name: "Patriot 64GB (2x32GB) 5200MHz CL40 VIPER VENOM",
    price: 909,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/7/pr_2023_7_24_17_2_27_302_01.jpg",
    link: "https://www.x-kom.pl/p/1139138-pamiec-ram-ddr5-patriot-64gb-2x32gb-5200mhz-cl40-viper-venom.html",
    type: "RAM"
  },
  {
    id: "1139136",
    name: "Patriot 64GB (2x32GB) 5600MHz CL40 VIPER VENOM",
    price: 689,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/5/pr_2024_5_15_14_38_47_826_01.jpg",
    link: "https://www.x-kom.pl/p/1139136-pamiec-ram-ddr5-patriot-64gb-2x32gb-5600mhz-cl40-viper-venom.html",
    type: "RAM"
  },
  {
    id: "1139154",
    name: "Patriot 16GB (2x8GB) 5200MHz CL36 VIPER VENOM",
    price: 299,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/5/pr_2022_5_10_13_4_4_266_01.jpg",
    link: "https://www.x-kom.pl/p/1139154-pamiec-ram-ddr5-patriot-16gb-2x8gb-5200mhz-cl36-viper-venom.html",
    type: "RAM"
  },
  {
    id: "1191451",
    name: "Corsair 32GB (2x16GB) 6000MHz CL30 Dominator Titanium White RGB",
    price: 769,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_30_16_14_19_564_00.jpg",
    link: "https://www.x-kom.pl/p/1191451-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl30-dominator-titanium-white-rgb.html",
    type: "RAM"
  },
  {
    id: "215659",
    name: "G.SKILL 16GB (2x8GB) 2400MHz CL10 TridentX",
    price: 379,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2017/7/pr_2017_7_24_13_23_7_556.jpg",
    link: "https://www.x-kom.pl/p/215659-pamiec-ram-ddr3-gskill-16gb-2x8gb-2400mhz-cl10-tridentx.html",
    type: "RAM"
  },
  {
    id: "1115211",
    name: "Silicon Power 8GB (1x8GB) 3200MHz CL16 XPOWER Zenith RGB",
    price: 97.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_6_14_45_40_756_01.jpg",
    link: "https://www.x-kom.pl/p/1115211-pamiec-ram-ddr4-silicon-power-8gb-1x8gb-3200mhz-cl16-xpower-zenith-rgb.html",
    type: "RAM"
  },
  {
    id: "1259032",
    name: "Corsair 32GB (2x16GB) 6000MT/s CL30 Vengeance Intel XMP",
    price: 549,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1259032-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mt-s-cl30-vengeance-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1278257",
    name: "Corsair 96GB (2x48GB) 7000 CL40 Vengeance Intel XMP",
    price: 1599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1278257-pamiec-ram-ddr5-corsair-96gb-2x48gb-7000-cl40-vengeance-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1073085",
    name: "Kingston FURY 16GB (2x8GB) 3200MHz CL16 Beast White RGB",
    price: 243,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_19_13_33_15_69_02.jpg",
    link: "https://www.x-kom.pl/p/1073085-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3200mhz-cl16-beast-white-rgb.html",
    type: "RAM"
  },
  {
    id: "425198",
    name: "Kingston 16GB (2x8GB) 2400MHz CL17",
    price: 429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2018/4/pr_2018_4_19_8_56_28_922_00.jpg",
    link: "https://www.x-kom.pl/p/425198-pamiec-ram-ddr4-kingston-16gb-2x8gb-2400mhz-cl17.html",
    type: "RAM"
  },
  {
    id: "1073097",
    name: "Kingston FURY 32GB (2x16GB) 3600MHz CL18 Beast White RGB",
    price: 396,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_19_13_33_15_69_02.jpg",
    link: "https://www.x-kom.pl/p/1073097-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3600mhz-cl18-beast-white-rgb.html",
    type: "RAM"
  },
  {
    id: "1073089",
    name: "Kingston FURY 32GB (2x16GB) 3200MHz CL16 Beast White RGB",
    price: 359,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_19_13_33_15_69_02.jpg",
    link: "https://www.x-kom.pl/p/1073089-pamiec-ram-ddr4-kingston-fury-32gb-2x16gb-3200mhz-cl16-beast-white-rgb.html",
    type: "RAM"
  },
  {
    id: "1241127",
    name: "Corsair 32GB (2x16GB) 6000MHz CL38 Vengeance Intel XMP",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_7_13_10_7_257_03.jpg",
    link: "https://www.x-kom.pl/p/1241127-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl38-vengeance-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1073094",
    name: "Kingston FURY 16GB (2x8GB) 3600MHz CL17 Beast White RGB",
    price: 252,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_19_13_33_15_69_02.jpg",
    link: "https://www.x-kom.pl/p/1073094-pamiec-ram-ddr4-kingston-fury-16gb-2x8gb-3600mhz-cl17-beast-white-rgb.html",
    type: "RAM"
  },
  {
    id: "513030",
    name: "Patriot 16GB (2x8GB) 4000MHz CL19 Viper 4 Blackout",
    price: 409,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/2/pr_2021_2_10_13_56_50_679_00.jpg",
    link: "https://www.x-kom.pl/p/513030-pamiec-ram-ddr4-patriot-16gb-2x8gb-4000mhz-cl19-viper-4-blackout.html",
    type: "RAM"
  },
  {
    id: "1073087",
    name: "Kingston FURY 16GB (1x16GB) 3200MHz CL16 Beast White RGB",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_19_13_32_57_587_02.jpg",
    link: "https://www.x-kom.pl/p/1073087-pamiec-ram-ddr4-kingston-fury-16gb-1x16gb-3200mhz-cl16-beast-white-rgb.html",
    type: "RAM"
  },
  {
    id: "1073062",
    name: "Kingston FURY 8GB (1x8GB) 3200MHz CL16 Beast White RGB",
    price: 149,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/9/pr_2022_9_19_13_32_57_587_02.jpg",
    link: "https://www.x-kom.pl/p/1073062-pamiec-ram-ddr4-kingston-fury-8gb-1x8gb-3200mhz-cl16-beast-white-rgb.html",
    type: "RAM"
  },
  {
    id: "1191454",
    name: "Corsair 32GB (2x16GB) 6000MHz CL30 Dominator Titanium AMD EXPO RGB",
    price: 765,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_31_9_32_46_534_00.jpg",
    link: "https://www.x-kom.pl/p/1191454-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl30-dominator-titanium-amd-expo-rgb.html",
    type: "RAM"
  },
  {
    id: "1191453",
    name: "Corsair 64GB (2x32GB) 6000MHz CL30 Dominator Titanium AMD EXPO RGB",
    price: 1399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_31_9_32_46_534_00.jpg",
    link: "https://www.x-kom.pl/p/1191453-pamiec-ram-ddr5-corsair-64gb-2x32gb-6000mhz-cl30-dominator-titanium-amd-expo-rgb.html",
    type: "RAM"
  },
  {
    id: "1138970",
    name: "Kingston FURY 32GB (2x16GB) 5200MHz CL40 Beast White RGB XMP",
    price: 489,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/4/pr_2023_4_18_14_48_58_943_00.jpg",
    link: "https://www.x-kom.pl/p/1138970-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-5200mhz-cl40-beast-white-rgb-xmp.html",
    type: "RAM"
  },
  {
    id: "1060062",
    name: "Team Group 16GB (2x8GB) 3600MHz CL18 T‑Force Vulcan Z",
    price: 189,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/8/pr_2022_8_1_11_28_15_404_01.jpg",
    link: "https://www.x-kom.pl/p/1060062-pamiec-ram-ddr4-team-group-16gb-2x8gb-3600mhz-cl18-t-force-vulcan-z.html",
    type: "RAM"
  },
  {
    id: "634872",
    name: "PNY 32GB (2x16GB) 3200MHz CL16 XLR8 RGB",
    price: 269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/3/pr_2021_3_10_15_46_12_958_00.jpg",
    link: "https://www.x-kom.pl/p/634872-pamiec-ram-ddr4-pny-32gb-2x16gb-3200mhz-cl16-xlr8-rgb.html",
    type: "RAM"
  },
  {
    id: "701439",
    name: "G.SKILL 32GB (2x16GB) 3200MHz CL16 Trident Z Royal Silver",
    price: 479,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/11/pr_2021_11_30_9_4_10_311_00.jpg",
    link: "https://www.x-kom.pl/p/701439-pamiec-ram-ddr4-gskill-32gb-2x16gb-3200mhz-cl16-trident-z-royal-silver.html",
    type: "RAM"
  },
  {
    id: "1166056",
    name: "Corsair 64GB (2x32GB) 5600MHz CL36 Vengeance AMD Expo",
    price: 929,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/10/pr_2022_10_12_12_14_47_363_02.jpg",
    link: "https://www.x-kom.pl/p/1166056-pamiec-ram-ddr5-corsair-64gb-2x32gb-5600mhz-cl36-vengeance-amd-expo.html",
    type: "RAM"
  },
  {
    id: "623756",
    name: "Patriot 8GB (1x8GB) 2133MHz CL15 Signature",
    price: 99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2018/11/pr_2018_11_13_11_0_11_815_00.jpg",
    link: "https://www.x-kom.pl/p/623756-pamiec-ram-ddr4-patriot-8gb-1x8gb-2133mhz-cl15-signature.html",
    type: "RAM"
  },
  {
    id: "1102378",
    name: "Corsair 64GB (2x32GB) 6000MHz CL40 Vengeance AMD Expo",
    price: 1061,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/12/pr_2022_12_21_7_10_52_510_01.jpg",
    link: "https://www.x-kom.pl/p/1102378-pamiec-ram-ddr5-corsair-64gb-2x32gb-6000mhz-cl40-vengeance-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1080084",
    name: "Corsair 64GB (2x32GB) 5200MHz CL40 Vengeance AMD EXPO",
    price: 759,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/10/pr_2022_10_12_6_59_34_681_00.jpg",
    link: "https://www.x-kom.pl/p/1080084-pamiec-ram-ddr5-corsair-64gb-2x32gb-5200mhz-cl40-vengeance-amd-expo.html",
    type: "RAM"
  },
  {
    id: "1080082",
    name: "Corsair 32GB (2x16GB) 5600MHz CL36 Vengeance AMD EXPO",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/10/pr_2022_10_12_6_59_34_681_00.jpg",
    link: "https://www.x-kom.pl/p/1080082-pamiec-ram-ddr5-corsair-32gb-2x16gb-5600mhz-cl36-vengeance-amd-expo.html",
    type: "RAM"
  },
  {
    id: "258006",
    name: "Corsair 16GB (2x8GB) 3200MHz CL16 Vengeance LPX Red",
    price: 216.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,pr_2015_9_7_15_35_38_218.jpg",
    link: "https://www.x-kom.pl/p/258006-pamiec-ram-ddr4-corsair-16gb-2x8gb-3200mhz-cl16-vengeance-lpx-red.html",
    type: "RAM"
  },
  {
    id: "711739",
    name: "Lexar 32GB (1x32GB) 3200MHz CL22",
    price: 249,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/1/pr_2022_1_5_16_15_8_488_00.jpg",
    link: "https://www.x-kom.pl/p/711739-pamiec-ram-sodimm-ddr4-lexar-32gb-1x32gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "1216995",
    name: "GOODRAM 64GB (2x32GB) 6000MHz CL30 IRDM RGB",
    price: 929,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_24_12_40_18_487_00.jpg",
    link: "https://www.x-kom.pl/p/1216995-pamiec-ram-ddr5-goodram-64gb-2x32gb-6000mhz-cl30-irdm-rgb.html",
    type: "RAM"
  },
  {
    id: "1216999",
    name: "GOODRAM 64GB (2x32GB) 6400MHz CL32 IRDM RGB",
    price: 1124,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/1/pr_2024_1_24_12_40_18_487_00.jpg",
    link: "https://www.x-kom.pl/p/1216999-pamiec-ram-ddr5-goodram-64gb-2x32gb-6400mhz-cl32-irdm-rgb.html",
    type: "RAM"
  },
  {
    id: "1115189",
    name: "Silicon Power 16GB (1x16GB) 2666MHz CL19",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_6_14_21_51_202_00.jpg",
    link: "https://www.x-kom.pl/p/1115189-pamiec-ram-sodimm-ddr4-silicon-power-16gb-1x16gb-2666mhz-cl19.html",
    type: "RAM"
  },
  {
    id: "1115207",
    name: "Silicon Power 16GB (2x8GB) 3200MHz CL16 XPOWER Zenith",
    price: 212,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_6_14_41_47_103_01.jpg",
    link: "https://www.x-kom.pl/p/1115207-pamiec-ram-ddr4-silicon-power-16gb-2x8gb-3200mhz-cl16-xpower-zenith.html",
    type: "RAM"
  },
  {
    id: "1115205",
    name: "Silicon Power 8GB (1x8GB) 3200MHz CL16 XPOWER Zenith",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_6_14_41_47_103_01.jpg",
    link: "https://www.x-kom.pl/p/1115205-pamiec-ram-ddr4-silicon-power-8gb-1x8gb-3200mhz-cl16-xpower-zenith.html",
    type: "RAM"
  },
  {
    id: "1191449",
    name: "Corsair 32GB (2x16GB) 6000MHz CL30 Dominator Titanium RGB",
    price: 769,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_30_16_4_48_376_00.jpg",
    link: "https://www.x-kom.pl/p/1191449-pamiec-ram-ddr5-corsair-32gb-2x16gb-6000mhz-cl30-dominator-titanium-rgb.html",
    type: "RAM"
  },
  {
    id: "1191447",
    name: "Corsair 64GB (2x32GB) 6000MHz CL30 Dominator Titanium RGB",
    price: 1269,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/10/pr_2023_10_30_16_4_48_376_00.jpg",
    link: "https://www.x-kom.pl/p/1191447-pamiec-ram-ddr5-corsair-64gb-2x32gb-6000mhz-cl30-dominator-titanium-rgb.html",
    type: "RAM"
  },
  {
    id: "1116786",
    name: "Corsair 64GB (2x32GB) 6600MHz CL32 Vengeance",
    price: 1069,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_4_8_18_54_958_00.jpg",
    link: "https://www.x-kom.pl/p/1116786-pamiec-ram-ddr5-corsair-64gb-2x32gb-6600mhz-cl32-vengeance.html",
    type: "RAM"
  },
  {
    id: "1329364",
    name: "Crucial 64GB (2x32GB) 6000 CL40 Pro OC",
    price: 949,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/4/pr_2025_4_7_9_55_14_516_00.jpg",
    link: "https://www.x-kom.pl/p/1329364-pamiec-ram-ddr5-crucial-64gb-2x32gb-6000-cl40-pro-oc.html",
    type: "RAM"
  },
  {
    id: "1230766",
    name: "ADATA 32GB (2x16GB) 7200MHz CL34 XPG Lancer RGB",
    price: 769,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_8_13_33_29_101_03.jpg",
    link: "https://www.x-kom.pl/p/1230766-pamiec-ram-ddr5-adata-32gb-2x16gb-7200mhz-cl34-xpg-lancer-rgb.html",
    type: "RAM"
  },
  {
    id: "1076682",
    name: "ADATA 32GB (2x16GB) 6000MHz CL40 XPG Lancer RGB",
    price: 599,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/4/pr_2022_4_8_13_33_29_101_03.jpg",
    link: "https://www.x-kom.pl/p/1076682-pamiec-ram-ddr5-adata-32gb-2x16gb-6000mhz-cl40-xpg-lancer-rgb.html",
    type: "RAM"
  },
  {
    id: "1318518",
    name: "Crucial 32GB (2x16GB) 5600 CL46 do notebooka",
    price: 339,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_4_41_967_00.jpg",
    link: "https://www.x-kom.pl/p/1318518-pamiec-ram-sodimm-ddr5-crucial-32gb-2x16gb-5600-cl46-do-notebooka.html",
    type: "RAM"
  },
  {
    id: "1318511",
    name: "Crucial 64GB (2x32GB) 5600 CL46 do notebooka",
    price: 739,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_4_41_967_00.jpg",
    link: "https://www.x-kom.pl/p/1318511-pamiec-ram-sodimm-ddr5-crucial-64gb-2x32gb-5600-cl46-do-notebooka.html",
    type: "RAM"
  },
  {
    id: "1318480",
    name: "Crucial 32GB (2x16GB) 6000 CL48 Pro",
    price: 499,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_24_13_416_00.jpg",
    link: "https://www.x-kom.pl/p/1318480-pamiec-ram-ddr5-crucial-32gb-2x16gb-6000-cl48-pro.html",
    type: "RAM"
  },
  {
    id: "1318477",
    name: "Crucial 48GB (1x48GB) 5600 CL46 Pro",
    price: 439,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_37_53_344_00.jpg",
    link: "https://www.x-kom.pl/p/1318477-pamiec-ram-ddr5-crucial-48gb-1x48gb-5600-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "1272875",
    name: "Dell Memory Upgrade 16GB 1RX8 DDR5 SODIMM 5600 MHz",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/8/pr_2024_8_5_14_19_9_922_00.jpg",
    link: "https://www.x-kom.pl/p/1272875-pamiec-ram-sodimm-ddr5-dell-memory-upgrade-16gb-1rx8-ddr5-sodimm-5600-mhz.html",
    type: "RAM"
  },
  {
    id: "1278276",
    name: "Corsair 48GB (2x24GB) 6000 CL30 Vengeance White Intel XMP",
    price: 889,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/9/pr_2024_9_6_9_34_7_474_00.jpg",
    link: "https://www.x-kom.pl/p/1278276-pamiec-ram-ddr5-corsair-48gb-2x24gb-6000-cl30-vengeance-white-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1278272",
    name: "Corsair 48GB (2x24GB) 6000 CL30 Vengeance",
    price: 899,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_7_10_52_510_01.jpg",
    link: "https://www.x-kom.pl/p/1278272-pamiec-ram-ddr5-corsair-48gb-2x24gb-6000-cl30-vengeance.html",
    type: "RAM"
  },
  {
    id: "1278256",
    name: "Corsair 96GB (2x48GB) 7000 CL40 Vengeance RGB Intel XMP",
    price: 1659,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/12/pr_2022_12_21_6_49_52_778_02.jpg",
    link: "https://www.x-kom.pl/p/1278256-pamiec-ram-ddr5-corsair-96gb-2x48gb-7000-cl40-vengeance-rgb-intel-xmp.html",
    type: "RAM"
  },
  {
    id: "1228540",
    name: "Patriot 32GB (2x16GB) 7600MHz CL36 Viper XTREME 5",
    price: 579,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/3/pr_2024_3_6_11_43_46_586_03.jpg",
    link: "https://www.x-kom.pl/p/1228540-pamiec-ram-ddr5-patriot-32gb-2x16gb-7600mhz-cl36-viper-xtreme-5.html",
    type: "RAM"
  },
  {
    id: "1239940",
    name: "Kingston FURY 32GB (2x16GB) 6400MT/s CL32 Beast RGB",
    price: 699,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_7_8_22_40_625_00.jpg",
    link: "https://www.x-kom.pl/p/1239940-pamiec-ram-ddr5-kingston-fury-32gb-2x16gb-6400mt-s-cl32-beast-rgb.html",
    type: "RAM"
  },
  {
    id: "1259646",
    name: "Team Group 32GB (2x16GB) 6000MHz CL38 T‑FORCE DELTA RGB",
    price: 519,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/6/pr_2024_6_13_8_34_2_144_00.jpg",
    link: "https://www.x-kom.pl/p/1259646-pamiec-ram-ddr5-team-group-32gb-2x16gb-6000mhz-cl38-t-force-delta-rgb.html",
    type: "RAM"
  },
  {
    id: "1259642",
    name: "Team Group 32GB (2x16GB) 6400MHz CL40 T‑FORCE DELTA RGB",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/6/pr_2024_6_13_8_12_6_658_00.jpg",
    link: "https://www.x-kom.pl/p/1259642-pamiec-ram-ddr5-team-group-32gb-2x16gb-6400mhz-cl40-t-force-delta-rgb.html",
    type: "RAM"
  },
  {
    id: "1229735",
    name: "PNY 32GB (2x16GB) 6400Mhz CL40 MAKO",
    price: 529,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/5/pr_2024_5_22_7_57_9_544_00.jpg",
    link: "https://www.x-kom.pl/p/1229735-pamiec-ram-ddr5-pny-32gb-2x16gb-6400mhz-cl40-mako.html",
    type: "RAM"
  },
  {
    id: "1228538",
    name: "Patriot 48GB (2x24GB) 7600Mhz CL36 Viper XTREME 5",
    price: 1089,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2024/3/pr_2024_3_6_11_43_46_586_03.jpg",
    link: "https://www.x-kom.pl/p/1228538-pamiec-ram-ddr5-patriot-48gb-2x24gb-7600mhz-cl36-viper-xtreme-5.html",
    type: "RAM"
  },
  {
    id: "1214432",
    name: "G.SKILL 64GB (2x32GB) 6000MHz CL30 Trident Z5 Neo",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2024/2/pr_2024_2_23_12_3_35_182_02.jpg",
    link: "https://www.x-kom.pl/p/1214432-pamiec-ram-ddr5-gskill-64gb-2x32gb-6000mhz-cl30-trident-z5-neo.html",
    type: "RAM"
  },
  {
    id: "1175285",
    name: "PNY 32GB (2x16GB) 6000MHz CL40 XLR8",
    price: 489,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/9/pr_2023_9_6_10_8_7_935_00.jpg",
    link: "https://www.x-kom.pl/p/1175285-pamiec-ram-ddr5-pny-32gb-2x16gb-6000mhz-cl40-xlr8.html",
    type: "RAM"
  },
  {
    id: "1175284",
    name: "PNY 32GB (2x16GB) 6000MHz CL40 XLR8 RGB",
    price: 538,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/9/pr_2023_9_6_10_19_30_962_00.jpg",
    link: "https://www.x-kom.pl/p/1175284-pamiec-ram-ddr5-pny-32gb-2x16gb-6000mhz-cl40-xlr8-rgb.html",
    type: "RAM"
  },
  {
    id: "1163322",
    name: "Patriot 32GB (2x16GB) 8000MHz CL36 Viper RGB XTREME 5",
    price: 1354,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/7/pr_2023_7_24_16_41_3_25_02.jpg",
    link: "https://www.x-kom.pl/p/1163322-pamiec-ram-ddr5-patriot-32gb-2x16gb-8000mhz-cl36-viper-rgb-xtreme-5.html",
    type: "RAM"
  },
  {
    id: "1059814",
    name: "ADATA 32GB (1x32GB) 3200MHz CL22 Premier",
    price: 375,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/8/pr_2022_8_2_15_13_25_200_00.jpg",
    link: "https://www.x-kom.pl/p/1059814-pamiec-ram-sodimm-ddr4-adata-32gb-1x32gb-3200mhz-cl22-premier.html",
    type: "RAM"
  },
  {
    id: "1128386",
    name: "GOODRAM 8GB (1x8GB) 4800MHz CL40",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_20_8_39_23_512_01.jpg",
    link: "https://www.x-kom.pl/p/1128386-pamiec-ram-sodimm-ddr5-goodram-8gb-1x8gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "648482",
    name: "Apacer 8GB (1x8GB) 1600MHz CL11",
    price: 159,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/5/pr_2021_5_5_13_51_41_11_00.jpg",
    link: "https://www.x-kom.pl/p/648482-pamiec-ram-ddr3-apacer-8gb-1x8gb-1600mhz-cl11.html",
    type: "RAM"
  },
  {
    id: "1139134",
    name: "Patriot 32GB (2x16GB) 5600MHz CL36 VIPER VENOM RGB",
    price: 449,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2022/5/pr_2022_5_10_12_49_47_383_01.jpg",
    link: "https://www.x-kom.pl/p/1139134-pamiec-ram-ddr5-patriot-32gb-2x16gb-5600mhz-cl36-viper-venom-rgb.html",
    type: "RAM"
  },
  {
    id: "1128393",
    name: "GOODRAM 32GB (1x32GB) 4800MHz CL40",
    price: 398,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/3/pr_2023_3_20_8_30_4_352_01.jpg",
    link: "https://www.x-kom.pl/p/1128393-pamiec-ram-ddr5-goodram-32gb-1x32gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "693428",
    name: "GOODRAM 8GB (1x8GB) 1600MHz CL11 dedykowana Dell",
    price: 109,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2021/11/pr_2021_11_5_11_44_29_331_01.jpg",
    link: "https://www.x-kom.pl/p/693428-pamiec-ram-sodimm-ddr3-goodram-8gb-1x8gb-1600mhz-cl11-dedykowana-dell.html",
    type: "RAM"
  },
  {
    id: "1130697",
    name: "Crucial 8GB (1x8GB) 4800MHz CL40",
    price: 139,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/3/pr_2023_3_23_16_14_53_440_00.jpg",
    link: "https://www.x-kom.pl/p/1130697-pamiec-ram-sodimm-ddr5-crucial-8gb-1x8gb-4800mhz-cl40.html",
    type: "RAM"
  },
  {
    id: "654990",
    name: "Kingston 8GB (1x8GB) 2933MHz CL21",
    price: 229,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/6/pr_2021_6_8_10_16_11_55_00.jpg",
    link: "https://www.x-kom.pl/p/654990-pamiec-ram-sodimm-ddr4-kingston-8gb-1x8gb-2933mhz-cl21.html",
    type: "RAM"
  },
  {
    id: "635854",
    name: "Dell DELL Memory Upgrade 16GB 2Rx8 DDR4 3200MHz",
    price: 399,
    image: "https://assets.x-kom.pl/public/xkom/8f1cf5db92839e83.svg",
    link: "https://www.x-kom.pl/p/635854-pamiec-ram-sodimm-ddr4-dell-dell-memory-upgrade-16gb-2rx8-ddr4-3200mhz.html",
    type: "RAM"
  },
  {
    id: "668025",
    name: "Kingston FURY 8GB (1x8GB) 3000MHz CL15 Renegade Black",
    price: 209,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/7/pr_2021_7_12_12_21_9_734_02.jpg",
    link: "https://www.x-kom.pl/p/668025-pamiec-ram-ddr4-kingston-fury-8gb-1x8gb-3000mhz-cl15-renegade-black.html",
    type: "RAM"
  },
  {
    id: "657076",
    name: "Thermaltake 16GB (2x8GB) 4000MHz CL19 ToughRAM RGB",
    price: 399,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2021/6/pr_2021_6_8_11_48_34_611_00.jpg",
    link: "https://www.x-kom.pl/p/657076-pamiec-ram-ddr4-thermaltake-16gb-2x8gb-4000mhz-cl19-toughram-rgb.html",
    type: "RAM"
  },
  {
    id: "719306",
    name: "Dell Memory Upgrade 16GB ‑ 1RX8 DDR4 UDIMM 3200Mhz ECC",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_2_7_59_25_368_00.jpg",
    link: "https://www.x-kom.pl/p/719306-pamiec-ram-serwerowa-dell-memory-upgrade-16gb-1rx8-ddr4-udimm-3200mhz-ecc.html",
    type: "RAM"
  },
  {
    id: "590695",
    name: "Kingston 4GB (1x4GB) 3200MHz CL22",
    price: 76.99,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2020/9/pr_2020_9_21_13_58_2_383_00.jpg",
    link: "https://www.x-kom.pl/p/590695-pamiec-ram-sodimm-ddr4-kingston-4gb-1x4gb-3200mhz-cl22.html",
    type: "RAM"
  },
  {
    id: "718848",
    name: "Corsair 64GB (2x32GB) 5200MHz CL40 Vengeance Black",
    price: 769,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_31_8_36_6_33_00.jpg",
    link: "https://www.x-kom.pl/p/718848-pamiec-ram-ddr5-corsair-64gb-2x32gb-5200mhz-cl40-vengeance-black.html",
    type: "RAM"
  },
  {
    id: "719674",
    name: "G.SKILL 32GB (2x16GB) 5600MHz CL36 Trident Z5",
    price: 610,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/2/pr_2022_2_2_13_3_20_598_03.jpg",
    link: "https://www.x-kom.pl/p/719674-pamiec-ram-ddr5-gskill-32gb-2x16gb-5600mhz-cl36-trident-z5.html",
    type: "RAM"
  },
  {
    id: "716569",
    name: "G.SKILL 32GB (2x16GB) 6000MHz CL40 Trident Z5",
    price: 619,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2022/1/pr_2022_1_27_14_29_5_807_01.jpg",
    link: "https://www.x-kom.pl/p/716569-pamiec-ram-ddr5-gskill-32gb-2x16gb-6000mhz-cl40-trident-z5.html",
    type: "RAM"
  },
  {
    id: "1333495",
    name: "Crucial 128GB (2x64GB) 5600 CL46",
    price: 1219,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_4_41_967_00.jpg",
    link: "https://www.x-kom.pl/p/1333495-pamiec-ram-sodimm-ddr5-crucial-128gb-2x64gb-5600-cl46.html",
    type: "RAM"
  },
  {
    id: "1333493",
    name: "Crucial 128GB (2x64GB) 5600 CL46",
    price: 11429,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/5/pr_2025_5_2_10_8_56_4_00.jpg",
    link: "https://www.x-kom.pl/p/1333493-pamiec-ram-ddr5-crucial-128gb-2x64gb-5600-cl46.html",
    type: "RAM"
  },
  {
    id: "1333492",
    name: "Crucial 64GB (2x32GB) 6400 CL40 Pro White",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_33_11_659_00.jpg",
    link: "https://www.x-kom.pl/p/1333492-pamiec-ram-ddr5-crucial-64gb-2x32gb-6400-cl40-pro-white.html",
    type: "RAM"
  },
  {
    id: "1333491",
    name: "Crucial 64GB (2x32GB) 6400 CL40 Pro",
    price: 965,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/2/pr_2025_2_21_12_24_13_416_00.jpg",
    link: "https://www.x-kom.pl/p/1333491-pamiec-ram-ddr5-crucial-64gb-2x32gb-6400-cl40-pro.html",
    type: "RAM"
  },
  {
    id: "1333490",
    name: "Crucial 64GB (2x32GB) 6000 CL40 Pro White",
    price: 999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2025/5/pr_2025_5_2_10_22_54_699_00.jpg",
    link: "https://www.x-kom.pl/p/1333490-pamiec-ram-ddr5-crucial-64gb-2x32gb-6000-cl40-pro-white.html",
    type: "RAM"
  },
  {
    id: "1333489",
    name: "Crucial 128GB (2x64GB) 5600 CL46 Pro",
    price: 1639,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2023/10/pr_2023_10_13_8_49_30_782_00.jpg",
    link: "https://www.x-kom.pl/p/1333489-pamiec-ram-ddr5-crucial-128gb-2x64gb-5600-cl46-pro.html",
    type: "RAM"
  },
  {
    id: "1332333",
    name: "Lexar 48GB (2x24GB) 8000 CL40 Ares RGB",
    price: 1199,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_13_8_28_23_360_00.jpg",
    link: "https://www.x-kom.pl/p/1332333-pamiec-ram-ddr5-lexar-48gb-2x24gb-8000-cl40-ares-rgb.html",
    type: "RAM"
  },
  {
    id: "1332332",
    name: "Lexar 32GB (2x16GB) 8000 CL38 Ares RGB",
    price: 829,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_13_8_28_23_360_00.jpg",
    link: "https://www.x-kom.pl/p/1332332-pamiec-ram-ddr5-lexar-32gb-2x16gb-8000-cl38-ares-rgb.html",
    type: "RAM"
  },
  {
    id: "1323963",
    name: "PNY 32GB (2x16GB) 6400 CL36 Gaming EPIC‑X",
    price: 509,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_17_15_44_20_828_00.jpg",
    link: "https://www.x-kom.pl/p/1323963-pamiec-ram-ddr5-pny-32gb-2x16gb-6400-cl36-gaming-epic-x.html",
    type: "RAM"
  },
  {
    id: "1323962",
    name: "PNY 32GB (2x16GB) 6000 CL36 XLR8",
    price: 369,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_17_15_44_20_828_00.jpg",
    link: "https://www.x-kom.pl/p/1323962-pamiec-ram-ddr5-pny-32gb-2x16gb-6000-cl36-xlr8.html",
    type: "RAM"
  },
  {
    id: "1323961",
    name: "PNY 32GB (2x16GB) 6000 CL36 XLR8",
    price: 409,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/3/pr_2025_3_17_15_55_7_860_00.jpg",
    link: "https://www.x-kom.pl/p/1323961-pamiec-ram-ddr5-pny-32gb-2x16gb-6000-cl36-xlr8.html",
    type: "RAM"
  },
  {
    id: "1314472",
    name: "Kingston FURY 128GB (4x32GB) 5600 CL28 ECC Registered Renegade Pro",
    price: 3999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/1/pr_2025_1_31_11_22_44_430_00.jpg",
    link: "https://www.x-kom.pl/p/1314472-pamiec-ram-ddr5-kingston-fury-128gb-4x32gb-5600-cl28-ecc-registered-renegade-pro.html",
    type: "RAM"
  },
  {
    id: "1314323",
    name: "Kingston FURY 64GB (4x16GB) 5600 CL28 ECC Registered Renegade Pro",
    price: 2999,
    image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-mini,,2025/1/pr_2025_1_31_11_22_44_430_00.jpg",
    link: "https://www.x-kom.pl/p/1314323-pamiec-ram-ddr5-kingston-fury-64gb-4x16gb-5600-cl28-ecc-registered-renegade-pro.html",
    type: "RAM"
  },
  {
    id: "1069862",
    name: "Synology 16GB DDR4 ECC",
    price: 1732.54,
    image: "https://assets.x-kom.pl/public/xkom/8f1cf5db92839e83.svg",
    link: "https://www.x-kom.pl/p/1069862-pamiec-ram-sodimm-ddr4-synology-16gb-ddr4-ecc.html",
    type: "RAM"
  }
];

module.exports = RAMs;
