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

    const linkLists = [
        'Home',
        'Chat',
        'Pre-Registration',
        'Individuan Form',
        'My Grades',
        'My Permanent Record',
        'Enrollment Status'
    ]
   
    const getLinkURL = (link) => {
        return '#' + link.toLowerCase().split(' ').join('-')
    }

    const getLink = (link) => {
        return link.toLowerCase().split(' ').join('-')
    }

</script>

<template>
    <aside class="side-bar vh-100 position-relative">
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
                        :id="`${getLink(link)}-link`"
                        data-bs-toggle="pill"
                        :data-bs-target="getLinkURL(link)"
                        role="tab"
                        :aria-controls="getLink(link)"
                        :aria-selected="true == link == 'Home'"
                    >
                        <font-awesome-icon :icon="section.icon[linkIndex]" />
                        {{ link }}
                    </a>
                </li>
            </ul>
        </div>

        <div class="report-link position-absolute bottom-0 w-100">
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

    <!-- PAGE CONTENT -->
    <main class="tab-content" id="main-body">
        <section
                v-for="(link, linkIndex) in linkLists"
                class="tab-pane fade p-2 d-flex justify-content-center align-items-center text-light fw-bold fs-3"
                :class="{ 'active show': linkIndex == 0 }"
                :id="getLink(link)"
                role="tabpanel"
                :aria-labelledby="`${getLink(link)}-link`"
                tabindex="0"
            >
            {{ `${link} Page` }}
        </section>
    </main>

</template>

<style setup>
    .nav::-webkit-scrollbar {
        width: 4px;
    }
    .nav::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 6px;
    }
    .nav:hover::-webkit-scrollbar-thumb {
        background-color: #282831;
    }
    .side-bar {
        position: fixed !important;
        z-index: 500;
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
        padding: 0 0.6rem 0 0.7rem;
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
        background-color: hsl(240, 8%, 12%) !important;
    }
    .nav-link.active svg,
    .nav-link:hover svg {
        color: var(--primary-color) !important;
    }
    .tab-content section {
        width: calc(100% - var(--sidebar-width));
        min-height: calc(100vh - var(--header-height)) !important;
        background-color: var(--body-dark-bg);
        position: absolute;
        left: var(--sidebar-width);
        top: var(--header-height);
    }
</style>
