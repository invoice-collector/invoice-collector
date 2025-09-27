
import { SketchCollector } from '../../sketchCollector';

export class TdcDkCollector extends SketchCollector {

    static CONFIG = {
        id: "tdc_dk",
        name: "TDC.dk",
        description: "i18n.collectors.tdc_dk.description",
        version: "0",
        website: "https://profil.yousee.dk/?context=selfservice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9561.jpg",
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
        entryUrl: "https://profil.yousee.dk/?context=selfservice",
    }

    constructor() {
        super(TdcDkCollector.CONFIG);
    }
}
