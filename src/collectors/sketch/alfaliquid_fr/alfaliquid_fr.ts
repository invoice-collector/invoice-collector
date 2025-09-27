
import { SketchCollector } from '../../sketchCollector';

export class AlfaliquidFrCollector extends SketchCollector {

    static CONFIG = {
        id: "alfaliquid_fr",
        name: "Alfaliquid.fr",
        description: "i18n.collectors.alfaliquid_fr.description",
        version: "0",
        website: "https://www.alfaliquid.com/customer/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116066.jpg",
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
        entryUrl: "https://www.alfaliquid.com/customer/account/login",
    }

    constructor() {
        super(AlfaliquidFrCollector.CONFIG);
    }
}
