
import { SketchCollector } from '../../sketchCollector';

export class MontDeMarsanAggloEauCollector extends SketchCollector {

    static CONFIG = {
        id: "mont_de_marsan_agglo_eau",
        name: "Mont de Marsan Agglo Eau",
        description: "i18n.collectors.mont_de_marsan_agglo_eau.description",
        version: "0",
        website: "https://portail-web.montdemarsanagglo-eau.fr/wp/showDisplayBills.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4650371.jpg",
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
        entryUrl: "https://portail-web.montdemarsanagglo-eau.fr/wp/showDisplayBills.action",
    }

    constructor() {
        super(MontDeMarsanAggloEauCollector.CONFIG);
    }
}
