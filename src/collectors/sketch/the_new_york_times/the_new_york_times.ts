
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TheNewYorkTimesCollector extends SketchCollector {

    static CONFIG = {
        id: "the_new_york_times",
        name: "The New York Times",
        description: "i18n.collectors.the_new_york_times.description",
        version: "0",
        website: "https://customercare.inyt.com/ManageMyAccount/ManageMyAccount.html#billingHistory:billinghistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/883276.jpg",
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
        entryUrl: "https://customercare.inyt.com/ManageMyAccount/ManageMyAccount.html#billingHistory:billinghistory",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TheNewYorkTimesCollector.CONFIG);
    }
}
