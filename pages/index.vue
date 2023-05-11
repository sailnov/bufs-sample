<script setup>
    useHead({
        title: "ホーム",
    });

    const plans = ref([
        {
            id: 1,
            is_popular: false,
            name: "フリープラン",
            description: "スタートアップ・テスト利用向け",
            price: 0,
            currency: "JPY",
            interval: "月",
            features: [
                {
                    name: "AI を活用した分析",
                    available: true,
                },
                {
                    name: "CAN SLIM 法に基づいた分析",
                    available: true,
                },
                {
                    name: "カップアンドハンドル分析",
                    available: true,
                },
                {
                    name: "メールを連携した通知",
                    available: true,
                },
                {
                    name: "LINE を連携した通知",
                    available: false,
                },
                {
                    name: "外部証券会社との連携",
                    available: false,
                }
            ],
        },
        {
            id: 2,
            is_popular: true,
            name: "プレミアム",
            description: "プロ投資家向け・一番人気",
            price: 800,
            currency: "JPY",
            interval: "月",
            features: [
                {
                    name: "AI を活用した分析",
                    available: true,
                },
                {
                    name: "CAN SLIM 法に基づいた分析",
                    available: true,
                },
                {
                    name: "カップアンドハンドル分析",
                    available: true,
                },
                {
                    name: "メールを連携した通知",
                    available: true,
                },
                {
                    name: "LINE を連携した通知",
                    available: true,
                },
                {
                    name: "外部証券会社との連携",
                    available: true,
                }
            ],
        },
    ]);
    const priceFilter = (price) => {
        return "￥" + price.toLocaleString();
    };
    const fandq = ref([
        {
            title: "キャンセルは可能ですか？",
            content: "はい、いつでも解約できます。解約時に質問はありませんが、ご意見をお聞かせください。",
        },
        {
            title: "支払い方法はどのようになっていますか？",
            content: "クレジットカード・コンビニ決済に対応しています。",
        },
        {
            title: "料金はどのように発生しますか？",
            content: "基本料金は無料ですが、プレミアムプランをご利用の場合は利用料金が発生します。",
        },
    ]);
</script>

