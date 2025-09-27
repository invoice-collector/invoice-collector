
import { SketchCollector } from '../../sketchCollector';

export class ZadarmaCollector extends SketchCollector {

    static CONFIG = {
        id: "zadarma",
        name: "Zadarma",
        description: "i18n.collectors.zadarma.description",
        version: "0",
        website: "https://my.zadarma.com/statistics/topup/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/664272.jpg",
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
        entryUrl: "https://my.zadarma.com/statistics/topup/",
    }

    constructor() {
        super(ZadarmaCollector.CONFIG);
    }
}
