
import { SketchCollector } from '../../sketchCollector';

export class EfbElektronikCollector extends SketchCollector {

    static CONFIG = {
        id: "efb_elektronik",
        name: "EFB-Elektronik",
        description: "i18n.collectors.efb_elektronik.description",
        version: "0",
        website: "https://www.efb-elektronik.de/documentList/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2584139.jpg",
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
        entryUrl: "https://www.efb-elektronik.de/documentList/invoice",
    }

    constructor() {
        super(EfbElektronikCollector.CONFIG);
    }
}
