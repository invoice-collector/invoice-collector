
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BaseconeAddisonCollector extends SketchCollector {

    static CONFIG = {
        id: "basecone_addison",
        name: "Basecone Addison",
        description: "i18n.collectors.basecone_addison.description",
        version: "0",
        website: "https://identity.basecone.com/authentication/login?signin=6dd09df2f7dca6eada587463a123cbe7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153607.jpg",
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
        entryUrl: "https://identity.basecone.com/authentication/login?signin=6dd09df2f7dca6eada587463a123cbe7",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BaseconeAddisonCollector.CONFIG);
    }
}
