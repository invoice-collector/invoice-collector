
import { SketchCollector } from '../../sketchCollector';

export class CmTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "cm_telecom",
        name: "CM Telecom",
        description: "i18n.collectors.cm_telecom.description",
        version: "0",
        website: "https://login.cmtelecom.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22158.jpg",
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
        entryUrl: "https://login.cmtelecom.com",
    }

    constructor() {
        super(CmTelecomCollector.CONFIG);
    }
}
