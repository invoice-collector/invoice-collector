
import { SketchCollector } from '../../sketchCollector';

export class QualityhostingAgCollector extends SketchCollector {

    static CONFIG = {
        id: "qualityhosting_ag",
        name: "QualityHosting AG",
        description: "i18n.collectors.qualityhosting_ag.description",
        version: "0",
        website: "https://customer.qualityhosting.de/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8324.jpg",
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
        entryUrl: "https://customer.qualityhosting.de/Login.aspx",
    }

    constructor() {
        super(QualityhostingAgCollector.CONFIG);
    }
}
