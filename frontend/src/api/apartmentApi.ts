import axios from 'axios';
import {type Apartment} from '../types/Apartment.ts';

const API_URL = 'http://localhost:8080/api/apartments';

export const getApartments = () => axios.get<Apartment[]>(API_URL);
export const createApartment = (apartment: Omit<Apartment, 'id'>) => axios.post<Apartment>(API_URL, apartment);
export const getApartmentById = (id: string | number) =>
    axios.get<Apartment>(`${API_URL}/${id}`);