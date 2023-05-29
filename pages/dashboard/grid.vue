<script setup>
    definePageMeta({
        layout: "dashboard",
    });
    useHead({
        title: "銘柄検索",
    });
    const marketCaps = ref([
        {
            id: 1,
            name: "Roob and Sons",
            code: 8202,
            price: 9819,
            marketCap: 2342029726,
            change24h: 2.0,
            aiScore: 59,
            canslimScore: 7,
            roe: 14,
            profitChange: 94,
            salesChange: 49,
        },
        {
            id: 2,
            name: "Satterfield Group",
            code: 5106,
            price: 38654,
            marketCap: 6553659967,
            change24h: 62.9,
            aiScore: 2,
            canslimScore: 22,
            roe: 19,
            profitChange: -37,
            salesChange: 78,
        },
        {
            id: 3,
            name: "Quitzon Group",
            code: 7698,
            price: 39344,
            marketCap: 2368878889,
            change24h: 29.3,
            aiScore: 96,
            canslimScore: 68,
            roe: 67,
            profitChange: -49,
            salesChange: -80,
        },
        {
            id: 4,
            name: "Stoltenberg Inc",
            code: 3248,
            price: 37645,
            marketCap: 9144160210,
            change24h: -53.1,
            aiScore: 69,
            canslimScore: 36,
            roe: 63,
            profitChange: -24,
            salesChange: 1,
        },
        {
            id: 5,
            name: "Ortiz-Considine",
            code: 1778,
            price: 2519,
            marketCap: 3652380441,
            change24h: 31.5,
            aiScore: 26,
            canslimScore: 21,
            roe: 85,
            profitChange: -14,
            salesChange: 57,
        },
        {
            id: 6,
            name: "Blanda Inc",
            code: 2964,
            price: 27194,
            marketCap: 9686400373,
            change24h: 76.0,
            aiScore: 99,
            canslimScore: 15,
            roe: 55,
            profitChange: -88,
            salesChange: 37,
        },
        {
            id: 7,
            name: "Considine Inc",
            code: 6864,
            price: 31343,
            marketCap: 2560618834,
            change24h: -97.4,
            aiScore: 93,
            canslimScore: 44,
            roe: 76,
            profitChange: 85,
            salesChange: -68,
        },
        {
            id: 8,
            name: "Quigley-Thompson",
            code: 7604,
            price: 45600,
            marketCap: 3289329989,
            change24h: 99.8,
            aiScore: 60,
            canslimScore: 83,
            roe: 89,
            profitChange: 22,
            salesChange: -39,
        },
        {
            id: 9,
            name: "Cummings-D'Amore",
            code: 7817,
            price: 33420,
            marketCap: 3223459350,
            change24h: 67.5,
            aiScore: 71,
            canslimScore: 33,
            roe: 14,
            profitChange: -92,
            salesChange: 20,
        },
        {
            id: 10,
            name: "Turcotte, Herzog and Okuneva",
            code: 4021,
            price: 40296,
            marketCap: 6593376400,
            change24h: 78.5,
            aiScore: 99,
            canslimScore: 47,
            roe: 15,
            profitChange: -7,
            salesChange: -34,
        },
        {
            id: 11,
            name: "Kris, Haag and Oberbrunner",
            code: 5304,
            price: 10410,
            marketCap: 7073076549,
            change24h: -42.2,
            aiScore: 28,
            canslimScore: 10,
            roe: 3,
            profitChange: -25,
            salesChange: -42,
        },
        {
            id: 12,
            name: "Hand-Kassulke",
            code: 1801,
            price: 17270,
            marketCap: 6452740595,
            change24h: -65.7,
            aiScore: 34,
            canslimScore: 4,
            roe: 78,
            profitChange: 90,
            salesChange: -95,
        },
        {
            id: 13,
            name: "Turcotte Inc",
            code: 5269,
            price: 15805,
            marketCap: 5833669763,
            change24h: 55.6,
            aiScore: 88,
            canslimScore: 56,
            roe: 42,
            profitChange: 77,
            salesChange: 33,
        },
        {
            id: 14,
            name: "Crona LLC",
            code: 7806,
            price: 35235,
            marketCap: 9195694871,
            change24h: -38.8,
            aiScore: 53,
            canslimScore: 66,
            roe: 15,
            profitChange: 80,
            salesChange: -30,
        },
        {
            id: 15,
            name: "Gutkowski-Hauck",
            code: 4000,
            price: 43655,
            marketCap: 2403448276,
            change24h: -3.6,
            aiScore: 47,
            canslimScore: 17,
            roe: 13,
            profitChange: 27,
            salesChange: -10,
        },
        {
            id: 16,
            name: "Dibbert Inc",
            code: 9473,
            price: 9203,
            marketCap: 9610740679,
            change24h: 31.6,
            aiScore: 29,
            canslimScore: 50,
            roe: 40,
            profitChange: 70,
            salesChange: -73,
        },
        {
            id: 17,
            name: "Ruecker Group",
            code: 7516,
            price: 20199,
            marketCap: 8577207605,
            change24h: 66.0,
            aiScore: 11,
            canslimScore: 73,
            roe: 42,
            profitChange: 70,
            salesChange: -2,
        },
        {
            id: 18,
            name: "Connelly, Hickle and Funk",
            code: 2031,
            price: 30599,
            marketCap: 1813915817,
            change24h: -9.4,
            aiScore: 88,
            canslimScore: 73,
            roe: 26,
            profitChange: -6,
            salesChange: 16,
        },
        {
            id: 19,
            name: "Gulgowski, Nicolas and Monahan",
            code: 1789,
            price: 8000,
            marketCap: 9430925481,
            change24h: -39.8,
            aiScore: 69,
            canslimScore: 58,
            roe: 48,
            profitChange: -19,
            salesChange: 52,
        },
        {
            id: 20,
            name: "Paucek, Ryan and Kutch",
            code: 1433,
            price: 24715,
            marketCap: 9618846290,
            change24h: 1.3,
            aiScore: 0,
            canslimScore: 16,
            roe: 14,
            profitChange: 39,
            salesChange: -35,
        },
        {
            id: 21,
            name: "Welch, Zieme and Bernier",
            code: 4967,
            price: 1217,
            marketCap: 2839616442,
            change24h: 43.4,
            aiScore: 33,
            canslimScore: 40,
            roe: 46,
            profitChange: 6,
            salesChange: -15,
        },
        {
            id: 22,
            name: "Howell and Sons",
            code: 1850,
            price: 40424,
            marketCap: 5000644714,
            change24h: 8.2,
            aiScore: 67,
            canslimScore: 67,
            roe: 85,
            profitChange: -41,
            salesChange: 38,
        },
        {
            id: 23,
            name: "Heathcote, Halvorson and Hagenes",
            code: 7295,
            price: 30642,
            marketCap: 4983919713,
            change24h: -10.6,
            aiScore: 46,
            canslimScore: 71,
            roe: 0,
            profitChange: 34,
            salesChange: -36,
        },
        {
            id: 24,
            name: "Cartwright-O'Kon",
            code: 3897,
            price: 10584,
            marketCap: 9200018562,
            change24h: -11.5,
            aiScore: 9,
            canslimScore: 57,
            roe: 32,
            profitChange: -100,
            salesChange: 48,
        },
        {
            id: 25,
            name: "Jacobi, Jacobson and Terry",
            code: 6272,
            price: 12846,
            marketCap: 7959815421,
            change24h: -11.1,
            aiScore: 44,
            canslimScore: 89,
            roe: 5,
            profitChange: 42,
            salesChange: -92,
        },
        {
            id: 26,
            name: "Fahey, Sipes and Legros",
            code: 3066,
            price: 22257,
            marketCap: 1932267,
            change24h: 55.3,
            aiScore: 32,
            canslimScore: 72,
            roe: 71,
            profitChange: 60,
            salesChange: -16,
        },
        {
            id: 27,
            name: "Rohan-Dickinson",
            code: 8674,
            price: 1815,
            marketCap: 5824510221,
            change24h: 72.0,
            aiScore: 69,
            canslimScore: 13,
            roe: 84,
            profitChange: 90,
            salesChange: 80,
        },
        {
            id: 28,
            name: "Kunde, Trantow and Denesik",
            code: 2432,
            price: 33396,
            marketCap: 548631048,
            change24h: -20.6,
            aiScore: 44,
            canslimScore: 58,
            roe: 42,
            profitChange: 77,
            salesChange: 88,
        },
        {
            id: 29,
            name: "Feeney, Luettgen and Kessler",
            code: 3656,
            price: 45006,
            marketCap: 4236264081,
            change24h: -59.8,
            aiScore: 28,
            canslimScore: 97,
            roe: 12,
            profitChange: 47,
            salesChange: -71,
        },
        {
            id: 30,
            name: "Wehner Group",
            code: 6458,
            price: 18394,
            marketCap: 3160618802,
            change24h: -52.3,
            aiScore: 28,
            canslimScore: 99,
            roe: 57,
            profitChange: -42,
            salesChange: 37,
        },
        {
            id: 31,
            name: "McKenzie-Turner",
            code: 1282,
            price: 23733,
            marketCap: 7485842089,
            change24h: -6.1,
            aiScore: 94,
            canslimScore: 34,
            roe: 25,
            profitChange: 0,
            salesChange: 20,
        },
        {
            id: 32,
            name: "Reynolds-Lakin",
            code: 1803,
            price: 32488,
            marketCap: 7071433456,
            change24h: -48.4,
            aiScore: 53,
            canslimScore: 99,
            roe: 11,
            profitChange: -78,
            salesChange: -76,
        },
        {
            id: 33,
            name: "Gerhold Inc",
            code: 6679,
            price: 17039,
            marketCap: 6829002394,
            change24h: 53.9,
            aiScore: 14,
            canslimScore: 4,
            roe: 75,
            profitChange: -92,
            salesChange: 18,
        },
        {
            id: 34,
            name: "Corkery Inc",
            code: 2836,
            price: 46826,
            marketCap: 2254051955,
            change24h: 97.7,
            aiScore: 52,
            canslimScore: 70,
            roe: 72,
            profitChange: 61,
            salesChange: 50,
        },
        {
            id: 35,
            name: "Bailey, Homenick and Lemke",
            code: 5851,
            price: 16605,
            marketCap: 9236538262,
            change24h: -70.2,
            aiScore: 50,
            canslimScore: 0,
            roe: 79,
            profitChange: -86,
            salesChange: 62,
        },
        {
            id: 36,
            name: "Kihn-Streich",
            code: 1293,
            price: 32981,
            marketCap: 6170548737,
            change24h: 38.8,
            aiScore: 55,
            canslimScore: 31,
            roe: 76,
            profitChange: 19,
            salesChange: 98,
        },
        {
            id: 37,
            name: "Rice, Hermann and D'Amore",
            code: 9526,
            price: 6458,
            marketCap: 7150318897,
            change24h: -25.1,
            aiScore: 86,
            canslimScore: 83,
            roe: 70,
            profitChange: -66,
            salesChange: 58,
        },
        {
            id: 38,
            name: "Swift, Harris and DuBuque",
            code: 8954,
            price: 44149,
            marketCap: 1335452,
            change24h: 22.9,
            aiScore: 5,
            canslimScore: 9,
            roe: 17,
            profitChange: -11,
            salesChange: 13,
        },
        {
            id: 39,
            name: "Vandervort, Rolfson and Huel",
            code: 8126,
            price: 9785,
            marketCap: 9183809245,
            change24h: -72.5,
            aiScore: 88,
            canslimScore: 41,
            roe: 8,
            profitChange: -46,
            salesChange: -40,
        },
        {
            id: 40,
            name: "Kris-Prohaska",
            code: 6863,
            price: 27611,
            marketCap: 8132386647,
            change24h: 87.9,
            aiScore: 8,
            canslimScore: 33,
            roe: 67,
            profitChange: 88,
            salesChange: 100,
        },
        {
            id: 41,
            name: "Deckow, Lemke and Dicki",
            code: 7553,
            price: 12391,
            marketCap: 8333962179,
            change24h: -72.9,
            aiScore: 77,
            canslimScore: 58,
            roe: 18,
            profitChange: -34,
            salesChange: -62,
        },
        {
            id: 42,
            name: "Blanda-Feeney",
            code: 8729,
            price: 24239,
            marketCap: 3403827059,
            change24h: 56.8,
            aiScore: 10,
            canslimScore: 85,
            roe: 83,
            profitChange: -100,
            salesChange: 49,
        },
        {
            id: 43,
            name: "Luettgen and Sons",
            code: 4637,
            price: 1832,
            marketCap: 7906267428,
            change24h: -95.6,
            aiScore: 28,
            canslimScore: 91,
            roe: 65,
            profitChange: 89,
            salesChange: 95,
        },
        {
            id: 44,
            name: "Hane-Ortiz",
            code: 9187,
            price: 47591,
            marketCap: 9865519418,
            change24h: -74.5,
            aiScore: 4,
            canslimScore: 28,
            roe: 14,
            profitChange: -24,
            salesChange: -1,
        },
        {
            id: 45,
            name: "Kilback, MacGyver and Von",
            code: 8214,
            price: 22667,
            marketCap: 5223014548,
            change24h: 37.2,
            aiScore: 66,
            canslimScore: 69,
            roe: 4,
            profitChange: -47,
            salesChange: 66,
        },
        {
            id: 46,
            name: "O'Conner-Mante",
            code: 7677,
            price: 38320,
            marketCap: 4484981495,
            change24h: 48.1,
            aiScore: 75,
            canslimScore: 38,
            roe: 80,
            profitChange: 22,
            salesChange: 38,
        },
        {
            id: 47,
            name: "Rice-Jacobson",
            code: 7661,
            price: 40745,
            marketCap: 2353837227,
            change24h: -10.8,
            aiScore: 14,
            canslimScore: 18,
            roe: 32,
            profitChange: -16,
            salesChange: 50,
        },
        {
            id: 48,
            name: "Hodkiewicz-Upton",
            code: 6442,
            price: 18756,
            marketCap: 7408505681,
            change24h: -67.8,
            aiScore: 32,
            canslimScore: 29,
            roe: 62,
            profitChange: 57,
            salesChange: 22,
        },
        {
            id: 49,
            name: "Mraz, Bernier and Leuschke",
            code: 2600,
            price: 19634,
            marketCap: 894347131,
            change24h: -72.8,
            aiScore: 63,
            canslimScore: 26,
            roe: 39,
            profitChange: -42,
            salesChange: -21,
        },
        {
            id: 50,
            name: "Emard-Parisian",
            code: 9889,
            price: 16572,
            marketCap: 7162713579,
            change24h: -41.5,
            aiScore: 96,
            canslimScore: 80,
            roe: 84,
            profitChange: -68,
            salesChange: 2,
        },
    ]);
    const priceFormat = (price) => {
        return price.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
    };
    const orderBy = ref("id");
    const order = ref("asc");
    const filterResult = computed(() => {
        return useOrderBy(marketCaps.value, orderBy.value, order.value);
    });
