const icons = [
    {
        'section': 'header', // HEADER
        'parts': [
            {
                'title': 'nav', // HEADER - NAV
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
                'title': 'social',  // HEADER - SOCIAL
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
                'title': 'ad', // HERO - AD
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
                'title': 'bg', // HERO - BACKGROUND
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
        'section': 'stack', // STACK
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
    },
    {
        'section': 'philosophy', // PHILOSOPHY
        'parts': [
            {
                'title': 'head',
                'list': [
                    {
                        'name': 'mission',
                        'icon':
                            <>
                                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                <path d="M12 7a5 5 0 1 0 5 5" />
                                <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                                <path d="M15 6v3h3l3 -3h-3v-3z" />
                                <path d="M15 9l-3 3" />
                            </>
                    },
                    {
                        'name': 'vision',
                        'icon':
                            <>
                                <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                                <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                                <path d="M9.7 17l4.6 0" />
                            </>
                    },
                    {
                        'name': 'value-proposal',
                        'icon':
                            <>
                                <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                            </>
                    }
                ]
            },
            {
                'title': 'text',
                'list': [
                    {
                        'name': 'solutions',
                        'icon':
                            <>
                                <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M12 7l0 4" />
                                <path d="M6.7 17.8l2.8 -2" />
                                <path d="M17.3 17.8l-2.8 -2" />
                            </>
                    },
                    {
                        'name': 'fast',
                        'icon':
                            <>
                                <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                            </>
                    },
                    {
                        'name': 'safety',
                        'icon':
                            <>
                                <path d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .193 6.025" />
                                <path d="M16 22l5 -5" />
                                <path d="M21 21.5v-4.5h-4.5" />
                            </>
                    },
                    {
                        'name': 'strategy',
                        'icon':
                            <>
                                <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                                <path d="M11.683 12.317l5.759 -5.759" />
                                <path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                <path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                <path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
                                <path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                            </>
                    },
                    {
                        'name': 'leaders',
                        'icon':
                            <>
                                <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
                            </>
                    },
                    {
                        'name': 'kaizen',
                        'icon':
                            <>
                                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                            </>
                    },
                    {
                        'name': 'upgrade',
                        'icon':
                            <>
                                <path d="M3 17l6 -6l4 4l8 -8" />
                                <path d="M14 7l7 0l0 7" />
                            </>
                    },
                    {
                        'name': 'colab',
                        'icon':
                            <>
                                <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
                                <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
                            </>
                    }
                ]
            }
        ]
    },
    {
        'section': 'team', // TEAM
        'parts': [
            {
                'title': 'management', // TEAM - MANAGEMENT SECTOR
                'list': [
                    {
                        'name': 'ceo',
                        'icon':
                            <>
                                <path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" />
                                <path d="M10.5 7h3l5 5.5" />
                            </>
                    }
                ]
            },
            {
                'title': 'analysis', // TEAM - ANALYSYS SECTOR
                'list': [
                    {
                        'name': 'finances',
                        'icon':
                            <>
                                <path d="M21 15h-2.5c-.398 0 -.779 .158 -1.061 .439c-.281 .281 -.439 .663 -.439 1.061c0 .398 .158 .779 .439 1.061c.281 .281 .663 .439 1.061 .439h1c.398 0 .779 .158 1.061 .439c.281 .281 .439 .663 .439 1.061c0 .398 -.158 .779 -.439 1.061c-.281 .281 -.663 .439 -1.061 .439h-2.5" />
                                <path d="M19 21v1m0 -8v1" />
                                <path d="M13 21h-7c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414v-10c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h2m12 3.12v-1.12c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-2" />
                                <path d="M16 10v-6c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586h-4c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414v6m8 0h-8m8 0h1m-9 0h-1" />
                                <path d="M8 14v.01" />
                                <path d="M8 17v.01" />
                                <path d="M12 13.99v.01" />
                                <path d="M12 17v.01" />
                            </>
                    },
                    {
                        'name': 'administration',
                        'icon':
                            <>
                                <path d="M12.5 19h-7.5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3" />
                                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M19.001 15.5v1.5" />
                                <path d="M19.001 21v1.5" />
                                <path d="M22.032 17.25l-1.299 .75" />
                                <path d="M17.27 20l-1.3 .75" />
                                <path d="M15.97 17.25l1.3 .75" />
                                <path d="M20.733 20l1.3 .75" />
                            </>
                    }
                ]
            },
            {
                'title': 'executive', // TEAM - EXECUTIVE SECTOR
                'list': [
                    {
                        'name': 'team-leader',
                        'icon':
                            <>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                                <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" />
                            </>
                    },
                    {
                        'name': 'sys-admin-dba-senior',
                        'icon':
                            <>
                                <path d="M12 12.75m-4 0a4 1.75 0 1 0 8 0a4 1.75 0 1 0 -8 0" />
                                <path d="M8 12.5v3.75c0 .966 1.79 1.75 4 1.75s4 -.784 4 -1.75v-3.75" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </>
                    },
                    {
                        'name': 'sys-admin-dba',
                        'icon':
                            <>
                                <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                <path d="M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5" />
                                <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M18 14.5v1.5" />
                                <path d="M18 20v1.5" />
                                <path d="M21.032 16.25l-1.299 .75" />
                                <path d="M16.27 19l-1.3 .75" />
                                <path d="M14.97 16.25l1.3 .75" />
                                <path d="M19.733 19l1.3 .75" />
                                <path d="M7 8v.01" />
                                <path d="M7 16v.01" />
                            </>
                    },
                    {
                        'name': 'cloud-engineer',
                        'icon':
                            <>
                                <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
                            </>
                    },
                    {
                        'name': 'developer',
                        'icon':
                            <>
                                <path d="M7 8l-4 4l4 4" />
                                <path d="M17 8l4 4l-4 4" />
                                <path d="M14 4l-4 16" />
                            </>
                    },
                    {
                        'name': 'support',
                        'icon':
                            <>
                                <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                                <path d="M18 19c0 1.657 -2.686 3 -6 3" />
                                <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                                <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
                            </>
                    }
                ]
            }
        ]
    },
    {
        'section': 'contact', // CONTACT
        'parts': [
            {
                'title': 'form', // CONTACT - FORM
                'list': [
                    {
                        'name': 'name',
                        'icon':
                            <>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </>
                    },
                    {
                        'name': 'email',
                        'icon':
                            <>
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </>
                    },
                    {
                        'name': 'phone',
                        'icon':
                            <>
                                <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
                                <path d="M11 4h2" />
                                <path d="M12 17v.01" />
                            </>
                    },
                    {
                        'name': 'services',
                        'icon':
                            <>
                                <path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                <path d="M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0" />
                            </>
                    },
                    {
                        'name': 'message',
                        'icon':
                            <>
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                            </>
                    }
                ]
            },
            {
                'title': 'buttons', // CONTACT - BUTTONS
                'list': [
                    {
                        'name': 'arrow-left',
                        'icon':
                            <>
                                <path d="M15 6l-6 6l6 6" />
                            </>
                    },
                    {
                        'name': 'arrow-right',
                        'icon':
                            <>
                                <path d="M9 6l6 6l-6 6" />
                            </>
                    }
                ]
            }
        ]
    },
    {
        'section': 'services',
        'list': [
            {
                'name': 'outsourcing',
                'icon':
                    <>
                        <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
                        <path d="M18.37 7.16l0 .01" />
                        <path d="M13 19.94l0 .01" />
                        <path d="M16.84 18.37l0 .01" />
                        <path d="M19.37 15.1l0 .01" />
                        <path d="M19.94 11l0 .01" />
                    </>
            },
            {
                'name': 'development',
                'icon':
                    <>
                        <path d="M7 8l-4 4l4 4" />
                        <path d="M17 8l4 4l-4 4" />
                        <path d="M14 4l-4 16" />
                    </>
            },
            {
                'name': 'devops',
                'icon':
                    <>
                        <path d="M9.828 9.172a4 4 0 1 0 0 5.656a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828" />
                    </>
            }
        ]
    },
    {
        'section': 'footer',
        'list': [
            {
                'name': 'ubication',
                'icon':
                    <>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </>
            }
        ]
    }
]

// FUNTION TO GET ICONS

export const getIcons = (section, part, name) => {
    const sectionIcons = icons.find(item => item.section === section)
    if (part === undefined) return sectionIcons.list.find(item => item.name === name).icon
    else if (name === undefined) return sectionIcons.parts.find(item => item.title === part).list
    return sectionIcons.parts.find(item => item.title === part).list.find(item => item.name === name).icon
}