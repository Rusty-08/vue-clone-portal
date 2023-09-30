<script setup>
    import { faHouse, faMessage, faUserPlus, faUserPen, faClipboardList, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

    const sidebar = [
        { 
            header: '',
            links: ['Home', 'Chat'],
            icon: [faHouse, faMessage] 
        }, 
        { 
            header: 'ENROLLMENT', 
            links: ['Pre-Registration'], 
            icon: [faUserPlus] 
        },
        { 
            header: 'PROFILE', 
            links: ['Individuan Form'], 
            icon: [faUserPen] 
        }, 
        { 
            header: 'REPORTS', 
            links: ['My Grades', 'My Permanent Record', 'Enrollment Status'], 
            icon: [faClipboardList, faGraduationCap, faClipboardList] 
        }
    ]
   
    const getLinkURL = (link) => {
        return '#' + link.toLowerCase().replace(' ', '-');
    }

</script>

<template>
    <aside class="side-bar fixed-left position-relative vh-100">
        <!-- SIDEBAR HEADER -->
        <h6 class="header d-flex align-items-center px-4 text-light fs-8 fw-bold">ACADEMIC PORTAL</h6>

        <!-- SIDEBAR LINKS -->
        <div class="nav flex-column nav-pills my-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
        >
            <ul v-for="(section, index) in sidebar" class="navbar-nav w-100" :key="index">
                <span class="nav-link-header">{{ section.header }}</span>
                <li v-for="(link, linkIndex) in section.links" :key="linkIndex" class="nav-item">
                    <a :href="getLinkURL(link)"
                        class="nav-link"
                        :class="{ 'active': link == 'Home' }"
                        :id="`${link}-link`"
                        data-bs-toggle="pill"
                        :data-bs-target="`#${link}`"
                        role="tab" 
                        :aria-controls="link"
                        :aria-selected="link == 'Home'"
                    >
                        <font-awesome-icon :icon="section.icon[linkIndex]" />
                        {{ link }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="report-link position-absolute w-100 bottom-0">
            <button
                type="button"
                class="btn w-100 py-2"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Report a bug"
            >
                Report a Bug
            </button>
        </div>

    </aside>
</template>

<style setup>
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 6px;
    }
    .nav:hover::-webkit-scrollbar-thumb {
        background-color: #282831;
    }
    .nav {
        overflow-y: scroll;
        height: calc(100% - 11rem);
        flex-wrap: nowrap;
    }
    .header {
        border-bottom: var(--border-dashed);
        height: var(--header-height);
    }
    .report-link {
        background-color: var(--header-bg-color);
        height: 5rem;
        padding: 1.3rem 1.2rem;
    }
    .report-link button,
    .report-link button:hover {
        font-size: 0.9rem;
        color: #b5b5c3;
        background-color: #3f425459 !important;
    }
    .side-bar {
        background-color: var(--header-bg-color);
        border-right: var(--border-dashed);
        width: var(--sidebar-width);
    }
    .navbar-nav {
        padding: 0 0.8rem;
    }
    .nav-link-header {
        color: var(--menu-heading);
        font-size: 12.35px !important;
        font-weight: 600;
        padding: 1.5rem 0 0.7rem 0.8rem !important;
    }
    .navbar-nav:first-child .nav-link-header {
        padding: 0 !important;
    }
    .nav-item {
        padding: 0.15rem 0 !important;
    }
    .nav-link {
        color: var(--inactive-link) !important;
        white-space: nowrap;
        font-size: 14.3px !important;
        font-weight: 700 !important;
        padding: 8.45px 13px 8.45px 10px !important;
    }
    .nav-link svg {
        width: 2rem;
        font-size: 1rem;
        color: var(--inactive-icon);
    }
    .nav-link:hover {
        color: var(--primary-color) !important;
    }
    .nav-link.active {
        color: var(--primary-color) !important;
        background-color: #1c1c21 !important;
    }
    .nav-link.active svg,
    .nav-link:hover svg {
        color: var(--primary-color) !important;
    }
</style>
