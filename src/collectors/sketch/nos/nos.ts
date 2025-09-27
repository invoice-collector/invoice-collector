
import { SketchCollector } from '../../sketchCollector';

export class NosCollector extends SketchCollector {

    static CONFIG = {
        id: "nos",
        name: "NOS",
        description: "i18n.collectors.nos.description",
        version: "0",
        website: "https://login.nos.pt/o/IVLJg6cTEpXit2RLo1kOfpMEmzzFIMMJ/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9453.jpg",
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
        entryUrl: "https://login.nos.pt/o/IVLJg6cTEpXit2RLo1kOfpMEmzzFIMMJ/Login",
    }

    constructor() {
        super(NosCollector.CONFIG);
    }
}
