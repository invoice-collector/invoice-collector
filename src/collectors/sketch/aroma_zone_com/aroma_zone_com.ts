
import { SketchCollector } from '../../sketchCollector';

export class AromaZoneComCollector extends SketchCollector {

    static CONFIG = {
        id: "aroma_zone_com",
        name: "Aroma-zone.com",
        description: "i18n.collectors.aroma_zone_com.description",
        version: "0",
        website: "https://www.aroma-zone.com/customer/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116107.jpg",
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
        entryUrl: "https://www.aroma-zone.com/customer/account/login",
    }

    constructor() {
        super(AromaZoneComCollector.CONFIG);
    }
}
