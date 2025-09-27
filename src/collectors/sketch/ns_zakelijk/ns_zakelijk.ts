
import { SketchCollector } from '../../sketchCollector';

export class NsZakelijkCollector extends SketchCollector {

    static CONFIG = {
        id: "ns_zakelijk",
        name: "NS Zakelijk",
        description: "i18n.collectors.ns_zakelijk.description",
        version: "0",
        website: "https://www.ns.nl/mijnnszakelijk/login?15",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33047.jpg",
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
        entryUrl: "https://www.ns.nl/mijnnszakelijk/login?15",
    }

    constructor() {
        super(NsZakelijkCollector.CONFIG);
    }
}
