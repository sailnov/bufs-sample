<script setup>
    definePageMeta({
        layout: "dashboard",
    });
    useHead({
        title: "アカウント設定",
    });
</script>

<template>
    <!-- Card Section -->
    <div class="mx-auto">
        <!-- Card -->
        <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            <div class="mb-8">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">アカウント設定</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                    あなたのアカウント、プロフィール、その他諸々の設定を変更できます。
                </p>
            </div>

            <form>
                <!-- Grid -->
                <div class="grid grid-cols-12 gap-4 sm:gap-6">
                    <div class="col-span-3">
                        <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> プロフィール画像 </label>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-9">
                        <div class="flex items-center gap-5">
                            <div class="flex gap-x-2">
                                <div>
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
                                                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                                            />
                                            <path
                                                d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
                                            />
                                        </svg>
                                        写真をアップロード
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-3">
                        <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> 氏名 </label>
                    </div>
                    <!-- End Col -->
                    <div class="col-span-9">
                        <div class="sm:flex">
                            <input
                                id="af-account-full-name"
                                type="text"
                                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="田中"
                            />
                            <input
                                type="text"
                                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="太郎"
                            />
                        </div>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-3">
                        <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> メールアドレス </label>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-9">
                        <input
                            id="af-account-email"
                            type="email"
                            class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="tanaka@tarou.com"
                        />
                    </div>
                    <!-- End Col -->

                    <div class="col-span-3">
                        <label for="af-account-password" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> パスワード </label>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-9">
                        <div class="space-y-2">
                            <input
                                id="af-account-password"
                                type="text"
                                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="現在のパスワード"
                            />
                            <input
                                type="text"
                                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="新しいパスワード"
                            />
                        </div>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-3">
                        <div class="inline-block">
                            <label for="af-account-phone" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> 電話番号 </label>
                            <span class="text-sm text-gray-400 dark:text-gray-600"> (任意) </span>
                        </div>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-9">
                        <div class="sm:flex">
                            <input
                                id="af-account-phone"
                                type="text"
                                class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                placeholder="080-0000-0000"
                            />
                            <select
                                class="py-2 px-3 pr-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            >
                                <option selected>携帯</option>
                                <option>固定</option>
                            </select>
                        </div>

                        <p class="mt-3">
                            <a
                                class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 btn btn-ghost font-medium"
                            >
                                <svg
                                    class="w-3.5 h-3.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                電話番号を追加
                            </a>
                        </p>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-3">
                        <label for="af-account-gender-checkbox" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> 性別 </label>
                    </div>
                    <!-- End Col -->

                    <div class="col-span-9">
                        <div class="sm:flex">
                            <label
                                for="radio-1-1"
                                class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            >
                                <input type="radio" name="radio-1" class="radio" id="radio-1-1" />
                                <span class="text-sm text-gray-500 ml-3 dark:text-gray-400">男性</span>
                            </label>

                            <label
                                for="radio-1-2"
                                class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            >
                                <input type="radio" name="radio-1" class="radio" id="radio-1-2" />
                                <span class="text-sm text-gray-500 ml-3 dark:text-gray-400">女性</span>
                            </label>

                            <label
                                for="radio-1-3"
                                class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            >
                                <input type="radio" name="radio-1" class="radio" id="radio-1-3" />
                                <span class="text-sm text-gray-500 ml-3 dark:text-gray-400">その他</span>
                            </label>
                        </div>
                    </div>
                    <!-- End Col -->
                </div>
                <!-- End Grid -->

                <div class="mt-5 flex justify-end gap-x-2">
                    <button
                        type="button"
                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                        キャンセル
                    </button>
                    <button
                        type="button"
                        class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    >
                        設定を保存
                    </button>
                </div>
            </form>
        </div>
        <!-- End Card -->
    </div>
    <!-- End Card Section -->
</template>
