
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UrlboxCollector extends SketchCollector {

    static CONFIG = {
        id: "urlbox",
        name: "Urlbox",
        description: "i18n.collectors.urlbox.description",
        version: "0",
        website: "https://urlbox.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126842.jpg",
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
        entryUrl: "https://urlbox.io/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UrlboxCollector.CONFIG);
    }
}
