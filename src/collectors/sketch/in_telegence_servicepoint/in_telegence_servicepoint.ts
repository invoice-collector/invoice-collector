
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InTelegenceServicepointCollector extends SketchCollector {

    static CONFIG = {
        id: "in_telegence_servicepoint",
        name: "IN-telegence Servicepoint",
        description: "i18n.collectors.in_telegence_servicepoint.description",
        version: "0",
        website: "https://www.in-servicepoint.net/sp/files.iface",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103572.jpg",
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
        loginUrl: "https://www.in-servicepoint.net/sp/files.iface",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InTelegenceServicepointCollector.CONFIG);
    }
}
