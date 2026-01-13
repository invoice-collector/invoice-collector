
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TravantoFerienwohnungenGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "travanto_ferienwohnungen_gmbh",
        name: "Travanto Ferienwohnungen GmbH",
        description: "i18n.collectors.travanto_ferienwohnungen_gmbh.description",
        version: "0",
        website: "https://login.travanto.de/vermieter/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2554609.jpg",
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
        loginUrl: "https://login.travanto.de/vermieter/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TravantoFerienwohnungenGmbhCollector.CONFIG);
    }
}
