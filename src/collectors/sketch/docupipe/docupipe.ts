
import { SketchCollector } from '../../sketchCollector';

export class DocupipeCollector extends SketchCollector {

    static CONFIG = {
        id: "docupipe",
        name: "DocuPipe",
        description: "i18n.collectors.docupipe.description",
        version: "0",
        website: "https://www.docupipe.ai/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4427103.jpg",
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
        entryUrl: "https://www.docupipe.ai/settings/billing",
    }

    constructor() {
        super(DocupipeCollector.CONFIG);
    }
}
