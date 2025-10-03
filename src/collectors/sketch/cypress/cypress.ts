
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CypressCollector extends SketchCollector {

    static CONFIG = {
        id: "cypress",
        name: "Cypress",
        description: "i18n.collectors.cypress.description",
        version: "0",
        website: "https://dashboard.cypress.io/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/146160.jpg",
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
        entryUrl: "https://dashboard.cypress.io/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CypressCollector.CONFIG);
    }
}
