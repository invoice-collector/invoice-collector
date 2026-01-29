
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SdvServicepartnerDerVersicherungsmaklerAgCollector extends SketchCollector {

    static CONFIG = {
        id: "sdv_servicepartner_der_versicherungsmakler_ag",
        name: "SDV Servicepartner der Versicherungsmakler AG",
        description: "i18n.collectors.sdv_servicepartner_der_versicherungsmakler_ag.description",
        version: "0",
        website: "https://portal.sdv.ag:8443/faces/jsf/masken/mitarbeiter.jsp?conversationContext=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777324.jpg",
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
        loginUrl: "https://portal.sdv.ag:8443/faces/jsf/masken/mitarbeiter.jsp?conversationContext=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SdvServicepartnerDerVersicherungsmaklerAgCollector.CONFIG);
    }
}
