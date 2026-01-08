
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeFlensburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_flensburg",
        name: "Stadtwerke Flensburg",
        description: "i18n.collectors.stadtwerke_flensburg.description",
        version: "0",
        website: "https://www.stadtwerke-flensburg.de/kundenportal/?page=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9254.jpg",
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
        loginUrl: "https://www.stadtwerke-flensburg.de/kundenportal/?page=login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeFlensburgCollector.CONFIG);
    }
}
