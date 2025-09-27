
import { SketchCollector } from '../../sketchCollector';

export class HaufeServiceCenterCollector extends SketchCollector {

    static CONFIG = {
        id: "haufe_service_center",
        name: "Haufe Service Center",
        description: "i18n.collectors.haufe_service_center.description",
        version: "0",
        website: "https://account.haufe-lexware.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9660.jpg",
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
        entryUrl: "https://account.haufe-lexware.com",
    }

    constructor() {
        super(HaufeServiceCenterCollector.CONFIG);
    }
}
