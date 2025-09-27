
import { SketchCollector } from '../../sketchCollector';

export class ElasticEmailCollector extends SketchCollector {

    static CONFIG = {
        id: "elastic_email",
        name: "Elastic Email",
        description: "i18n.collectors.elastic_email.description",
        version: "0",
        website: "https://elasticemail.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/803044.jpg",
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
        entryUrl: "https://elasticemail.com/account",
    }

    constructor() {
        super(ElasticEmailCollector.CONFIG);
    }
}
