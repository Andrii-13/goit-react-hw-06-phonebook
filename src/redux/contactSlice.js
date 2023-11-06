import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: [],
  },
  // Об'єкт редюсерів 
  // будемо перераховувати методи які в майбутньому будемо використовувати
  reducers: {
    addContacts(state, action) {
      state.contacts.push({
        id: nanoid(5),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.contacts = action.payload;
    },
  },
});

// Генератори екшенів
//щоб запустити додавання треба створити екшн/ передати в UI/ викликати там екшн
// і тоді редюсер зрозуміє що саме ця подія відбулась
//звертаємось до нашого слайса і через крапку викликаємо екшини (створюються автоматично)
export const { addContacts, deleteContact} = contactSlice.actions;

// достаємо редюсер. саме його підключаємо в стор
// contactSlice.reducer - кореневий редюсер - який формується із нашого reducers
export const contactReducer = contactSlice.reducer;
