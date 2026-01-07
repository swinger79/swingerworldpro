export const MAIN_MENU = [
  { id: 'inicio', label: 'Inicio', icon: 'Home', path: '/inicio' },
  { id: 'amigos', label: 'Amigos', icon: 'Users', path: '/amigos', submenu: [
      { id: 'todos-amigos', label: 'Todos mis amigos' },
      { id: 'favoritos', label: 'Mis favoritos' },
      { id: 'solicitudes', label: 'Solicitudes de amistad', badge: true }
    ]
  },
  { id: 'gente', label: 'Gente', icon: 'Search', path: '/gente' },
  { id: 'match', label: 'Match', icon: 'Heart', path: '/match' },
  { id: 'radar', label: 'Radar', icon: 'Radar', path: '/radar' },
  { id: 'citas', label: 'Citas', icon: 'Calendar', path: '/citas' },
  { id: 'fiestas', label: 'Fiestas', icon: 'PartyPopper', path: '/fiestas' },
  { id: 'clubes', label: 'Clubes', icon: 'Building', path: '/clubes' },
  { id: 'foro', label: 'Foro', icon: 'MessageSquare', path: '/foro' }
];

export const USER_MENU = [
  { id: 'perfil', label: 'Tu Perfil', icon: 'User' },
  { id: 'editar-perfil', label: 'Editar perfil', icon: 'Settings' },
  { id: 'mensajes', label: 'Mensajes', icon: 'Mail', badge: true },
  { id: 'avisos', label: 'Avisos', icon: 'Bell', badge: true },
  { id: 'cerrar-sesion', label: 'Cerrar sesión', icon: 'LogOut', action: 'logout' }
];

export default MAIN_MENU;
