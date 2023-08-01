import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectUser = state => state.auth.user.name;

export const selectEmail = state => state.auth.user.email;

export const selectRefresh = state => state.auth.isRefreshing;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectErrorUser = state => state.auth.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
