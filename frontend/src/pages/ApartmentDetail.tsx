import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getApartmentById} from '../api/apartmentApi';
import {type Apartment} from '../types/Apartment.ts';
import './Apartments.css';

const ApartmentDetail = () => {
    const {id} = useParams<{ id: string }>();
    const [apartment, setApartment] = useState<Apartment | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        getApartmentById(id)
            .then((res) => setApartment(res.data))
            .catch(() => setError('Failed to load apartment'))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="apartments-status">Loading...</div>;
    if (error) return <div className="apartments-status error">{error}</div>;
    if (!apartment) return <div className="apartments-status error">Apartment not found</div>;

    return (
        <div className="apartments">
            <Link to="/apartments" className="back-link">&larr; Back to list</Link>
            <h1>{apartment.city} · {apartment.squareMeters} m² · {apartment.address}</h1>
            <div className="apartment-details">
                {apartment.purchasePrice != null && (
                    <span>Purchase price: {apartment.purchasePrice.toLocaleString()} €</span>
                )}
                {apartment.constructionYear != null && (
                    <span>Built in {apartment.constructionYear}</span>
                )}
                {apartment.downPayment != null && (
                    <span>Down payment: {apartment.downPayment.toLocaleString()} €</span>
                )}
                {apartment.notaryFees != null && (
                    <span>Notary fees: {apartment.notaryFees.toLocaleString()} €</span>
                )}
                {apartment.brokerFees != null && (
                    <span>Broker fees: {apartment.brokerFees.toLocaleString()} €</span>
                )}
                {apartment.fileFees != null && (
                    <span>File fees: {apartment.fileFees.toLocaleString()} €</span>
                )}
                {apartment.guaranteeFees != null && (
                    <span>Guarantee fees: {apartment.guaranteeFees.toLocaleString()} €</span>
                )}
            </div>
        </div>
    );
};

export default ApartmentDetail;