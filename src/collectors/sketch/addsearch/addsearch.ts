
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AddsearchCollector extends SketchCollector {

    static CONFIG = {
        id: "addsearch",
        name: "AddSearch",
        description: "i18n.collectors.addsearch.description",
        version: "0",
        website: "https://www.addsearch.com/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2012086.jpg",
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
        entryUrl: "https://www.addsearch.com/invoice/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AddsearchCollector.CONFIG);
    }
}
