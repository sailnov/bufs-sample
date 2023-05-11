<script setup></script>

<template>
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-6 md:py-3">
        <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
            <div class="relative md:flex md:items-center md:justify-between">
                <div class="flex items-center justify-between">
                    <a class="w-auto block" href="#">
                        <ItemsLogo class="w-auto h-8 inline" />
                    </a>
                    <div class="md:hidden">
                        <button type="button"
                            class="hs-collapse-toggle p-2 btn btn-ghost btn-sm"
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <Icon name="material-symbols:segment" class="w-4 h-4"/>
                        </button>
                    </div>
                </div>

                <div id="navbar-collapse-with-animation"
                    class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
                        <div class="flex flex-col gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-x-4 md:mt-0 md:pl-7">
                            <a class="btn btn-ghost text-sm" href="/#pricing">
                                プラン・価格
                            </a>
                            <a class="btn btn-ghost text-sm" href="/#features">
                                機能・特徴
                            </a>
                            <a class="btn btn-ghost text-sm" href="/dashboard">
                                ログイン
                            </a>
                            <div class="pt-3 md:pt-0">
                                <a class="btn btn-primary px-6 btn-block md:btn-md" href="/dashboard">
                                    無料登録
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!-- End Header -->
</template>