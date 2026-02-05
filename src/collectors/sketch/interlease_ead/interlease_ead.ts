
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InterleaseEadCollector extends SketchCollector {

    static CONFIG = {
        id: "interlease_ead",
        name: "Interlease EAD",
        description: "i18n.collectors.interlease_ead.description",
        version: "0",
        website: "https://interlease.ws/NEpNOGc1aG00UjM2b3ZvUjVWbzVHSjFKckpnMjFzR3NlN0JLVDA4MG9kRT0=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1252920.jpg",
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
        loginUrl: "https://interlease.ws/NEpNOGc1aG00UjM2b3ZvUjVWbzVHSjFKckpnMjFzR3NlN0JLVDA4MG9kRT0=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InterleaseEadCollector.CONFIG);
    }
}
