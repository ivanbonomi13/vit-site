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
    }
]

export const getIcons = (section, part, name) => {
    const sectionIcons = icons.find(item => item.section === section)
    if (part === undefined) return icons.find(item => item.section === section).list.find(item => item.name === name).icon
    return sectionIcons.parts.find(item => item.title === part).list.find(item => item.name === name).icon
}