
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonWorkdocsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_workdocs",
        name: "Amazon WorkDocs",
        description: "i18n.collectors.amazon_workdocs.description",
        version: "0",
        website: "https://amazon-hub-payments-eu.awsapps.com/workdocs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2378360.jpg",
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
        loginUrl: "https://amazon-hub-payments-eu.awsapps.com/workdocs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AmazonWorkdocsCollector.CONFIG);
    }
}
