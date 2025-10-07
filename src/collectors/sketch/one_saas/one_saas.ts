
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OneSaasCollector extends SketchCollector {

    static CONFIG = {
        id: "one_saas",
        name: "One Saas",
        description: "i18n.collectors.one_saas.description",
        version: "0",
        website: "https://partners.onesaas.com/admin/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9033.jpg",
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
        entryUrl: "https://partners.onesaas.com/admin/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneSaasCollector.CONFIG);
    }
}
