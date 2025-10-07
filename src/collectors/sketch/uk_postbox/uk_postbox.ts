
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UkPostboxCollector extends SketchCollector {

    static CONFIG = {
        id: "uk_postbox",
        name: "UK Postbox",
        description: "i18n.collectors.uk_postbox.description",
        version: "0",
        website: "https://client.ipostalmail.net/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60697.jpg",
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
        entryUrl: "https://client.ipostalmail.net/Account/Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UkPostboxCollector.CONFIG);
    }
}
