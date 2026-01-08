
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeGeesthachtMediaNeuCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_geesthacht_media_neu",
        name: "Stadtwerke Geesthacht - Media NEU",
        description: "i18n.collectors.stadtwerke_geesthacht_media_neu.description",
        version: "0",
        website: "https://media-portal.stadtwerke-geesthacht.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1961418.jpg",
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
        loginUrl: "https://media-portal.stadtwerke-geesthacht.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeGeesthachtMediaNeuCollector.CONFIG);
    }
}
