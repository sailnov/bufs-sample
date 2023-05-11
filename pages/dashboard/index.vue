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
        <!-- Card -->
        <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
                <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                        <!-- Header -->
                        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                            <div>
                                <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">銘柄検索</h2>
                                <p class="text-sm text-gray-600 dark:text-gray-400">株式銘柄を検索</p>
                            </div>
                            <div class="gap-5 flex">
                                <div class="form-control">
                                    <div class="input-group">
                                        <input type="text" placeholder="Search…" class="input input-bordered btn-sm" />
                                        <button class="btn btn-square btn-sm">
                                            <Icon name="tabler:search" />
                                        </button>
                                    </div>
                                </div>
                                <!-- The button to open modal -->
                                <label for="my-modal-4" class="drawer-button btn btn-sm px-6 btn-ghost gap-1">
                                    <Icon name="tabler:filter" />
                                    フィルタ
                                </label>
                                <!-- Put this part before </body> tag -->
                                <input type="checkbox" id="my-modal-4" class="modal-toggle" />
                                <label for="my-modal-4" class="modal cursor-pointer">
                                    <label class="modal-box relative" for="">
                                        <h3 class="text-lg font-bold">フィルター</h3>
                                        <div class="grid grid-rows-6 md:grid-rows-3 grid-flow-col gap-3 mb-6">
                                            <div class="my-3">
                                                <p class="text-sm font-medium mb-1">
                                                    24時間の変化率
                                                </p>
                                                <div class="flex gap-3">
                                                    <label class="input-group">
                                                        <input type="text" placeholder="-100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                    <span class="my-1">～</span>
                                                    <label class="input-group">
                                                        <input type="text" placeholder="100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="my-3">
                                                <p class="text-sm font-medium mb-1">
                                                    チャートスコア
                                                </p>
                                                <div class="flex gap-3">
                                                    <input type="text" placeholder="0" class="input input-sm w-full max-w-xs bg-base-300" />
                                                    <span class="my-1">～</span>
                                                    <input type="text" placeholder="100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                </div>
                                            </div>
                                            <div class="my-3">
                                                <p class="text-sm font-medium mb-1">
                                                    CANSLIM スコア
                                                </p>
                                                <div class="flex gap-3">
                                                    <input type="text" placeholder="0" class="input input-sm w-full max-w-xs bg-base-300" />
                                                    <span class="my-1">～</span>
                                                    <input type="text" placeholder="100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                </div>
                                            </div>
                                            <div class="my-3">
                                                <p class="text-sm font-medium mb-1">
                                                    ROE
                                                </p>
                                                <div class="flex gap-3">
                                                    <label class="input-group">
                                                        <input type="text" placeholder="0" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                    <span class="my-1">～</span>
                                                    <label class="input-group">
                                                        <input type="text" placeholder="100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="my-3">
                                                <p class="text-sm font-medium mb-1">
                                                    経常利益変化率
                                                </p>
                                                <div class="flex gap-3">
                                                    <label class="input-group">
                                                        <input type="text" placeholder="0" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                    <span class="my-1">～</span>
                                                    <label class="input-group">
                                                        <input type="text" placeholder="100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="my-3">
                                                <p class="text-sm font-medium mb-1">
                                                    売上高変化率
                                                </p>
                                                <div class="flex gap-3">
                                                    <label class="input-group">
                                                        <input type="text" placeholder="0" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                    <span class="my-1">～</span>
                                                    <label class="input-group">
                                                        <input type="text" placeholder="100" class="input input-sm w-full max-w-xs bg-base-300" />
                                                        <span>%</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <label for="my-modal-4" class="btn px-6 btn-primary gap-1 btn-block">
                                            <Icon name="tabler:filter" />
                                            フィルタを適用
                                        </label>
                                    </label>
                                </label>
                            </div>
                        </div>
                        <!-- End Header -->
                        <!-- Table -->
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead class="bg-gray-50 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left border-l border-gray-200 dark:border-gray-700">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> # </span>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left whitespace-nowrap">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"></span>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center whitespace-nowrap">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> 株価 </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'price' && order === 'asc') {
                                                        orderBy = 'price';
                                                        order = 'desc';
                                                    } else if (orderBy === 'price' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'price';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'price'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center whitespace-nowrap">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> 時価総額 </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'marketCap' && order === 'asc') {
                                                        orderBy = 'marketCap';
                                                        order = 'desc';
                                                    } else if (orderBy === 'marketCap' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'marketCap';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'marketCap'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center whitespace-nowrap">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> 24h % </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'change24h' && order === 'asc') {
                                                        orderBy = 'change24h';
                                                        order = 'desc';
                                                    } else if (orderBy === 'change24h' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'change24h';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'change24h'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 tooltip tooltip-top"
                                            data-tip="チャートの形状をAIが評価したスコアです。"
                                        >
                                            <span class="whitespace-nowrap">チャート</span> スコア
                                        </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'aiScore' && order === 'asc') {
                                                        orderBy = 'aiScore';
                                                        order = 'desc';
                                                    } else if (orderBy === 'aiScore' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'aiScore';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'aiScore'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        <span
                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200 tooltip tooltip-top"
                                            data-tip="CANSLIM法への合致度スコア"
                                        >
                                            CANSLIM スコア
                                        </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'canslimScore' && order === 'asc') {
                                                        orderBy = 'canslimScore';
                                                        order = 'desc';
                                                    } else if (orderBy === 'canslimScore' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'canslimScore';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'canslimScore'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center whitespace-nowrap">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"> ROE </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'roe' && order === 'asc') {
                                                        orderBy = 'roe';
                                                        order = 'desc';
                                                    } else if (orderBy === 'roe' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'roe';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'roe'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                            <span class="whitespace-nowrap">経常利益</span>変化率
                                        </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'profitChange' && order === 'asc') {
                                                        orderBy = 'profitChange';
                                                        order = 'desc';
                                                    } else if (orderBy === 'profitChange' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'profitChange';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'profitChange'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                            <span class="whitespace-nowrap">売上高</span>変化率
                                        </span>
                                        <button
                                            class="btn btn-xs btn-circle btn-ghost"
                                            @click="
                                                () => {
                                                    if (orderBy === 'salesChange' && order === 'asc') {
                                                        orderBy = 'salesChange';
                                                        order = 'desc';
                                                    } else if (orderBy === 'salesChange' && order === 'desc') {
                                                        orderBy = 'id';
                                                        order = 'asc';
                                                    } else {
                                                        orderBy = 'salesChange';
                                                        order = 'asc';
                                                    }
                                                }
                                            "
                                        >
                                            <Icon
                                                :name="
                                                    orderBy === 'salesChange'
                                                        ? order === 'asc'
                                                            ? 'tabler:arrow-down'
                                                            : 'tabler:arrow-up'
                                                        : 'tabler:arrows-down-up'
                                                "
                                            />
                                        </button>
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-center whitespace-nowrap">
                                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                            過去7日間
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr v-for="(marketCap, index) in filterResult" :key="marketCap.id">
                                    <td class="h-px w-auto whitespace-nowrap">
                                        <div class="px-6 py-2">
                                            <span class="text-sm text-gray-800 dark:text-gray-200">
                                                {{ index + 1 }}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="h-px w-auto overflow-x-auto">
                                        <div class="grow px-6 py-2">
                                            <span class="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                                {{ marketCap.name }}
                                            </span>
                                            <span class="block text-sm text-gray-500">{{ marketCap.code }}・東証PRM</span>
                                        </div>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span class="text-sm text-gray-800 dark:text-gray-200 font-semibold">
                                            {{ priceFormat(marketCap.price) }}
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span class="text-sm text-gray-800 dark:text-gray-200 font-semibold">
                                            {{ priceFormat(marketCap.marketCap) }}
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span :class="'text-sm font-semibold' + (marketCap.change24h > 0 ? ' text-green-500' : ' text-red-500')">
                                            <Icon :name="marketCap.change24h > 0 ? 'mdi:arrow-up' : 'mdi:arrow-down'" />
                                            {{ marketCap.change24h }}%
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span
                                            :class="
                                                'text-sm font-semibold' +
                                                (marketCap.aiScore > 80 ? ' text-green-500' : '') +
                                                (marketCap.aiScore > 50 ? ' text-base-content' : ' text-red-500')
                                            "
                                        >
                                            <Icon name="fluent-emoji-high-contrast:beaming-face-with-smiling-eyes" />
                                            {{ marketCap.aiScore }}
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span
                                            :class="
                                                'text-sm font-semibold' +
                                                (marketCap.canslimScore > 80 ? ' text-green-500' : '') +
                                                (marketCap.canslimScore > 50 ? ' text-base-content' : ' text-red-500')
                                            "
                                        >
                                            <Icon name="fluent-emoji-high-contrast:beaming-face-with-smiling-eyes" />
                                            {{ marketCap.canslimScore }}
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span :class="'text-sm font-semibold' + (marketCap.roe > 0 ? ' text-green-500' : ' text-red-500')">
                                            <Icon :name="marketCap.roe > 0 ? 'mdi:arrow-up' : 'mdi:arrow-down'" />
                                            {{ marketCap.roe }}%
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span :class="'text-sm font-semibold' + (marketCap.profitChange > 0 ? ' text-green-500' : ' text-red-500')">
                                            <Icon :name="marketCap.profitChange > 0 ? 'mdi:arrow-up' : 'mdi:arrow-down'" />
                                            {{ marketCap.profitChange }}%
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <span :class="'text-sm font-semibold' + (marketCap.salesChange > 0 ? ' text-green-500' : ' text-red-500')">
                                            <Icon :name="marketCap.salesChange > 0 ? 'mdi:arrow-up' : 'mdi:arrow-down'" />
                                            {{ marketCap.salesChange }}%
                                        </span>
                                    </td>
                                    <td class="h-px w-auto whitespace-nowrap text-center">
                                        <img
                                            class="mx-auto"
                                            src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg"
                                            alt=""
                                            v-if="index % 2 === 0"
                                        />
                                        <img
                                            class="mx-auto"
                                            src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
                                            alt=""
                                            v-if="index % 2 === 1"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- End Table -->
                        <!-- Footer -->
                        <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                            <div>
                                <p class="text-sm text-gray-600 dark:text-gray-400">
                                    <span class="font-semibold text-gray-800 dark:text-gray-200">50</span> results
                                </p>
                            </div>
                            <div>
                                <div class="inline-flex gap-x-2">
                                    <button
                                        type="button"
                                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                    >
                                        <svg
                                            class="w-3 h-3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                                            />
                                        </svg>
                                        前へ
                                    </button>

                                    <button
                                        type="button"
                                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                    >
                                        次へ
                                        <svg
                                            class="w-3 h-3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- End Footer -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Card -->
    </div>
    <!-- End Table Section -->
</template>
