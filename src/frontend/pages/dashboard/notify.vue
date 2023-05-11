<script setup>
    definePageMeta({
        layout: "dashboard",
    });
    useHead({
        title: "通知設定",
    });
</script>

<template>
    <!-- Card Section -->
    <div class="mx-auto">
        <!-- Card -->
        <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
            <div class="mb-8">
                <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">通知設定</h2>
                <p class="text-sm text-gray-600 dark:text-gray-400">通知先、通知条件の設定を行います。</p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-12 gap-4 sm:gap-6">
                <div class="col-span-3">
                    <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> 通知条件 </label>
                </div>
                <!-- End Col -->
                <div class="col-span-9">
                    <div class="sm:flex">
                        <select class="select w-full max-w-xs select-sm">
                            <option selected>CANSLIM スコア</option>
                            <option>チャートスコア</option>
                            <option>売上高変化率</option>
                            <option>経常利益変化率</option>
                        </select>
                        <span class="my-1 mx-3">が</span>
                        <input type="number" class="input input-sm" value="50" />
                        <span class="my-1 mx-3">以上の銘柄を通知する</span>
                        <button class="btn btn-circle btn-sm btn-ghost text-error ml-auto">
                            <Icon name="mdi:trash-outline" class="h-7 w-7 my-auto" />
                        </button>
                    </div>
                    <div class="divider my-2"></div>
                    <div class="sm:flex">
                        <select class="select w-full max-w-xs select-sm">
                            <option>CANSLIM スコア</option>
                            <option selected>チャートスコア</option>
                            <option>売上高変化率</option>
                            <option>経常利益変化率</option>
                        </select>
                        <span class="my-1 mx-3">が</span>
                        <input type="number" class="input input-sm" value="60" />
                        <span class="my-1 mx-3">以上の銘柄を通知する</span>
                        <button class="btn btn-circle btn-sm btn-ghost text-error ml-auto">
                            <Icon name="mdi:trash-outline" class="h-7 w-7 my-auto" />
                        </button>
                    </div>
                    <div class="divider my-2"></div>
                    <p class="mt-3">
                        <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 btn btn-ghost font-medium">
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
                            条件を追加
                        </a>
                    </p>
                </div>
                <div class="col-span-3">
                    <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> 通知先 </label>
                </div>
                <!-- End Col -->
                <div class="col-span-9">
                    <div class="sm:flex">
                        <select class="select w-full max-w-xs select-sm">
                            <option selected>メールアドレス</option>
                            <option>LINE Notify</option>
                            <option>Discord Webhook</option>
                            <option>Slack Webhook</option>
                        </select>
                        <span class="my-1 mx-3">の</span>
                        <select class="select w-full max-w-xs select-sm">
                            <option selected>test@example.com</option>
                        </select>
                        <span class="my-1 mx-3">に通知する</span>
                        <button class="btn btn-circle btn-sm btn-ghost text-error ml-auto">
                            <Icon name="mdi:trash-outline" class="h-7 w-7 my-auto" />
                        </button>
                    </div>
                    <div class="divider my-2"></div>
                    <div class="sm:flex">
                        <select class="select w-full max-w-xs select-sm">
                            <option>メールアドレス</option>
                            <option selected>LINE Notify</option>
                            <option>Discord Webhook</option>
                            <option>Slack Webhook</option>
                        </select>
                        <span class="my-1 mx-3">の</span>
                        <select class="select w-full max-w-xs select-sm">
                            <option selected>テスト用LINE1</option>
                        </select>
                        <span class="my-1 mx-3">に通知する</span>
                        <button class="btn btn-circle btn-sm btn-ghost text-error ml-auto">
                            <Icon name="mdi:trash-outline" class="h-7 w-7 my-auto" />
                        </button>
                    </div>
                    <div class="divider my-2"></div>
                    <div class="sm:flex">
                        <select class="select w-full max-w-xs select-sm">
                            <option>メールアドレス</option>
                            <option>LINE Notify</option>
                            <option selected>Discord Webhook</option>
                            <option>Slack Webhook</option>
                        </select>
                        <span class="my-1 mx-3">の</span>
                        <input type="text" class="input input-sm w-full max-w-xs" value="https://discord.com/webhook/xxxxxxxx" />
                        <span class="my-1 mx-3">に通知する</span>
                        <button class="btn btn-circle btn-sm btn-ghost text-error ml-auto">
                            <Icon name="mdi:trash-outline" class="h-7 w-7 my-auto" />
                        </button>
                    </div>
                    <div class="divider my-2"></div>
                    <p class="mt-3">
                        <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 btn btn-ghost font-medium">
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
                            通知先を追加
                        </a>
                    </p>
                </div>
                <div class="col-span-3">
                    <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"> その他条件 </label>
                </div>
                <!-- End Col -->
                <div class="col-span-9">
                    <div class="sm:flex">
                        <div class="form-control">
                            <label class="label cursor-pointer gap-3">
                                <input type="checkbox" class="toggle" checked />
                                <span class="label-text font-medium">
                                    一度通知した銘柄は通知しない
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="divider my-2"></div>
                    <div class="sm:flex">
                        <select class="select select-sm mr-2">
                            <option selected>毎日</option>
                            <option>1日おき</option>
                            <option>2日おき</option>
                        </select>
                        <select class="select select-sm">
                            <option selected>リアルタイムに</option>
                            <option>朝9時にまとめて</option>
                            <option>夜5時にまとめて</option>
                            <option>朝9時と夜5時にまとめて</option>
                        </select>
                        <span class="my-1 mx-3">通知する</span>
                    </div>
                    <div class="divider my-2"></div>
                </div>
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
        </div>
        <!-- End Card -->
    </div>
    <!-- End Card Section -->
</template>
