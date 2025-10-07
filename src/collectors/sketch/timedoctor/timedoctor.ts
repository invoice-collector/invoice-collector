
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TimedoctorCollector extends SketchCollector {

    static CONFIG = {
        id: "timedoctor",
        name: "TimeDoctor",
        description: "i18n.collectors.timedoctor.description",
        version: "0",
        website: "https://2.timedoctor.com/billing#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1664949.jpg",
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
        entryUrl: "https://2.timedoctor.com/billing#invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TimedoctorCollector.CONFIG);
    }
}
