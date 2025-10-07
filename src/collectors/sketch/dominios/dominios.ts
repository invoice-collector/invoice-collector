
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DominiosCollector extends SketchCollector {

    static CONFIG = {
        id: "dominios",
        name: "Dominios",
        description: "i18n.collectors.dominios.description",
        version: "0",
        website: "http://www.dominios.pt",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9462.jpg",
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
        entryUrl: "http://www.dominios.pt",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DominiosCollector.CONFIG);
    }
}
