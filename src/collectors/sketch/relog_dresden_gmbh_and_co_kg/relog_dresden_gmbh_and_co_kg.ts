
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RelogDresdenGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "relog_dresden_gmbh_and_co_kg",
        name: "relog Dresden GmbH & Co. KG",
        description: "i18n.collectors.relog_dresden_gmbh_and_co_kg.description",
        version: "0",
        website: "https://relog-lohn-dresden.portal-bereich.de/html/#documentsharing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779009.jpg",
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
        loginUrl: "https://relog-lohn-dresden.portal-bereich.de/html/#documentsharing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RelogDresdenGmbhAndCoKgCollector.CONFIG);
    }
}
