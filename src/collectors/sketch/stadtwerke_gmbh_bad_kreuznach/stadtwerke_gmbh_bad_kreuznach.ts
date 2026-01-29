
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeGmbhBadKreuznachCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_gmbh_bad_kreuznach",
        name: "Stadtwerke GmbH Bad Kreuznach",
        description: "i18n.collectors.stadtwerke_gmbh_bad_kreuznach.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-kh.de/powercommerce/csit3/fo/portal/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723356.jpg",
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
        loginUrl: "https://kundenportal.stadtwerke-kh.de/powercommerce/csit3/fo/portal/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeGmbhBadKreuznachCollector.CONFIG);
    }
}
