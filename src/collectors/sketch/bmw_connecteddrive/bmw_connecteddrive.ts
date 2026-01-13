
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BmwConnecteddriveCollector extends SketchCollector {

    static CONFIG = {
        id: "bmw_connecteddrive",
        name: "BMW ConnectedDrive",
        description: "i18n.collectors.bmw_connecteddrive.description",
        version: "0",
        website: "https://www.bmw-connecteddrive.de/app/de/index.html#/portal/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9773.jpg",
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
        loginUrl: "https://www.bmw-connecteddrive.de/app/de/index.html#/portal/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BmwConnecteddriveCollector.CONFIG);
    }
}
