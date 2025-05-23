export const themes = {
  default: {
    id: "default",
    name: "Default",
    icon: "🎨",
    colors: {
      primary: "from-blue-500 to-green-500",
      secondary: "green-600",
      accent: "cyan-600",
      background: "bg-white",
      cardBg: "bg-white",
      buttonBg: "bg-green-500",
      buttonHover: "hover:bg-green-600",
      tableBg: "bg-green-600",
      text: "text-gray-800",
      headerText: "text-green-500",
      secondaryText: "text-cyan-600",
      navbarBg: "from-blue-900 via-purple-900 to-indigo-900",
      footerBg: "bg-gray-800",
      footerText: "text-white",
      borderHover: "focus:ring-green-400",
    },
    animation: {
      enter: "animate-fade-in",
      button: "hover:scale-105",
      transition: "transition-all duration-300",
    },
  },
  frostbyte: {
    id: "frostbyte",
    name: "Frostbyte",
    icon: "🧊",
    colors: {
      primary: "from-blue-600 to-blue-400",
      secondary: "blue-700",
      accent: "sky-400",
      background: "bg-slate-100",
      cardBg: "bg-white/80 backdrop-blur-sm",
      buttonBg: "bg-blue-500",
      buttonHover: "hover:bg-blue-600",
      tableBg: "bg-blue-600",
      text: "text-slate-800",
      headerText: "text-blue-600",
      secondaryText: "text-sky-600",
      navbarBg: "from-slate-900 via-blue-900 to-slate-800",
      footerBg: "bg-slate-800",
      footerText: "text-sky-200",
      borderHover: "focus:ring-blue-400",
    },
    animation: {
      enter: "animate-frost-fade-in",
      button: "hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30",
      transition: "transition-all duration-500 ease-in-out",
    },
  },
  sunsetBliss: {
    id: "sunsetBliss",
    name: "Sunset Bliss",
    icon: "🌇",
    colors: {
      primary: "from-orange-500 to-pink-500",
      secondary: "orange-600",
      accent: "amber-500",
      background: "bg-amber-50",
      cardBg: "bg-white/80 backdrop-blur-sm",
      buttonBg: "bg-orange-500",
      buttonHover: "hover:bg-orange-600",
      tableBg: "bg-orange-600",
      text: "text-amber-900",
      headerText: "text-orange-600",
      secondaryText: "text-amber-600",
      navbarBg: "from-amber-800 via-orange-500 to-pink-500",
      footerBg: "bg-amber-900",
      footerText: "text-amber-100",
      borderHover: "focus:ring-orange-400",
    },
    animation: {
      enter: "animate-sunset-slide-up",
      button: "hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50",
      transition: "transition-all duration-500 ease-out",
    },
  },
  cyberNight: {
    id: "cyberNight",
    name: "CyberNight",
    icon: "🖤",
    colors: {
      primary: "from-gray-900 to-teal-500",
      secondary: "teal-500",
      accent: "indigo-400",
      background: "bg-gray-900",
      cardBg: "bg-gray-800/90 backdrop-blur-lg border border-gray-700",
      buttonBg: "bg-teal-600",
      buttonHover: "hover:bg-teal-700",
      tableBg: "bg-gray-800",
      text: "text-gray-300",
      headerText: "text-teal-400",
      secondaryText: "text-indigo-400",
      navbarBg: "from-gray-900 via-gray-800 to-teal-900",
      footerBg: "bg-black",
      footerText: "text-teal-300",
      borderHover: "focus:ring-teal-500",
    },
    animation: {
      enter: "animate-cyber-pulse",
      button: "hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30",
      transition: "transition-all duration-300 ease-in",
    },
  },
  redRoses: {
    id: "redRoses",
    name: "Red Roses",
    icon: "🌹",
    colors: {
      primary: "from-red-600 to-pink-300",
      secondary: "red-700",
      accent: "pink-200",
      background: "bg-red-50",
      cardBg: "bg-white/90 backdrop-blur-sm border border-red-100",
      buttonBg: "bg-red-600",
      buttonHover: "hover:bg-red-700",
      tableBg: "bg-red-700",
      text: "text-gray-700",
      headerText: "text-red-600",
      secondaryText: "text-red-400",
      navbarBg: "from-red-900 via-red-800 to-red-700",
      footerBg: "bg-red-800",
      footerText: "text-red-50",
      borderHover: "focus:ring-red-400",
    },
    animation: {
      enter: "animate-roses-bloom",
      button: "hover:scale-105 hover:shadow-lg hover:shadow-red-400/30 animate-subtle-pulse",
      transition: "transition-all duration-700 ease-in-out",
    },
  },
  redGold: {
    id: "redGold",
    name: "Royal Red Gold",
    icon: "👑",
    colors: {
      primary: "from-yellow-500 to-red-600",
      secondary: "yellow-600",
      accent: "yellow-400",
      background: "bg-gradient-to-br from-red-900/5 to-yellow-700/10",
      cardBg: "bg-white/80 backdrop-blur-sm border border-yellow-200 shadow-xl shadow-yellow-900/10",
      buttonBg: "bg-gradient-to-r from-yellow-500 to-red-500",
      buttonHover: "hover:from-yellow-600 hover:to-red-600",
      tableBg: "bg-red-800",
      text: "text-gray-800",
      headerText: "text-yellow-600",
      secondaryText: "text-red-500",
      navbarBg: "from-red-900 via-red-800 to-yellow-900",
      footerBg: "bg-gradient-to-r from-red-900 to-yellow-900",
      footerText: "text-yellow-100",
      borderHover: "focus:ring-yellow-500",
    },
    animation: {
      enter: "animate-royal-reveal",
      button: "hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30",
      transition: "transition-all duration-500 ease-out",
    },
  },
  raining: {
    id: "raining",
    name: "Rainy Day",
    icon: "🌧️",
    colors: {
      primary: "from-blue-700 to-indigo-600",
      secondary: "blue-700",
      accent: "blue-300",
      background: "bg-slate-200",
      cardBg: "bg-white/70 backdrop-blur-md border border-slate-300 shadow-lg",
      buttonBg: "bg-blue-600",
      buttonHover: "hover:bg-blue-700",
      tableBg: "bg-slate-700",
      text: "text-slate-700",
      headerText: "text-blue-700",
      secondaryText: "text-slate-500",
      navbarBg: "from-slate-800 via-blue-900 to-slate-700",
      footerBg: "bg-slate-800",
      footerText: "text-slate-300",
      borderHover: "focus:ring-blue-500",
    },
    animation: {
      enter: "animate-raindrop-fall",
      button: "hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 animate-rain-ripple",
      transition: "transition-all duration-400 ease-in",
    },
  }
};