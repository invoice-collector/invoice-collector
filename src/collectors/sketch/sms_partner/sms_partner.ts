
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmsPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "sms_partner",
        name: "SMS Partner",
        description: "i18n.collectors.sms_partner.description",
        version: "0",
        website: "https://my.smspartner.fr/dashboard/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245912.jpg",
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
        entryUrl: "https://my.smspartner.fr/dashboard/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmsPartnerCollector.CONFIG);
    }
}
