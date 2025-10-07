
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GuruKnowledgeManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "guru_knowledge_management",
        name: "Guru - Knowledge Management",
        description: "i18n.collectors.guru_knowledge_management.description",
        version: "0",
        website: "https://app.getguru.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/56135.jpg",
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
        entryUrl: "https://app.getguru.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GuruKnowledgeManagementCollector.CONFIG);
    }
}
