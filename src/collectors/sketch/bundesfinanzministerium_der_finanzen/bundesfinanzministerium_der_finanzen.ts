
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BundesfinanzministeriumDerFinanzenCollector extends SketchCollector {

    static CONFIG = {
        id: "bundesfinanzministerium_der_finanzen",
        name: "Bundesfinanzministerium der Finanzen",
        description: "i18n.collectors.bundesfinanzministerium_der_finanzen.description",
        version: "0",
        website: "https://www.formulare-bfinv.de/ffw/form/display.do?%24context=47338A5590A07F201351",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881874.jpg",
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
        loginUrl: "https://www.formulare-bfinv.de/ffw/form/display.do?%24context=47338A5590A07F201351",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BundesfinanzministeriumDerFinanzenCollector.CONFIG);
    }
}
