<script setup>
    import { faLaptopCode, faBell, faMoon, faUser, faSun, faComputer, faDisplay, faDesktop } from '@fortawesome/free-solid-svg-icons'
    import { ref } from 'vue'

    const currentTheme = ref('Dark')

    const themes = [
        { name: 'Light', icon: faSun },
        { name: 'Dark', icon: faMoon },
        { name: 'System', icon: faDisplay }
    ];

</script>

<template>
    <header class="header-top fixed-top d-flex justify-content-between align-items-center">
        <div class="system-version position-relative h-100">
            <div class="system-link px-2 h-100 d-flex align-items-center">
                <p class="m-0 fs-7">System</p>
            </div>
            <div class="card card-version px-4 position-absolute shadow-s d-flex gap-2 align-items-center justify-content-start flex-row">
                <font-awesome-icon :icon="faLaptopCode" />
                <span class="fs-7">Version 0.2.4</span>
            </div>
        </div>
        <div class="wrapper-dropdowns d-flex justify-content-center align-items-center gap-2">
            
            <!-- NOTIFICATION DROPDOWN BUTTON -->
            <div class="dropdown">
                <a class="notification btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <font-awesome-icon :icon="faBell" class="fs-5" />
                </a>
                <div class="notification-content dropdown-menu dropdown-menu-end p-0">
                    <div class="card dropdown-item bg-transparent p-0">
                        <div class="notification-header d-flex flex-column">
                            <p class="text-light mb-3">Notifications</p>
                            <!-- BUTTON TABLIST -->
                            <ul class="nav nav-pills d-flex gap-4" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link h-100 active" id="alert" data-bs-toggle="pill" data-bs-target="#alert-link" type="button" role="tab" aria-controls="alert-link" aria-selected="true">Alerts</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link h-100" id="event" data-bs-toggle="pill" data-bs-target="#event-link" type="button" role="tab" aria-controls="event-link" aria-selected="false">Events</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link h-100" id="log" data-bs-toggle="pill" data-bs-target="#log-link" type="button" role="tab" aria-controls="log-link" aria-selected="false">Logs</button>
                                </li>
                            </ul>
                        </div>
                        <!-- NOTIFICATION -->
                        <!-- TABLIST CONTENT -->
                        <div class="tab-content" id="notification-links">
                            <!-- ALERTS TAB -->
                            <div class="tab-pane fade show active" id="alert-link" role="tabpanel" aria-labelledby="alert" tabindex="0">
                                <div class="notification-body w-100 d-flex align-items-center justify-content-center flex-column my-3">
                                    <p class="mb-1">All caught up!</p>
                                    <span class="fs-8">No new notifications.</span>
                                </div>
                                <!-- FOOTER -->
                                <div class="notification-footer w-100 py-3 d-flex justify-content-center">
                                    <a href="" class="btn fs-7">View all</a>
                                    <a href="" class="btn fs-7">Mark all alerts as read</a>
                                </div>
                            </div>
                            <!-- EVENTS TAB -->
                            <div class="tab-pane fade" id="event-link" role="tabpanel" aria-labelledby="event" tabindex="0">
                                <div class="notification-body w-100 d-flex align-items-center justify-content-center flex-column my-3">
                                    <p class="mb-1">All caught up!</p>
                                    <span class="fs-8">No new notifications.</span>
                                </div>
                                <!-- FOOTER -->
                                <div class="notification-footer py-3 d-flex justify-content-center">
                                    <a href="" class="btn fs-7">View all</a>
                                    <a href="" class="btn fs-7">Mark all events as read</a>
                                </div>
                            </div>
                            <!-- LOGS TAB -->
                            <div class="tab-pane fade" id="log-link" role="tabpanel" aria-labelledby="log" tabindex="0">
                                <div class="notification-body w-100 d-flex align-items-center justify-content-center flex-column my-3">
                                    <p class="mb-1">All caught up!</p>
                                    <span class="fs-8">No new notifications.</span>
                                </div>
                                <!-- FOOTER -->
                                <div class="notification-footer py-3 d-flex justify-content-center">
                                    <a href="" class="btn fs-7">View all</a>
                                    <a href="" class="btn fs-7">Mark all logs as read</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- THEM DROPDOWN BUTTON -->
            <div class="dropdown">
                <a class="theme btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon :icon=" currentTheme == 'Dark' ? faMoon : faSun" class="fs-5" />
                </a>
                <div class="theme-content dropdown-menu dropdown-menu-end p-0">
                    <div class="card bg-transparent py-3">
                        <a 
                            v-for="(theme, index) of themes"
                            class="dropdown-item w-100 px-3 py-2 d-flex gap-2 align-items-center"
                            type="button"
                            :class="{ 'active': theme.name == currentTheme }"
                            data-bs-toggle="pill"
                            :key="index"
                            @click="currentTheme = theme.name"
                        >
                            <font-awesome-icon :icon="theme.icon" class="fs-6" />
                            <span class="fs-7">{{ theme.name }}</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- PROFILE DROPDOWN BUTTON -->
            <div class="dropdown">
                <a class="user btn dropdown-toggle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                    <img src="/user-profile.jpg" class="rounded-3" alt="" srcset="">
                </a>
                <div class="user-content dropdown-menu dropdown-menu-end">
                    <div class="card dropdown-item bg-transparent">
                        <p class="text-light mt-4 mb-3 px-3">User</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style setup>
    .header-top {
        height: var(--header-height) !important;
        background-color: var(--header-dark-bg);
        left: var(--sidebar-width);
        padding: 0 1.2rem 0 2.2rem;
    }
    .system-link p {
        color: var(--secondary-font-light-color) !important;
        font-weight: 600;
    }
    .system-link {
        cursor: pointer;
    }
    .card-version {
        background-color: var(--dropdown-dark-bg);
        height: 4rem;
        width: 12rem;
        bottom: -4rem;
        transition: var(--transition-275s);
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);
        cursor: pointer;
    }
    .system-version .system-link:hover + .card-version,
    .system-version:hover .card-version {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
    }
    .card-version svg,
    .card-version span,
    .dropdown a {
        color: var(--light-icon-font-color) !important;
    }
    .dropdown .notification,
    .dropdown .theme,
    .dropdown .user {
        line-height: 0;
        width: 2.8rem;
        height: 2.2rem;
        text-align: center;
    }
    .dropdown .notification-content {
        width: 375px !important;
    }
    .dropdown .notification,
    .dropdown .theme {
        padding: 0.5rem 0.7rem;
        height: 2.4rem;
    }
    .dropdown .notification:hover,
    .dropdown .theme:hover,
    .dropdown .notification.show,
    .dropdown .theme.show {
        background-color: rgba(62, 151, 255, 0.1) !important;
        border-color: transparent !important;
    }
    .system-version:hover p,
    .card-version:hover span,
    .card-version:hover svg,
    .dropdown a:hover svg,
    .dropdown a.show {
        color: var(--bs-primary) !important;
    }
    .dropdown .user:active,
    .dropdown .user.show {
        border-color: transparent;
        background-color: transparent;
    }
    .wrapper-dropdowns .dropdown .dropdown-toggle::after {
        display: none;
    }
    .user img {
        height: 2.2rem;
        width: 2.2rem;
    }
    .dropdown-menu {
        background-color: var(--dropdown-dark-bg);
        border-color: var(--dropdown-dark-bg);
        visibility: hidden;
        opacity: 0;
        transform: translateY(calc(2.4rem + 0.8rem + 5px)) !important;
        transition: all 0.3s ease !important;
    }
    .dropdown-menu.show {
        animation:  dropdown-show-up 0.3s ease !important;
        visibility: visible;
        opacity: 1;
    }
    @keyframes dropdown-show-up {
        0% {
            margin-top: 0.75rem;
        }
        100% {
            margin-top: 0;
        }
    }

    /* NOTIFICATION DROPDOWN */

    .notification-content .card,
    .theme-content .card,
    .user-content .card {
        border: none;
        overflow: hidden;
    }
    .notification-header {
        background-image: url(notification.jpg) !important;
        background-size: cover;
    }
    .notification-header p {
        font-weight: 500;
        font-size: 1.1rem !important;
        margin: 1.9rem 1.8rem 0 1.8rem;
    }
    .notification-header .nav {
        border-bottom: 2px solid var(--border-color);
        overflow: visible !important;
        padding: 0 1.8rem;
    }
    .notification-header .nav-link {
        padding: 0 0 0.5rem 0 !important;
        font-weight: 500 !important;
        border-radius: 0;
        height: 38px !important;
        font-size: 0.85rem !important;
        border-bottom: 2px solid transparent;
        transition: var(--transition-175s);
        color: var(--secondary-color);
    }
    .notification-header .nav-link.active,
    .notification-header .nav-link:hover {
        color: var(--primary-color);
        border-color: var(--bs-primary);
        background-color: transparent !important;
    }
    .notification-header .nav-item {
        padding: 0 !important;
        margin-bottom: -2px;
    }
    .notification-body {
        height: 200px !important;
    }
    .notification-body p {
        color: var(--light-font-color);
        font-weight: 600;
        font-size: 1.1rem;
    }
    .notification-body span {
        color: var(--secondary-font-light-color);
        font-weight: 500;
    }
    .notification-footer {
        border-top: 1px solid var(--border-color);
    }
    .notification-footer a {
        padding: 1rem 1.2rem !important;
        color: var(--secondary-font-light-color) !important;
        transition: var(--transition-175s);
    }
    .notification-footer a:hover {
        color: var(--bs-primary) !important;
    }

    /* THEME DROPDOWN */

    .theme-content {
        width: 175px;
    }
    .theme-content a {
        cursor: pointer;
        border-radius: 0.5rem !important;
    }
    .theme-content a:hover {
        color: var(--bs-primary) !important;
        background-color: transparent;
    }
    .theme-content a.active,
    .theme-content a.active:hover {
        background-color: rgba(62, 151, 255, 0.1) !important;
        color: var(--bs-primary) !important;
    }
    .theme-content a > svg {
        width: 1.5rem;
    }
    .theme-content .card {
        padding: 0.6rem 0.8rem !important;
    }
    .theme-content span {
        font-weight: 500;
    }
</style>