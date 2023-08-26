import { writable } from 'svelte/store';

export const selectedTeam = writable(0);

export const dataStore = writable({
    sortColumn: '',
    sortDirection: 'asc',
  });