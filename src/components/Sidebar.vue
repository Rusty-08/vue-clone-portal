<script setup>
    import { ref } from 'vue'

    const sidebar = [
        { header: '', links: ['Home', 'Chat'], icon: ['fa-solid fa-house', 'fa-solid fa-message'] }, 
        { header: 'ENROLLMENT', links: ['Pre-Registration'], icon: ['fa-solid fa-user-plus'] },
        { header: 'PROFILE', links: ['Individuan Form'], icon: ['fa-solid fa-user-pen'] }, 
        { header: 'REPORTS', links: ['My Grades', 'My Permanent Record', 'Enrollment Status'], icon: ['fa-solid fa-clipboard-list', 'fa-solid fa-graduation-cap', 'fa-solid fa-clipboard-list'] }
    ]
   
    const getLinkURL = (link) => {
          return '#' + link.toLowerCase().replace(' ', '-');
    }
    
</script>

<template>
    <aside class="side-bar fixed-left vh-100">
        <!-- SIDEBAR HEADER -->
        <h6 class="header d-flex align-items-center px-4 text-light fs-8">ACADEMIC PORTAL</h6>

        <!-- SIDEBAR LINKS -->
        <div class="nav flex-column nav-pills my-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
        >
            <ul v-for="(section, index) in sidebar" class="navbar-nav px-3" :key="index">
                <span class="nav-link-header px-2">{{ section.header }}</span>
                <li v-for="(link, linkIndex) in section.links" :key="linkIndex" class="nav-item">
                    <font-awesome-icon v-for="(i, iconIndex) in section.icon" :icon="i" :key="iconIndex" />
                    <a :href="getLinkURL(link)"
                        class="nav-link"
                        :class="{ 'active': link == 'Home' }"
                        :id="`${link}-link`"
                        data-bs-toggle="pill"
                        :data-bs-target="`#${link}`"
                        role="tab" 
                        :aria-controls="link"
                        :aria-selected="linkIndex === 0"
                    >
                        {{ link }}
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<style setup>
    .header {
        border-bottom: var(--border-dashed);
        height: var(--header-height);
    }
    .side-bar {
        background-color: var(--header-bg-color);
        border-right: var(--border-dashed);
        width: var(--sidebar-width);
    }
    .nav-link-header {
        color: var(--menu-heading);
        font-size: 12.35px !important;
        font-weight: 600;
        padding: 1.5rem 0 1rem 0 !important;
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
        padding: 8.45px 13px !important;
    }
    .nav-link:hover {
        color: var(--primary-color) !important;
    }
    .nav-link.active {
        color: var(--primary-color) !important;
        background-color: #1c1c21 !important;
    }
</style>
