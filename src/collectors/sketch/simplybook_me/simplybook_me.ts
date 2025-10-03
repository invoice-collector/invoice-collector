
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SimplybookMeCollector extends SketchCollector {

    static CONFIG = {
        id: "simplybook_me",
        name: "SimplyBook.me",
        description: "i18n.collectors.simplybook_me.description",
        version: "0",
        website: "https://arogyavision.secure.simplybook.it/v2/management/#invoice-report/filter/%7B%22status%22%3A%22paid%22%2C%22payment_received%22%3A%221%22%7D/onPage/10/page/1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192207.jpg",
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
        entryUrl: "https://arogyavision.secure.simplybook.it/v2/management/#invoice-report/filter/%7B%22status%22%3A%22paid%22%2C%22payment_received%22%3A%221%22%7D/onPage/10/page/1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimplybookMeCollector.CONFIG);
    }
}
