
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeNeuburgAnDerDonauCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_neuburg_an_der_donau",
        name: "STADTWERKE NEUBURG - AN DER DONAU",
        description: "i18n.collectors.stadtwerke_neuburg_an_der_donau.description",
        version: "0",
        website: "https://www.stw-nd.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/789368.jpg",
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
        loginUrl: "https://www.stw-nd.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeNeuburgAnDerDonauCollector.CONFIG);
    }
}