<template>
    <div>
        <LpHeader />
        <!-- Hero -->
        <div class="px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <!-- Grid -->
            <div class="md:my-8 max-w-[85rem] mx-auto grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div>
                    <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
                        <span class="relative whitespace-nowrap text-blue-600">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 418 42"
                                class="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                                ></path>
                            </svg>
                            <span class="relative">スマート</span>
                        </span>
                        に分析、<br />
                        <span class="text-primary">
                            {{ $config.public["siteName"] }}
                        </span>
                        で実現！
                    </h1>
                    <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
                        財務分析・ファンダメンタル分析をスマートにサポート。<br>
                        {{ $config.public["siteName"] }}で、投資をもっと楽しく。
                    </p>
                    <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                        <a class="btn btn-primary gap-2 px-6">
                            <Icon name="material-symbols:bar-chart-4-bars" class="h-5 w-5 max-sm:basis-12" />
                            スタートする！
                        </a>
                    </div>
                    <!-- Gradients -->
                    <div aria-hidden="true" class="flex absolute -top-48 left-0 -z-[1] max-w-full">
                        <div class="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
                        <div class="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
                    </div>
                    <!-- End Gradients -->
                </div>
                <div class="mx-auto max-w-[35rem] w-full pl-auto">
                    <div class="card bg-base-100 outline outline-base-200">
                        <div class="card-body">
                            <h2 class="card-title">
                                {{ $config.public["siteName"] }} でできること
                            </h2>
                            <ul class="my-3 text-sm space-y-3">
                                <li class="flex space-x-3">
                                    <Icon name="ic:outline-check" class="flex-shrink-0 h-6 w-6 text-primary"></Icon>
                                    <span class="text-gray-800 dark:text-gray-400">
                                        CAN SLIMに基づいたテクニカルな分析
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <Icon name="ic:outline-check" class="flex-shrink-0 h-6 w-6 text-primary"></Icon>
                                    <span class="text-gray-800 dark:text-gray-400">
                                        AI を活用したチャート分析
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <Icon name="ic:outline-check" class="flex-shrink-0 h-6 w-6 text-primary"></Icon>
                                    <span class="text-gray-800 dark:text-gray-400">
                                        LINE、メールを連携しての通知
                                    </span>
                                </li>
                                <li class="flex space-x-3">
                                    <Icon name="ic:outline-check" class="flex-shrink-0 h-6 w-6 text-primary"></Icon>
                                    <span class="text-gray-800 dark:text-gray-400">
                                        外部サービスとの連携
                                    </span>
                                </li>
                            </ul>
                            <p class="text-base-content my-3">さぁ、はじめよう！</p>
                            <div class="card-actions">
                                <a class="btn btn-primary btn-block gap-3 bg-primary">
                                    <Icon name="material-symbols:bar-chart-4-bars" class="h-5 w-5 max-sm:basis-12" />
                                    {{ $config.public["siteName"] }}で スタートする！
                                </a>
                            </div>
                            <div class="divider my-3">もしくは</div>
                            <div class="card-actions">
                                <a class="btn btn-ghost btn-block gap-3 bg-base-200">
                                    ログイン
                                    <Icon name="material-symbols:chevron-right" class="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Hero -->
        <div class="container mx-auto py-8" id="features">
            <!-- Features -->
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <!-- Grid -->
                <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div class="lg:col-span-1">
                        <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">{{ $config.public["siteName"] }} とは？</h2>
                        <p class="mt-2 md:mt-4 text-gray-500">
                            {{ $config.public["siteName"] }}は、CAN SLIM分析、カップアンドハンドル分析、AIを活用したテクニカル分析など、
                            様々な分析を行うことができる、投資家のためのサービスです。
                        </p>
                    </div>
                    <!-- End Col -->

                    <div class="lg:col-span-2">
                        <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
                            <!-- Icon Block -->
                            <div class="flex gap-x-5">
                                <Icon name="material-symbols:notifications-outline-sharp" class="flex-shrink-0 mt-1 w-6 h-6 text-primary" />
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                        LINE, メールで通知
                                    </h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        LINE Notify、メールアドレスを連携して、指標・チャート分析に基づいた通知など、様々な通知を受け取ることができます。
                                    </p>
                                </div>
                            </div>
                            <!-- End Icon Block -->

                            <!-- Icon Block -->
                            <div class="flex gap-x-5">
                                <Icon name="mdi:brain" class="flex-shrink-0 mt-1 w-6 h-6 text-primary" />
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                                        AI を活用した分析
                                    </h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        最新鋭のAIを活用し、テクニカルな分析を行います。
                                        従来の分析よりも、より柔軟で正確な分析を行うことができます。
                                    </p>
                                </div>
                            </div>
                            <!-- End Icon Block -->

                            <!-- Icon Block -->
                            <div class="flex gap-x-5">
                                <Icon name="material-symbols:contact-support-outline" class="flex-shrink-0 mt-1 w-6 h-6 text-primary" />
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">充実のサポート体制</h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        お困りの際には、専門のサポートチームが、24時間365日あなたをサポートします。
                                        また、サポートセミナーなども開催しております。
                                    </p>
                                </div>
                            </div>
                            <!-- End Icon Block -->

                            <!-- Icon Block -->
                            <div class="flex gap-x-5">
                                <Icon name="material-symbols:deceased-outline" class="flex-shrink-0 mt-1 w-6 h-6 text-primary" />
                                <div class="grow">
                                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">リーズナブルな料金</h3>
                                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                                        {{ $config.public["siteName"] }} は、基本料金無料でご利用いただけます。
                                        投資家のためのサービスとして、より多くの方にご利用いただけるよう、リーズナブルな料金設定を行っております。
                                    </p>
                                </div>
                            </div>
                            <!-- End Icon Block -->
                        </div>
                    </div>
                    <!-- End Col -->
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Features -->
        </div>
        <!-- Features -->
        <!-- Features -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="relative p-6 md:p-16">
                <!-- Grid -->
                <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                        <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                            新時代の投資家のために。<br>
                            {{ $config.public["siteName"] }} ですべて解決！
                        </h2>
                        <!-- Tab Navs -->
                        <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
                            <button
                                type="button"
                                class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                                id="tabs-with-card-item-1"
                                data-hs-tab="#tabs-with-card-1"
                                aria-controls="tabs-with-card-1"
                                role="tab"
                            >
                                <span class="flex">
                                    <Icon name="material-symbols:android-messages" class="w-16 h-16" />
                                    <span class="grow ml-6">
                                        <span
                                            class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                        >
                                            サポート体制
                                        </span>
                                        <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                                            専門のサポートスタッフが、あなたのお困りごとを常にサポートします。
                                            充実したサポート体制と、セミナーであなたのビジネスをつぎのステージへ。
                                        </span>
                                    </span>
                                </span>
                            </button>
                            <button
                                type="button"
                                class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                                id="tabs-with-card-item-2"
                                data-hs-tab="#tabs-with-card-2"
                                aria-controls="tabs-with-card-2"
                                role="tab"
                            >
                                <span class="flex">
                                    <Icon name="material-symbols:stacked-line-chart" class="w-16 h-16" />
                                    <span class="grow ml-6">
                                        <span
                                            class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                        >
                                            スマートに連携
                                        </span>
                                        <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                                            {{ $config.public["siteName"] }} では、AIを活用して分析を行い、結果をリアルタイムに通知します。
                                            取り逃すことなく、利益を最大化しましょう。
                                        </span>
                                    </span>
                                </span>
                            </button>

                            <button
                                type="button"
                                class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                                id="tabs-with-card-item-3"
                                data-hs-tab="#tabs-with-card-3"
                                aria-controls="tabs-with-card-3"
                                role="tab"
                            >
                                <span class="flex">
                                    <Icon name="ant-design:thunderbolt-outlined" class="w-16 h-16" />
                                    <span class="grow ml-6">
                                        <span
                                            class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                                            >多彩な機能</span
                                        >
                                        <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                                            {{ $config.public["siteName"] }} には、新時代の投資家のための機能が満載です。
                                            あなたの投資をよりスマートに、より楽しくします。
                                        </span>
                                    </span>
                                </span>
                            </button>
                        </nav>
                        <!-- End Tab Navs -->
                    </div>
                    <!-- End Col -->

                    <div class="lg:col-span-6">
                        <div class="relative">
                            <!-- Tab Content -->
                            <div>
                                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                                    <img
                                        class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                                        alt="Image Description"
                                    />
                                </div>

                                <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                                    <img
                                        class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                                        alt="Image Description"
                                    />
                                </div>

                                <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                                    <img
                                        class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                                        alt="Image Description"
                                    />
                                </div>
                            </div>
                            <!-- End Tab Content -->

                            <!-- SVG Element -->
                            <div class="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                                <svg
                                    class="w-16 h-auto text-orange-500"
                                    width="121"
                                    height="135"
                                    viewBox="0 0 121 135"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                        stroke="currentColor"
                                        stroke-width="10"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                            <!-- End SVG Element -->
                        </div>
                    </div>
                    <!-- End Col -->
                </div>
                <!-- End Grid -->

                <!-- Background Color -->
                <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
                    <div
                        class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"
                    ></div>
                </div>
                <!-- End Background Color -->
            </div>
        </div>
        <!-- End Features -->
        <!-- Features -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="pricing">
            <!-- Title -->
            <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center relative">
                <!-- Gradients -->
                <div aria-hidden="true" class="flex absolute -top-48 left-0 -z-[1] max-w-full">
                    <div class="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
                    <div class="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
                </div>
                <!-- End Gradients -->
                <h2
                    class="text-2xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent"
                >
                    リーズナブル＆フレキシブル
                </h2>
                <p class="mt-2 lg:text-lg text-gray-800 dark:text-gray-200">必要な時に、必要な分だけ。あなたのビジネスに合わせて、柔軟に。</p>
            </div>
            <!-- End Title -->

            <div class="relative xl:w-10/12 xl:mx-auto">
                <!-- Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div v-for="plan in plans" :key="plan.id">
                        <!-- Card -->
                        <div
                            class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]"
                        >
                            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">{{ plan.name }}</h3>
                            <div class="text-sm text-gray-500">{{ plan.description }}</div>
                            <span
                                class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900"
                                v-if="plan.is_popular"
                            >
                                一番人気
                            </span>

                            <div class="mt-5">
                                <span class="text-5xl font-bold text-gray-800 dark:text-gray-200">
                                    {{ priceFilter(plan.price) }}
                                </span>
                                <span class="ml-3 text-gray-500"> {{ plan.currency }} / {{ plan.interval }} </span>
                            </div>

                            <div class="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                                <!-- List -->
                                <ul role="list" class="space-y-2 text-sm sm:text-base">
                                    <li class="flex space-x-3" v-for="(feature, index) in plan.features" :key="index">
                                        <svg
                                            class="flex-shrink-0 h-6 w-5 text-blue-500"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            v-if="feature.available"
                                        >
                                            <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1" />
                                            <path
                                                d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <svg
                                            class="flex-shrink-0 h-6 w-5 text-gray-500"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            v-else
                                        >
                                            <path
                                                d="M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z"
                                                fill="currentColor"
                                                fill-opacity="0.1"
                                            />
                                            <path
                                                d="M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span class="text-gray-800 dark:text-gray-200"> {{ feature.name }}</span>
                                    </li>
                                </ul>
                                <!-- End List -->
                            </div>
                            <div class="mt-5">
                                <button class="btn btn-primary btn-block">このプランを選択</button>
                            </div>
                        </div>
                        <!-- End Card -->
                    </div>
                </div>
                <!-- End Grid -->

                <!-- SVG Element -->
                <div class="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16">
                    <svg
                        class="w-16 h-auto text-orange-500"
                        width="121"
                        height="135"
                        viewBox="0 0 121 135"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                        <path
                            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                        <path
                            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                            stroke="currentColor"
                            stroke-width="10"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <!-- End SVG Element -->

                <!-- SVG Element -->
                <div class="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16">
                    <svg
                        class="w-56 h-auto text-cyan-500"
                        width="347"
                        height="188"
                        viewBox="0 0 347 188"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                            stroke="currentColor"
                            stroke-width="7"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <!-- End SVG Element -->
            </div>

            <div class="mt-7 text-center">
                <p class="text-xs text-gray-400">価格は日本円で表示され、税込価格です。</p>
            </div>
        </div>
        <!-- End Features -->

        <!-- FAQ -->
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Grid -->
            <div class="grid md:grid-cols-6 gap-6">
                <div class="md:col-span-2">
                    <div class="max-w-xs">
                        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">よくある質問</h2>
                        <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">お客様からよく寄せられる質問をまとめました。</p>
                    </div>
                </div>
                <!-- End Col -->

                <div class="md:col-span-4">
                    <!-- Accordion -->
                    <div tabindex="0" class="collapse collapse-arrow group" v-for="(faq, index) in fandq" :key="index">
                        <div class="collapse-title text-xl font-medium">{{ faq.title }}</div>
                        <div class="collapse-content group-focus:bg-base-200 rounded-xl group-focus:p-4">
                            <p>{{ faq.content }}</p>
                        </div>
                    </div>
                    <!-- End Accordion -->
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End FAQ -->
        <LpFooter />
    </div>
</template>
