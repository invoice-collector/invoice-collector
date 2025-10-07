
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HgkHotelUndGastronomieKaufEgCollector extends SketchCollector {

    static CONFIG = {
        id: "hgk_hotel_und_gastronomie_kauf_eg",
        name: "HGK - Hotel- und Gastronomie-Kauf eG",
        description: "i18n.collectors.hgk_hotel_und_gastronomie_kauf_eg.description",
        version: "0",
        website: "https://www.h-g-k.de/belege_letzter_monat/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/752968.jpg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.h-g-k.de/belege_letzter_monat/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HgkHotelUndGastronomieKaufEgCollector.CONFIG);
    }
}
