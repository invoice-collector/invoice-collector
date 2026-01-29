
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PrimandisCollector extends SketchCollector {

    static CONFIG = {
        id: "primandis",
        name: "Primandis",
        description: "i18n.collectors.primandis.description",
        version: "0",
        website: "https://www.primandis.de/administration/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727698.jpg",
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
        loginUrl: "https://www.primandis.de/administration/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PrimandisCollector.CONFIG);
    }
}