</script>

<template>
    <div class="mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="">
                <div class="card bg-base-100 mb-3" v-for="cap in marketCaps" :key="cap.id">
                    <div class="card-body p-3">
                        <div class="card-title justify-between">
                            <div class="">
                                <h2 class="text-sm font-medium">{{ cap.name }}</h2>
                                <p class="text-xs text-neutral-500">{{ cap.code }}・東証PRM</p>
                            </div>
                            <img
                                class="max-w-[8rem]"
                                src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg"
                                alt=""
                            />
                        </div>
                        <p class="text-xs gap-2 flex">
                            <span class="font-medium">
                                {{ priceFormat(cap.price) }}
                            </span>
                            <span :class="'font-semibold' + (cap.change24h > 0 ? ' text-green-500' : ' text-red-500')">
                                <Icon :name="cap.change24h > 0 ? 'mdi:arrow-up' : 'mdi:arrow-down'" />
                                {{ cap.change24h }}%
                            </span>
                            <span
                                :class="
                                    'font-semibold' +
                                    (cap.aiScore > 80 ? ' text-green-500' : '') +
                                    (cap.aiScore > 50 ? ' text-base-content' : ' text-red-500')
                                "
                            >
                                <Icon name="fluent-emoji-high-contrast:beaming-face-with-smiling-eyes" />
                                {{ cap.aiScore }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-3 p-3">
                <p class="text-xs mb-1">
                    東証PRM・通貨JPY
                </p>
                <div class="flex gap-3 mb-1">
                    <h1 class="text-2xl font-semibold">
                        {{  marketCaps[0].name }}
                    </h1>
                    <button class="btn btn-primary btn-sm rounded-2xl flex gap-1">
                        <Icon name="mdi:plus" class="h-6 w-6" />
                        ポートフォリオ
                    </button>
                </div>
                <div class="flex gap-3 align-end items-end mb-3">
                    <h3 class="text-3xl font-semibold">
                        {{ priceFormat(marketCaps[0].price) }}
                    </h3>
                    <p
                        :class="
                            'font-semibold text-sm' +
                            (marketCaps[0].change24h > 0 ? ' text-green-500' : ' text-red-500')
                        "
                    >
                        <Icon :name="marketCaps[0].change24h > 0 ? 'mdi:arrow-up' : 'mdi:arrow-down'" />
                        {{ marketCaps[0].change24h }}%
                    </p>
                </div>
                <div class="grid grid-cols-4 gap-3">
                    <div class="col-span-3">
                        <div class="card bg-base-100">
                            <div class="card-body p-3">
                                <div class="flex gap-3">
                                    <button class="btn btn-sm rounded-2xl btn-primary">1日</button>
                                    <button class="btn btn-sm rounded-2xl bg-base-200 text-base-content border-none hover:bg-base-300">5日</button>
                                    <button class="btn btn-sm rounded-2xl bg-base-200 text-base-content border-none hover:bg-base-300">1ヶ月</button>
                                    <button class="btn btn-sm rounded-2xl bg-base-200 text-base-content border-none hover:bg-base-300">3ヶ月</button>
                                    <button class="btn btn-sm rounded-2xl bg-base-200 text-base-content border-none hover:bg-base-300">1年</button>
                                    <button class="btn btn-sm rounded-2xl bg-base-200 text-base-content border-none hover:bg-base-300">3年</button>
                                    <button class="btn btn-sm rounded-2xl bg-base-200 text-base-content border-none hover:bg-base-300">全期間</button>
                                </div>
                                <img
                                    class=""
                                    src="https://media.discordapp.net/attachments/1107144302905274458/1112582979034824765/image.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="card bg-base-100">
                            <div class="card-body p-3">
                                s
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Table Section -->
</template>
