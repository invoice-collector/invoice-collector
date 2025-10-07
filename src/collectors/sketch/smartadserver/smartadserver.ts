
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmartadserverCollector extends SketchCollector {

    static CONFIG = {
        id: "smartadserver",
        name: "Smartadserver",
        description: "i18n.collectors.smartadserver.description",
        version: "0",
        website: "http://manage.smartadserver.com/ux/admin/financialportal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/185150.jpg",
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
        entryUrl: "http://manage.smartadserver.com/ux/admin/financialportal",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartadserverCollector.CONFIG);
    }
}
