
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WuerthClourdServicesGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "wuerth_clourd_services_gmbh",
        name: "Wuerth Clourd Services GmbH",
        description: "i18n.collectors.wuerth_clourd_services_gmbh.description",
        version: "0",
        website: "https://my.towio.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1261689.jpg",
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
        loginUrl: "https://my.towio.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WuerthClourdServicesGmbhCollector.CONFIG);
    }
}
