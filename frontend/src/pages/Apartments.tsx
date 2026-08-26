import { useEffect, useState } from 'react';
import { getApartments } from '../api/apartmentApi';
import {type Apartment } from '../types/Apartment.ts';
import './Apartments.css';

const Apartments = () => {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getApartments()
            .then((res) => setApartments(res.data))
            .catch(() => setError("Erreur lors du chargement des appartements"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="apartments-status">Chargement...</div>;
    if (error) return <div className="apartments-status error">{error}</div>;

    return (
        <div className="apartments">
            <h1>Mes biens immobiliers</h1>
            {apartments.length === 0 ? (
                <p className="apartments-empty">Aucun bien enregistré pour le moment.</p>
            ) : (
                <div className="apartments-grid">
                    {apartments.map((apt) => (
                        <div key={apt.id} className="apartment-card">
                            <h2>{apt.address}</h2>
                            <p>{apt.city}</p>
                            <div className="apartment-details">
                                <span>{apt.squareMeters} m²</span>
                                <span>{apt.purchasePrice.toLocaleString()} €</span>
                                <span>Construit en {apt.constructionYear}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Apartments;