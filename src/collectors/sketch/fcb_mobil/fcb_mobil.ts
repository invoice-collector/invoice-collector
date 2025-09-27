
import { SketchCollector } from '../../sketchCollector';

export class FcbMobilCollector extends SketchCollector {

    static CONFIG = {
        id: "fcb_mobil",
        name: "FCB MOBIL",
        description: "i18n.collectors.fcb_mobil.description",
        version: "0",
        website: "https://kundenportal.fcbayernmobil.de/fcbayern-csc/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/784198.jpg",
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
        entryUrl: "https://kundenportal.fcbayernmobil.de/fcbayern-csc/login",
    }

    constructor() {
        super(FcbMobilCollector.CONFIG);
    }
}
