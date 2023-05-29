<template>
    <div class="navbar bg-base-100 md:hidden">
        <div class="flex-none">
            <label for="my-drawer" class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </label>
        </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-900 drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <aside class="drawer-side dark:bg-gray-800 dark:border-gray-700" aria-label="Sidenav" id="drawer-navigation">
            <label for="my-drawer" class="drawer-overlay w-full"></label>
            <div class="overflow-y-auto py-5 px-3 h-full w-full bg-white">
                <ul class="menu menu-compact lg:menu-normal w-56 p-2 rounded-box">
                    <li class="menu-title text-sm">
                        <span>ツール</span>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard" :class="{ active: $route.path === '/dashboard' }"> 銘柄検索 </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/grid" :class="{ active: $route.path === '/dashboard/grid' }"> 銘柄検索2 </NuxtLink>
                    </li>
                    <div class="divider"></div>
                    <li class="menu-title text-sm">
                        <span>設定</span>
                    </li>
                    <li class="active">
                        <NuxtLink to="/dashboard/notify" :class="{ active: $route.path === '/dashboard/notify' }"> 通知設定 </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/account" :class="{ active: $route.path === '/dashboard/account' }"> アカウント設定 </NuxtLink>
                    </li>
                </ul>
            </div>
        </aside>
        <main class="p-4  drawer-content">
            <slot />
        </main>
    </div>
</template>
