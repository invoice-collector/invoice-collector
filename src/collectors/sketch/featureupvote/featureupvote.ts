
import { SketchCollector } from '../../sketchCollector';

export class FeatureupvoteCollector extends SketchCollector {

    static CONFIG = {
        id: "featureupvote",
        name: "FeatureUpVote",
        description: "i18n.collectors.featureupvote.description",
        version: "0",
        website: "https://app.featureupvote.com/dashboard/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/190167.jpg",
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
        entryUrl: "https://app.featureupvote.com/dashboard/invoices",
    }

    constructor() {
        super(FeatureupvoteCollector.CONFIG);
    }
}
