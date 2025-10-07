
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IpDirectionsCollector extends SketchCollector {

    static CONFIG = {
        id: "ip_directions",
        name: "IP Directions",
        description: "i18n.collectors.ip_directions.description",
        version: "0",
        website: "https://extranet.ipdirections.net/UI/Login/LoginPage.aspx?returnUrl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1119554.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://extranet.ipdirections.net/UI/Login/LoginPage.aspx?returnUrl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IpDirectionsCollector.CONFIG);
    }
}
