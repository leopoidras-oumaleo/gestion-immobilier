import {useEffect, useState} from 'react';
import {createApartment, getApartments} from '../api/apartmentApi';
import {type Apartment} from '../types/Apartment.ts';
import './Apartments.css';

const emptyForm: Omit<Apartment, 'id'> = {
    address: undefined,
    city: undefined,
    purchasePrice: undefined,
    squareMeters: undefined,
    constructionYear: undefined,
    downPayment: undefined,
    notaryFees: undefined,
    brokerFees: undefined,
    fileFees: undefined,
    guaranteeFees: undefined,
    propertyTax: undefined,
};

const Apartments = () => {
    const [apartments, setApartments] = useState<Apartment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [showForm, setShowForm] = useState(false);
    const [newApartment, setNewApartment] = useState<Omit<Apartment, 'id'>>(emptyForm);
    const [submitting, setSubmitting] = useState(false);

    const fetchApartments = () => {
        setLoading(true);
        getApartments()
            .then((res) => setApartments(res.data))
            .catch(() => setError('Failed to load apartments'))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchApartments();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const {name, value} = e.target;
        const isTextField = name === 'address' || name === 'city';

        setNewApartment((prev) => ({
            ...prev,
            [name]: isTextField
                ? value
                : value === ''
                    ? undefined
                    : Number(value),
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        createApartment(newApartment)
            .then(() => {
                setNewApartment(emptyForm);
                setShowForm(false);
                fetchApartments();
            })
            .catch(() => setError('Failed to create apartment'))
            .finally(() => setSubmitting(false));
    };

    if (loading) return <div className="apartments-status">Loading...</div>;
    if (error) return <div className="apartments-status error">{error}</div>;

    return (
        <div className="apartments">
            <div className="apartments-header">
                <h1>My real estate properties</h1>
                <button
                    type="button"
                    className="add-button"
                    onClick={() => setShowForm((prev) => !prev)}
                >
                    {showForm ? '×' : '+'}
                </button>
            </div>

            {showForm && (
                <form className="apartment-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={newApartment.address ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={newApartment.city ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="purchasePrice"
                        placeholder="Purchase price (€)"
                        value={newApartment.purchasePrice ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="squareMeters"
                        placeholder="Square meters"
                        value={newApartment.squareMeters ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="constructionYear"
                        placeholder="Construction year"
                        value={newApartment.constructionYear ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="downPayment"
                        placeholder="Down payment (€)"
                        value={newApartment.downPayment ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="notaryFees"
                        placeholder="Notary fees (€)"
                        value={newApartment.notaryFees ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="brokerFees"
                        placeholder="Broker fees (€)"
                        value={newApartment.brokerFees ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="fileFees"
                        placeholder="File fees (€)"
                        value={newApartment.fileFees ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="guaranteeFees"
                        placeholder="Guarantee fees (€)"
                        value={newApartment.guaranteeFees ?? ''}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="propertyTax"
                        placeholder="Property tax (€)"
                        value={newApartment.propertyTax ?? ''}
                        onChange={handleChange}
                    />
                    <button type="submit" disabled={submitting}>
                        {submitting ? 'Saving...' : 'Save'}
                    </button>
                </form>
            )}

            {apartments.length === 0 ? (
                <p className="apartments-empty">No property registered yet.</p>
            ) : (
                <div className="apartments-grid">
                    {apartments.map((apt) => (
                        <div key={apt.id} className="apartment-card">
                            <h2>{apt.address}</h2>
                            <p>{apt.city}</p>
                            <div className="apartment-details">
                                {apt.squareMeters !== undefined && (
                                    <span>Square Meters: {apt.squareMeters.toLocaleString()} ²</span>
                                )}
                                {apt.purchasePrice !== undefined && (
                                    <span>Purchase Price: {apt.purchasePrice.toLocaleString()} €</span>
                                )}
                                {apt.constructionYear !== undefined && (
                                    <span>Construction Year: {apt.constructionYear.toLocaleString()}</span>
                                )}
                                {apt.downPayment !== undefined && (
                                    <span>Down payment: {apt.downPayment.toLocaleString()} €</span>
                                )}
                                {apt.notaryFees !== undefined && (
                                    <span>Notary fees: {apt.notaryFees.toLocaleString()} €</span>
                                )}
                                {apt.brokerFees !== undefined && (
                                    <span>Broker fees: {apt.brokerFees.toLocaleString()} €</span>
                                )}
                                {apt.fileFees !== undefined && (
                                    <span>File fees: {apt.fileFees.toLocaleString()} €</span>
                                )}
                                {apt.guaranteeFees !== undefined && (
                                    <span>Guarantee fees: {apt.guaranteeFees.toLocaleString()} €</span>
                                )}
                                {apt.propertyTax !== undefined && (
                                    <span>Property tax: {apt.propertyTax.toLocaleString()} €</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Apartments;