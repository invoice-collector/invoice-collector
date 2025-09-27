
import { SketchCollector } from '../../sketchCollector';

export class AvayaCollector extends SketchCollector {

    static CONFIG = {
        id: "avaya",
        name: "Avaya",
        description: "i18n.collectors.avaya.description",
        version: "0",
        website: "https://xbp1-1.avaya.com/portal/apo.nsf/apo2data?open&tab=30.10#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/533882.jpg",
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
        entryUrl: "https://xbp1-1.avaya.com/portal/apo.nsf/apo2data?open&tab=30.10#",
    }

    constructor() {
        super(AvayaCollector.CONFIG);
    }
}
