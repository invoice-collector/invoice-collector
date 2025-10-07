
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UdemyCollector extends SketchCollector {

    static CONFIG = {
        id: "udemy",
        name: "Udemy",
        description: "i18n.collectors.udemy.description",
        version: "0",
        website: "https://www.udemy.com/join/login-popup/?next=/dashboard/purchase-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6039.jpg",
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
        entryUrl: "https://www.udemy.com/join/login-popup/?next=/dashboard/purchase-history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UdemyCollector.CONFIG);
    }
}
