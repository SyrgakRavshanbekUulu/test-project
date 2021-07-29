import ernHome from './image/ern-home.png'
import ernAction from './image/ern-action.png'
import ernProtocol from './image/ern-protocol.png'
import ernMain from './image/ern-main.jpg'
import stadionH from './image/stadion.png'
import stadionS from './image/stadion-sort.png'
import stadionV from './image/stadion-verification.png'
import stadionM from './image/stadion-main.jpg'
import floristmanM from './image/floristman.png'
import floristmanH from './image/floristman-h.png'
import floristmanP1 from './image/floristman-p1.png'
import floristmanP2 from './image/floristman-p2.png'

export const ern = {
  name: 'МВД ЕРН',
  image: {
    main: ernMain,
    home: ernHome,
    page1: ernAction,
    page2: ernProtocol,
  },
  label: {
    home: 'Проект по заказу Ген Прократуры',
    page1: 'Разные действие по протоколам',
    page2: 'Регистрации протоколов',
  },
  keys: ['typescript', 'react'],
}

export const stadion = {
  name: 'Stadion KG',
  image: {
    main: stadionM,
    home: stadionH,
    page1: stadionS,
    page2: stadionV,
  },
  label: {
    home: 'Онлайн аренда фудболных полях',
    page1: 'Возможность найти более подходящий поле',
    page2: 'Простой способ регистрации',
  },
  keys: ['javascript', 'react'],
}

export const floristman = {
  name: 'Floristman',
  image: {
    main: floristmanM,
    home: floristmanH,
    page1: floristmanP1,
    page2: floristmanP2,
  },
  label: {
    home: 'Веб приложение для магазин цветов',
    page1: 'Цветы для каждого',
    page2: 'Возможность выбрать несколько букеты',
  },
  keys: ['html', 'css', 'page-making'],
}
