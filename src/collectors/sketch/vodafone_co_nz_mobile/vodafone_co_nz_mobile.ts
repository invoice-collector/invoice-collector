
import { SketchCollector } from '../../sketchCollector';

export class VodafoneCoNzMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_co_nz_mobile",
        name: "Vodafone.co.nz - Mobile",
        description: "i18n.collectors.vodafone_co_nz_mobile.description",
        version: "0",
        website: "https://www.vodafone.co.nz/#sign-in#sign-in-mobile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67804.jpg",
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
        entryUrl: "https://www.vodafone.co.nz/#sign-in#sign-in-mobile",
    }

    constructor() {
        super(VodafoneCoNzMobileCollector.CONFIG);
    }
}
