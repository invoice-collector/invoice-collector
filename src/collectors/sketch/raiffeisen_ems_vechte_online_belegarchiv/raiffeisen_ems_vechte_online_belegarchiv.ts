
import { SketchCollector } from '../../sketchCollector';

export class RaiffeisenEmsVechteOnlineBelegarchivCollector extends SketchCollector {

    static CONFIG = {
        id: "raiffeisen_ems_vechte_online_belegarchiv",
        name: "Raiffeisen Ems-Vechte - Online Belegarchiv",
        description: "i18n.collectors.raiffeisen_ems_vechte_online_belegarchiv.description",
        version: "0",
        website: "https://archiv.raiffeisen-ems-vechte.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/97577.jpg",
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
        entryUrl: "https://archiv.raiffeisen-ems-vechte.de/",
    }

    constructor() {
        super(RaiffeisenEmsVechteOnlineBelegarchivCollector.CONFIG);
    }
}
