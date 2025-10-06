export const initialStore = () => {
  return {
    message: null,
    data: {
      people: [],
      vehicles: [],
      planets: []
    },
    favorites: [],
    bookeds: [],
    detail: {}
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'SET_ALL_DATA':
      return {
        ...store,
        data: action.payload
      }

    case 'TOGGLE_FAVORITE':
      const item = action.payload;
      const isFavorite = store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

      if (isFavorite) {
        return {
          ...store,
          favorites: store.favorites.filter(fav => fav.uid !== item.uid || fav.type !== item.type),
        }
      } else {
        return {
          ...store,
          favorites: [...store.favorites, item],
        }
      }
      
    case 'TOGGLE_BOOKED':
      const itemToBook = action.payload;
      const isBooked = store.bookeds.some(
        book => book.uid === itemToBook.uid && book.type === itemToBook.type
      )

      if (isBooked) {
        return {
          ...store,
          bookeds: store.bookeds.filter(
            book => book.uid !== itemToBook.uid || book.type !== itemToBook.type
          ),
        }
      } else {
        return {
          ...store,
          bookeds: [...store.bookeds, itemToBook],
        }
      }

    case 'SET_CURRENT_ITEM_DETAIL':
      return {
        ...store,
        detail: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
