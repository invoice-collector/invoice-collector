
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DocusignCollector extends SketchCollector {

    static CONFIG = {
        id: "docusign",
        name: "Docusign",
        description: "i18n.collectors.docusign.description",
        version: "0",
        website: "https://account.docusign.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8858.jpg",
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
        entryUrl: "https://account.docusign.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DocusignCollector.CONFIG);
    }
}
