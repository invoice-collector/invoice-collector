
import { SketchCollector } from '../../sketchCollector';

export class ProfiOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "profi_online",
        name: "profi-Online",
        description: "i18n.collectors.profi_online.description",
        version: "0",
        website: "https://foerderportal.bund.de/profionline/vorhabenList.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102642.jpg",
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
        entryUrl: "https://foerderportal.bund.de/profionline/vorhabenList.do",
    }

    constructor() {
        super(ProfiOnlineCollector.CONFIG);
    }
}
