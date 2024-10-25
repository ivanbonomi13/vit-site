const icons = [
    {
        'section': 'header', // HEADER
        'parts': [
            {
                'title': 'nav', // HEADER NAV
                'list': [
                    {
                        'name': 'home',
                        'icon':
                            <>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </>
                    },
                    {
                        'name': 'services',
                        'icon':
                            <>
                                <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
                                <path d="M10 12l-2 -2.2l.6 -1" />
                            </>
                    },
                    {
                        'name': 'team',
                        'icon':
                            <>
                                <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                                <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                                <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                            </>
                    },
                    {
                        'name': 'blog',
                        'icon':
                            <>
                                <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
                                <path d="M8 8l4 0" />
                                <path d="M8 12l4 0" />
                                <path d="M8 16l4 0" />
                            </>
                    },
                    {
                        'name': 'tutovit',
                        'icon':
                            <>
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                                <path d="M12 16v.01" />
                                <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                            </>
                    }
                ]
            },
            {
                'title': 'social',  // HEADER SOCIAL
                'list': [
                    {
                        'name': 'instagram',
                        'icon':
                            <>
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </>
                    },
                    {
                        'name': 'linkedin',
                        'icon':
                            <>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </>
                    },
                    {
                        'name': 'facebook',
                        'icon':
                            <>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </>
                    }
                ]
            }
        ]
    },
    {
        'section': 'hero', // HERO
        'parts': [
            {
                'title': 'ad', // HERO AD
                'list': [
                    {
                        'name': 'terraform',
                        'icon':
                            <>
                                <path d="M15 15.5l-11.476 -6.216a1 1 0 0 1 -.524 -.88v-4.054a1.35 1.35 0 0 1 2.03 -1.166l9.97 5.816v10.65a1.35 1.35 0 0 1 -2.03 1.166l-3.474 -2.027a1 1 0 0 1 -.496 -.863v-11.926" />
                                <path d="M15 15.5l5.504 -3.21a1 1 0 0 0 .496 -.864v-3.576a1.35 1.35 0 0 0 -2.03 -1.166l-3.97 2.316" />
                            </>
                    },
                    {
                        'name': 'arrow-right',
                        'icon':
                            <>
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </>
                    }
                ]
            },
            {
                'title': 'bg', // HERO BACKGROUND
                'list': [
                    {
                        'name': 'console',
                        'icon':
                            <>
                                <path d="M8 9l3 3l-3 3" />
                                <path d="M13 15l3 0" />
                                <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                            </>
                    },
                    {
                        'name': 'container',
                        'icon':
                            <>
                                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                                <path d="M12 12l8 -4.5" />
                                <path d="M12 12l0 9" />
                                <path d="M12 12l-8 -4.5" />
                            </>
                    },
                    {
                        'name': 'database',
                        'icon':
                            <>
                                <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                                <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                                <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                            </>
                    },
                    {
                        'name': 'cloud',
                        'icon':
                            <>
                                <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
                            </>
                    },
                    {
                        'name': 'server',
                        'icon':
                            <>
                                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                <path d="M7 8l0 .01" />
                                <path d="M7 16l0 .01" />
                            </>
                    },
                    {
                        'name': 'networking',
                        'icon':
                            <>
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                <path d="M3.6 9h16.8" />
                                <path d="M3.6 15h16.8" />
                                <path d="M11.5 3a17 17 0 0 0 0 18" />
                                <path d="M12.5 3a17 17 0 0 1 0 18" />
                            </>
                    },
                    {
                        'name': 'analytics',
                        'icon':
                            <>
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <path d="M9 17l0 -5" />
                                <path d="M12 17l0 -1" />
                                <path d="M15 17l0 -3" />
                            </>
                    },
                    {
                        'name': 'router',
                        'icon':
                            <>
                                <path d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                                <path d="M17 17l0 .01" />
                                <path d="M13 17l0 .01" />
                                <path d="M15 13l0 -2" />
                                <path d="M11.75 8.75a4 4 0 0 1 6.5 0" />
                                <path d="M8.5 6.5a8 8 0 0 1 13 0" />
                            </>
                    }
                ]
            }
        ]
    },
    {
        'section': 'data', // DATA
        'list': [
            {
                'name': 'users',
                'icon':
                    <>
                        <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </>
            },
            {
                'name': 'environments',
                'icon':
                    <>
                        <path d="M3 5h6v14h-6z" />
                        <path d="M12 9h10v7h-10z" />
                        <path d="M14 19h6" />
                        <path d="M17 16v3" />
                        <path d="M6 13v.01" />
                        <path d="M6 16v.01" />
                    </>
            },
            {
                'name': 'servers',
                'icon':
                    <>
                        <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                        <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                        <path d="M7 8l0 .01" />
                        <path d="M7 16l0 .01" />
                        <path d="M11 8h6" />
                        <path d="M11 16h6" />
                    </>
            },
            {
                'name': 'databases',
                'icon':
                    <>
                        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                    </>
            }
        ]
    },
    {
        'section': 'stack',
        'list': [
            {
                'name': 'engines',
                'icon':
                    <>
                        <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                        <path d="M4 6v6c0 1.657 3.582 3 8 3c.21 0 .42 -.003 .626 -.01" />
                        <path d="M20 11.5v-5.5" />
                        <path d="M4 12v6c0 1.657 3.582 3 8 3" />
                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M19.001 15.5v1.5" />
                        <path d="M19.001 21v1.5" />
                        <path d="M22.032 17.25l-1.299 .75" />
                        <path d="M17.27 20l-1.3 .75" />
                        <path d="M15.97 17.25l1.3 .75" />
                        <path d="M20.733 20l1.3 .75" />
                    </>
            },
            {
                'name': 'clouds',
                'icon':
                    <>
                        <path d="M11 18.004h-4.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99a3.468 3.468 0 0 1 3.307 2.444" />
                        <path d="M20 21l2 -2l-2 -2" />
                        <path d="M17 17l-2 2l2 2" />
                    </>
            }
        ]
    }
]

export const getIcons = (section, part, name) => {
    const sectionIcons = icons.find(item => item.section === section)
    if (part === undefined) return sectionIcons.list.find(item => item.name === name).icon
    else if (name === undefined) return sectionIcons.parts.find(item => item.title === part).list
    return sectionIcons.parts.find(item => item.title === part).list.find(item => item.name === name).icon
}