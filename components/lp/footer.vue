<template>
    <!-- Footer -->
    <footer class="relative overflow-hidden pt-10">
        <!-- Gradients -->
        <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
            <div class="bg-purple-200 opacity-10 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
            <div class="bg-slate-200 opacity-20 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
        </div>
        <!-- End Gradients -->

        <div class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <!-- Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
                <div class="col-span-full hidden lg:col-span-1 lg:block">
                    <ItemsLogo class="w-auto h-8 inline" />
                    <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2023 {{ $config.public["siteName"] }}</p>
                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">リンク</h4>
                    <div class="mt-3 grid space-y-3 text-sm">
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                プラン・価格
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                機能・特徴
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                ログイン
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                新規登録
                            </a>
                        </p>
                    </div>
                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">リソース</h4>

                    <div class="mt-3 grid space-y-3 text-sm">
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                ブログ
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                会社概要
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                運営会社
                            </a>
                        </p>
                    </div>
                </div>
                <!-- End Col -->

                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">開発者</h4>

                    <div class="mt-3 grid space-y-3 text-sm">
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                API ドキュメント
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                ステータス
                            </a>
                        </p>
                    </div>
                </div>
                <!-- End Col -->
                <div>
                    <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">文書</h4>
                    <div class="mt-3 grid space-y-3 text-sm">
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                利用規約
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                プライバシーポリシー
                            </a>
                        </p>
                        <p>
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                特定商取引法に基づく表記
                            </a>
                        </p>
                    </div>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
            <div class="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
                <div class="sm:flex sm:justify-between sm:items-center">
                    <div class="block md:flex items-center gap-x-3">
                        <div class="space-x-4 text-sm">
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                利用規約
                            </a>
                        </div>
                        <div class="space-x-4 text-sm">
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                プライバシーポリシー
                            </a>
                        </div>
                        <div class="space-x-4 text-sm">
                            <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
                                特定商取引法に基づく表記
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- End Footer -->
</template>
