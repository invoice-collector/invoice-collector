
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Sms4Collector extends SketchCollector {

    static CONFIG = {
        id: "sms4",
        name: "sms4",
        description: "i18n.collectors.sms4.description",
        version: "0",
        website: "https://www.sms4.de/cgi-bin/verwalten_rechnungen.pl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2589992.jpg",
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
        entryUrl: "https://www.sms4.de/cgi-bin/verwalten_rechnungen.pl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Sms4Collector.CONFIG);
    }
}
