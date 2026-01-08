
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeItzehoeRechnungsportalCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_itzehoe_rechnungsportal",
        name: "Stadtwerke Itzehoe Rechnungsportal",
        description: "i18n.collectors.stadtwerke_itzehoe_rechnungsportal.description",
        version: "0",
        website: "https://service.iz-kom.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986225.jpg",
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
        loginUrl: "https://service.iz-kom.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeItzehoeRechnungsportalCollector.CONFIG);
    }
}
