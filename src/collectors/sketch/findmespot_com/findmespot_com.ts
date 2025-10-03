
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FindmespotComCollector extends SketchCollector {

    static CONFIG = {
        id: "findmespot_com",
        name: "findmespot.com",
        description: "i18n.collectors.findmespot_com.description",
        version: "0",
        website: "https://login.findmespot.com/spot-main-web/auth/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43196.jpg",
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
        entryUrl: "https://login.findmespot.com/spot-main-web/auth/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FindmespotComCollector.CONFIG);
    }
}
