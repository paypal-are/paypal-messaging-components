/** @jsx h */
import { h } from 'preact';

const Disclaimer = ({ terms }) => {
    if (
        !terms.error &&
        terms.formattedMinAmount &&
        terms.formattedMaxAmount &&
        terms.offers &&
        terms.offers.length > 0
    ) {
        const minAmount = terms.formattedMinAmount.split(',')[0];
        const maxAmount = terms.formattedMaxAmount.split(',')[0];
        const [offer] = terms.offers;
        const disclosure =
            Number(offer.apr.replace(/[,.]/g, '')) === 0
                ? `Vorbehaltlich Kreditwürdigkeitsprüfung, nur im Angebotszeitraum und nur für Transaktionen in Euro. Ab einem Bestellwert von ${minAmount} EUR bis ${maxAmount} EUR mit einem effektiven Jahreszins von ${offer.apr}% für Darlehensverträge die im Angebotszeitraum abgeschlossen werden, Laufzeit ${offer.term} Monate. Der Kreditgeber ist PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg. Als Verbraucher steht Ihnen gemäß § 514 BGB bei unentgeltlichen Darlehensverträgen ab einem Finanzierungsbetrag von 200,00 EUR ein Widerrufsrecht zu. Anspruchsberechtigte Kunden müssen PayPal ein SEPA Lastschriftmandat erteilen sowie über ein deutsches PayPal Privat-Konto mit bestätigtem Bankkonto als Zahlungsquelle verfügen. `
                : `Anspruchsberechtigte Kunden müssen PayPal ein SEPA-Lastschriftmandat erteilen sowie über ein deutsches PayPal-Privatkonto mit bestätigtem Bankkonto als Zahlungsquelle verfügen. Angaben gemäß § 6a PAngV: effektiver Jahreszins ${offer.apr}%, fester Sollzinssatz ${offer.nominalRate}%, Nettodarlehensbetrag von ${minAmount} EUR bis ${maxAmount} EUR, Laufzeit ${offer.term} Monate. Bonität vorausgesetzt. Kreditgeber: PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22–24 Boulevard Royal, L-2449 Luxembourg. Repräsentatives Beispiel gem. § 6a Abs. 4 PAngV: Nettodarlehensbetrag 1.000,00 EUR, Gesamtbetrag 1.052,54 EUR, monatl. Rate 87,71 EUR, 12 Raten, Laufzeit 12 Monate, fester Sollzinssatz 9,56%, effektiver Jahreszins 9,99%. `;

        return (
            <p className="content__disclosure" id="modal-disclosure">
                {disclosure}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.paypal.com/de/webapps/mpp/paypal-instalments"
                >
                    Mehr erfahren
                </a>
            </p>
        );
    }

    return (
        <p className="content__disclosure" id="modal-generic-disclosure">
            Der Kreditgeber ist die PayPal (Europe) S.à r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg.
            Dieses Angebot gilt nur für Transaktionen in Euro und vorbehaltlich Kreditwürdigkeitsprüfung. Es gelten
            Warenkorbwertbeschränkungen. Anspruchsberechtigte Kunden müssen PayPal ein SEPA-Lastschriftmandat erteilen
            sowie über ein deutsches PayPal-Privatkonto mit bestätigtem Bankkonto als Zahlungsquelle verfügen.
        </p>
    );
};

export default Disclaimer;
