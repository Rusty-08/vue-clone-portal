<script setup>
    import { faLaptopCode, faBell, faMoon, faUser } from '@fortawesome/free-solid-svg-icons'

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
        <div class="wrapper-dropdowns d-flex justify-content-center align-items-center">
            <div class="dropdown">
                <a class="notification btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon :icon="faBell" class="fs-5" />
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <div class="card dropdown-item p5">
                        Test
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <a class="theme btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon :icon="faMoon" class="fs-5" />
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <div class="card dropdown-item p5">
                        Test
                    </div>
                </div>
            </div>
            <div class="dropdown">
                <a class="user p-1 px-2 btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/user-profile.jpg" class="rounded-3" alt="" srcset="">
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <div class="card dropdown-item p5">
                        Test
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
        padding: 0 2rem;
    }
    .system-link p {
        color: var(--bs-header-text) !important;
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
        transition: all 0.3s ease;
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
        color: var(--inactive-icon);
    }
    .dropdown a {
        line-height: 0;
    }
    .system-version:hover p,
    .card-version:hover span,
    .card-version:hover svg,
    .dropdown a:hover svg {
        color: var(--bs-primary) !important;
    }
    .wrapper-dropdowns .dropdown .dropdown-toggle::after {
        display: none;
    }
    .user img {
        height: 2rem;
        width: 2rem;
    }
</style>