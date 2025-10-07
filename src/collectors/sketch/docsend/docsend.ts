
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DocsendCollector extends SketchCollector {

    static CONFIG = {
        id: "docsend",
        name: "DocSend",
        description: "i18n.collectors.docsend.description",
        version: "0",
        website: "https://docsend.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36162.jpg",
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
        entryUrl: "https://docsend.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DocsendCollector.CONFIG);
    }
}
