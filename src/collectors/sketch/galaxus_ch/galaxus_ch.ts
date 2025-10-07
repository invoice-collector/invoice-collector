
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GalaxusChCollector extends SketchCollector {

    static CONFIG = {
        id: "galaxus_ch",
        name: "Galaxus(.ch)",
        description: "i18n.collectors.galaxus_ch.description",
        version: "0",
        website: "https://id.digitecgalaxus.ch/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dimplicit.galaxus-ch%26redirect_uri%3Dhttps%253A%252F%252Fwww.galaxus.ch%252Fsignin-oidc-gax-ch%26response_type%3Did_token%26scope%3Dopenid%2520profile%2520B2B%26r",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/751020.jpg",
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
        entryUrl: "https://id.digitecgalaxus.ch/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dimplicit.galaxus-ch%26redirect_uri%3Dhttps%253A%252F%252Fwww.galaxus.ch%252Fsignin-oidc-gax-ch%26response_type%3Did_token%26scope%3Dopenid%2520profile%2520B2B%26r",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GalaxusChCollector.CONFIG);
    }
}
