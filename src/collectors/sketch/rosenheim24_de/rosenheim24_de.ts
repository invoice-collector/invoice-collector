
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Rosenheim24DeCollector extends SketchCollector {

    static CONFIG = {
        id: "rosenheim24_de",
        name: "Rosenheim24.de",
        description: "i18n.collectors.rosenheim24_de.description",
        version: "0",
        website: "https://login.user.id/login/rosenheim24-de?environmentId=536c0e5c-ad7f-4cb3-a2d8-4ae245f5bca2&flowId=0ed00af8-eaec-47fd-96b9-8e8866135cf1&utm_source=ro24_menu&utm_medium=ro24_link&utm_campaign=ro24_menu&cua_uuid=6db5931b-9304-4868-f436-61859433ed0f&_gl=1*",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730014.jpg",
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
        loginUrl: "https://login.user.id/login/rosenheim24-de?environmentId=536c0e5c-ad7f-4cb3-a2d8-4ae245f5bca2&flowId=0ed00af8-eaec-47fd-96b9-8e8866135cf1&utm_source=ro24_menu&utm_medium=ro24_link&utm_campaign=ro24_menu&cua_uuid=6db5931b-9304-4868-f436-61859433ed0f&_gl=1*",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Rosenheim24DeCollector.CONFIG);
    }
}
