
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HirmerGrosseGrossenCollector extends SketchCollector {

    static CONFIG = {
        id: "hirmer_grosse_grossen",
        name: "Hirmer grosse Grossen",
        description: "i18n.collectors.hirmer_grosse_grossen.description",
        version: "0",
        website: "https://www.hirmer-grosse-groessen.de/bestellhistorie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88530.jpg",
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
        loginUrl: "https://www.hirmer-grosse-groessen.de/bestellhistorie/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HirmerGrosseGrossenCollector.CONFIG);
    }
}
