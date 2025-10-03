
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElasticCollector extends SketchCollector {

    static CONFIG = {
        id: "elastic",
        name: "elastic",
        description: "i18n.collectors.elastic.description",
        version: "0",
        website: "https://cloud.elastic.co/#/account/billing-history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7492.jpg",
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
        entryUrl: "https://cloud.elastic.co/#/account/billing-history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElasticCollector.CONFIG);
    }
}
