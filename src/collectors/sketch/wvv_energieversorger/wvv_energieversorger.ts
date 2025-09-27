
import { SketchCollector } from '../../sketchCollector';

export class WvvEnergieversorgerCollector extends SketchCollector {

    static CONFIG = {
        id: "wvv_energieversorger",
        name: "WVV Energieversorger",
        description: "i18n.collectors.wvv_energieversorger.description",
        version: "0",
        website: "https://onlineservice.wvv.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2201642.jpg",
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
        entryUrl: "https://onlineservice.wvv.de/",
    }

    constructor() {
        super(WvvEnergieversorgerCollector.CONFIG);
    }
}
