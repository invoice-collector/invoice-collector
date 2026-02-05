
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SteilEnergieGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "steil_energie_gmbh",
        name: "Steil Energie GmbH",
        description: "i18n.collectors.steil_energie_gmbh.description",
        version: "0",
        website: "https://portal.steil-energie.de/aviacard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1811531.jpg",
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
        loginUrl: "https://portal.steil-energie.de/aviacard/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SteilEnergieGmbhCollector.CONFIG);
    }
}
