
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DocControlCollector extends SketchCollector {

    static CONFIG = {
        id: "doc_control",
        name: "Doc Control",
        description: "i18n.collectors.doc_control.description",
        version: "0",
        website: "https://doccontrol.mitglieder.buedingen-holding.de/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4472167.jpg",
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
        entryUrl: "https://doccontrol.mitglieder.buedingen-holding.de/dashboard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DocControlCollector.CONFIG);
    }
}
